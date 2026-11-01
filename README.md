# UNION3D

Website institucional em Astro e TypeScript, com saída estática. Implementação baseada na referência visual escolhida pelo usuário. Nenhuma publicação ou hospedagem pública é acionada por este projeto.

## Desenvolvimento

Requisitos: Node >=22.23.4, npm >=9.6.5 e dependências de `package-lock.json`. Validado em Windows 11 (Node 24.14.1, npm 11.12.1) e anteriormente em Linux.

```sh
npm ci
npx playwright install chromium
npm run dev
```

Os scripts chamam a CLI do Astro por `scripts/astro.mjs`, que desativa a telemetria (`ASTRO_TELEMETRY_DISABLED=1`) em qualquer sistema operacional. A sintaxe anterior, `VAR=1 astro ...`, só funcionava em shells Unix.

```sh
npm run check      # checagem de tipos (astro check)
npm run build      # gera dist/ (21 páginas)
npm test           # Playwright; reutiliza um preview já ativo em 127.0.0.1:4321 ou inicia um
npm run package    # gera artifacts/union3d-site-estatico.zip a partir de dist/
```

### Navegador dos testes

`playwright.config.ts` usa, nesta ordem: o executável indicado em `PLAYWRIGHT_CHROMIUM_PATH`; `/usr/bin/chromium`, quando existe; ou o Chromium instalado por `npx playwright install chromium`. O mesmo critério vale para `.impeccable/review/capture.mjs`.

### Preview local

O preview serve `dist/`; execute `npm run build` antes. Em primeiro plano (Ctrl+C encerra):

```sh
npm run preview -- --port 4321
```

Em segundo plano, com status e encerramento pela própria CLI do Astro 7:

```sh
npm run preview -- --port 4321 --background
npx astro preview status
npx astro preview stop
```

O site fica em http://localhost:4321/. O script de preview usa `--host 0.0.0.0`, então o endereço também responde na rede local enquanto o servidor estiver ativo. Não confundir esse servidor local com uma URL pública de hospedagem.

### Capturas de revisão

Com o preview ativo, `node .impeccable/review/capture.mjs` grava em `.impeccable/review/` cinco páginas em 1536×1024, 1366×768, 768×1024, 390×844 e 360×740, com movimento reduzido, e registra rolagem horizontal em `capture-results.json`.

## Páginas e conteúdo

Home, diretório de serviços, duas categorias, nove páginas específicas de serviços, Sobre, Aplicações, Contato, Privacidade e 404. O Serviço 11 e o modelo de projeto ficam em `/rascunhos/`, sem indexação e sem links na navegação comercial.

- `src/data/services.ts`: conteúdo específico, limitações, perguntas e relações entre serviços.
- `src/components/`: navegação, diretório, janelas de obra e componentes compartilhados.
- `src/styles/global.css`: tokens, layouts e adaptações responsivas.
- `src/scripts/site.ts`: menu, filtros, comparação, etapas e formulário.
- `docs/arquitetura.md`: decisões de arquitetura da informação.
- `.impeccable/review/`: evidências de renderização e revisão.
- `docs/revisao-2026-11-01.md`: defeitos encontrados, correções e pendências da revisão para uso comercial.
- `scripts/`: execução multiplataforma do Astro, geração do pacote estático e LEIA-ME do pacote.

## Formulário

Sem `PUBLIC_CONTACT_ENDPOINT`, o formulário somente prepara e copia um resumo no navegador. Ele não envia solicitações nem promete recebimento. Depois de validar a operação, a privacidade e o destino real, configure um endpoint HTTPS no arquivo local de ambiente ou na hospedagem e execute novo build. Não coloque tokens ou credenciais nessa variável pública. A integração deverá aceitar POST de FormData e responder JSON/HTTP adequado. Reavalie antispam, controle de acesso, erros e privacidade antes de ativar a recepção.

## Materiais e pendências

As imagens conceituais são identificadas no site e não representam trabalhos realizados, escaneamentos reais ou evidências de precisão da UNION3D. As capturas reais ficam em `public/images/real/`, aparecem com o rótulo “Captura real da UNION3D” em cinco páginas de serviço (`src/data/real-images.ts`) e vieram do inventário de mídias do Drive, recortadas sem nomes de projeto, ruas, datas ou interface; a autorização dos clientes ainda está pendente. As imagens WebP são locais e possuem sidecars de proveniência. Antes da publicação comercial, incorporar logotipo oficial, acervo e projetos autorizados, contatos reais, política de privacidade validada e confirmação técnica de métodos, entregáveis e modalidade do tour. Não adicionar clientes, estatísticas, garantias ou cases sem evidência.

A versão é revisável localmente; receber solicitações reais e publicar exigem configuração externa ainda não fornecida.
