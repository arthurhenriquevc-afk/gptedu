---
name: UNION3D
description: Precisão visual, arquitetura e informação técnica.
colors:
  ink: "#002e40"
  paper: "#f7f7f3"
  surface: "#edeeea"
  text: "#162f39"
  muted: "#53646a"
  line: "#ccd2d0"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    rounded: "{rounded.interface}"
    padding: "12px 14px"
---

# Design System: UNION3D

## Overview

**Creative North Star: "Registro em corte"**

Linguagem editorial arquitetônica: grandes imagens, alinhamentos precisos e diferenças de escala. O espaço físico e sua representação são o conteúdo visual; a interface organiza a leitura com tipografia e respiro.

**Key Characteristics:**

- Base clara e seções escuras pontuais.
- Composição assimétrica, com informação legível antes do efeito.
- Uma família tipográfica com papéis distintos.
- Conteúdo técnico e limites de escopo compreensíveis.

## Colors

Os tokens correspondem às propriedades em `src/styles/global.css`. `ink` identifica marca, títulos, controles e seções de ênfase; `paper` domina a página. `surface` diferencia estados ou notas; `line` organiza. Em fundo escuro, usar texto claro suficiente para leitura.

**The Purposeful Contrast Rule.** Reservar grandes áreas escuras para uma mudança de assunto ou uma chamada importante, sem alternância mecânica.

## Typography

Archivo Variable é servida localmente por Fontsource. Sua construção sem serifa, variedade de pesos, legibilidade e suporte ao português permitem manter títulos, navegação e texto em uma única voz. O peso forte dá presença aos títulos; corpo e metadados têm densidade menor.

A Home usa o display registrado nos tokens; páginas internas usam `clamp(40px,5.1vw,80px)`. Texto corrido fica limitado a aproximadamente 70 caracteres. No celular, corpo passa a 16px e o hero usa `clamp(36px,8.8vw,52px)`. Não rasterizar títulos ou controles.

**The One Family Rule.** Construir hierarquia com peso, escala e espaço; não acrescentar uma família decorativa para parecer técnico.

## Layout

Margens fluidas e largura máxima de 1800px. Grades assimétricas de duas colunas, sequências de quatro etapas, diretório em linhas e blocos de leitura. Os alinhamentos reaparecem entre seções, com escala e densidade diferentes.

Breakpoints implementados: 1800, 1200, 900 e 600px. Até 900px, a navegação vira menu expansível e a área de contato ganha largura integral. No hero de tablet e celular, texto e imagem ficam em sequência para assegurar contraste. No celular, públicos e conteúdos internos viram uma coluna; etapas continuam acessíveis por botões.

## Elevation & Depth

Predominantemente plano, com divisórias e superfícies tonais. A fotografia fornece profundidade. O painel de serviços usa apenas uma sombra suave de separação (`0 20px 40px #002e4014`). Sem halos ou relevo fictício.

## Shapes

Mídia com cantos retos. Elementos compactos usam 4px; botões, campos e notas usam 8px. O briefing permite também 12px, mas esse valor não foi necessário nesta implementação. Não criar uma coleção de cards arredondados.

## Components

- Header aderente com marca tipográfica provisória; painel de serviços organizado por público. Versão móvel com botão, estado expandido, Escape e links em fluxo.
- Botões de ênfase em `ink`, links contextuais sublinhados e setas SVG de traço consistente. Foco visível com contorno de 3px.
- Diretório com linhas editoriais, busca e filtros por público; estado sem resultados oferece recuperação.
- Perguntas com `details/summary` nativos. Campos sempre identificados, opcionais marcados e estado de operação explícito.
- Duas imagens conceituais compõem a transformação do hero. Uma transição inicial de 2200ms e controle nativo, sem reprodução em loop. A máscara apenas mistura os estados, sem colorir o conteúdo.
- Janelas de obra usam corte ilustrativo contínuo e estado ativo relacionado à rolagem normal. Botões permanecem disponíveis; celular e movimento reduzido usam seleção direta.
- O formulário sem destino real prepara/copia o resumo e informa que não há envio.

**The Accessible State Rule.** O conteúdo essencial permanece disponível sem animação; navegação, foco e estados não dependem apenas de cor.

## Do's and Don'ts

### Do

- Preservar espaço, hierarquia e rigor dos alinhamentos.
- Identificar imagens conceituais enquanto não houver acervo autorizado.
- Adaptar a composição para assegurar leitura em cada tamanho.
- Explicitar condições e entregáveis que dependem do escopo.

### Don't

- Inventar clientes, métricas, garantias ou projetos.
- Usar neon, gradientes decorativos, brilho ou estética de dashboard.
- Transformar o catálogo em cards repetitivos de ícone e texto.
- Apresentar uma imagem gerada como resultado real de captura.
- Declarar envio de formulário sem confirmação do destinatário.
