# Materiais e plano de implementação — composição C

## Materiais preparados

1. Panorama: estrutura de concreto e transição para representação geométrica, estudo gerado. O panorama não é captura, nuvem de pontos ou registro de uma obra real da empresa.
2. Corte da construção: ilustração conceitual que relaciona quatro momentos de acesso às condições físicas. Não é um procedimento executivo nem um modelo técnico a ser utilizado em obra.

Na versão institucional final, substituir os estudos por pares correspondentes de fotografia e representação autorizadas, mantendo o contrato visual. Não inserir o nome de um empreendimento fictício. Legendas conceituais precisam permanecer visíveis enquanto forem utilizados os estudos.

## O que será código semântico

- Marca tipográfica provisória, header, navegação por teclado, menu móvel e breadcrumbs.
- Títulos, textos, botões, links, legendas e nomes de etapas: texto HTML real, não pixels das composições.
- Diretório de serviços e suas duas visões por público, com URLs canônicas dos dez serviços.
- Modelo de serviço com conteúdo específico, relacionados e contato contextualizado.
- Animação de representação, seletor de estado e comportamento reduzido de movimento.
- Janelas em scroll normal com a etapa ativa destacada; sem scroll hijacking. Celular com foco em uma etapa por vez e lista acessível de todas as etapas.
- Formulário com validação, escolha opcional de serviço e status honesto da integração. Sem destino real não anunciar envio.

## Diretrizes de transposição

Preservar a leitura horizontal da composição C: header, faixa editorial clara, panorama, seção temporal. O panorama se estende abaixo da faixa; títulos não serão rasterizados. Na Home completa, as janelas aparecem depois da explicação breve e da separação por público, como definido na arquitetura global: a composição aproxima os dois momentos para comparar a linguagem, não suprime as seções intermediárias.

Escala tipográfica será ajustada por renderização para desktop, tablet e celular; o motor mediu cap height do título em 63,1 px na imagem de 1536 px. A análise sem navegador sugeriu Red Rose por aproximação de catálogo, ainda sem comparação renderizada. Archivo está instalada como candidata principal de sans industrial: diversos pesos, suporte ao português e arquivos locais. A seleção tipográfica final depende da renderização e deve respeitar a tipografia sem serifa exigida pelo briefing.

Raios restritos a 4/8/12 px em componentes de interface. Grande mídia pode manter cantos retos. Cores de marca #002E40 e base off-white prevalecem sobre pequenas variações de pigmento geradas nas composições. A geometria técnica aparece como parte da representação e da informação, nunca como malha ornamental.

## Revisões restantes

Revisão dos materiais/produção exigida pela Impeccable antes do código de página. Depois: primeira tela, páginas completas, dois momentos de movimento, funcionalidades, acessibilidade, navegação interna, build, checagem de tipos, renderização em três larguras e auditoria crítica. Nenhum desses resultados está implicitamente aprovado por uma imagem de estudo.

## Atualização da referência visual

O usuário selecionou a versão original de Registro em corte, preservada em `.impeccable/mocks/referencia-escolhida-pelo-usuario.png`. A orientação anterior de separar título e panorama está substituída: título e ações ficam integrados ao hero, à esquerda. Os materiais e medidas preparados para a revisão C precisam ser confrontados com a referência vigente antes do código. Esta atualização registra a escolha visual; não é validação de animações, páginas implementadas ou publicação.
