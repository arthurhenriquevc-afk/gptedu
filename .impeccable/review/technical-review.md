# Verificação técnica direta

> Atualização de 2026-11-01: nova revisão em Windows, com correções de leitura do hero, janelas de obra, foco, toque, formulário, navegação interna e conteúdo, e catorze testes aprovados. Ver `docs/revisao-2026-11-01.md`. O texto abaixo registra a verificação anterior.

Avaliação substituta; o agente independente não concluiu por limite de uso. Não constitui certificação WCAG nem auditoria exaustiva.

## Evidências

Astro check e build concluídos. Sete testes Playwright aprovados: páginas e links internos; diretório/filtro/busca/recuperação; formulário com contexto do serviço, preparo sem envio e clipboard; menu/Escape/overflow em cinco larguras; interação com movimento reduzido; estado final da animação normal; navegação sem JavaScript.

Capturas de cinco páginas representativas em desktop, tablet e celular. O problema de contraste do hero no tablet foi corrigido pela disposição em fluxo. O contato no tablet foi ampliado para evitar compressão dos campos. Imagens convertidas para WebP local; total inferior a 1 MB. Fontes locais; sem analytics ou dependências de rede em runtime.

O detector retornou `[]` na única execução. Não é prova de ausência de problemas; a revisão de renderização é separada.

## Correções verificáveis

- Menu por botão com aria-expanded, Escape e retorno de foco. Navegação de serviços nativa por details/summary.
- Fallback sem JavaScript para navegação e para os detalhes das janelas. Controles de envio/cópia ficam desabilitados sem JavaScript para evitar submissão nativa acidental.
- Formulário com labels, opcionais identificados, validação HTML, estado de falha e nenhuma mensagem de envio sem integração.
- Contexto do serviço preservado pela query, com validação contra as opções existentes.
- Reduced-motion usa estado estável e seleção direta.
- Hipótese levantada sobre a animação terminar em zero não se confirmou: a fórmula usa 1-(1-t)^4 e o teste normal verificou o valor 55 ao final.

## Limites

Não testado em aparelhos físicos, Safari ou Firefox. Sem aferição completa de contraste pixel a pixel nas fotografias; sem varredura WCAG automatizada integral. Integração externa não configurada: sucesso/erro de um destinatário real, antispam e requisitos de tratamento de dados precisam de validação antes da ativação. Nenhuma publicação foi realizada.
