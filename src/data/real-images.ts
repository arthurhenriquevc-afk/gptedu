// Capturas reais do inventário de mídias do Drive, aprovadas para o site em 2026-11-01.
// Procedência e recortes de cada arquivo em public/images/real/*.webp.json. Autorização do cliente ainda pendente.
export interface RealImage { src: string; width: number; height: number; alt: string; caption: string; position?: string; }
export interface ServiceImages { main: RealImage; detail?: RealImage; }

export const realImages: Record<string, ServiceImages> = {
  'as-built-mep': {
    main: { src:'/images/real/mep-parede-antes-depois.webp', width:2000, height:1112, position:'center 42%',
      alt:'Tela dividida do visualizador com a mesma parede de banheiro em dois registros: à esquerda, alvenaria com tubulações e registros aparentes; à direita, a parede revestida, com bacia sanitária e misturador. Nas duas imagens, a mesma medida aparece entre os pontos correspondentes.',
      caption:'A mesma parede em dois registros no FARO Sphere XG: com as instalações aparentes e depois do revestimento.' },
    detail: { src:'/images/real/mep-instalacoes-aparentes.webp', width:925, height:828,
      alt:'Fotografia 360 de um ambiente em obra, com eletrodutos amarelos, caixas elétricas e tubulações aparentes na alvenaria e uma tubulação no piso.',
      caption:'Fotografia 360 de um ambiente com eletrodutos, caixas e tubulações ainda aparentes na alvenaria e no piso.' },
  },
  'escaneamento-de-fachada': {
    main: { src:'/images/real/fachada-nuvem-de-pontos.webp', width:2000, height:1458, position:'center 30%',
      alt:'Nuvem de pontos colorida de um edifício residencial alto, com a torre de apartamentos, um terraço sobre o embasamento e palmeiras junto à base.',
      caption:'Nuvem de pontos da fachada de um edifício residencial.' },
  },
  'conferencia-da-excentricidade-das-estacas': {
    main: { src:'/images/real/estacas-planta-nuvem.webp', width:1227, height:575,
      alt:'Vista superior da nuvem de pontos de um terreno em fase de fundações, com os blocos e as estacas do projeto sobrepostos.',
      caption:'Vista superior da nuvem de pontos do terreno, com o projeto de fundações sobreposto.' },
    detail: { src:'/images/real/estacas-detalhe-bloco.webp', width:1254, height:600,
      alt:'Detalhe em vista superior da nuvem de pontos, com o contorno de um bloco do projeto, a estaca registrada e anotações de dimensões.',
      caption:'Detalhe de um bloco: o contorno do projeto sobre o que a nuvem de pontos registrou em campo.' },
  },
  'locacao-das-linhas-de-eixo-das-estacas': {
    main: { src:'/images/real/estacas-terreno-isometrico.webp', width:1241, height:740, position:'center 60%',
      alt:'Nuvem de pontos em perspectiva de um terreno em fase de fundações, cercado por edificações vizinhas, com as marcações do projeto sobrepostas.',
      caption:'Nuvem de pontos do terreno e das edificações vizinhas, com o projeto de fundações sobreposto.' },
  },
  'levantamento-de-interiores': {
    main: { src:'/images/real/interiores-nuvem-apartamento.webp', width:1802, height:1166,
      alt:'Nuvem de pontos de um apartamento em obra, vista de cima em perspectiva, com paredes em alvenaria aparente e as posições de escaneamento marcadas.',
      caption:'Nuvem de pontos de um apartamento em obra, ainda sem acabamento, em vista de cima.' },
  },
};
