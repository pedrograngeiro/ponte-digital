const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");
const raiz = path.resolve(__dirname, "..");
const destino = path.join(raiz, "docs");
const versao = require("../package.json").version;

async function construir() {
    fs.mkdirSync(path.join(destino, "js"), { recursive: true });
    fs.mkdirSync(path.join(destino, "css"), { recursive: true });
    fs.cpSync(path.join(raiz, "imagens"), path.join(destino, "imagens"), { recursive: true });

    await esbuild.build({
        entryPoints: [path.join(raiz, "js/principal.js")],
        bundle: true,
        minify: true,
        format: "esm",
        target: "es2020",
        outfile: path.join(destino, "js/aplicacao.min.js"),
        plugins: [{
            name: "caminhos-imagens",
            setup(build) {
                build.onLoad({ filter: /templates\.js$/ }, function (args) {
                    const fonte = fs.readFileSync(args.path, "utf8");
                    return { contents: fonte.replaceAll("../imagens/", "./imagens/"), loader: "js" };
                });
            }
        }]
    });

    await esbuild.build({
        entryPoints: [path.join(raiz, "css/estilo.css")],
        minify: true,
        outfile: path.join(destino, "css/estilo.min.css")
    });

    let html = fs.readFileSync(path.join(raiz, "html/index.html"), "utf8");
    html = html.replace("../css/estilo.css", "./css/estilo.min.css?v=" + versao);
    html = html.replace("../js/principal.js", "./js/aplicacao.min.js?v=" + versao);
    html = html.replace(/>\s+</g, "><").trim();
    fs.writeFileSync(path.join(destino, "index.html"), html);
    fs.writeFileSync(path.join(destino, ".nojekyll"), "");
    console.log("Build concluído na pasta docs.");
}

construir().catch(function (erro) {
    console.error(erro.message);
    process.exitCode = 1;
});
