# Ponte Digital — Experiência Prática 3

Aplicação de página única em JavaScript nativo. Mantém o visual da experiência anterior e utiliza navegação por hash, templates, validação de formulário e localStorage.

Para executar, abra um terminal na pasta deste projeto e rode:

    node iniciar.cjs

Acesse http://127.0.0.1:4175/html/index.html no navegador. É necessário usar um servidor local, pois os módulos ES6 não devem ser abertos diretamente por file://.

## Arquivos

- html/index.html: estrutura principal da aplicação.
- css/estilo.css: estilos e responsividade.
- imagens/: fotografias em JPEG e WebP.
- js/principal.js: roteamento e troca das telas.
- js/modulos/templates.js: templates e cartões gerados a partir dos projetos.
- js/modulos/menu.js: menu e controles de teclado.
- js/modulos/formulario.js: validação e eventos do cadastro.
- js/modulos/mascaras.js: formatação de CPF, telefone e CEP.
- js/modulos/armazenamento.js: leitura, gravação e exclusão do cadastro de teste.

Use apenas dados fictícios. Nome, e-mail e interesse são salvos neste navegador depois da confirmação. Os demais campos não são persistidos. O botão de apagar remove somente a chave do projeto.

Foram testados navegação, histórico, geração dos cartões, campos obrigatórios, entradas inválidas, máscaras, confirmação, recarga e exclusão dos dados. Um problema nos escapes do pattern de telefone foi encontrado e corrigido. Os módulos passaram na verificação de sintaxe do Node.js e não apareceram erros nos registros do navegador durante os testes.