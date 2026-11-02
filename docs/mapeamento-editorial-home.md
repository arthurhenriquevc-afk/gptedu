# Mapeamento editorial da Home

Integração dos textos da página de teste `union3d.com.br/teste-home-3/` à Home implementada, feita em 2026-11-01. A página de teste foi lida por inteiro (inclusive respostas da FAQ, menu e rodapé ocultos). A identidade visual da Home não mudou: hero integrado à imagem, H1 “Antes de decidir, registre o que existe.”, corte contínuo das janelas de obra e contraste #002E40.

Regra usada em todas as decisões: o texto de teste é fonte de tom e de situações reais de obra, não de fatos. Cidades, números, prazos, precisões, equipamentos, formatos, cases e dados da empresa continuam pendentes de confirmação (ver `docs/referencia-site-teste.md`) e não entraram na Home.

## Inventário dos textos de referência

Tratamento: **A** usar quase literal; **B** adaptar; **C** combinar com texto existente; **D** reservar para página interna; **E** aguarda confirmação da UNION3D; **F** não usar.

| ID | Bloco de origem | Conteúdo (resumo) | Tratamento |
| --- | --- | --- | --- |
| T01 | Hero | H1 com as-built, escaneamento a laser 3D e três cidades | B (sem cidades) |
| T02 | Hero | “Medimos antes de cobrir, para você não quebrar depois para descobrir.” | B |
| T03 | Hero | Botões “Receber proposta em 24h” e “Ver as janelas de obra” | F |
| T04 | Hero | Quatro contadores (projetos, m², anos, cidades) | F |
| T05 | Slide empresas | H2 “Obra sem surpresa de campo.” | F |
| T06 | Slide empresas | “Cada etapa registrada antes de ser coberta.” e promessa sobre margem e cronograma | B (só a primeira frase) |
| T07 | Slide profissionais | “Meça uma vez. Projete sem voltar ao imóvel.” e esquadro, prumadas, peitoris | B |
| T08 | Problemas | H2 “Quatro contas que a obra para de pagar quando mede antes.” | B |
| T09 | Problemas | A parede aberta de novo | B |
| T10 | Problemas | A segunda visita | B |
| T11 | Problemas | A obra parada (estaca fora de posição depois do bloco) | B |
| T12 | Problemas | A discussão sobre quem errou (nuvem de pontos datada) | C (na introdução) |
| T13 | Janelas | H2 “Medir antes de fechar: a solução certa na janela exata da sua obra.” | F |
| T14 | Janelas | “Não cubra o que você não auditou”, seis janelas, fora do relógio da obra, controle geométrico absoluto | B (só “fora do relógio”) |
| T15 | Janelas | 01 Antes do projeto: terreno natural, vias, vizinhos | D |
| T16 | Janelas | 02 Antes da primeira estaca: gabarito e eixos de locação | C |
| T17 | Janelas | 03 Antes do bloco: cabeça das estacas executadas | C |
| T18 | Janelas | 04 Antes de concretar a laje: fôrmas, cordoalhas, caixas, embutidos | C |
| T19 | Janelas | 05 Antes do fechamento: redes hidráulicas, elétricas, incêndio, ar-condicionado, drywall | C |
| T20 | Janelas | 06 Antes da mobília: ambiente pronto e vazio | C |
| T21 | Janelas | Fora do relógio: fachadas existentes e decorados | C |
| T22 | Janelas | Microdescrições dos onze serviços (com formatos e entregas) | D |
| T23 | Janelas | Serviço “As-built de drywall e shafts” | F (fora do portfólio) |
| T24 | Tecnologia | H2 “Tecnologia FARO e DJI com RTK.”, frota própria, precisão milimétrica | E |
| T25 | Tecnologia | Especificações do FARO Focus Premium | E |
| T26 | Tecnologia | Especificações do DJI Matrice 4E, RTK, ANAC e DECEA | E |
| T27 | Tecnologia | Conferência em campo pelo FARO Stream | E |
| T28 | Tecnologia | Calibração anual | E |
| T29 | Tecnologia | Drone regularizado | E |
| T30 | Tecnologia | Tour 2GO em 360° | E |
| T31 | Empresa | “Quem mede a sua obra.”: histórico desde 2005, sede | E (Sobre) |
| T32 | Empresa | Marcos 2016 e 2019 | E (Sobre) |
| T33 | Cases | Três cases com campos “a preencher” e resultados | F |
| T34 | Logos | “Construtoras e incorporadoras que já contrataram a UNION3D.” | F |
| T35 | Visualizador | “Experimente a precisão…” e “meça a distância entre duas paredes” | B (sem “precisão”) |
| T36 | Atendimento | Cidades atendidas, sede e São Paulo sob consulta | E |
| T37 | FAQ | O que preciso enviar para pedir orçamento? | B |
| T38 | FAQ | Diferença entre laser scanner e drone | B |
| T39 | FAQ | Formatos dos arquivos | E |
| T40 | FAQ | É preciso parar a obra? (“Não”, laser Classe 1) | B (sem “Não” e sem classe do laser) |
| T41 | FAQ | Atendimento fora da sede e deslocamento (“[a confirmar]” na própria fonte) | E |
| T42 | Contato | “Diga em que ponto a obra está. A resposta volta com serviço, entrega e prazo.” | B (só a primeira frase) |
| T43 | Contato | “Planejando a próxima obra? Coloque o as-built no orçamento desde o início.” | B |
| T44 | Contato | Campos do formulário: etapa, nome, WhatsApp, e-mail, cidade, descrição | F |
| T45 | Contato | “Falar pelo WhatsApp agora” e “Sem compromisso.” | F |
| T46 | Rodapé | CNPJ, endereço, telefone e e-mail | E |
| T47 | Rodapé | Lista de serviços, cidades, selo, redes sociais | F |
| T48 | Navegação | Menus “Tecnologia e precisão” e “Cases”, cartões “Saiba mais / Agendar” | F |

## Mapa de destino

| ID | Mensagem | Destino na Home | Papel no layout | Tratamento | Justificativa |
| --- | --- | --- | --- | --- | --- |
| T01 | O que a empresa faz | Parágrafo do hero | Reconhecimento da oferta | “as-built” entrou ao lado de escaneamento a laser 3D | Termo que o público usa; as cidades aguardam confirmação |
| T02 | Registrar antes de cobrir | Subtítulo das janelas de obra | Tese da sequência temporal | “Registre antes de cobrir, para não precisar quebrar depois para descobrir.” | A frase descreve exatamente o que o corte mostra; o H1 aprovado foi mantido |
| T06 | Cada etapa registrada | Bloco “Para empresas” | Necessidade da construtora | Primeira frase adaptada; margem e cronograma ficaram de fora | Promessa econômica sem evidência |
| T07 | Medir uma vez | Bloco “Para profissionais” | Necessidade do arquiteto | H2 “Meça uma vez. Projete com o espaço registrado.”; esquadros, prumos e alturas | “Sem voltar ao imóvel” promete resultado que depende do escopo |
| T08 a T11 | Custos de não medir | Nova seção “Problemas” | Identificação da necessidade | Quatro situações, cada uma ligada ao serviço correspondente | Substitui a antiga lista de aplicações com conteúdo mais concreto |
| T12 | Registro datado como base comum | Segundo parágrafo da introdução | Valor do registro | “Um registro datado mostra o que estava visível naquele momento…” | Evita o tom de disputa e não promete resolver conflito |
| T14 | Fora do relógio da obra | Legenda do corte | Ressalva de escopo | “ficam fora do relógio da obra: seguem a finalidade, não uma etapa” | “Controle geométrico absoluto” é garantia; seis janelas não correspondem às quatro do corte |
| T16 a T21 | O que está acessível em cada etapa | Detalhe de cada momento do corte (`access`) e rótulo `when` | Conteúdo de cada etapa | Linguagem de obra mais específica | Mantém quatro momentos; o laser registra só superfícies visíveis |
| T35 | Medir no visualizador | Descrição da captura real e novo link | Prova concreta | “meça, por exemplo, a distância entre duas paredes” e “Conversar sobre um registro como este” | Sem alegar precisão |
| T37, T38, T40 | Dúvidas antes do contato | FAQ da Home | Redução de incerteza | Três perguntas novas, respostas reescritas | Sem formatos, sem laudo, sem “Não” categórico |
| T42, T43 | Próximo passo | Contato final | Convite ao escopo | Título e texto novos | Sem prometer resposta, prazo ou envio |
| Drone (T26, T38) | Método aéreo | Primeiro parágrafo de Tecnologia | Relação instrumento e objeto | “Para terrenos e grandes áreas abertas, o mapeamento aéreo usa drone.” | Sem modelo de equipamento, RTK ou homologação |

## Versão aplicada por seção

Sequência final: hero, janelas de obra, faixa factual, introdução, dois públicos, problemas, localizador por finalidade, tecnologia, captura real, contratação, FAQ e contato final.

- **Hero.** H1 inalterado. Parágrafo: “Escaneamento a laser 3D, as-built, levantamentos e conferências para orientar projetos e obras em Santa Catarina.” O termo “as-built” não quebra no hífen.
- **Janelas de obra.** Título inalterado. Subtítulo: “Registre antes de cobrir, para não precisar quebrar depois para descobrir.”

  | Momento | Rótulo | Acessível nesta etapa |
  | --- | --- | --- |
  | Fundações | Antes da estaca e do bloco | O terreno preparado, o gabarito e os eixos de locação; depois, a cabeça das estacas executadas, antes do bloco. |
  | Estrutura | Antes de concretar a laje | A laje montada, com fôrmas, cordoalhas, caixas e embutidos ainda visíveis, antes da concretagem. |
  | Instalações | Antes do fechamento | Redes hidráulicas, elétricas e de gás aparentes, antes de forros e paredes; elementos ocultos não são identificados pelo laser. |
  | Intervenção | Antes da alteração | Fachadas de edifícios em uso e ambientes prontos e vazios, antes de retrofit, interiores ou marcenaria. |

  Legenda: “…Conferência de topografia, mapeamento com drone e tour virtual ficam fora do relógio da obra: seguem a finalidade, não uma etapa.”
- **Introdução.** Segundo parágrafo termina com “Um registro datado mostra o que estava visível naquele momento e dá à construtora, aos projetistas e às equipes de execução a mesma base para conversar.”
- **Para empresas.** “Construtoras, incorporadoras e equipes de engenharia registram cada etapa antes que ela seja coberta e conferem posições em relação ao projeto, da locação das estacas ao as-built das instalações.”
- **Para profissionais.** H2 “Meça uma vez. Projete com o espaço registrado.” Texto: “Arquitetos, designers e marcenarias registram o ambiente existente, com esquadros, prumos e alturas, para consultar durante o projeto. A apresentação espacial do ambiente é outra finalidade, com escopo próprio.”
- **Problemas (nova).** H2 “Problemas que começam quando ninguém mediu antes.” Apoio: “Situações comuns em obra e projeto, cada uma ligada ao serviço que trata dela.”
  - A parede aberta de novo. → As-built e infraestrutura MEP.
  - A frente de serviço parada. → Conferência da excentricidade das estacas.
  - A segunda visita ao imóvel. → Levantamento arquitetônico de interiores.
  - Desenhos que não mostram o edifício de hoje. → Escaneamento de fachada para retrofit.

  Fecha com “Explorar aplicações”. O quarto problema da referência (discussão sobre quem errou) foi para a introdução; a fachada para retrofit entrou no lugar por vir do bloco “fora do relógio” e completar os dois públicos.
- **Tecnologia.** Acrescenta: “Para terrenos e grandes áreas abertas, o mapeamento aéreo usa drone.”
- **Captura real.** “…e meça, por exemplo, a distância entre duas paredes.” Novo link “Conversar sobre um registro como este”, para o contato.
- **FAQ da Home.** Seis perguntas: qual serviço escolher; o que enviar para pedir um orçamento; diferença entre laser scanner e drone; se é preciso parar a obra; como os dados são tratados; o que o laser registra. A página de contato continua com a FAQ geral.
- **Contato final.** Título “Diga em que ponto a obra ou o projeto está.” Texto “Com a etapa, a localização e a informação de que você precisa, a conversa começa pelo escopo. Se a obra ainda vai começar, vale prever os registros desde o planejamento.”

## Textos combinados

- T12 com o parágrafo de valor da introdução.
- T14 (“fora do relógio da obra”) com a legenda existente do corte.
- T16 e T17 num único momento “Fundações”, porque locação e conferência das estacas pertencem à mesma etapa do corte.
- T19 com a ressalva existente sobre elementos ocultos.
- T20 e T21 num único momento “Intervenção”.
- T42 e T43 no contato final.
- T37 com a ressalva já usada no site de que não é preciso ter tudo definido para começar.

## Mudança de ordem

A seção “Aplicações”, que vinha depois de Contratação com a imagem conceitual de interior, deu lugar a “Problemas”, colocada logo depois dos dois públicos e antes do localizador. Motivos: a situação concreta ajuda a escolher uma finalidade antes do localizador, e a Home deixa de repetir `interior.webp` (já usada no bloco de profissionais). A página Aplicações continua acessível pelo link “Explorar aplicações”.

## Textos não usados e motivos

| Texto | Motivo |
| --- | --- |
| H1 com cidades (T01) | Cidades atendidas não confirmadas; H1 aprovado mantido |
| “Receber proposta em 24h” (T03) | Prazo não confirmado |
| Contadores (T04) | Estatísticas sem dados |
| “Obra sem surpresa… Proteja a margem e o cronograma” (T05, T06) | Promessa econômica |
| “6 janelas… controle geométrico absoluto” (T13, T14) | Garantia; o corte tem quatro momentos |
| Microdescrições com formatos e entregas (T22) | Detalhe de página de serviço |
| As-built de drywall e shafts (T23) | Fora do portfólio de nove serviços |
| Equipamentos, especificações, precisão, calibração, ANAC/DECEA, FARO Stream, Tour 2GO (T24 a T30) | Aguardam confirmação |
| Histórico “Quem mede a sua obra” e marcos (T31, T32) | Aguardam confirmação; lugar é Sobre |
| Cases com campos a preencher e logotipos (T33, T34) | Sem evidência nem autorização |
| “Experimente a precisão” (T35) | Alegação de precisão |
| Cidades e São Paulo (T36) | Aguardam confirmação |
| Formatos dos arquivos (T39) | Aguardam confirmação; inclui laudo |
| “Não” e laser Classe 1 (T40) | Depende de cada obra; classe do equipamento não confirmada |
| Deslocamento (T41) | Marcado “[a confirmar]” na própria fonte |
| “A resposta volta com serviço, entrega e prazo” (T42) | Promessa de resposta sem destino do formulário |
| WhatsApp, cidade, “Sem compromisso” (T44, T45) | Contatos e condições não confirmados |
| CNPJ, endereço, telefone, e-mail (T46) | Aguardam confirmação |
| Selo, redes sociais, menus “Tecnologia e precisão” e “Cases” (T47, T48) | Sem conteúdo correspondente no site |

## Recomendações para páginas internas

Nenhuma página de serviço foi alterada nesta passada.

- **Serviços.** Usar as microdescrições de T22 como ponto de partida para o resumo de cada página, depois de confirmar formatos e entregas.
- **Sobre.** Histórico, sede e marcos (T31, T32) quando a empresa confirmar datas e endereço.
- **Equipamentos.** Bloco sobre scanner e drone em Sobre ou numa seção de método, com especificações conferidas e sem precisão genérica.
- **Cases.** Ativar o modelo existente só com projeto, cliente e autorização reais.
- **Atendimento.** Cidades e condições de deslocamento no contato, depois de confirmadas.
- **Tour virtual.** Definir a modalidade antes de mencionar 360°, medição ou Tour 2GO.

## Pendências

- Confirmar cidades, histórico, equipamentos, formatos e condições de deslocamento.
- Confirmar se parar a obra é dispensável na maioria dos casos, para tornar a resposta da FAQ mais direta.
- Revisar com a UNION3D a escolha das quatro situações de “Problemas” e os serviços associados a cada uma.
- Imagens da Home continuam conceituais e identificadas como tal.
