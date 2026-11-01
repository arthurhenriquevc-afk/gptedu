export type Audience = 'empresas' | 'profissionais';
export interface Service {
  slug: string; name: string; audience: Audience; headline: string; summary: string;
  purpose: string; timing: string; situations: string[]; process: [string,string][];
  deliverables: string[]; limitation: string; prepare: string; benefit: string;
  faq: [string,string][]; related: string[]; image: 'structure' | 'interior';
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
    prepare:'Envie as referências disponíveis, a localização e o que precisa ser verificado. Informe a finalidade da conferência e as condições de acesso.',
    benefit:'Dar às equipes uma referência documentada para discutir condições de campo e orientar os próximos passos.',
    faq:[['Preciso ter um levantamento anterior?','Os documentos necessários dependem do objeto da conferência. Compartilhe o que existe para avaliar se as referências são suficientes.'],['Qual técnica é utilizada?','O procedimento deve ser definido conforme a necessidade e as condições de campo. Não se deve pressupor uma técnica única para toda conferência.']],
    related:['locacao-de-estacas','locacao-de-linhas-de-eixo','conferencia-de-excentricidade'],image:'structure'
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
    prepare:'Informe a localização, a área aproximada, a finalidade e as condições conhecidas do entorno. Documentos da área ajudam a avaliar a operação.',
    benefit:'Relacionar a leitura dos elementos locais à configuração mais ampla do espaço.',
    faq:[['O serviço inclui um modelo de terreno?','Esse produto precisa ser confirmado na avaliação do escopo. O nome do serviço não pressupõe um conjunto fixo de entregáveis.'],['Qualquer área pode ser registrada?','A viabilidade depende das condições locais, das restrições operacionais e das exigências aplicáveis.']],
    related:['conferencia-de-topografia','escaneamento-de-fachada'],image:'structure'
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
    prepare:'Compartilhe o projeto de fundações vigente, as referências existentes, a localização e a etapa de execução prevista.',
    benefit:'Apoiar o posicionamento dos elementos com referências alinhadas ao projeto utilizado pela equipe.',
    faq:[['Que projeto devo enviar?','Envie os documentos vigentes que orientam o posicionamento das estacas e identifique a revisão. A suficiência será avaliada antes da atividade.'],['É o mesmo serviço que conferir excentricidade?','Não. A locação orienta o posicionamento antes da execução; a conferência de excentricidade compara posições executadas às referências definidas.']],
    related:['conferencia-de-excentricidade','locacao-de-linhas-de-eixo','conferencia-de-topografia'],image:'structure'
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
    prepare:'Envie plantas com eixos identificados, revisões vigentes, etapa da obra e os locais em que as referências serão utilizadas.',
    benefit:'Facilitar a comunicação geométrica entre documentação e execução em campo.',
    faq:[['Os eixos podem ser locados em uma obra em andamento?','A possibilidade depende da preservação das referências e das condições de acesso. A etapa deve ser avaliada.'],['Quais documentos são necessários?','Plantas com a identificação dos eixos e referências existentes são o ponto de partida. A equipe avaliará os complementos necessários.']],
    related:['locacao-de-estacas','conferencia-de-topografia','as-built-de-laje-protendida'],image:'structure'
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
    prepare:'Informe quais elementos devem ser conferidos, os documentos de referência, o estágio das fundações e as condições de acesso.',
    benefit:'Documentar informações geométricas que podem subsidiar a análise dos responsáveis pelo projeto.',
    faq:[['A conferência determina se a estaca é aceitável?','A aceitação depende de critérios e avaliação dos profissionais responsáveis. Uma comparação geométrica não representa, por si só, uma conclusão estrutural.'],['Quando organizar o serviço?','Enquanto os elementos e as referências necessários estão acessíveis. A janela concreta deve ser confirmada com a equipe de obra.']],
    related:['locacao-de-estacas','conferencia-de-topografia'],image:'structure'
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
    prepare:'Envie o projeto disponível, a finalidade do registro, a etapa de execução e quais elementos precisam ser documentados.',
    benefit:'Conservar uma referência organizada da condição documentada para os usos previstos na contratação.',
    faq:[['É possível localizar cabos depois do recobrimento?','Não se deve atribuir essa capacidade ao escaneamento a laser. Elementos ocultos exigem outras fontes ou procedimentos, cuja disponibilidade precisa ser confirmada.'],['A entrega inclui plantas?','Plantas, vistas e cortes precisam ser definidos conforme a finalidade, os dados disponíveis e a viabilidade do escopo.']],
    related:['locacao-de-linhas-de-eixo','as-built-mep'],image:'structure'
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
    prepare:'Informe sistemas a documentar, locais, etapa dos fechamentos, finalidade e documentos existentes. A programação precisa considerar os acessos.',
    benefit:'Manter uma referência das condições acessíveis antes que recobrimentos modifiquem o que pode ser documentado.',
    faq:[['É possível documentar instalações já ocultas?','A captura direta depende da visibilidade. Informações sobre elementos ocultos dependem de outras fontes e não podem ser apresentadas como capturadas pelo laser.'],['MEP inclui todas as instalações do edifício?','A abrangência é definida na contratação. Informe quais disciplinas e áreas são necessárias para avaliar a cobertura.']],
    related:['as-built-de-laje-protendida','levantamento-de-interiores','escaneamento-de-fachada'],image:'structure'
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
    prepare:'Envie a localização, a finalidade da intervenção, as fachadas abrangidas, documentos existentes e as condições conhecidas de acesso.',
    benefit:'Desenvolver o projeto sobre uma leitura documentada da geometria existente.',
    faq:[['O escaneamento identifica patologias?','A documentação geométrica não representa um diagnóstico de patologias. Esse tipo de avaliação exige escopo e profissionais próprios.'],['É necessário acesso a todos os lados?','A visibilidade influencia a cobertura. O planejamento deve identificar superfícies necessárias, possíveis posições e restrições.']],
    related:['levantamento-de-interiores','as-built-mep','mapeamento-aereo-com-drone'],image:'structure'
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
    prepare:'Conte o que será projetado, quais ambientes precisam de registro, a localização e a condição atual de ocupação. Plantas existentes ajudam, mas não são uma barreira ao primeiro contato.',
    benefit:'Traduzir a configuração existente em informações úteis ao desenvolvimento do projeto.',
    faq:[['É adequado para marcenaria?','Pode apoiar a compreensão dimensional do espaço conforme o escopo. As conferências e critérios necessários à fabricação e montagem continuam a cargo dos profissionais responsáveis.'],['O imóvel pode estar mobiliado?','A ocupação influencia a visibilidade e o acesso. Informe a situação para planejar o levantamento e suas limitações.']],
    related:['tour-virtual-decorado','as-built-mep','escaneamento-de-fachada'],image:'interior'
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
    prepare:'Informe qual ambiente deseja apresentar, para quem, e quais materiais estão disponíveis. Não é necessário escolher a modalidade antes do primeiro contato.',
    benefit:'Apoiar a apresentação do ambiente por sua organização espacial, com recursos adequados ao contexto de uso.',
    faq:[['Posso experimentar um tour aqui?','Ainda não há demonstração autorizada fornecida para integrar ao site. Não simulamos um produto interativo diferente do comercializado.'],['É o mesmo que um levantamento dimensional?','Não. Visualização espacial e documentação dimensional têm finalidades distintas. O levantamento de interiores é a opção para discutir informações de base para projeto.']],
    related:['levantamento-de-interiores'],image:'interior'
  }
];
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
