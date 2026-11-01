# UNION3D — arquitetura da informação

Status: arquitetura definida a partir do briefing; métodos e janelas específicos dependem da validação técnica da empresa. Não há acervo, contatos nem cases autorizados disponíveis.

## Hierarquia

- Início `/`
- Serviços `/servicos/`
  - Para empresas `/servicos/empresas/`
    1. Conferência de topografia `/servicos/conferencia-de-topografia/`
    2. Mapeamento aéreo com drone `/servicos/mapeamento-aereo-com-drone/`
    3. Locação de estacas `/servicos/locacao-de-estacas/`
    4. Locação de linhas de eixo `/servicos/locacao-de-linhas-de-eixo/`
    5. Conferência de excentricidade das estacas `/servicos/conferencia-de-excentricidade/`
    6. As-built de laje protendida `/servicos/as-built-de-laje-protendida/`
    7. As-built e infraestrutura MEP `/servicos/as-built-mep/`
    8. Escaneamento de fachada para retrofit `/servicos/escaneamento-de-fachada/`
  - Para profissionais `/servicos/profissionais/`
    9. Levantamento arquitetônico de interiores `/servicos/levantamento-de-interiores/`
    10. Tour virtual decorado `/servicos/tour-virtual-decorado/`
- Sobre `/sobre/`
- Aplicações `/aplicacoes/`
- Contato e orçamento `/contato/`
- Privacidade `/privacidade/`
- Rascunhos internos: Serviço 11, a definir; modelo de projeto autorizado. Sem indexação e fora da navegação comercial.

## Função das páginas

| Página | Público e dúvida | Entradas → saída principal | Por que separada / ação |
| --- | --- | --- | --- |
| Início | Todos: o que faz e onde se aplica? | Busca, acesso direto → categoria, serviço ou contato | Posicionamento e orientação; conhecer serviços |
| Serviços | Todos: qual solução corresponde à necessidade? | Menu, Home, Sobre → serviço ou categoria | Diretório comparável; identificar serviço |
| Para empresas | Gestores, engenharia e obra: qual atividade cabe nesta etapa? | Menu, Home, Serviços → serviço | Oito atividades exigem filtro por finalidade e etapa; consultar aplicação |
| Para profissionais | Arquitetos, designers e marcenarias: registrar ou apresentar um ambiente? | Menu, Home, Serviços → interiores ou tour | Diferencia documentação dimensional de visualização; conhecer solução |
| Dez serviços | Público específico: o que é, quando faz sentido e o que alinhar? | Busca, índice, janela, relacionados → contato contextualizado | Intenção de busca e decisão próprias; solicitar avaliação do escopo |
| Sobre | Compradores e especificadores: como a empresa conduz o trabalho? | Menu, Home, serviços → serviços ou contato | Aprofunda método e postura sem repetir a Home; conversar sobre projeto |
| Aplicações | Visitantes sem familiaridade: como usar essas informações? | Home, menu, serviços → serviço pertinente | Exemplos de uso claramente conceituais; compreender aplicação |
| Contato | Interessados: como iniciar e o que informar? | CTAs e menu → envio real quando integrado | Preserva serviço de origem e aceita dúvida sobre escolha; solicitar avaliação |
| Privacidade | Pessoas que fornecerão dados: como serão tratados? | Formulário e rodapé → retorno ao contato | Texto final depende de controlador, canais e operação; informar direitos |
| Modelo de case | Equipe editorial: como documentar evidência autorizada? | Arquivo interno → futura página de projeto | Não publicar sem acervo e autorização |
| Serviço 11 | Equipe editorial: o que falta definir? | Arquivo interno → futuro serviço | Estrutura pronta sem criar oferta fictícia |

## Navegação

Header com marca para Início; Serviços, Sobre, Aplicações e Contato. Serviços abre duas áreas: empresas (oito nomes organizados por finalidade) e profissionais (dois nomes). Um link para o diretório completo permite comparar e navegar por etapa. Desktop: painel alinhado ao header, abertura por clique, teclado e Escape; mobile: menu expansível com subgrupos, sem depender de hover. Página atual identificada. Header aderente compacto para facilitar mudança entre serviços; sem reaparecimentos animados.

Breadcrumb: Início / Serviços / Público / Serviço. Não usar uma profundidade de URL excessiva: categorias são visões do mesmo catálogo. Cada serviço tem uma URL canônica e aparece em múltiplos agrupamentos.

## Janelas de obra — organização editorial proposta

As janelas descrevem acesso à informação, não prazos universais de contratação. O evento concreto será confirmado em cada projeto.

1. **Antes da execução de fundações:** locação de estacas; conferência de referências topográficas conforme escopo. Evento: início da execução dos elementos que dependem da marcação.
2. **Com fundações executadas e referências acessíveis:** conferência de excentricidade. Evento: recobrimento ou perda do acesso necessário à conferência; condições de campo a validar.
3. **Durante a estrutura:** linhas de eixo e as-built de laje protendida. Eventos distintos: execução orientada por eixos e recobrimento de elementos cuja documentação se pretende obter. Não afirmar que o laser captura cabos ocultos; etapa e objeto do as-built precisam ser confirmados.
4. **Com instalações aparentes:** as-built MEP. Evento: fechamento de forros, paredes ou outros recobrimentos; registro limitado ao visível e ao acessível e às fontes complementares contratadas.
5. **Antes da intervenção:** fachada para retrofit e levantamento de interiores. Evento: alteração ou demolição da condição existente relevante ao projeto.
6. **Conforme a finalidade:** drone, tour virtual e conferências topográficas não vinculadas às etapas acima. Dependem de condições de operação, acesso, objetivo e modalidade confirmada.

Uma mesma atividade pode atender mais de uma etapa. Não confundir representação da sequência com dependência obrigatória. Home usa quatro momentos visuais resumidos (fundações, estrutura, instalações e intervenção), com links; o diretório oferece o índice completo e o agrupamento independente da sequência.

## Percursos

- Gestor de obra: Home → empresas → janela/finalidade → serviço → contato com serviço preenchido.
- Arquiteto ou designer: Home → profissionais → levantamento de interiores → entregáveis a alinhar → contato.
- Visitante sem familiaridade: Home → captura da realidade (explicação curta) → aplicação → serviço → contato.
- Comprador avaliando fornecedor: serviço vindo de busca → Sobre/método → serviço → contato.
- Visitante sem saber o serviço: Serviços → “Preciso de orientação” → contato sem seleção obrigatória.

## Decisões sobre páginas complementares

Como trabalhamos e tecnologia ficam em Sobre e em blocos curtos da Home; cada serviço explica sua técnica sem sugerir um equipamento único para todo o catálogo. FAQ geral fica na Home e no contato; perguntas específicas ficam nos serviços. Evita páginas com conteúdo duplicado. Aplicações existe como orientação, com exemplos explicitamente conceituais. Portfólio de projetos reais e páginas individuais ficam preparados em rascunho até haver autorização. Política de privacidade terá estrutura e status de validação, sem inventar controlador, base legal, retenção ou canais.

## Sequência da Home e fusões

1. Header e hero: reconhecimento, oferta e transformação visual.
2. Faixa factual: públicos, Santa Catarina e captura com FARO Focus 3D conforme briefing.
3. O que fazemos: compreensão breve.
4. Dois universos: identificação por público.
5. Janelas de obra + problema da perda de acesso: compreensão do momento.
6. Índice de serviços: acesso rápido e completo, distinto da narrativa temporal.
7. Tecnologia e método: relação entre captura, dados e finalidade.
8. Contratação + princípios de trabalho: confiança e clareza do próximo passo.
9. Aplicações: usos conceituais; sem falsos cases.
10. FAQ: reduzir dúvidas antes do contato.
11. Chamada final e footer: contato e orientação complementar.

As quinze seções do briefing têm suas funções preservadas; problema integra janelas e confiança integra método/contratação. A Home conduz reconhecimento → compreensão → identificação → avaliação → confiança → contato, enquanto páginas internas concentram os detalhes.

## Pendências de conteúdo e operação

Logotipo vetorial; acervo fotográfico autorizado e correspondências foto/representação; capturas reais de nuvens de pontos; autorização de projetos; contatos e destino do formulário; dados do controlador de dados; validação técnica dos métodos, entregáveis, etapas e modalidade do tour; nome e escopo do serviço 11. Sem backend configurado, formulário não pode anunciar envio realizado. Sem foto correspondente, transformação do hero deve ser identificada como demonstração conceitual, sem alegar registro real.
