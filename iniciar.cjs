const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);
const tipos = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.webp':'image/webp'};
http.createServer((req,res)=>{
    const caminho = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const arquivo = path.resolve(root,'.'+(caminho === '/' ? '/html/index.html' : caminho));
    if(!arquivo.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
    fs.readFile(arquivo,(erro,dados)=>{
        if(erro){res.writeHead(404);res.end('Não encontrado');return;}
        res.writeHead(200,{'Content-Type':tipos[path.extname(arquivo)] || 'application/octet-stream'});
        res.end(dados);
    });
}).listen(4175,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4175'));
