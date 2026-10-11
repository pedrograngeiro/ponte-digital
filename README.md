# Ponte Digital

Projeto acadêmico de uma ONG fictícia de educação e inclusão digital. A aplicação tem telas de início, projetos e cadastro, com navegação por hash e JavaScript em módulos. Não existe servidor de cadastro nem recebimento de pagamentos.

## Executar localmente

Requisito: Node.js. Na pasta do projeto, execute `node iniciar.cjs` e acesse http://127.0.0.1:4175/html/index.html. Não abra o HTML diretamente por file://, pois a aplicação utiliza módulos ES6.

Para obter o projeto, use `git clone https://github.com/pedrograngeiro/ponte-digital.git` e entre na pasta `ponte-digital`. Para gerar a versão de produção, execute `npm ci` e depois `npm run build`. O esbuild reúne e minifica o JavaScript e o CSS na pasta docs/. A navegação do site não depende de bibliotecas externas.

## Organização

- html/: estrutura da aplicação.
- css/: estilos, variáveis e regras responsivas.
- imagens/: fotos em JPEG e WebP.
- js/principal.js: coordenação da navegação.
- js/modulos/: templates, menu, formulário, máscaras e armazenamento.

Os créditos e a licença das fotos estão em FONTES-DAS-IMAGENS.md.

## Uso

Use o menu para navegar. O formulário é demonstrativo e deve ser preenchido com dados fictícios. Apenas nome, e-mail e interesse são salvos no localStorage. O botão de apagar remove a chave deste projeto. CPF, telefone e endereço não são persistidos.

## Acessibilidade e testes

O projeto usa títulos hierárquicos, rótulos nos campos, textos alternativos, mensagens de erro e sucesso e foco visível. O link “Pular para o conteúdo” permite evitar o menu pelo teclado. A revisão de acessibilidade e os resultados estão registrados em ACESSIBILIDADE.md; não equivalem a uma certificação automática de WCAG.

Os testes são manuais: abra as três telas, use Tab e Enter para navegar, feche o modal com Escape e confira o foco. Tente enviar o cadastro vazio e depois preencha com dados fictícios. Confira a confirmação, recarregue a tela e use o botão de apagar os dados de teste. Verifique também o console e a tela de 320px. Não há comando de testes automatizados.

## Versionamento e manutenção

main mantém a versão estável. develop reúne as mudanças em andamento. Use feature/nome para melhorias e revise o diff antes de integrar. A preparação de uma versão usa release/versao. Commits recebem mensagens curtas com tipos como feat, fix, docs e chore. As versões usam MAJOR.MINOR.PATCH; correções compatíveis incrementam PATCH, funcionalidades compatíveis incrementam MINOR e mudanças incompatíveis incrementam MAJOR.

Antes de integrar uma alteração, teste a navegação, o formulário e o armazenamento com dados fictícios. Revise os rótulos, o teclado e a tela pequena. Não inclua credenciais no repositório.

## Publicação

Repositório: https://github.com/pedrograngeiro/ponte-digital

Site: https://pedrograngeiro.github.io/ponte-digital/

O GitHub Pages publica a pasta docs/ da branch main. Depois de alterar o código-fonte, execute `npm run build`, revise os arquivos gerados e inclua-os no commit. A integração em main aciona a publicação. O PR #1 registra a integração da versão de produção; a issue #2 acompanha a conferência final no marco v1.0.0.
