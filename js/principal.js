import { criarPagina } from "./modulos/templates.js";
import { configurarFormulario } from "./modulos/formulario.js";
import { configurarMenu } from "./modulos/menu.js";

const conteudo = document.getElementById("conteudo");
const titulos = { inicio: "Início", projetos: "Projetos", cadastro: "Cadastro" };

function mostrarPagina(evento) {
    const [caminho, consulta = ""] = location.hash.slice(1).split("?");
    const rota = Object.hasOwn(titulos, caminho) ? caminho : "inicio";
    conteudo.replaceChildren(criarPagina(rota));
    document.title = titulos[rota] + " | Ponte Digital";

    for (const link of document.querySelectorAll("nav a")) {
        if (link.getAttribute("href") === "#" + rota) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    }

    document.querySelector(".menu-projetos").open = false;
    document.querySelector("nav").classList.remove("aberto");
    document.querySelector(".menu-botao").setAttribute("aria-expanded", "false");
    if (rota === "cadastro") configurarFormulario(new URLSearchParams(consulta));
    if (evento) {
        conteudo.focus();
        window.scrollTo(0, 0);
    }
}

configurarMenu();
const contraste = document.getElementById("alto-contraste");
contraste.addEventListener("click", function () {
    const ativado = document.body.classList.toggle("alto-contraste");
    contraste.setAttribute("aria-pressed", String(ativado));
});
document.getElementById("pular-conteudo").addEventListener("click", function (evento) {
    evento.preventDefault();
    conteudo.focus();
    conteudo.scrollIntoView();
});
window.addEventListener("hashchange", mostrarPagina);
mostrarPagina();
