# Ponte Digital

Projeto acadêmico de uma ONG fictícia de educação e inclusão digital. A aplicação tem telas de início, projetos e cadastro, com navegação por hash e JavaScript em módulos. Não existe servidor de cadastro nem recebimento de pagamentos.

## Executar localmente

Requisito: Node.js. Na pasta do projeto, execute `node iniciar.cjs` e acesse http://127.0.0.1:4175/html/index.html. Não abra o HTML diretamente por file://, pois a aplicação utiliza módulos ES6.

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

O projeto usa títulos hierárquicos, rótulos nos campos, textos alternativos, mensagens de erro e sucesso e foco visível. O link “Pular para o conteúdo” permite evitar o menu pelo teclado. A revisão de acessibilidade e os resultados serão registrados em ACESSIBILIDADE.md; não equivalem a uma certificação automática de WCAG.

## Versionamento e manutenção

main mantém a versão estável. develop reúne as mudanças em andamento. Use feature/nome para melhorias e revise o diff antes de integrar. A preparação de uma versão usa release/versao. Commits recebem mensagens curtas com tipos como feat, fix, docs e chore. As versões usam MAJOR.MINOR.PATCH; correções compatíveis incrementam PATCH, funcionalidades compatíveis incrementam MINOR e mudanças incompatíveis incrementam MAJOR.

Antes de integrar uma alteração, teste a navegação, o formulário e o armazenamento com dados fictícios. Revise os rótulos, o teclado e a tela pequena. Não inclua credenciais no repositório.

## Publicação

O repositório remoto e a URL pública ainda estão pendentes. Esta seção será atualizada após a publicação e a verificação do endereço real.