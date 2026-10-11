# Revisão de acessibilidade

Revisão realizada em 11/10/2026, na versão local de produção da Ponte Digital.

## Verificações realizadas

- O primeiro Tab alcança o link “Pular para o conteúdo”. Enter leva o foco ao main sem trocar a rota.
- A navegação mantém títulos hierárquicos e elementos header, nav, main e footer.
- As três fotografias dos cartões carregaram e possuem texto alternativo.
- Os campos têm labels ligados aos seus IDs e grupos identificados por fieldset e legend.
- A tentativa de confirmar um cadastro vazio mostra uma mensagem textual e marca o campo como aria-invalid.
- O menu informa aria-expanded e pode ser fechado com Escape.
- O modal nativo dialog fecha com Escape e devolve o foco ao botão que o abriu.
- As mensagens de resultado usam role=status e as de erro usam role=alert.
- As transições respeitam prefers-reduced-motion.
- Não apareceram erros nos registros do navegador durante os testes desta versão.

## Contraste calculado

A relação foi calculada pela luminância relativa das cores definidas no CSS:

| Uso | Cores | Relação |
| --- | --- | --- |
| Texto principal | #263238 / #f6f7f5 | 12,25:1 |
| Botão | #ffffff / #2d6653 | 6,69:1 |
| Link | #18553f / #f6f7f5 | 8,11:1 |
| Erro | #a12828 / #ffffff | 7,37:1 |
| Sucesso | #20563a / #dcebe5 | 6,95:1 |

Essas combinações superam 4,5:1 para texto comum, conforme o critério 1.4.3 da WCAG 2.1. Referência: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html

## Limites da revisão

A inspeção da árvore de acessibilidade confirmou os nomes e a estrutura dos controles. Ainda é recomendável um teste com leitor de tela real, como NVDA, e usuários. Esta revisão cobre os pontos descritos; não representa certificação de conformidade integral com todos os critérios da WCAG 2.1 AA.