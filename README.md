# UNION3D

Website institucional em Astro e TypeScript, com saída estática. Implementação baseada na referência visual escolhida pelo usuário. Nenhuma publicação ou hospedagem pública é acionada por este projeto.

## Desenvolvimento

Requisitos: Node >=22.23.4, npm >=9.6.5 e dependências de `package-lock.json`.

```sh
npm ci
npm run dev
```

A telemetria do Astro é desativada pelos scripts para funcionar no ambiente em nuvem sem gravar configurações fora do workspace. Cada tarefa na nuvem já é isolada: use o checkout existente, sem criar worktree salvo solicitação explícita.

```sh
npm run check
npm run build
npm run preview -- --port 4321
npm test
```

Os testes usam Chromium em `/usr/bin/chromium`. Em outra máquina, ajuste `executablePath` em `playwright.config.ts` ou instale o navegador suportado pelo Playwright. O preview do Astro 7 pode iniciar como processo em segundo plano; use `npx astro preview status` e `npx astro preview stop` quando necessário. Não confundir um servidor local com uma URL pública de hospedagem.

## Páginas e conteúdo

Home, diretório de serviços, duas categorias, dez páginas específicas de serviços, Sobre, Aplicações, Contato, Privacidade e 404. O Serviço 11 e o modelo de projeto ficam em `/rascunhos/`, sem indexação e sem links na navegação comercial.

- `src/data/services.ts`: conteúdo específico, limitações, perguntas e relações entre serviços.
- `src/components/`: navegação, diretório, janelas de obra e componentes compartilhados.
- `src/styles/global.css`: tokens, layouts e adaptações responsivas.
- `src/scripts/site.ts`: menu, filtros, comparação, etapas e formulário.
- `docs/arquitetura.md`: decisões de arquitetura da informação.
- `.impeccable/review/`: evidências de renderização e revisão.

## Formulário

Sem `PUBLIC_CONTACT_ENDPOINT`, o formulário somente prepara e copia um resumo no navegador. Ele não envia solicitações nem promete recebimento. Depois de validar a operação, a privacidade e o destino real, configure um endpoint HTTPS no arquivo local de ambiente ou na hospedagem e execute novo build. Não coloque tokens ou credenciais nessa variável pública. A integração deverá aceitar POST de FormData e responder JSON/HTTP adequado. Reavalie antispam, controle de acesso, erros e privacidade antes de ativar a recepção.

## Materiais e pendências

Todas as imagens atuais são conceituais e identificadas no site; não representam trabalhos realizados, escaneamentos reais ou evidências de precisão da UNION3D. As imagens WebP são locais e possuem sidecars de proveniência. Antes da publicação comercial, incorporar logotipo oficial, acervo e projetos autorizados, contatos reais, política de privacidade validada e confirmação técnica de métodos, entregáveis e modalidade do tour. Não adicionar clientes, estatísticas, garantias ou cases sem evidência.

A versão é revisável localmente; receber solicitações reais e publicar exigem configuração externa ainda não fornecida.
