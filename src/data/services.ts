export type Audience = 'empresas' | 'profissionais';
export type Goal = 'conferir' | 'posicionar' | 'documentar' | 'levantar' | 'apresentar';
export interface Service {
  slug: string; name: string; audience: Audience; headline: string; summary: string;
  purpose: string; timing: string; situations: string[]; process: [string,string][];
  deliverables: string[]; limitation: string; benefit: string;
  faq: [string,string][]; related: [string,string][]; image: 'structure' | 'interior';
  // goal: finalidade usada nos filtros; question: a pergunta que o serviço responde; access: o que precisa estar acessível ao registro.
  goal: Goal; moment: string; question: string; access: string; checklist: string[];
  // sources separa o que a captura alcança do que vem de outras fontes; compare aponta o serviço com que este costuma ser confundido.
  sources?: { direct: string[]; other: string[] }; compare?: string;
}
export const services: Service[] = [
  {
    slug:'conferencia-de-topografia', name:'Conferência de topografia', audience:'empresas',
    headline:'Referências de projeto, confrontadas com o campo.',
    summary:'Verificação de informações e condições relacionadas à topografia, conforme as referências e a finalidade do projeto.',
    purpose:'A conferência relaciona dados de referência às condições encontradas em campo. O objeto da verificação, os documentos utilizados e o critério de apresentação precisam ser definidos antes da atividade.',
    timing:'Quando uma referência precisa ser conferida, antes de orientar uma execução ou uma decisão de projeto.',
    situations:['Verificar referências disponíveis para uma etapa da obra.','Confrontar informações existentes com as condições acessíveis em campo.','Documentar uma condição para consulta e alinhamento entre equipes.'],
    process:[['Referências','Alinhar o objeto da conferência e os documentos de origem.'],['Campo','Planejar o acesso e definir o procedimento adequado ao objeto.'],['Comparação','Organizar os registros e a apresentação das informações conforme o escopo.']],
    deliverables:['Registros dimensionais dos elementos abrangidos.','Apresentação das comparações com as referências fornecidas.','Documentação gráfica, quando prevista no escopo.'],
    limitation:'Conferência de topografia não equivale a todos os tipos de levantamento topográfico e não substitui as responsabilidades dos profissionais envolvidos no projeto.',
    benefit:'Dar às equipes uma referência documentada para discutir condições de campo e orientar os próximos passos.',
    faq:[['Preciso ter um levantamento anterior?','Os documentos necessários dependem do objeto da conferência. Compartilhe o que existe para avaliar se as referências são suficientes.'],['Qual técnica é utilizada?','O procedimento deve ser definido conforme a necessidade e as condições de campo. Não se deve pressupor uma técnica única para toda conferência.']],
    related:[['locacao-de-estacas','Com as referências conferidas, a locação parte de uma base verificada.'],['locacao-de-linhas-de-eixo','Os eixos dependem das mesmas referências geométricas que a conferência verifica.'],['conferencia-de-excentricidade','Depois da execução, a posição das estacas é comparada a essas referências.']],image:'structure',
    goal:'conferir',moment:'Antes das fundações ou conforme a finalidade',question:'As referências da obra correspondem ao que existe em campo?',access:'O terreno, os marcos e os elementos usados como referência, acessíveis em campo.',compare:'mapeamento-aereo-com-drone',checklist:['Localização e área envolvida.','Documentos de referência disponíveis, como plantas ou levantamentos anteriores.','O que precisa ser verificado e para qual decisão.','Condições de acesso ao local.']
  },
  {
    slug:'mapeamento-aereo-com-drone',name:'Mapeamento aéreo com drone',audience:'empresas',
    headline:'Uma leitura do espaço em escala territorial.',
    summary:'Registro aéreo para compreender áreas, terrenos e condições de obra, com objetivo e viabilidade definidos previamente.',
    purpose:'O mapeamento aéreo amplia a leitura espacial de uma área. A atividade e o tratamento das informações dependem da finalidade, das condições de operação e do resultado contratado.',
    timing:'Conforme a finalidade do levantamento e a viabilidade da operação, sem uma janela única na sequência da obra.',
    situations:['Compreender a configuração espacial de uma área.','Registrar uma condição do terreno ou da obra.','Apoiar a leitura do contexto antes de um planejamento.'],
    process:[['Finalidade e área','Delimitar o que precisa ser registrado e para qual uso.'],['Viabilidade','Avaliar local, condições de voo, acesso e exigências aplicáveis.'],['Registro e organização','Executar a atividade e preparar os materiais acordados.']],
    deliverables:['Registros aéreos da área abrangida, conforme contratação.','Materiais de representação espacial após validação de viabilidade e escopo.'],
    limitation:'Ortomosaicos, modelos digitais de terreno e resultados de topografia de precisão não estão presumidos. Cada produto depende de confirmação específica. A operação deve respeitar as exigências aplicáveis ao uso de drones.',
    benefit:'Relacionar a leitura dos elementos locais à configuração mais ampla do espaço.',
    faq:[['O serviço inclui um modelo de terreno?','Esse produto precisa ser confirmado na avaliação do escopo. O nome do serviço não pressupõe um conjunto fixo de entregáveis.'],['Qualquer área pode ser registrada?','A viabilidade depende das condições locais, das restrições operacionais e das exigências aplicáveis.']],
    related:[['conferencia-de-topografia','Quando a pergunta é sobre referências específicas, a conferência trata elementos definidos em campo.'],['escaneamento-de-fachada','A leitura aérea mostra o conjunto; o escaneamento documenta a geometria de uma fachada.']],image:'structure',
    goal:'levantar',moment:'Conforme a finalidade',question:'Como a área se configura vista em conjunto, na escala do terreno ou da obra?',access:'A área a registrar, com condições de voo e exigências de operação viáveis.',compare:'conferencia-de-topografia',checklist:['Localização e área aproximada.','Finalidade da leitura aérea.','Condições conhecidas do entorno, como edificações altas ou restrições de acesso.','Documentos da área, se houver.']
  },
  {
    slug:'locacao-de-estacas',name:'Locação de estacas',audience:'empresas',
    headline:'Do projeto de fundações à referência em campo.',
    summary:'Posicionamento em campo dos elementos previstos no projeto, a partir das referências e condições alinhadas com a equipe.',
    purpose:'A locação de estacas estabelece em campo o posicionamento previsto no projeto de referência. O trabalho exige alinhamento sobre documentos, referências geométricas e condições de execução.',
    timing:'Antes da execução dos elementos que dependem da marcação. A programação deve ser alinhada à equipe de obra.',
    situations:['Preparar as referências de posicionamento das estacas.','Alinhar a locação à documentação de projeto vigente.','Organizar o início de uma etapa de fundações.'],
    process:[['Projeto de referência','Confirmar a revisão dos documentos e as referências disponíveis.'],['Preparação de campo','Alinhar acesso, condições do terreno e interface com a execução.'],['Posicionamento','Realizar a atividade contratada e organizar os registros acordados.']],
    deliverables:['Marcações de campo previstas na atividade contratada.','Registros de locação conforme definição do escopo.'],
    limitation:'Tolerâncias, procedimento, materialização das referências e forma de documentação precisam ser confirmados. A locação não equivale à verificação estrutural das fundações.',
    benefit:'Apoiar o posicionamento dos elementos com referências alinhadas ao projeto utilizado pela equipe.',
    faq:[['Que projeto devo enviar?','Envie os documentos vigentes que orientam o posicionamento das estacas e identifique a revisão. A suficiência será avaliada antes da atividade.'],['É o mesmo serviço que conferir excentricidade?','Não. A locação orienta o posicionamento antes da execução; a conferência de excentricidade compara posições executadas às referências definidas.']],
    related:[['conferencia-de-excentricidade','Depois da execução, compara a posição das estacas às referências usadas na locação.'],['locacao-de-linhas-de-eixo','Os eixos levam a mesma referência geométrica para as etapas seguintes.'],['conferencia-de-topografia','Conferir as referências antes de locar ajuda a partir de uma base verificada.']],image:'structure',
    goal:'posicionar',moment:'Antes da execução das fundações',question:'Onde cada estaca prevista no projeto deve ser marcada em campo?',access:'O terreno preparado para a marcação e as referências geométricas da obra.',compare:'conferencia-de-excentricidade',checklist:['Projeto de fundações vigente, com a revisão identificada.','Referências existentes no terreno.','Localização e etapa prevista para a execução.','Condições do terreno e da frente de serviço.']
  },
  {
    slug:'locacao-de-linhas-de-eixo',name:'Locação de linhas de eixo',audience:'empresas',
    headline:'Uma referência geométrica para orientar a execução.',
    summary:'Materialização das referências de eixo previstas no projeto para apoiar o posicionamento e o controle de elementos construtivos.',
    purpose:'Linhas de eixo estabelecem referências geométricas compartilhadas pelas equipes. A locação relaciona essas referências aos documentos de projeto e às condições da obra.',
    timing:'Antes das atividades que utilizam os eixos como referência, com acesso adequado aos pontos e superfícies envolvidos.',
    situations:['Orientar o posicionamento de elementos construtivos.','Estabelecer referências para uma etapa de estrutura.','Alinhar a geometria de execução entre equipes.'],
    process:[['Documentação','Identificar os eixos, os documentos vigentes e as referências.'],['Alinhamento','Definir superfícies, acessos e a interface com a equipe de obra.'],['Locação','Materializar as referências previstas e registrar o que foi contratado.']],
    deliverables:['Referências de eixo em campo conforme o escopo.','Registros e documentação das referências, quando contratados.'],
    limitation:'A forma de materialização e os critérios de conferência devem ser alinhados. Linhas de eixo não são o mesmo objeto da locação individual de estacas.',
    benefit:'Facilitar a comunicação geométrica entre documentação e execução em campo.',
    faq:[['Os eixos podem ser locados em uma obra em andamento?','A possibilidade depende da preservação das referências e das condições de acesso. A etapa deve ser avaliada.'],['Quais documentos são necessários?','Plantas com a identificação dos eixos e referências existentes são o ponto de partida. A equipe avaliará os complementos necessários.']],
    related:[['locacao-de-estacas','A locação de estacas trata cada elemento de fundação; os eixos organizam a geometria compartilhada.'],['conferencia-de-topografia','A conferência verifica as referências das quais os eixos dependem.'],['as-built-de-laje-protendida','Na mesma etapa, o as-built documenta a condição executada da laje.']],image:'structure',
    goal:'posicionar',moment:'Durante a estrutura',question:'Quais referências de eixo as equipes vão usar para posicionar a execução?',access:'Os pontos e as superfícies onde as referências serão materializadas e usadas.',compare:'locacao-de-estacas',checklist:['Plantas com os eixos identificados e a revisão vigente.','Etapa da obra e locais em que as referências serão usadas.','Referências já materializadas, se houver.','Condições de acesso às superfícies.']
  },
  {
    slug:'conferencia-de-excentricidade',name:'Conferência de excentricidade das estacas',audience:'empresas',
    headline:'A posição executada em relação à referência.',
    summary:'Conferência geométrica da posição de estacas em relação às referências de projeto definidas para a atividade.',
    purpose:'A atividade compara a posição dos elementos executados com as referências utilizadas no projeto. O objeto acessível, as informações de origem e a finalidade da conferência precisam ser conhecidos.',
    timing:'Com as fundações executadas e as referências necessárias acessíveis, antes de recobrimentos que impeçam o registro pretendido.',
    situations:['Registrar a posição de elementos executados.','Relacionar a posição encontrada à documentação de referência.','Fornecer informações para a avaliação dos profissionais responsáveis.'],
    process:[['Referências e acesso','Alinhar projeto, elementos abrangidos e condições para a conferência.'],['Registro de campo','Obter as informações posicionais previstas na atividade.'],['Comparação documentada','Organizar a relação entre condição encontrada e referência fornecida.']],
    deliverables:['Registros posicionais dos elementos abrangidos.','Apresentação comparativa conforme o escopo contratado.'],
    limitation:'O serviço não presume tolerâncias admissíveis, critérios de aceitação, conclusões estruturais ou garantia de conformidade. A UNION3D não emite laudos.',
    benefit:'Documentar informações geométricas que podem subsidiar a análise dos responsáveis pelo projeto.',
    faq:[['A conferência determina se a estaca é aceitável?','A aceitação depende de critérios e avaliação dos profissionais responsáveis. Uma comparação geométrica não representa, por si só, uma conclusão estrutural.'],['Quando organizar o serviço?','Enquanto os elementos e as referências necessários estão acessíveis. A janela concreta deve ser confirmada com a equipe de obra.']],
    related:[['locacao-de-estacas','A locação estabelece a posição de projeto que a conferência usa como referência.'],['conferencia-de-topografia','Referências conferidas dão uma base comum para a comparação.']],image:'structure',
    goal:'conferir',moment:'Com as fundações executadas',question:'As estacas executadas estão onde a referência previa?',access:'Os elementos executados e as referências da comparação, antes do recobrimento.',compare:'locacao-de-estacas',checklist:['Quais elementos precisam ser conferidos.','Documentos de referência e a revisão utilizada.','Estágio das fundações e previsão de recobrimento.','Condições de acesso aos elementos.']
  },
  {
    slug:'as-built-de-laje-protendida',name:'As-built de laje protendida',audience:'empresas',
    headline:'Documentar a condição executada da laje.',
    summary:'Registro das condições executadas de uma laje protendida, com objeto, etapa e finalidade definidos previamente.',
    purpose:'A documentação as-built descreve a condição executada abrangida pelo levantamento. O que será registrado depende da visibilidade dos elementos, da etapa de campo e das fontes disponíveis.',
    timing:'Na etapa em que os elementos pretendidos estão acessíveis. O registro anterior ao recobrimento depende do objeto específico a documentar.',
    situations:['Documentar uma condição para consulta posterior.','Relacionar informações de execução ao projeto disponível.','Preparar registros de elementos antes de perder o acesso visual.'],
    process:[['Objeto do registro','Definir o que será documentado, a finalidade e a etapa adequada.'],['Referências e campo','Alinhar fontes de informação e condições de acesso.'],['Documentação','Organizar os dados e representações previstos no escopo.']],
    deliverables:['Registros da condição executada abrangida.','Plantas, cortes ou vistas, quando definidos e viáveis no escopo.','Representações a partir dos dados coletados, mediante confirmação.'],
    limitation:'Documentação as-built não é certificação, inspeção estrutural ou validação de segurança. O escaneamento não identifica cabos ou elementos ocultos por superfícies.',
    benefit:'Conservar uma referência organizada da condição documentada para os usos previstos na contratação.',
    faq:[['É possível localizar cabos depois do recobrimento?','Não se deve atribuir essa capacidade ao escaneamento a laser. Elementos ocultos exigem outras fontes ou procedimentos, cuja disponibilidade precisa ser confirmada.'],['A entrega inclui plantas?','Plantas, vistas e cortes precisam ser definidos conforme a finalidade, os dados disponíveis e a viabilidade do escopo.']],
    related:[['locacao-de-linhas-de-eixo','Os eixos são as referências de posição usadas na mesma etapa.'],['as-built-mep','Depois da estrutura, as instalações aparentes são o próximo objeto que deixa de estar acessível.']],image:'structure',
    goal:'documentar',moment:'Durante a estrutura',question:'Qual condição executada da laje precisa ficar documentada?',access:'Os elementos da laje visíveis na etapa escolhida para o registro.',sources:{direct:['Superfícies e elementos visíveis no momento do registro, conforme o objeto definido.','A posição desses elementos em relação à geometria da laje.'],other:['Cabos, armaduras ou embutidos já cobertos por concreto ou outros materiais.','Traçados e especificações do projeto de protensão, quando fornecidos pela equipe.']},compare:'as-built-mep',checklist:['Projeto disponível da laje.','Finalidade do registro.','Etapa de execução e data prevista para o recobrimento.','Elementos que precisam ser documentados.']
  },
  {
    slug:'as-built-mep',name:'As-built e infraestrutura MEP',audience:'empresas',
    headline:'Registre as instalações antes dos fechamentos.',
    summary:'Documentação de condições executadas de infraestrutura mecânica, elétrica e hidráulica, conforme a abrangência contratada.',
    purpose:'O registro as-built MEP organiza informações das instalações encontradas. Pode apoiar manutenção, reformas e compatibilizações, respeitando os sistemas abrangidos e as limitações de visibilidade.',
    timing:'Com as instalações aparentes, antes de fechamentos de forros, paredes ou outros recobrimentos que alterem o acesso necessário.',
    situations:['Registrar instalações enquanto estão visíveis.','Preparar documentação para consultas e intervenções futuras.','Relacionar sistemas aparentes à configuração do ambiente.'],
    process:[['Disciplinas e finalidade','Definir sistemas abrangidos e uso esperado da documentação.'],['Acesso e fontes','Planejar a captura do visível e identificar documentos complementares.'],['Organização da entrega','Preparar materiais conforme a cobertura e o escopo acordados.']],
    deliverables:['Documentação das condições acessíveis dos sistemas contratados.','Nuvem de pontos quando prevista na captura e na entrega.','Plantas, vistas ou representações específicas mediante definição do escopo.'],
    limitation:'O escaneamento a laser registra superfícies visíveis; não identifica instalações ocultas nem garante a localização de todas as interferências. Fontes complementares devem ser diferenciadas da captura direta.',
    benefit:'Manter uma referência das condições acessíveis antes que recobrimentos modifiquem o que pode ser documentado.',
    faq:[['É possível documentar instalações já ocultas?','A captura direta depende da visibilidade. Informações sobre elementos ocultos dependem de outras fontes e não podem ser apresentadas como capturadas pelo laser.'],['MEP inclui todas as instalações do edifício?','A abrangência é definida na contratação. Informe quais disciplinas e áreas são necessárias para avaliar a cobertura.']],
    related:[['as-built-de-laje-protendida','A laje é documentada na etapa anterior, enquanto seus elementos estão acessíveis.'],['levantamento-de-interiores','Depois dos fechamentos, o levantamento registra o ambiente como base para projetar.'],['escaneamento-de-fachada','Em edifícios existentes, a fachada é outro objeto que pede registro antes da intervenção.']],image:'structure',
    goal:'documentar',moment:'Antes dos fechamentos',question:'Por onde passam as instalações que ainda estão visíveis?',access:'As instalações aparentes, antes de forros, paredes ou pisos as recobrirem.',sources:{direct:['Superfícies visíveis de tubulações, eletrodutos, dutos e suportes abrangidos.','A relação desses elementos com paredes, lajes e aberturas.'],other:['Trechos já cobertos por forro, parede ou piso.','Especificações, circuitos e identificação de sistemas, que vêm dos documentos da obra.']},compare:'as-built-de-laje-protendida',checklist:['Sistemas e áreas a documentar.','Etapa dos fechamentos e datas previstas.','Finalidade da documentação.','Projetos de instalações existentes.']
  },
  {
    slug:'escaneamento-de-fachada',name:'Escaneamento de fachada para retrofit',audience:'empresas',
    headline:'Compreender a fachada antes de intervir.',
    summary:'Captura tridimensional da geometria de fachadas existentes para apoiar estudos e projetos de reforma ou retrofit.',
    purpose:'O escaneamento a laser 3D registra superfícies visíveis da fachada. A representação dessa condição fornece informações geométricas para entender elementos, aberturas e relações espaciais relevantes à intervenção.',
    timing:'Antes das alterações na condição existente que se deseja documentar, com acesso e visibilidade compatíveis com o levantamento.',
    situations:['Preparar informações geométricas para um retrofit.','Documentar aberturas e elementos de uma fachada existente.','Relacionar a configuração encontrada aos documentos disponíveis.'],
    process:[['Finalidade da intervenção','Definir superfícies abrangidas e informações úteis ao projeto.'],['Planejamento da captura','Avaliar acesso, distâncias e regiões com restrição de visibilidade.'],['Representação','Organizar dados e materiais conforme os usos acordados.']],
    deliverables:['Nuvem de pontos, quando contratada.','Elevações e vistas da condição registrada, conforme o escopo.','Documentação geométrica dos elementos abrangidos.'],
    limitation:'Documentação geométrica não é diagnóstico de manifestações patológicas, avaliação de desempenho ou conclusão estrutural. Cobertura e acessos devem ser avaliados.',
    benefit:'Desenvolver o projeto sobre uma leitura documentada da geometria existente.',
    faq:[['O escaneamento identifica patologias?','A documentação geométrica não representa um diagnóstico de patologias. Esse tipo de avaliação exige escopo e profissionais próprios.'],['É necessário acesso a todos os lados?','A visibilidade influencia a cobertura. O planejamento deve identificar superfícies necessárias, possíveis posições e restrições.']],
    related:[['levantamento-de-interiores','Quando a intervenção também alcança os ambientes internos.'],['as-built-mep','Quando a reforma deixa instalações aparentes, o registro antes dos fechamentos complementa o levantamento.'],['mapeamento-aereo-com-drone','A leitura aérea situa a fachada no conjunto do terreno e do entorno.']],image:'structure',
    goal:'levantar',moment:'Antes da intervenção',question:'Qual é a geometria real da fachada que vai receber o retrofit?',access:'As superfícies da fachada visíveis a partir das posições de captura possíveis.',sources:{direct:['Superfícies, aberturas e elementos visíveis a partir das posições de captura.','As relações geométricas entre esses elementos.'],other:['Áreas sem visibilidade a partir do acesso disponível.','Composição das vedações, estado dos materiais e manifestações patológicas, que exigem avaliação própria.']},checklist:['Localização e fachadas abrangidas.','Finalidade da intervenção.','Documentos existentes do edifício.','Condições conhecidas de acesso e de visibilidade.']
  },
  {
    slug:'levantamento-de-interiores',name:'Levantamento arquitetônico de interiores',audience:'profissionais',
    headline:'O espaço existente como ponto de partida.',
    summary:'Registro dimensional de ambientes para apoiar projetos de arquitetura, interiores e marcenaria.',
    purpose:'O levantamento documenta dimensões e a configuração acessível de um ambiente existente. É uma base para compreender o espaço antes de desenvolver um projeto de reforma, interiores ou detalhamento.',
    timing:'Antes de projetar sobre o ambiente existente ou antes de alterações que eliminem a condição que se deseja registrar.',
    situations:['Iniciar um projeto de interiores com referências do espaço.','Documentar ambientes antes de uma reforma.','Apoiar o desenvolvimento de detalhamentos e marcenaria.'],
    process:[['Necessidade do projeto','Identificar ambientes, elementos relevantes e finalidade.'],['Registro do existente','Planejar o acesso e o levantamento das condições abrangidas.'],['Material para projetar','Organizar os registros e as representações acordadas.']],
    deliverables:['Registros dimensionais dos ambientes abrangidos.','Plantas, cortes e elevações conforme definição do escopo.','Nuvem de pontos ou representação espacial mediante confirmação.'],
    limitation:'O levantamento não elimina conferências adicionais necessárias à execução ou fabricação e não garante o encaixe de peças. Objetos, mobiliário e acessos podem limitar a cobertura.',
    benefit:'Traduzir a configuração existente em informações úteis ao desenvolvimento do projeto.',
    faq:[['É adequado para marcenaria?','Pode apoiar a compreensão dimensional do espaço conforme o escopo. As conferências e critérios necessários à fabricação e montagem continuam a cargo dos profissionais responsáveis.'],['O imóvel pode estar mobiliado?','A ocupação influencia a visibilidade e o acesso. Informe a situação para planejar o levantamento e suas limitações.']],
    related:[['tour-virtual-decorado','Para apresentar o ambiente, e não para medi-lo, a visualização espacial atende outra finalidade.'],['as-built-mep','Em obra, o registro das instalações antes dos fechamentos complementa o levantamento do ambiente.'],['escaneamento-de-fachada','Quando o projeto também alcança o exterior do edifício.']],image:'interior',
    goal:'levantar',moment:'Antes da intervenção',question:'Quais são as dimensões e a configuração do ambiente existente?',access:'Os ambientes abrangidos, com as superfícies visíveis e acessíveis no dia do registro.',sources:{direct:['Paredes, pisos, tetos, aberturas e elementos visíveis.','As relações dimensionais entre os ambientes abrangidos.'],other:['Áreas encobertas por mobiliário ou objetos.','Instalações embutidas e informações de projetos anteriores, quando fornecidas.']},compare:'tour-virtual-decorado',checklist:['O que será projetado.','Ambientes que precisam de registro.','Localização e condição de ocupação.','Plantas existentes, se houver. Elas ajudam, mas não são obrigatórias para o primeiro contato.']
  },
  {
    slug:'tour-virtual-decorado',name:'Tour virtual decorado',audience:'profissionais',
    headline:'Apresentar o ambiente pela experiência do espaço.',
    summary:'Visualização espacial para apresentar ambientes decorados, com modalidade e recursos definidos na avaliação do projeto.',
    purpose:'Um tour virtual permite explorar a apresentação de um ambiente. A modalidade oferecida pela UNION3D (captura de espaço físico, panoramas ou outra solução) precisa ser confirmada antes da definição comercial.',
    timing:'Quando o ambiente ou material necessário à modalidade escolhida estiver disponível, conforme a finalidade da apresentação.',
    situations:['Apresentar a configuração de um ambiente decorado.','Permitir uma leitura espacial complementar às imagens.','Apoiar a comunicação de espaços a clientes e equipes.'],
    process:[['Apresentação pretendida','Alinhar público, ambiente e finalidade.'],['Modalidade e recursos','Confirmar o tipo de tour, os materiais necessários e a forma de acesso.'],['Preparação da experiência','Organizar a solução e a entrega conforme o escopo confirmado.']],
    deliverables:['Experiência de visualização na modalidade confirmada.','Forma de disponibilização e recursos definidos na contratação.'],
    limitation:'Modalidade, interatividade, plataforma e recursos aguardam validação. Não há demonstração real fornecida; as imagens conceituais desta página não são um tour funcional nem documentação dimensional.',
    benefit:'Apoiar a apresentação do ambiente por sua organização espacial, com recursos adequados ao contexto de uso.',
    faq:[['Posso experimentar um tour aqui?','Ainda não há demonstração autorizada fornecida para integrar ao site. Não simulamos um produto interativo diferente do comercializado.'],['É o mesmo que um levantamento dimensional?','Não. Visualização espacial e documentação dimensional têm finalidades distintas. O levantamento de interiores é a opção para discutir informações de base para projeto.']],
    related:[['levantamento-de-interiores','Quando a necessidade é a base dimensional para projetar o espaço.']],image:'interior',
    goal:'apresentar',moment:'Conforme a apresentação',question:'Como apresentar o ambiente decorado pela experiência do espaço?',access:'O ambiente ou os materiais necessários à modalidade escolhida.',compare:'levantamento-de-interiores',checklist:['Ambiente que deseja apresentar.','Para quem a apresentação é destinada.','Materiais disponíveis.','Não é preciso escolher a modalidade antes do primeiro contato.']
  }
];
export const goals: [Goal,string,string][] = [
 ['conferir','Conferir','Comparar o que existe com uma referência.'],
 ['posicionar','Posicionar','Levar referências do projeto para o campo.'],
 ['documentar','Documentar','Registrar o executado antes de perder o acesso.'],
 ['levantar','Levantar','Conhecer o existente para projetar.'],
 ['apresentar','Apresentar','Mostrar o ambiente pela experiência do espaço.']
];
export const goalLabel = (g: Goal) => goals.find(([key])=>key===g)![1];
export const audienceLabel = (a: Audience) => a === 'empresas' ? 'Para empresas' : 'Para profissionais';
export const faqs: [string,string][] = [
 ['Não sei qual serviço preciso. Posso entrar em contato?','Sim. Descreva o projeto, a etapa atual e a informação de que você precisa. A conversa inicial ajuda a identificar a atividade pertinente.'],
 ['O que ajuda a preparar uma solicitação?','Localização, finalidade, etapa do projeto e dimensões aproximadas são um bom começo. Documentos e referências podem ser compartilhados depois; não é necessário ter tudo definido.'],
 ['É possível realizar o trabalho em obra em andamento?','A viabilidade depende da atividade, do acesso, da visibilidade e das condições de campo. O planejamento deve considerar a rotina da obra e o que precisa ser registrado.'],
 ['Como os dados são entregues?','Os materiais e sua abrangência são definidos conforme a finalidade e o escopo. Não existe um conjunto único de formatos ou representações presumido para todos os serviços.'],
 ['O laser registra instalações ocultas?','Não. O escaneamento registra superfícies visíveis. Informações sobre elementos ocultos dependem de outras fontes, cuja origem deve ser identificada.']
];
export const workflow: [string,string][] = [
 ['Entender a necessidade','Projeto, localização, etapa e finalidade orientam a conversa.'],
 ['Definir o escopo','Atividade, condições de campo e materiais esperados são alinhados.'],
 ['Planejar e executar','A execução considera o acesso e as condições acordadas.'],
 ['Organizar e entregar','Os dados são tratados e disponibilizados conforme o escopo contratado.']
];
