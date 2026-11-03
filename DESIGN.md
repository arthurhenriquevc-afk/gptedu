---
name: UNION3D
description: Precisão visual, arquitetura e informação técnica.
colors:
  ink: "#002e40"
  paper: "#f5f5f7"
  card: "#ffffff"
  surface: "#e6f2f9"
  accent: "#4fbbec"
  text: "#10171b"
  muted: "#4e575c"
  line: "#cfd5d8"
  light-text: "#d8e2e5"
typography:
  display:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(48px,4.65vw,76px)"
    fontWeight: 760
    lineHeight: 1.01
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "clamp(32px,3.2vw,52px)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo Variable, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  compact: "4px"
  interface: "8px"
spacing:
  gutter: "clamp(24px,4vw,72px)"
  section: "clamp(72px,8vw,128px)"
  compact: "12px"
  group: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.interface}"
    padding: "12px 24px"
    height: "52px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.interface}"
    padding: "12px 24px"
  field:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.interface}"
    padding: "12px 14px"
---

# Design System: UNION3D

## Overview

**Creative North Star: "Registro em corte"**

Linguagem editorial arquitetônica: grandes imagens, alinhamentos precisos e diferenças de escala. O espaço físico e sua representação são o conteúdo visual; a interface organiza a leitura com tipografia e respiro.

**Key Characteristics:**

- Página cinza clara, blocos brancos e seções escuras pontuais.
- Composição assimétrica, com informação legível antes do efeito.
- Uma família tipográfica com papéis distintos.
- Conteúdo técnico e limites de escopo compreensíveis.

## Colors

Os tokens correspondem às propriedades em `src/styles/global.css`. `ink` identifica marca, títulos, controles e seções de ênfase; `paper` é o fundo cinza claro da página e `card` o branco dos blocos (seções, cabeçalho, painel, campos e itens de credenciais). `surface` diferencia estados ou notas; `line` organiza. `accent` (celeste) é o único destaque: botão sobre fundo em tinta e halo da etapa atual, sempre com texto em `ink`, nunca como cor de texto sobre fundo claro. Em fundo escuro, usar texto claro suficiente para leitura. Paleta adotada em 02/11/2026 a partir do design system de referência; o modo escuro dele não foi adotado.

**The Purposeful Contrast Rule.** Reservar grandes áreas escuras para uma mudança de assunto ou uma chamada importante, sem alternância mecânica.

## Typography

Archivo Variable é servida localmente por Fontsource. Sua construção sem serifa, variedade de pesos, legibilidade e suporte ao português permitem manter títulos, navegação e texto em uma única voz. O peso forte dá presença aos títulos; corpo e metadados têm densidade menor.

A Home usa o display registrado nos tokens; páginas internas usam `clamp(40px,5.1vw,80px)`. Texto corrido fica limitado a aproximadamente 70 caracteres. No celular, corpo passa a 16px e o hero usa `clamp(36px,8.8vw,52px)`. Não rasterizar títulos ou controles.

**The One Family Rule.** Construir hierarquia com peso, escala e espaço; não acrescentar uma família decorativa para parecer técnico.

## Layout

Margens fluidas e largura máxima de 1800px. Grades assimétricas de duas colunas, sequências de quatro etapas, diretório em linhas e blocos de leitura. Os alinhamentos reaparecem entre seções, com escala e densidade diferentes.

Breakpoints implementados: 1800, 1200, 900 e 600px. No hero integrado, a imagem é enquadrada a 40% (35% até 1200px) e o subtítulo fica limitado a 35vw (36vw até 1200px), para que o texto permaneça sobre a área clara e não sobre a estrutura em laptops de 1024 a 1536px. Até 900px, a navegação vira menu expansível e a área de contato ganha largura integral. No hero de tablet e celular, texto e imagem ficam em sequência para assegurar contraste. No celular, públicos e conteúdos internos viram uma coluna; etapas continuam acessíveis por botões.

## Elevation & Depth

Predominantemente plano, com divisórias e superfícies tonais. A fotografia fornece profundidade. O painel de serviços usa a sombra `0 24px 48px -24px` em `#10171b` a 32%, e a barra compacta do cabeçalho uma sombra de flutuação. Sem halos ou relevo fictício.

## Shapes

Mídia com cantos retos. Elementos compactos e miniaturas do painel usam 4px; botões, campos, notas e a barra compacta usam 8px; os itens de credenciais da Home usam 12px. Não criar uma coleção de cards arredondados.

## Components

- Header aderente em barra branca de 56px com o logotipo oficial (assinatura horizontal azul e escura, 24px de altura; 52px no rodapé), links ao centro e pedido de orçamento à direita. Um fundo em `ink` a 6% desliza entre os links; a página atual tem fundo a 4%. O painel de serviços ocupa a largura da barra, abre com 12px de descida em 400ms sobre um véu em `ink` a 32% com desfoque de 4px e mostra os nove serviços em mosaico (número, público, nome e miniatura da captura real quando existe; sem captura, o espaço fica vazio) e a coluna Diretório. Depois de 120px de rolagem a barra flutua compacta (48px, até 1040px de largura, sem o pedido de orçamento) e volta abaixo de 60px. Adotado em 02/11/2026. Sobre fundos em tinta, só a versão branca: as partes em `#052E40` do símbolo desaparecem sobre `ink`. A documentação de marca não define área de proteção nem tamanho mínimo; painel de serviços organizado por público, que fecha com Escape, clique externo ou quando o foco do teclado sai dele. Versão móvel com botão, estado expandido, Escape e links em fluxo.
- Botões de ênfase em `ink`, links contextuais sublinhados e setas SVG de traço consistente. Foco visível com contorno de 3px.
- Diretório com linhas editoriais, busca, filtros por público e seletor de finalidade; estado sem resultados oferece recuperação. Na Home, a finalidade usa botões com a mesma linguagem das etapas das janelas (divisória à esquerda, estado ativo em `surface` com borda `ink`), e cada linha mostra a pergunta que o serviço responde e o momento.
- Páginas de serviço: resumo em quatro colunas logo após a abertura (pergunta, momento, o que precisa estar acessível, finalidade), com régua `ink` no topo; “O que o registro alcança” separa captura direta de outras fontes em duas colunas; comparação com o serviço mais próximo em tabela que vira blocos rotulados até 600px; checklist do que informar; relacionados com o motivo da complementaridade. A comparação é gerada dos mesmos campos dos dois serviços.
- Divisórias no topo com texto alinhado à esquerda, sem recuo, são intencionais (resumo do serviço, colunas de fontes, FAQ). O detector da Impeccable aponta esse padrão como `cramped-padding`.
- Problemas na Home: lista sem imagem em duas colunas (uma até 900px), com régua `ink` no topo e divisórias `line`; cada item é um link inteiro com título, texto em `muted` e o nome do serviço com seta no pé.
- Perguntas com `details/summary` nativos. Campos sempre identificados, opcionais marcados e estado de operação explícito. O contorno dos campos e da busca usa `#7c8b90` (3,28:1 sobre `paper`), acima dos 3:1 exigidos para limites de componentes.
- Duas imagens conceituais compõem a transformação do hero. Uma transição inicial de 2200ms e controle nativo, sem reprodução em loop. A máscara apenas mistura os estados, sem colorir o conteúdo.
- Janelas de obra usam corte ilustrativo contínuo e estado ativo relacionado à rolagem normal. O seletor é um indicador de etapas: ponto numerado de 32px (28px no celular), linha entre os pontos com o trecho percorrido em `ink`, ponto atual com anel e halo celeste e etapas anteriores com sinal de concluído. Acima de 900px, o centro de cada ponto fica na linha de chamada correspondente do corte (8.8%, 31.9%, 57.4% e 83.8% da largura); até 900px as etapas ficam em quatro colunas iguais. Título, indicador, corte e detalhe entram em cascata de 0,1s, saindo de um desfoque de 6px com subida de 14px em 600ms, só quando o script está ativo e sem movimento reduzido. Adotado em 02/11/2026. A seção tem `calc(650px + 110vh)` de percurso, e cada etapa permanece por cerca de 27% da altura da janela; a altura do corte se reduz em janelas baixas e, quando o bloco fixo não cabe inteiro, a seção volta ao fluxo normal. Botões permanecem disponíveis; celular e movimento reduzido usam seleção direta. No celular, o corte tem 240px de altura e se desloca até a etapa escolhida em 500ms. O link “Relacionar à etapa da obra” de cada serviço chega com `?etapa=N`: a etapa correspondente aparece selecionada e, com a janela fixa, a rolagem para no início do trecho dela.
- O formulário sem destino real prepara/copia o resumo e informa que não há envio. As mensagens de validação são próprias, em português, e somem quando o campo é editado; copiar com o formulário vazio pede o preenchimento em vez de copiar só o título.
- Âncoras internas param 30px abaixo do cabeçalho fixo (`scroll-padding-top: 110px` no documento, sem margem adicional nas seções).
- No celular, trilha, índice “Neste serviço” e links do rodapé ganham área de toque vertical adicional; o controle de comparação tem 44px de altura até 900px.

**The Accessible State Rule.** O conteúdo essencial permanece disponível sem animação; navegação, foco e estados não dependem apenas de cor.

## Do's and Don'ts

### Do

- Preservar espaço, hierarquia e rigor dos alinhamentos.
- Identificar imagens conceituais enquanto não houver acervo autorizado. Imagens reais: a prévia da seção "Captura real" e as capturas das páginas de As-built MEP, fachada, conferência da excentricidade, locação das linhas de eixo das estacas e interiores.
- Capturas reais nas páginas de serviço: substituem a imagem larga do topo (altura maior que a conceitual, `object-position` por imagem) e, quando há um detalhe, ele entra no fim de “O que este serviço faz” com borda `line`, até 900px. A legenda começa com “Captura real da UNION3D” em `ink` e peso 600, e descreve só o que está visível, sem cliente, local, precisão ou prazo.
- Carregar conteúdo de terceiros só depois de uma ação do visitante: o visualizador FARO Sphere XG da Home entra como iframe apenas após o clique em "Explorar a captura"; até 600px, o caminho é abrir em nova aba.
- Adaptar a composição para assegurar leitura em cada tamanho.
- Explicitar condições e entregáveis que dependem do escopo.

### Don't

- Inventar clientes, métricas, garantias ou projetos.
- Usar neon, gradientes decorativos, brilho ou estética de dashboard.
- Transformar o catálogo em cards repetitivos de ícone e texto.
- Apresentar uma imagem gerada como resultado real de captura.
- Declarar envio de formulário sem confirmação do destinatário.
