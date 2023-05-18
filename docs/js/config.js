var config = {
  style: "mapbox://styles/gabrielvazdemelo/clhj5gj4r00ew01qs6d1o6t83",
  accessToken: "pk.eyJ1IjoiZ2FicmllbHZhemRlbWVsbyIsImEiOiJja3NqZ2xnbGcyZWNnMzFxdHdibzd0bGU5In0.PC9uOpr-sNcBIYadfuEgUg",
  showMarkers: false,
  //markerColor: "#00afe2",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  legend: false, // if legend is set to true, inset will be disabled.
  theme: "light",
  use3dTerrain: true, //set true for enabling 3D maps.
  useCustomLayers: false, //set true for enabling custom layers from sources.js
  bookmarks: true,
  chapterReturn: false,
  title: "Relatório Anual Brasil 2022",
  //logo: '',
  //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  //byline: 'By a Digital Storyteller',
  //mobileview: '\
  //<div id="rotate-mobile">\
  //<p>Para melhor visualização, utilize seu dispositivo móvel na posição horizontal.</p>\
  //<img src="images/device.png">', // to add custom messaging in the header for mobile devices
  //footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox ////Storytelling</a> template.',

  chapters: [

    {
      id: "intro-empty",
      alignment: "full",
      hidden: true,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      description: '',
      location: {
        center: [-0, 0],
        zoom: 0.7,
        pitch: 0.00,
        bearing: 0.00,
        speed: 5,
        duration: 500
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [
        {
            layer: 'satellite',
            opacity: 1,
            duration: 2500
        }
      ],
      onChapterExit: [
          {
              layer: 'satellite',
              opacity: 0,
              duration: 1500
          }
      ]
    },

    {
      id: 'abertura',
      alignment: 'full',
      hidden: false,
      //title: 'Abertura',
      bookmark: 'Abertura',
      description: '\
      <div class="light-branco">\
        <div class="container-history p-bottom">\
          <div class="row no-gutters">\
            <div class="col-lg-7">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="azul-habitat">Palavras de Abertura</h1>\
                </div>\
              </div>\
              <div class="row">\
                <div class="col-md-6">\
                    <p><span class="azul">Território</span>. Esta palavra possui diferentes definições e é palco de inúmeros debates. Porém, seu conceito é sempre compreendido pelas relações sociais que perpassam sua existência e dinâmica. Assim, ele deve ser entendido a partir de seus usos, sendo o lugar da residência, das trocas materiais, econômicas e culturais, dos conflitos e do exercício do poder e da política. O lugar onde a vida e a história do ser humano se realizam a partir da manifestação de sua existência.</p>\
                    <p>Partimos desta reflexão, baseada no pensamento do geógrafo brasileiro Milton Santos, para apresentar o princípio que guia a leitura do Relatório Anual 2022 do ONU-Habitat: o território.</p>\
                    <p>Em 2022, vivemos a retomada do mundo pós-pandemia de COVID-19, revelando a necessidade das cidades de se adaptarem a novas realidades. Também testemunhamos a população mundial chegar ao marco de oito bilhões de pessoas. As áreas urbanas já abrigam 55% dessa população, e é esperado que esse número cresça para 68% até 2050. Esse número sobe para 81% ao considerar a região da América Latina e do Caribe¹, e chega a 85% quando o foco é o Brasil².</p>\
                    <p>Os desafios urbanos são grandes quando pensados de forma global, mas seu enfrentamento só pode ser encarado quando pensamos no nível local. <span class="azul">É no nível do território que a transformação para um desenvolvimento urbano sustentável pode ser concretizada.</span></p>\
                </div>\
                <div class="col-md-6">\
                    <p>Nesta linha, o Secretário-Geral da ONU, António Guterres, defende que cidades e comunidades liderem inovações para reduzir as desigualdades, promovam ação climática e garantam uma recuperação verde e inclusiva da pandemia.</p>\
                    <p>Para o ONU-Habitat, as cidades e as comunidades são áreas de oportunidade para superar as desigualdades. Por isso, <span class="azul">o Relatório Anual 2022 traz protagonismo a esses espaços, apresentando iniciativas em cooperação com diferentes níveis de governo para promover o desenvolvimento urbano sustentável.</span></p>\
                    <p>Essas iniciativas envolvem a coleta e análise de dados para a promoção de políticas públicas assertivas que consideram a especificidade de cada região; a promoção de espaços públicos mais inclusivos, seguros, resilientes, verdes e sustentáveis; a capacitação de pessoas para pensar, comunicar e resolver problemas urbanos; a construção da resiliência urbana; dentre outros temas englobados pela Nova Agenda Urbana e pela Agenda 2030 para o Desenvolvimento Sustentável.</p>\
                    <p>Através destas diferentes frentes de atuação, trabalhamos junto aos territórios para construir um futuro urbano melhor sem deixar ninguém e nenhum lugar para trás.</p>\
                    <p class="rosa-b">Boa leitura!</p>\
                </div>\
              </div>\
              <div class="row">\
                <div class="col-md-12">\
                  <p class="footnote">¹ Fonte: World Cities Report 2022: Envisaging the Future of Cities. ONU-Habitat, 2022. Disponível em: <a href="https://unhabitat.org/wcr/" target="_blank">https://unhabitat.org/wcr/</a>.<br>² Fonte: IBGE. Pesquisa Nacional por Amostra de Domicílios (PNAD) 2015. Disponível em: <a href="https://bit.ly/2ZpQARx" target="_blank">https://bit.ly/2ZpQARx</a>.</p>\
                </div>\
              </div>\
            </div>\
            <div class="col-lg-5 align-self-center">\
                <img src="images/abertura.jpg" alt="" class="img-fluid" />\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
          //center: [-51.06166, -15.66707],
          zoom: 0.7,
          pitch: 0,
          bearing: 0,
          speed: 0.25,
          curve: 1
          // flyTo additional controls-
          // These options control the flight curve, making it move
          // slowly and zoom out almost completely before starting
          // to pan.
          //speed: 2, // make the flying slow
          //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'onu-habitat',
      alignment: 'left',
      hidden: false,
      bookmark: 'ONU-Habitat',
      image: false,
      description: '\
      <div class="light-branco rounded-lg shadow-lg">\
        <div class="container p-right-left p-bottom">\
          <h1 class="azul-habitat">Onde estamos e quem somos</h1>\
          <p>O Programa das Nações Unidas para os Assentamentos Humanos (ONU-Habitat) estabeleceu-se em 1978 como resultado da Conferência das Nações Unidas sobre Assentamentos Humanos (Habitat I). Com sede em Nairóbi, capital do Quênia, o ONU-Habitat é a agência da Organização das Nações Unidas (ONU) especializada em melhorar a qualidade de vida em um mundo majoritariamente urbanizado; construir cidades e comunidades seguras, resilientes e sustentáveis; e promover urbanização como uma força transformadora positiva para pessoas e comunidades, reduzindo a desigualdade, discriminação e pobreza e melhorando a qualidade e o acesso aos serviços básicos.</p>\
        </div>\
      </div>\
      ',
      location: {     
        center: [36.78120, -1.21891],
        zoom: 10,
        pitch: 55.50,
        bearing: -8.80,
        speed: 0.3,
        curve: 0.5
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
           {
               layer: 'pin-nairobi',
               opacity: 1,
               duration: 5000
           }
      ],
      onChapterExit: [
           {
               layer: 'pin-nairobi',
               opacity: 0
           }
      ]
  },

  {
      id: 'onu-habitat-brasil',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      bookmark: 'ONU-Habitat Brasil',
      image: false,
      description: '\
      <div class="light-branco rounded-lg shadow-lg">\
        <div class="container p-right-left p-bottom">\
          <h1 class="azul-habitat">ONU-Habitat Brasil</h1>\
          <p>O Escritório Regional do ONU-Habitat para a América Latina e o Caribe está presente na cidade do Rio de Janeiro há mais de 20 anos. A cidade também é sede do escritório responsável pelo Brasil e Cone Sul, que conta com uma equipe dedicada aos projetos e iniciativas implementadas com o Brasil, Argentina, Paraguai, Uruguai e Chile.</p>\
        </div>\
      </div>\
      ',
      location: {     
          center: [-43.19005, -22.92996],
          zoom: 10.62,
          pitch: 0.00,
          bearing: 0.00,
          speed: 0.3,
          curve: 0.5
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
           {
               layer: 'pin-rio',
               opacity: 1,
               duration: 5000
           }
      ],
      onChapterExit: [
           {
               layer: 'pin-rio',
               opacity: 0,
               duration: 2500
           }
      ]
  },

  {
      id: "retrospectiva",
      alignment: "full",
      hidden: false,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      //img: 1600x900 / 600x400 
      description: '\
      <div class="light">\
        <div class="container p-bottom">\
            <h1 class="align-self-center rosa text-center">Retrospectiva 2022</h1>\
              <div class="col-12 text-center pb-3">\
                  <a class="btn btn-primary mr-1" href="#myCarousel" role="button" data-slide="prev">\
                      <i class="fa fa-arrow-left cursor-hover"></i>\
                  </a>\
                  <a class="btn btn-primary" href="#myCarousel" role="button" data-slide="next">\
                      <i class="fa fa-arrow-right cursor-hover"></i>\
                  </a>\
              </div>\
              <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="996500">\
                  <div class="carousel-inner">\
                    <div class="carousel-item active">\
                        <img class="d-block w-100" src="./images/tempo/01_Conexões Urbanas_Tríplice Fronteira.jpg" alt="ONU-Habitat inicia projeto Conexões Urbanas em regiões de fronteira">\
                        <div class="container_foto">\
                          <div class="ver_mas d-block">\
                            <p>Em uma colaboração inédita entre os escritórios do ONU-Habitat no Brasil e no Líbano, o projeto chega a seis municípios de três países na aplicação de metodologias do Programa Global de Espaços Públicos. Realizada com atividades presenciais e virtuais, a programação do lançamento gerou um grande engajamento local. Participaram dos eventos mais de 80 pessoas, envolvendo autoridades, servidores públicos e representantes de universidades e de organizações da sociedade civil. Durante dois anos, o projeto Conexões Urbanas vai realizar capacitações com atores locais, aplicar metodologias participativas e revisar políticas públicas em cidades do Brasil, Argentina, Paraguai e Líbano.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Janeiro</p>\
                            <h2>ONU-Habitat inicia projeto Conexões Urbanas em regiões de fronteira</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/02_Visita_Fortaleza.jpg" alt="Second slide" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com o documento, o ONU-Habitat e o Instituto de Planejamento de Fortaleza (Iplanfor) deram início ao plano de trabalho que prevê ações de compartilhamento de informações, dados e metodologias, além de trocas de experiências para aprimorar o desenho de políticas públicas e de ferramentas de gestão de informação na região de Fortaleza. A parceria, com duração de 24 meses, tem como objetivo principal fomentar a implementação da Nova Agenda Urbana e da Agenda 2030, com destaque para o Objetivo de Desenvolvimento Sustentável 11 – tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis – e, assim, contribuir para a melhora na qualidade de vida da população local.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Janeiro</p>\
                            <h2>ONU-Habitat assina Memorando de Entendimento com Prefeitura de Fortaleza, marcando o início de uma parceria para promover o desenvolvimento urbano sustentável</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/03_G52_Lançamento.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Selecionadas por seu papel de influência em suas regiões, as 52 cidades-polo que formam a área de atuação da Superintendência de Desenvolvimento do Nordeste (Sudene) – grupo chamado de G52 – passaram a integrar o projeto que visa fortalecer suas capacidades de gestão e promover o desenvolvimento urbano sustentável. O objetivo é apoiar a implementação da estratégia territorial do Plano Regional de Desenvolvimento do Nordeste (PRDNE) por meio da criação de um espaço de intercâmbio e cooperação com prefeituras e especialistas sobre governança compartilhada, cooperação intermunicipal e gestão em rede. O evento online de lançamento do projeto contou com a participação de 108 representantes dos municípios do G52, que se engajaram em saber mais sobre a iniciativa e participar de oficinas temáticas.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Fevereiro</p>\
                            <h2>Lançamento do projeto G52: Cidades-Polo Ampliando os Marcos do Desenvolvimento Regional</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/04_2022_DEP_Petrolina_ Renatto Mendonca.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Jovens de 14 a 29 anos participaram das oficinas da metodologia de Desenhos de Espaços Públicos, realizadas de fevereiro a junho em territórios espalhados por todo o estado. Em cada uma das oficinas, os jovens elaboraram, de forma participativa, propostas concretas para tornar os espaços públicos mais seguros, inclusivos e sustentáveis segundo seu próprio olhar. O método inclui uma caminhada exploratória, a construção de diagnósticos e a criação e apresentação de maquetes que resumam suas sugestões. Em novembro e dezembro, a equipe retornou aos territórios para compartilhar os resultados e as modelagens 3D dos espaços públicos, abarcando as ideias inspiradoras sugeridas pelos jovens.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Fevereiro</p>\
                            <h2>Início do ciclo de Oficinas de Desenho de Espaços Públicos em Pernambuco em 2022</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/05_RJ_Territórios Sociais.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Inicialmente implementado nos dez grandes complexos de favela do Rio de Janeiro (Rocinha, Alemão, Maré, Lins, Jacarezinho, Penha, Chapadão, Pedreira, Cidade de Deus e Vila Kennedy), o programa Territórios Sociais, parceria do ONU-Habitat com a Prefeitura da Cidade do Rio de Janeiro, identifica e atende moradores de áreas vulnerabilizadas com menores indicadores sociais, inserindo essas famílias em serviços públicos básicos como matrículas em escolas, atendimentos de saúde, encaminhamento a benefícios sociais, diagnóstico habitacional e acesso ao mercado de trabalho e à cultura. Com a expansão, o programa passa a incluir áreas com menores indicadores sociais em toda a cidade. Até 2024, o projeto deve chegar à marca de 1,5 milhões de pessoas atendidas em 652.186 domicílios, localizados em 631 favelas, 82 conjuntos habitacionais e 159 loteamentos irregulares, beneficiando 33% da população da capital.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Março</p>\
                            <h2>Assinada a expansão do programa Territórios Sociais para toda a cidade do Rio de Janeiro</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/06_MoU_Rio de Janeiro.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com duração de dois anos, um novo Memorando de Entendimento foi assinado entre as duas partes com o objetivo de buscar soluções para o desenvolvimento urbano sustentável em municípios fluminenses. A ideia é incentivar melhores condições de moradia, análise de dados e um planejamento urbano voltado aos princípios da Nova Agenda Urbana, aumentando a resiliência das cidades. A cerimônia contou com a participação do representante regional do ONU-Habitat para América Latina e Caribe, Elkin Velásquez, e o governador do Rio de Janeiro, Cláudio Castro, em evento realizado no Cristo Redentor.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Março</p>\
                            <h2>ONU-Habitat e Governo do Rio de Janeiro assinam acordo para promover desenvolvimento urbano no estado</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/07_Alagoas_Seminário.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Concluindo a elaboração de soluções e estratégias para o setor de habitação de Alagoas, o evento contou com a presença de mais de 130 pessoas, reunindo representantes da sociedade civil organizada (acadêmicos, lideranças comunitárias, ONGs e movimentos sociais), do poder público (estado e município) e do setor privado. Na oportunidade, foram discutidos os objetivos, os eixos estratégicos e as recomendações para a gestão e o financiamento da proposta de política habitacional consolidado pelo ONU-Habitat.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Março</p>\
                            <h2>Realização do seminário "Diretrizes para um Programa Habitacional para Alagoas", em parceria com o Governo de Alagoas</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/08_Territórios da Cidadania.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com o objetivo de dar suporte à construção de políticas públicas baseadas em dados para promover o desenvolvimento urbano e a garantia de direitos sociais, o projeto foi lançado pela Secretaria de Planejamento do Território e Participação Popular em um evento que contou com representantes do executivo municipal, líderes comunitários e artistas. O projeto consiste na aplicação de duas metodologias de coleta de dados, o Mapa Rápido Participativo (MRP) e o Perfil Socioeconômico, em 141 microterritórios vulnerabilizados da cidade, a fim de orientar políticas e ações públicas assertivas para as regiões estudadas. Na mesma semana, foi iniciado o trabalho de campo do MRP, avaliando temas como infraestrutura para mobilidade, acesso aos meios de transporte, padrão das moradias, abastecimento de água, esgotamento sanitário, coleta de lixo e limpeza urbana.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Março</p>\
                            <h2>Lançamento e início das atividades de campo do programa Territórios da Cidadania, em parceria com a Prefeitura de Juiz de Fora</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/09_BH_Izidora_Assembleia RL e HG.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>A iniciativa apresentou o diagnóstico técnico local para a comunidade e agendou plantões de mapas no território. Estes plantões tiveram como objetivo levar os mapas a espaços das comunidades com grande circulação de pessoas para que seus moradores pudessem contribuir com comentários, críticas, correções ou sugestões de ajustes. Ao longo da implementação do projeto, foram realizadas 17 sessões de mapeamento no território, nove reuniões com líderes e grupos de trabalho e sete assembleias. As ações propostas devem chegar a cerca de 1,8 mil famílias das ocupações Rosa Leão e Helena Greco, localizadas em Izidora, Belo Horizonte.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Março</p>\
                            <h2>Realizada a primeira assembleia nas ocupações Rosa Leão e Helena Greco, em Izidora</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/10_Regularização fundiária_AL_Foto Marcio Ferreira.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Realizada oficina em parceria com o Governo de Alagoas e com o Instituto Pólis para capacitar municípios alagoanos sobre a Regularização Fundiária Urbana (Reurb). Instituída em 2017 pela Lei Federal nº 13.465/17, a Reurb traça medidas de caráter jurídico, urbanístico, ambiental e social voltadas para a regularização fundiária de assentamentos precários. O intuito é de promover mais cidadania por meio da garantia do acesso à moradia adequada. Na oficina, os participantes discutiram o papel dos municípios e do governo na implementação da lei, os desafios enfrentados nesse contexto e as iniciativas já realizadas, previstas ou em curso que se alinham aos aspectos estabelecidos por ela.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Abril</p>\
                            <h2>ONU-Habitat e parceiros capacitam municípios sobre regularização fundiária urbana</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/11_Teresina_Missão Maio.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com a intenção de apoiar Teresina com dados concretos sobre a cidade, o ONU-Habitat apresentou os resultados do projeto assinado em 2019 com a Prefeitura e o Governo Federal para fortalecer a resiliência urbana da capital piauiense. Construído com base no “Perfil da Cidade de Teresina” e no “Diagnóstico da Resiliência Urbana de Teresina”, o documento fornece aos gestores uma base para a criação de um plano para melhorar a capacidade da gestão em lidar com riscos, choques e problemas crônicos para os próximos anos. Manutenção dos recursos hídricos e equilíbrio do ecossistema foram algumas das prioridades apontadas pelo documento. Na ocasião, estiveram presentes representantes da Prefeitura de Teresina e do Governo do Estado do Piauí.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Abril</p>\
                            <h2>ONU-Habitat apresenta “Ações Recomendadas para Resiliência e Sustentabilidade” para gestores municipais de Teresina</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/12_I Encontro InRede_Fortaleza.jpg" alt="Third slide" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Representantes de cidades de todo o Brasil se juntaram no I Encontro de Gestores de Institutos de Planejamento, realizado pela Prefeitura de Fortaleza, para estimular a cultura do planejamento urbano e territorial de médio e longo prazo nas cidades. O ONU-Habitat apoia a iniciativa e esteve presente no encontro. Também foram pauta do encontro a criação de uma Rede Nacional de Institutos de Planejamento, focada em fortalecer o aprimoramento da gestão das cidades; a cooperação entre os municípios e o engajamento de gestores em agendas importantes para o alcance dos ODS, colocando no centro temas como inclusão e sustentabilidade.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Maio</p>\
                            <h2>ONU-Habitat apoia criação da Rede Brasileira de Institutos de Planejamento</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/13_Conexões Urbanas_Análise técnica em Dionísio Cerqueira.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Municípios da região transfronteiriça participaram de atividades de integração realizadas no âmbito do projeto Conexões Urbanas, dialogando sobre a rede de espaços públicos das cidades. Participaram das oficinas 71 pessoas, entre servidores públicos e lideranças de organizações da sociedade civil. Também foram conduzidas entrevistas com 32 representantes da população local. Além das atividades com a população, a metodologia realizou uma análise técnica. Nas cidades de pequeno porte abarcadas pelo projeto, foram mapeados todos os espaços públicos existentes. Já nas cidades de médio porte, a avaliação foi realizada em uma amostra destes espaços. O objetivo da análise é fornecer dados para ajudar os governos locais a desenvolver políticas urbanas para espaços públicos seguros, saudáveis, acessíveis e inclusivos.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Maio</p>\
                            <h2>ONU-Habitat realiza oficina de Colaborações Urbanas e entrevistas da Avaliação de Espaços Públicos em municípios na fronteira entre Brasil, Paraguai e Argentina</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/14_Alagoas_Visão das Grotas.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Mais de 18,5 mil inscritos de 160 países participaram da 11ª Sessão do Fórum Urbano Mundial (WUF, na sigla em inglês), maior conferência global sobre o futuro das cidades. Com o tema “Transformando nossas cidades para um futuro urbano melhor”, o fórum foi realizado em Katowice, na Polônia, com mais de 330 eventos, dos quais o Brasil esteve presente em cerca de 15. Alguns incluíram a participação de iniciativas em parceria com o ONU-Habitat Brasil, e outros contaram com representantes de instituições brasileiras que compartilharam exemplos de sucesso. O escritório Brasil participou remotamente apresentando o PRO-Izidora e o Plano de Urbanização Sustentável da Izidora pela Secretaria Municipal de Política Urbana (SMPU) da Prefeitura Municipal de Belo Horizonte; a estratégia de dados implementada em parceria com o Governo de Alagoas; e os desafios no desenvolvimento de espaços públicos verdes em áreas urbanas através da Cooperação Sul-Sul Trilateral com as cidades de São Paulo e Medellín. Também durante o WUF, o documentário “Visão das Grotas” foi exibido e premiado na mostra Better Cities Film Festival, vencendo a categoria Raising Voices. Produzido por jovens das periferias e grotas de Maceió, o curta-metragem aborda o cotidiano de comunidades precárias da capital durante a pandemia de COVID-19.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Junho</p>\
                            <h2>Brasil debate futuro das cidades no 11 Fórum Urbano Mundial</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/15_CSST.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Realizada no escritório do ONU-Habitat no Rio de Janeiro, a 1ª Reunião do Comitê Gestor do Simetria Urbana marcou o início da implementação da iniciativa. A reunião contou com a participação das equipes técnicas do ONU-Habitat e da Agência Brasileira de Cooperação do Ministério das Relações Exteriores, representando o Governo Brasileiro. Durante a reunião foi aprovado o Plano Operativo Anual (POA) relativo ao período de junho de 2022 a maio de 2023. Foram também discutidos e acordados os fluxos de gestão, a estratégia de comunicação e a identidade visual do programa, as responsabilidades de cada integrante do projeto e o plano orçamentário para o primeiro ano de implementação.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Junho</p>\
                            <h2>Início da implementação do programa de parceria Simetria Urbana para promover o desenvolvimento urbano sustentável por meio da Cooperação Sul-Sul Trilateral</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/16_G52_Reunião Online.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com 90 horas de formação, 466 inscritos de 41 municípios e 58 especialistas convidados, o ciclo de capacitações foi composto por cinco módulos temáticos, desenhados para fortalecer habilidades e suprir lacunas dos municípios da região. Essas necessidades foram diagnosticadas através de um questionário aplicado aos gestores e de reuniões com pontos focais locais. Os temas abordados incluíram agendas globais de desenvolvimento, cooperação e trabalho em rede, gerenciamento de projetos, economia urbana, planejamento urbano e regional, inovação e gestão metropolitana. Os módulos de capacitação são parte crucial do projeto G52, que visa a superação de desafios por meio da articulação em rede e aumento das capacidades locais nos temas de planejamento urbano regional, elaboração e financiamento de projetos, governo digital e cidades inteligentes centradas nas pessoas.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Julho</p>\
                            <h2>Realizados módulos de capacitação para gestores e servidores municipais do G52</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/17_Praia em São Paulo.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Representantes da Prefeitura de São Paulo, da Câmara Municipal da Praia e dos escritórios do ONU-Habitat Brasil e Cabo Verde se reuniram na capital paulista para colaborar no âmbito do “Desafio Waste Wise Cities”. A iniciativa conecta Praia, comprometida em estabelecer uma gestão sustentável de resíduos, a São Paulo, que compartilha suas principais práticas. Com a visita da delegação de Praia, São Paulo apresentou soluções de gerenciamento de resíduos sólidos desenvolvidas para problemas similares aos enfrentados pela capital caboverdiana. Após o intercâmbio, foram identificadas áreas prioritárias de intervenção, que incluem o gerenciamento de resíduos hospitalares; a melhoria da logística operacional na Cidade da Praia; o monitoramento do gerenciamento para orientar a correta disposição dos resíduos, especialmente com grandes geradores (como restaurantes, lojas, empresas e indústrias locais); e o desenvolvimento de um programa guarda-chuva que ligue todas as ações de gerenciamento de resíduos na cidade.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Julho</p>\
                            <h2>Intercâmbio entre São Paulo e Praia (Cabo Verde) no âmbito do “Desafio Waste Wise Cities” do ONU-Habitat</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/18_JF_Piloto de MRP em área rural.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Desenvolvida para ser realizada em espaços urbanos, o MRP é uma metodologia que busca observar e analisar a infraestrutura local. Em parceria com a Secretaria de Agricultura, Pecuária e Abastecimento da Prefeitura de Juiz de Fora, a equipe do projeto Territórios da Cidadania aplicou a pesquisa pela primeira vez em um cenário rural, nos distritos de Caetés de Minas e Sarandira. A metodologia foi mantida, porém de modo adaptado: foi necessário um outro olhar, de forma a entender as peculiaridades do ambiente rural, inaugurando uma nova forma de aplicação da ferramenta.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Agosto</p>\
                            <h2>Realizado o Piloto do Mapa Rápido Participativo (MRP) em área rural</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/19_Alagoas_Dia Internacional da Juventude.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com o evento “Fala!”, o Conselho Estadual da Juventude de Alagoas promoveu uma programação para debater os temas de mobilização e cidade, abordando instrumentos e condições para a juventude pensar, viver, comunicar e, principalmente, transformar seus territórios. No encontro, a equipe do ONU-Habitat falou sobre o “Digaê! Programa Juventudes, Comunicação e Cidade”, desenvolvido em parceria com o Governo de Alagoas. A iniciativa busca mobilizar jovens por meio de diversas linguagens de comunicação para a construção de cidades mais inclusivas e sustentáveis. Focada nas juventudes das grotas, a iniciativa tem o objetivo de divulgar um olhar da comunidade para a comunidade, contando suas próprias histórias e mobilizando seus territórios – fatores essenciais para um futuro urbano melhor.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Agosto</p>\
                            <h2>Celebrado o Dia Internacional da Juventude com jovens de Alagoas</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/20_JF_Workshop Agenda 2030.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Organizado pela Prefeitura de Juiz de Fora, através da Secretaria de Planejamento do Território e Participação Popular (Seppop), em parceria com o ONU-Habitat, o evento focou no compartilhamento de experiências municipais na implementação da Agenda 2030. Foram realizadas palestras de representantes das prefeituras de Niterói, de Belo Horizonte e de São Paulo, que compartilharam suas próprias iniciativas de aplicação dos ODS nas políticas públicas municipais. Cada um dos palestrantes apresentou diagnósticos e deu exemplos sobre a modernização da gestão e os desafios encontrados a partir dos resultados levantados. O evento também teve a participação do representante internacional do ONU-Habitat para Brasil e Cone Sul, Alain Grimard, e da oficial nacional do programa, Rayne Ferretti Moraes.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Setembro</p>\
                            <h2>Territórios da Cidadania promove workshop sobre a Agenda 2030 e os ODS em Juiz de Fora</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/21_SP_Parque da Luz.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Com duração de três anos, a parceria tem o objetivo de gerar espaços públicos verdes mais inclusivos e sustentáveis na cidade de São Paulo. Para isso, serão realizadas diferentes análises dos espaços públicos já existentes, produzindo dados e evidências para guiar novas políticas públicas municipais que permitam aumentar a qualidade e diminuir a desigualdade de acesso a esses espaços. Apesar de 48% do território da cidade ter cobertura verde, tais espaços não estão igualmente distribuídos. A população que vive em áreas precárias ou assentamentos informais na cidade chega a 3,6 milhões de habitantes, que são afetados pelo desequilíbrio no acesso a serviços públicos e infraestrutura – incluindo espaços verdes, o que contribui ainda mais para o aumento das desigualdades.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Setembro</p>\
                            <h2>ONU-Habitat e Prefeitura de São Paulo assinam projeto para repensar espaços públicos verdes e inclusivos</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/22_Rio Cidade Antirracista.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>A primeira edição do congresso teve como objetivo convidar a população a pensar a cidade como um ambiente democrático, aberto, humanizado e alinhado ao ODS 10, que promove o combate à desigualdade social. O evento debateu um projeto de cidade pautada no combate ao racismo, promovendo o bem viver para todos e todas, em diversos cantos do Rio. Foi um convite para ir à raiz dos problemas sociais, políticos, e econômicos que bloqueiam o progresso de uma cidade igualitária e pacífica lutando por uma cidade sustentável, encontrando, assim, o ideal do ODS 11. O ONU-Habitat participou da mesa “Políticas Públicas e Interseccionalidades: bases para cidades antirracistas”, que abordou diferentes maneiras de incorporar às cidades uma abordagem que contribua para a redução das desigualdades.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Setembro</p>\
                            <h2>Apoio e participação no congresso "Rio, Uma Cidade Antirracista"</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/23_Circuito Urbano.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Para promover o debate sobre os temas do Outubro Urbano, o escritório do ONU-Habitat no Brasil criou, em 2018, o Circuito Urbano: uma iniciativa para dar visibilidade e apoio institucional a eventos organizados por diversos atores em todo o país. O mês se inicia com o Dia Mundial do Habitat (na primeira segunda-feira do mês) e se encerra com o Dia Mundial das Cidades (31 de outubro). A 5ª edição do Circuito Urbano foi a primeira a realizar eventos virtuais, presenciais e híbridos que ocorreram em 21 estados e no DF. Sob o tema “Localizando os ODS: não deixar ninguém e nenhum lugar para trás”, os eventos foram divididos em cinco linhas temáticas alinhadas à localização dos Objetivos de Desenvolvimento Sustentável: Conhecer; Planejar; Participar e inovar; Financiar e implementar; e Monitorar e avaliar. O ONU-Habitat Brasil aproveitou o momento para apresentar diversas das suas iniciativas, como o Plano de Urbanização Sustentável da Izidora; a metodologia e os resultados do Programa Territórios Sociais como política intersetorial e integrada do governo local; e o processo da avaliação da rede de espaços públicos das cidades pelo projeto Conexões Urbanas.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Outubro</p>\
                            <h2>Realizado Circuito Urbano 2022 com recorde de 254 propostas recebidas</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/24_Programa Digaê_Minne Santos.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Composto por 37 jovens das grotas de Maceió, o primeiro ciclo do programa “Digaê! Juventudes, Comunicação e Cidade” iniciou seus trabalhos discutindo temas relacionados ao direito à cidade e à comunicação. Por meio de oficinas, os participantes desenvolveram colaborativamente conteúdos multimídia sobre suas memórias, histórias e narrativas relacionadas às suas comunidades. No percurso, foram realizadas mentorias para elaborar projetos comunitários no campo da comunicação, conectados com a Agenda 2030 e a Nova Agenda Urbana. A ideia é que, por meio do programa, adolescentes e jovens das grotas se apropriem de técnicas e ferramentas de comunicação em prol do fortalecimento da coesão social e do desenvolvimento local de forma autônoma e sustentável.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Outubro</p>\
                            <h2>Início das formações do programa Digaê!</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/25_Ascom SUDENE.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Realizado em Recife, o evento celebrou a conclusão do projeto G52, premiando as três propostas mais inovadoras do Desafio de Inovação. A ação promoveu uma aplicação concreta e local dos conhecimentos obtidos durante os módulos de capacitação do projeto. Em 1º lugar, ficou Natal (RN), com a proposta "Cidade para Pessoas: Arborização nas ações pelo clima". Em 2º lugar, ficou Fortaleza (CE), com a proposta "Reciclo"; e em 3º lugar, ficou São Luís (MA), com o "Projeto Casa Encantada". Além da premiação, 17 municípios reiteraram o compromisso público de aderir à rede do G52 para enfrentar as desigualdades e superar as divisões sociais e espaciais na Região Nordeste do Brasil através da assinatura da carta de compromisso do G52. Na ocasião, estiveram presentes servidores da Superintendência de Desenvolvimento do Nordeste (Sudene), equipes do Programa das Nações Unidas para o Desenvolvimento (PNUD) e do ONU-Habitat, prefeitos, vice-prefeitos, secretários e servidores dos municípios participantes do projeto.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Novembro</p>\
                            <h2>Premiação do Desafio de Inovação do G52 e assinatura da carta compromisso</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/26_Conexões Urbanas_Missão Alain.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>A publicação da Avaliação de Espaços Públicos foi feita em um diálogo entre o ONU-Habitat e as autoridades locais e parceiros do projeto. Esta é a primeira vez que a metodologia é aplicada pelo escritório do ONU-Habitat Brasil. Com a divulgação, o relatório já está sendo apropriado pelos municípios como referência para o planejamento e gestão de espaços públicos. A visita do Representante internacional do ONU-Habitat para Brasil e Cone Sul Alain Grimard foi um marco para a entrega do relatório às autoridades locais. A missão passou pelas duas regiões transfronteiriças do projeto. A primeira parada foi nas cidades de Barracão, Bom Jesus do Sul e Dionísio Cerqueira (Brasil) e Bernardo de Irigoyen (Argentina), seguindo para Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai).</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Novembro</p>\
                            <h2>Lançamento do relatório da Avaliação de Espaços Públicos e missão do ONU-Habitat às regiões transfronteiriças do projeto Conexões Urbanas</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/27_Virada_Sustentavel.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Durante a pandemia da COVID-19, o acesso à moradia adequada tornou-se central no controle da pandemia. No entanto, segundo o IBGE, aproximadamente 25 milhões de domicílios urbanos brasileiros apresentam algum tipo de inadequação. Para chamar atenção para este debate, o ONU-Habitat participou da Virada Sustentável 2022 com uma projeção no bairro da Consolação, em São Paulo. A projeção apresentava o dado de que três em cada quatro cidadãs e cidadãos brasileiros acreditam que o acesso à moradia adequada nas	 cidades piorou durante a pandemia. O número é resultado da Consulta Pública Cidades Sustentáveis 2021, uma parceria entre o ONU-Habitat e o Colab. Promovido anualmente, o festival ocupa espaços da cidade com informações importantes para o debate sobre desenvolvimento sustentável.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Novembro</p>\
                            <h2>Participação do ONU-Habitat na Virada Sustentável 2022, em São Paulo</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/28_Seminário Cooperaçao Pernambuco.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>O representante internacional do ONU-Habitat para Brasil e Cone Sul, Alain Grimard, esteve no Recife para participar do evento, liderado pela extinta Secretaria de Políticas de Prevenção à Violência e às Drogas de Pernambuco (SPVD). Na ocasião, ele realizou a entrega dos relatórios das metodologias participativas de Desenho de Espaços Públicos e Cidade Mulher às autoridades locais. Além do ONU-Habitat, participaram representantes dos demais parceiros do projeto: o Escritório das Nações Unidas sobre Drogas e Crimes (UNODC), o Programa das Nações Unidas para o Desenvolvimento (PNUD) e o Instituto Igarapé.</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Dezembro</p>\
                            <h2>Realizado o seminário “Estratégia de prevenção qualificada das violências. Conquistas e desafios da Cooperação Pernambuco"</h2>\
                          </article>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block w-100" src="./images/tempo/29_Argentina_Ciudad deNeuquen.jpg" alt="">\
                        <div class="container_foto">\
                          <div class="ver_mas">\
                            <p>Para apoiar o governo da província nesta meta, foi firmada uma nova parceria entre a Província de Neuquén, o Conselho Federal de Investimentos (CFI) e a ONU Argentina. A partir deste marco, foi anunciado um novo projeto de assistência técnica e metodológica para apoiar a província na promoção de políticas de planejamento urbano sustentável de suas cidades, seguindo os ideais da Agenda 2030. Financiado pelo CFI, o projeto é liderado pelo ONU-Habitat e é implementado junto ao Escritório das Nações Unidas de Serviços para Projetos (UNOPS) e da ONU Mulheres, com o apoio do Escritório da Coordenadora Residente (OCR) da Argentina. Juntos, os parceiros vão implementar, em 2023, o projeto na província de Neuquén com o apoio da Secretaria de Planejamento e Ação para o Desenvolvimento (COPADE).</p>\
                          </div>\
                          <article class="text-left">\
                            <p class="rosa">Dezembro</p>\
                            <h2>Assinada carta de intenções para apoiar o desenvolvimento urbano sustentável em Neuquén, na Argentina</h2>\
                          </article>\
                        </div>\
                    </div>\
                  </div>\
              </div>\
              <!-- Carousel Navigation -->\
              <div id="carousel-thumbs" class="carousel slide" data-ride="carousel" data-interval="7500">\
                <div class="carousel-inner">\
                  <div class="carousel-item active">\
                    <div class="row mx-0">\
                      <div id="carousel-selector-0" class="thumb col-4 col-sm-2 px-1 py-2 selected" data-target="#myCarousel" data-slide-to="0">\
                        <img src="./images/tempo/01_Conexões Urbanas_Tríplice Fronteira.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-1" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="1">\
                        <img src="./images/tempo/02_Visita_Fortaleza.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-2" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="2">\
                        <img src="./images/tempo/03_G52_Lançamento.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-3" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="3">\
                        <img src="./images/tempo/04_2022_DEP_Petrolina_ Renatto Mendonca.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-4" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="4">\
                        <img src="./images/tempo/05_RJ_Territórios Sociais.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-5" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="5">\
                        <img src="./images/tempo/06_MoU_Rio de Janeiro.jpg" class="img-fluid" alt="...">\
                      </div>\
                    </div>\
                  </div>\
                  <div class="carousel-item">\
                    <div class="row mx-0">\
                      <div id="carousel-selector-6" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="6">\
                        <img src="./images/tempo/07_Alagoas_Seminário.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-7" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="7">\
                        <img src="./images/tempo/08_Territórios da Cidadania.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-8" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="8">\
                        <img src="./images/tempo/09_BH_Izidora_Assembleia RL e HG.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-9" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="9">\
                        <img src="./images/tempo/10_Regularização fundiária_AL_Foto Marcio Ferreira.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-10" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="10">\
                        <img src="./images/tempo/11_Teresina_Missão Maio.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-11" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="11">\
                        <img src="./images/tempo/12_I Encontro InRede_Fortaleza.jpg" class="img-fluid" alt="...">\
                      </div>\
                    </div>\
                  </div>\
                  <div class="carousel-item">\
                    <div class="row mx-0">\
                      <div id="carousel-selector-12" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="12">\
                        <img src="./images/tempo/13_Conexões Urbanas_Análise técnica em Dionísio Cerqueira.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-13" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="13">\
                        <img src="./images/tempo/14_Alagoas_Visão das Grotas.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-14" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="14">\
                        <img src="./images/tempo/15_CSST.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-15" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="15">\
                        <img src="./images/tempo/16_G52_Reunião Online.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-16" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="16">\
                        <img src="./images/tempo/17_Praia em São Paulo.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-17" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="17">\
                        <img src="./images/tempo/18_JF_Piloto de MRP em área rural.jpg" class="img-fluid" alt="...">\
                      </div>\
                    </div>\
                  </div>\
                  <div class="carousel-item">\
                    <div class="row mx-0">\
                      <div id="carousel-selector-18" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="18">\
                        <img src="./images/tempo/19_Alagoas_Dia Internacional da Juventude.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-19" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="19">\
                        <img src="./images/tempo/20_JF_Workshop Agenda 2030.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-20" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="20">\
                        <img src="./images/tempo/21_SP_Parque da Luz.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-21" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="21">\
                        <img src="./images/tempo/22_Rio Cidade Antirracista.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-22" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="22">\
                        <img src="./images/tempo/23_Circuito Urbano.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-23" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="23">\
                        <img src="./images/tempo/24_Programa Digaê_Minne Santos.jpg" class="img-fluid" alt="...">\
                      </div>\
                    </div>\
                  </div>\
                  <div class="carousel-item">\
                    <div class="row mx-0">\
                      <div id="carousel-selector-24" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="24">\
                        <img src="./images/tempo/25_Ascom SUDENE.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-25" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="25">\
                        <img src="./images/tempo/26_Conexões Urbanas_Missão Alain.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-26" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="26">\
                        <img src="./images/tempo/27_Virada_Sustentavel.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-27" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="27">\
                        <img src="./images/tempo/28_Seminário Cooperaçao Pernambuco.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div id="carousel-selector-28" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="28">\
                        <img src="./images/tempo/29_Argentina_Ciudad deNeuquen.jpg" class="img-fluid" alt="...">\
                      </div>\
                      <div class="col-2 px-1 py-2"></div>\
                    </div>\
                  </div>\
                </div>\
                <ol class="carousel-indicators">\
                  <li data-target="#carousel-thumbs" data-slide-to="0" class="active"></li>\
                  <li data-target="#carousel-thumbs" data-slide-to="1"></li>\
                  <li data-target="#carousel-thumbs" data-slide-to="2"></li>\
                  <li data-target="#carousel-thumbs" data-slide-to="3"></li>\
                  <li data-target="#carousel-thumbs" data-slide-to="4"></li>\
                </ol>\
              </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 1,
        curve: 1
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: "numeros",
      alignment: "full",
      hidden: false,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      description: '\
      <div class="light">\
        <div class="container p-bottom">\
          <h1 class="rosa text-center">2022 em Números</h1>\
            <div class="row">\
              <div class="accordion" id="accordionNumeros">\
                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">\
                  <div class="card">\
                    <div class="card-header" id="heading-1">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1"><i class="fa fa-chevron-circle-down"></i> 210 jovens</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-1" class="collapse" aria-labelledby="heading-1" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/01_12_jovens.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">210 jovens de 14 a 29 anos participaram de Oficinas de Desenho de Espaços Públicos em Pernambuco e conceberam, de forma participativa, propostas concretas de desenhos de espaços públicos seguros, inclusivos, sustentáveis e saudáveis para suas cidades.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-2">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2"><i class="fa fa-chevron-circle-down"></i> 140 pessoas</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-2" class="collapse" aria-labelledby="heading-2" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/02_140_pessoas.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">140 pessoas — dentre elas mulheres que se identificam como cisgênero, transgênero e pessoas travestis — participaram de oficinas "Cidade Mulher" em Pernambuco. Os grupos mapearam a percepção dos fatores de (in)segurança no território sob a perspectiva das mulheres, contribuindo para um diagnóstico de segurança urbana e sugestões para políticas públicas mais inclusivas e seguras.  </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-3">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3"><i class="fa fa-chevron-circle-down"></i> Criado Clube de Astronomia</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-3" class="collapse" aria-labelledby="heading-3" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/03_clube_astro.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">Criado Clube de Astronomia na comunidade do Ibura, no Recife, Pernambuco, idealizado durante as gravações do documentário “Pés no Chão, Janela do Céu” e inspirado na oficina de Desenho de Espaços Públicos realizada na região em fevereiro.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-X">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4"><i class="fa fa-chevron-circle-down"></i> 13.419 entrevistas domiciliares</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-4" class="collapse" aria-labelledby="heading-4" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/04_14_ent_dom.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">13.419 entrevistas domiciliares realizadas em 12 complexos de favelas pelo Programa Territórios Sociais na cidade do Rio de Janeiro, somando 2.392 novas famílias cadastradas na iniciativa. Além disso, 15,4 mil pessoas foram atendidas pela Secretaria Municipal de Saúde, 6 mil foram impactadas pela Secretaria Municipal de Assistência Social e 2,7 mil crianças e adolescentes foram encaminhados à Coordenadoria Regional de Educação.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-5">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5"><i class="fa fa-chevron-circle-down"></i> 1.155 domicílios</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-5" class="collapse" aria-labelledby="heading-5" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/05_1155_dom.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">1.155 domicílios de famílias cadastradas no Programa Territórios Sociais foram beneficiados com melhorias habitacionais pelo programa Casa Carioca. 90 famílias receberam doações de filtros de barro em parceria com a Secretaria Municipal de Saúde para acesso mais fácil à água potável e para reduzir a incidência de doenças relacionadas à água.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-6">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6"><i class="fa fa-chevron-circle-down"></i> Mais de 50 brasileiros</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-6" class="collapse" aria-labelledby="heading-6" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/06_50_brasileiros.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">Mais de 50 brasileiros participaram da 11ª Sessão do Fórum Urbano Mundial, principal conferência global sobre urbanização sustentável, organizada pelo ONU-Habitat. Com mais de 330 eventos, o congresso foi realizado em Katowice, na Polônia, entre os dias 26 e 30 de junho, para discutir desafios da urbanização. A cidade de Fortaleza aproveitou a oportunidade para lançar sua candidatura para sediar a 13ª edição da conferência, a ser realizada em 2026.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-7">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7"><i class="fa fa-chevron-circle-down"></i> 17 plantões</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-7" class="collapse" aria-labelledby="heading-7" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/07_17_plantoes.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">17 plantões com mapas no território, 9 reuniões com lideranças e grupos de trabalho e 7 assembleias realizadas para a elaboração participativa do Plano de Urbanização Sustentável da Izidora, em parceria com a Prefeitura de Belo Horizonte, a Secretaria Municipal de Política Urbana e a Companhia Urbanizadora de Habitação de Belo Horizonte (Urbel).</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-8">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8"><i class="fa fa-chevron-circle-down"></i> 3,4 mil pessoas</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-8" class="collapse" aria-labelledby="heading-8" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/08_3_4_mil_pessoas.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">3,4 mil pessoas de 6 bairros da região lagunar de Maceió entrevistadas para compreender a situação socioeconômica e demográfica da população. Entre os resultados, está o dado de que 69% se identificam como pretas ou pardas. A pesquisa também mostrou que 27% dos domicílios possuem acesso ao Auxílio Brasil/Bolsa Família. Além disso, a praia (39%) e o shopping (27%) são as principais atividades de lazer das pessoas acima de 14 anos na região.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-9">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-9" aria-expanded="true" aria-controls="collapse-9"><i class="fa fa-chevron-circle-down"></i> 22 funcionários</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-9" class="collapse" aria-labelledby="heading-9" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/09_10_11_funcionarios.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">22 funcionários do governo estadual de Alagoas capacitados na oficina de imersão do Programa Minha Cidade Linda, organizado no âmbito do Laboratório de Planejamento e Projetos de Alagoas. A oficina incluiu a apresentação do programa e seus impactos, propostas de soluções inovadoras para melhorar o programa de forma colaborativa e transversal e a promoção da integração entre as secretarias estaduais e demais instituições participantes.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-10">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-10" aria-expanded="true" aria-controls="collapse-10"><i class="fa fa-chevron-circle-down"></i> 28 funcionários</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-10" class="collapse" aria-labelledby="heading-10" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/09_10_11_funcionarios.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">28 funcionários do governo municipal e estadual e 69 lideranças comunitárias e representantes da sociedade civil participaram de roda de diálogo para discutir o diagnóstico do setor habitacional de Maceió e Alagoas e as estratégias propostas pelo ONU-Habitat para redução do déficit quantitativo e qualitativo do estado.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-11">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-11" aria-expanded="true" aria-controls="collapse-11"><i class="fa fa-chevron-circle-down"></i> 138 funcionários</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-11" class="collapse" aria-labelledby="heading-11" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/09_10_11_funcionarios.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">138 funcionários do governo, acadêmicos, lideranças comunitárias, representantes da sociedade civil e membros do ONU-Habitat participaram do seminário de discussão e apresentação das Diretrizes para a Política Habitacional de Alagoas. Apresentou-se o diagnóstico do setor habitacional de Alagoas, bem como os objetivos, eixos estratégicos e recomendações para a gestão e o financiamento da política habitacional.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-12">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-12" aria-expanded="true" aria-controls="collapse-12"><i class="fa fa-chevron-circle-down"></i> 37 jovens</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-12" class="collapse" aria-labelledby="heading-12" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/01_12_jovens.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">37 jovens moradores de assentamentos precários capacitados em comunicação e mobilização comunitária no primeiro ciclo do programa Digaê! - Juventudes, Comunicação e Cidade. Para debater a realidade das grotas e ampliar o repertório dos jovens sobre ferramentas de comunicação, a iniciativa é dividida em três módulos: direito à cidade; linguagens de comunicação e projetos de intervenção em comunicação nas grotas.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-13">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-13" aria-expanded="true" aria-controls="collapse-13"><i class="fa fa-chevron-circle-down"></i> 65 mil moradores</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-13" class="collapse" aria-labelledby="heading-13" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/13_65_mil_moradores.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">65 mil moradores de 141 territórios em Juiz de Fora estão sendo beneficiados pelo levantamento de dados e elaboração de mais de 4.500 mapas sobre infraestrutura urbana, habitação, transporte e serviços públicos com o Mapa Rápido Participativo (MRP) das áreas mais vulnerabilizadas da cidade.</div>\
                    </div>\
                  </div>\
                </div>\
                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">\
                  <div class="card">\
                    <div class="card-header" id="heading-14">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-14" aria-expanded="true" aria-controls="collapse-14"><i class="fa fa-chevron-circle-down"></i> 1,3 mil entrevistas</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-14" class="collapse" aria-labelledby="heading-14" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/14_1_3_mil_entrevistas.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">1,3 mil entrevistas realizadas e 3,3 mil residências visitadas durante pesquisa do Perfil Socioeconômico em Juiz de Fora. A ação visa identificar dados que informem políticas públicas e programas, com foco especial em educação e apoio a famílias vulneráveis, especialmente chefiadas por mulheres. Alguns dos dados mostram uma taxa de 85% de de frequência escolar entre pessoas de 10 a 18 anos, 16% das residências recebendo Auxílio Brasil/Bolsa Família e 57% das residências chefiadas por mulheres.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-15">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-15" aria-expanded="true" aria-controls="collapse-15"><i class="fa fa-chevron-circle-down"></i> 80 representantes</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-15" class="collapse" aria-labelledby="heading-15" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/15_80_representantes.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">80 representantes da população atuaram como informantes-chave na Avaliação de Espaços Públicos aplicada na fronteira entre Brasil e Argentina. A ação retrata a rede de espaços públicos dos municípios de Barracão (PR), Dionísio Cerqueira (SC), Bom Jesus do Sul (PR), no Brasil, e Bernardo de Irigoyen, na Argentina, a partir de aspectos como quantidade e distribuição de espaços públicos, governança, acessibilidade, usos e usuários, instalações físicas, conforto, segurança e verde.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-16">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-16" aria-expanded="true" aria-controls="collapse-16"><i class="fa fa-chevron-circle-down"></i> Dados e recomendações</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-16" class="collapse" aria-labelledby="heading-16" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/16_dados_recomendacoes.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">Prefeitura Municipal de Barracão (PR) utiliza os dados e recomendações da Avaliação de Espaços Públicos na revisão de seu Plano Diretor Municipal, com recomendações para fortalecer a apropriação de espaços públicos das cidades. Em Dionísio Cerqueira (SC), a prefeitura municipal, em colaboração com a população e com um escritório de arquitetura local, está desenvolvendo uma iniciativa voluntária para promover melhorias na praça Professor Dalilo Quintino Pereira, a principal da cidade.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-17">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-17" aria-expanded="true" aria-controls="collapse-17"><i class="fa fa-chevron-circle-down"></i> 466 gestores e servidores municipais</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-17" class="collapse" aria-labelledby="heading-17" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/17_466_gestores.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">466 gestores e servidores municipais de 41 municípios se inscreveram para os cinco módulos de capacitação promovidos para a Rede de Cidades-Polo do Nordeste. Foram 90 horas de formação voltadas a fortalecer suas capacidades de gestão e promover o desenvolvimento urbano regional de forma sustentável.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-18">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-18" aria-expanded="true" aria-controls="collapse-18"><i class="fa fa-chevron-circle-down"></i> 17 municípios</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-18" class="collapse" aria-labelledby="heading-18" data-parent="#accordionNumeros">\
                    <div class="timeline__image-wrapper"><img src="./images/numeros/18_17_munic.svg" alt="" class="timeline__image"></div>\
                      <div class="card-body">17 municípios assinaram a carta de compromisso da Rede de Cidades-Polo do Nordeste (G52) para cooperar no enfrentamento às desigualdades e na superação das divisões sociais e espaciais nas cidades e territórios do Nordeste do Brasil. A iniciativa teve o apoio do ONU-Habitat.</div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-19">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-19" aria-expanded="true" aria-controls="collapse-19"><i class="fa fa-chevron-circle-down"></i> 254 eventos inscritos</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-19" class="collapse" aria-labelledby="heading-19" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/19_254_eventos.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        254 eventos inscritos na 5ª edição do Circuito Urbano, um recorde da iniciativa. Sob o tema “Localizando os ODS: não deixar ninguém e nenhum lugar para trás”, 183 eventos foram realizados nas modalidades virtual, híbrida e presencial, chegando a 21 estados e ao Distrito Federal.\
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-20">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-20" aria-expanded="true" aria-controls="collapse-20"><i class="fa fa-chevron-circle-down"></i> 122 instituições e 20 pessoas físicas realizaram 183 eventos</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-20" class="collapse" aria-labelledby="heading-20" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/20_122_inst.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        122 instituições e 20 pessoas físicas realizaram 183 eventos na edição de 2022 do Circuito Urbano, somando mil painelistas e moderadores, um público virtual de 12,9 mil espectadores e mais de 10 mil pessoas no público presencial. Os eventos trouxeram discussões sobre inclusão, sustentabilidade e desenvolvimento urbano, divididos em cinco linhas temáticas voltadas aos Objetivos de Desenvolvimento Sustentável: Conhecer; Planejar; Participar e Inovar; Financiar e Implementar; e Monitorar e Avaliar.\
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-21">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-21" aria-expanded="true" aria-controls="collapse-21"><i class="fa fa-chevron-circle-down"></i> 194 pessoas</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-21" class="collapse" aria-labelledby="heading-21" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/21_194_pessoas.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        194 pessoas fizeram parte da equipe de escritório e de campo do ONU-Habitat Brasil, sendo 139 mulheres e 55 homens, distribuídas em diferentes localidades. \
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-22">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-22" aria-expanded="true" aria-controls="collapse-22"><i class="fa fa-chevron-circle-down"></i> 28 missões</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-22" class="collapse" aria-labelledby="heading-22" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/22_28_missoes.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        28 missões organizadas pelo time do ONU-Habitat Brasil para realizar ações de advocacy, apresentar resultados e conduzir treinamentos, oficinas e atividades participativas, além de participar em eventos, seminários e comitês de planejamento – atividades essenciais para fomentar um crescimento urbano sustentável e produzir efeitos benéficos nas comunidades locais.\
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-23">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-23" aria-expanded="true" aria-controls="collapse-23"><i class="fa fa-chevron-circle-down"></i> 20 novas parcerias</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-23" class="collapse" aria-labelledby="heading-23" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/23_20_novas_parcerias.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        20 novas parcerias concretizadas em 2022, incluindo as modalidades de Apoio Institucional, Carta de Parceria e Memorando de Entendimento. As novas ações se somam a quatro outras iniciativas vigentes, totalizando 24 parcerias institucionais no total.  \
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-24">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-24" aria-expanded="true" aria-controls="collapse-24"><i class="fa fa-chevron-circle-down"></i> Mais de 630 menções na imprensa</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-24" class="collapse" aria-labelledby="heading-24" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/24_mais_de_630.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        Mais de 630 menções na imprensa sobre as ações do ONU-Habitat em 2022, com destaque para veiculações na TV aberta, entrevistas em rádio e diversas matérias em mídias internacionais, nacionais e locais.\
                      </div>\
                    </div>\
                  </div>\
                  <div class="card">\
                    <div class="card-header" id="heading-25">\
                      <h1 class="clearfix mb-0">\
                        <a class="btn btn-link cursor-hover" data-toggle="collapse" data-target="#collapse-25" aria-expanded="true" aria-controls="collapse-25"><i class="fa fa-chevron-circle-down"></i> 22 mil seguidores</a>\
                      </h1>\
                    </div>\
                    <div id="collapse-25" class="collapse" aria-labelledby="heading-25" data-parent="#accordionNumeros">\
                      <div class="timeline__image-wrapper">\
                        <img src="./images/numeros/25_22_mil_seguidores.svg" alt="" class="timeline__image">\
                      </div>\
                      <div class="card-body">\
                        22 mil seguidores alcançados e mais de 200 publicações elaboradas para o Instagram com notícias sobre ações locais, advocacy e resultados da atuação no país.\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: "publicacoes",
      alignment: "full",
      hidden: false,
      description: '\
      <div class="light">\
        <div class="container container-exp p-bottom">\
            <h1 class="align-self-center rosa text-center">2022 em Publicações<br>e Plataformas</h1>\
            <div class="col-12 text-center pb-3">\
                  <a class="btn btn-primary mr-1" href="#theCarouselPub" role="button" data-slide="prev">\
                      <i class="fa fa-arrow-left cursor-hover"></i>\
                  </a>\
                  <a class="btn btn-primary" href="#theCarouselPub" role="button" data-slide="next">\
                      <i class="fa fa-arrow-right cursor-hover"></i>\
                  </a>\
            </div>\
            <div class="carousel slide multi-item-carousel" data-ride="carousel" id="theCarouselPub" data-interval="993000" role="listbox">\
              <div class="carousel-inner row w-100 mx-auto  pb-4 pt-4">\
                <div class="carousel-item active col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/01_Relatorio_Aval_Esp_Pub_Barracao_comp.jpeg">\
                      <p>Publicação</p>\
                      <h5>Avaliação de Espaços Públicos: Cidades na Fronteira</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Relatório da Avaliação de Espaços Públicos em municípios do projeto Conexões Urbanas, incluindo análise de dimensões relacionadas à quantidade e distribuição de espaços públicos, governança, acessibilidade, usos e usuários, instalações físicas, conforto, segurança e verde. O trabalho foi fruto da análise de leis e planos locais, assim como da coleta de informações em visitas de campo e entrevistas com informantes-chave da população.</p>\
                            <a class="btn btn-primary" target="_blank" href="https://drive.google.com/file/d/1BjJ9sYx0sg0NDvC8iAtrQ5GpSNDKYzzd/view">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/02_Desenho de Espaços Públicos.jpg">\
                      <p>Publicação</p>\
                      <h5>Relatório de Desenho de Espaços Públicos</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">O relatório apresenta a sistematização e resultados das oficinas de Desenho de Espaços Públicos em Pernambuco, que tiveram como objetivo criar propostas concretas para espaços públicos de forma participativa com jovens de 14 a 29 anos. As propostas foram baseadas em diagnósticos, avaliações, necessidades e sugestões dos grupos participantes, visando tornar esses espaços seguros, inclusivos, sustentáveis e saudáveis.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/03_Relatório Cidade Mulher_Caderno Oficinas_Versão 12.12 - online.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório Cidade Mulher</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">O documento apresenta a sistematização e os resultados das oficinas Cidade Mulher, que buscaram mapear a percepção das mulheres em relação aos fatores que geram (in)segurança em seus territórios. O objetivo foi contribuir para o diagnóstico da segurança urbana e fornecer sugestões para políticas públicas que tornem os espaços públicos mais inclusivos e seguros para mulheres jovens, adultas e idosas.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/04_Doc Pés no chao, janela do céu.jpg">\
                      <p>Publicação</p>\
                      <h5>Documentário "Pés no Chão, Janela do Céu"</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Através da história de Yasmin Bernardo, jovem moradora da comunidade do Ibura, no Recife (PE), o documentário destaca a importância do protagonismo da juventude no processo de planejamento urbano. Inspirado na oficina de Desenho de Espaços Públicos realizada na comunidade, o curta-metragem revela uma perspectiva crítica sobre sua realidade e mostra soluções criativas para superar desigualdades sociais e violência urbana, permitindo que jovens como ela possam experimentar plenamente o que a cidade tem a oferecer.</p>\
                            <a class="btn btn-primary" target="_blank" href="https://www.youtube.com/watch?v=vHW20i79QyQ ">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/05_Progress Report 4_Social Territories_August 2022.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório anual 2021/2022 de Territórios Sociais</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">O relatório anual apresenta um diagnóstico com dados da Busca Ativa, apontando as vulnerabilidades territoriais das áreas abarcadas pelo programa desde 2019 com base em 138.279 entrevistas realizadas em 40.669 famílias monitoradas. O relatório também apresenta a atuação do programa e os resultados obtidos através da aplicação do protocolo integrado.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/06_Relatório Circuito Urbano 2022.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório Final do Circuito Urbano 2022</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Apresenta os principais dados e destaques do Circuito Urbano, principal iniciativa do ONU-Habitat Brasil para comemorar o Outubro Urbano, mês que concentra debates sobre desafios e oportunidades gerados nas cidades. O relatório inclui informações sobre o perfil do público e dos organizadores, os resultados da comunicação e os principais destaques do Circuito Urbano 2022, que teve como tema "Localizando os ODS: não deixar ninguém e nenhum lugar para trás".</p>\
                            <a class="btn btn-primary" target="_blank" href="https://infogram.com/relatorio-circuito-urbano-2022-1h0r6rpmwqxvw2e">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/07_Relatório Anual 2021.jpg">\
                      <p>Publicação</p>\
                      <h5>Relatório Anual 2021 do ONU-Habitat Brasil</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">A publicação apresenta os destaques do trabalho realizado em 2021em prol do desenvolvimento urbano sustentável. O relatório apresenta metodologias e ferramentas utilizadas em iniciativas espalhadas por todo o país. Dados, parcerias e histórias de interesse humano também integram o documento, apresentando um panorama de como o programa fortalece cidades e comunidades brasileiras buscando não deixar ninguém e nenhum lugar para trás.</p>\
                            <a class="btn btn-primary" target="_blank" href="https://infogram.com/relatorio-anual-onu-habitat-brasil-2021-1hd12yx7nv5ow6k?live">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/08_20230314_relatorio_mrp_integrado_reduzida_correcao_sec.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório Integrado do Mapa Rápido Participativo de Juiz de Fora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Sistematiza os resultados do Mapa Rápido Participativo realizado nos 141 territórios abarcados pela parceria entre a Prefeitura de Juiz de Fora e o ONU-Habitat. O relatório fornece uma análise estratégica dos oito macroterritórios de Juiz de Fora, visando compreender as características próprias de cada região e identificar as dinâmicas urbanas locais em comum. O relatório também apresenta uma análise detalhada de cada macroterritório, destacando as características que impactam na qualidade de vida dos moradores.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/09_MRPs.jpg">\
                      <p>Publicação</p>\
                      <h5>141 Relatórios Descritivos do Mapa Rápido Participativo de Juiz de Fora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Conjunto de 141 relatórios descreve os resultados do Mapa Rápido Participativo realizado entre março e julho de 2022 nas áreas de interesse do projeto em Juiz de Fora. Os relatórios foram produzidos a partir de dados primários coletados por meio de pesquisa de campo, e abordam temas como infraestrutura urbana, habitação, transporte e serviços públicos. Esses relatórios permitem orientar políticas públicas assertivas para a cidade.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/10_20220412_P1.2_G52.jpg">\
                      <p>Publicação</p>\
                      <h5>Relatório da Oficina de intercâmbio e cooperação com especialistas nacionais e internacionais sobre governança compartilhada e gestão em rede</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">A publicação apresenta os resultados da oficina de Intercâmbio e Cooperação, realizada em fevereiro de 2022 com a presença de especialistas, autoridades, gestores e técnicos dos municípios do G52. O evento foi composto por diversos painéis e oficinas com o objetivo de fomentar a governança compartilhada e a gestão em rede, com foco em temas como agendas globais de desenvolvimento, inovação pública municipal, gestão de projetos e sustentabilidade financeira.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/11_20220420_P2.1_G52.jpg">\
                      <p>Publicação</p>\
                      <h5>Relatório da Avaliação e priorização das necessidades de capacitação do setor público do G52</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Relatório identifica os desafios e demandas de capacitação das prefeituras do G52. Os resultados buscam contribuir para a formação de servidores e servidoras públicas municipais com base em suas principais necessidades, diagnosticadas por meio de questionários e reuniões com pontos focais.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/12_20220908_P2.2_G52.jpg">\
                      <p>Publicação</p>\
                      <h5>Relatório dos Módulos de treinamento para o desenvolvimento de capacidades do setor público das 52 cidades priorizadas no G52</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Destinados a gestores e servidores do G52, os módulos de treinamento do projeto buscaram disseminar conhecimentos teóricos e experiências práticas para fortalecer as capacidades dos municípios no desenvolvimento urbano e territorial sustentável. O relatório apresenta os resultados alcançados nesses módulos, abrangendo temas como agendas globais de desenvolvimento, cooperação, gerenciamento de projetos, financiamento público, economia urbana, planejamento urbano e regional, inovação, governos digitais e cidades inteligentes centradas nas pessoas.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/13_20221221_Produto 3.1.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório sobre o Desafio de Inovação da Rede de Cidades-Polo do Nordeste</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">O relatório apresenta o Desafio de Inovação da Rede de Cidades-Polo do Nordeste, que buscou incentivar as cidades participantes do G52 a desenvolver projetos-piloto incorporando aprendizados anteriores. Houve mentoria para os servidores dos municípios, abordando metodologias participativas e políticas baseadas em evidências. As três melhores propostas foram premiadas em evento público e divulgadas em diferentes meios.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/14_20221223_Produto 3.2.jpeg">\
                      <p>Publicação</p>\
                      <h5>Relatório Final do G52</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">O relatório descreve o evento público de apresentação dos projetos de inovação construídos de maneira compartilhada e da assinatura da adesão à rede. O evento incluiu a premiação do Desafio de Inovação e a assinatura da Carta Compromisso, com a presença de servidores da Sudene, equipes do PNUD e ONU-Habitat, representantes institucionais, prefeitos, vice-prefeitos, secretários e servidores dos municípios do G52.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/15_Produto 1.2.jpg">\
                      <p>Publicação</p>\
                      <h5>Plano de Controle da Expansão: estratégias para limitar a expansão das ocupações da Izidora e permitir a melhoria da gestão dos vazios urbanos</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Material de orientação contendo estratégias para limitar a expansão das ocupações da Izidora, em Belo Horizonte (MG), e permitir a melhoria da gestão dos vazios urbanos.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/16_1.3 - Recuperação Ambiental_Vol_Branco-1_page-0001.jpg">\
                      <p>Publicação</p>\
                      <h5>Plano de Recuperação Ambiental: estratégias para a recuperação ambiental e proteção de áreas vazias nas ocupações da Izidora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação detalha as condições ambientais nos territórios das ocupações da Izidora, em Belo Horizonte (MG), avaliando danos socioambientais, indicando propostas de recuperação dos atributos naturais e atualizando as informações das ocupações.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/17_Produto 1.4_vf.jpeg">\
                      <p>Publicação</p>\
                      <h5>Plano de Controle de Risco: propostas de intervenções imediatas para eliminar áreas de risco nas ocupações da Izidora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação analisa as condições geotécnicas das ocupações da Izidora, em Belo Horizonte (MG), e propõe intervenções de redução e eliminação de áreas de risco, com hierarquização das intervenções.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/18_1.5 - Diagnósticos técnicos_vf-1_page-0001.jpg">\
                      <p>Publicação</p>\
                      <h5>Diagnósticos técnicos para as ocupações da Izidora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Analisa e caracteriza tecnicamente a região da Izidora, em Belo Horizonte (MG), quanto às seguintes temáticas: ambiental; morfologia; padrão de ocupação; sistema viário; risco; e microbacias e drenagem.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/19_1.5 - Estudos de Alternativas_HG-1_page-0001.jpg">\
                      <p>Publicação</p>\
                      <h5>Estudos de alternativas para a ocupação Helena Greco</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação apresenta estudo de alternativas elaboradas para as intervenções na ocupação Helena Greco, em Belo Horizonte (MG), composto por mapas e tabelas comparativos das alternativas. Estas são apresentadas a partir de quatro eixos temáticos principais: caminho das águas, estabilização de encostas, caminho das pessoas e formas de morar.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/20_1.5 - Estudos de Alternativas_RL-1_page-0001.jpg">\
                      <p>Publicação</p>\
                      <h5>Estudos de alternativas para a ocupação Rosa Leão</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação apresenta estudo de alternativas elaboradas para as intervenções na ocupação Rosa Leão, em Belo Horizonte (MG), composto por mapas e tabelas comparativos das alternativas. Estas são apresentadas a partir de quatro eixos temáticos principais: caminho das águas, estabilização de encostas, caminho das pessoas e formas de morar.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/21_1.5 - Estudos de Alternativas_ES_vf-1_page-0001.jpg">\
                      <p>Publicação</p>\
                      <h5>Estudos de alternativas para a ocupação Esperança</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação apresenta o estudo de alternativas elaboradas para as intervenções na ocupação Esperança, em Belo Horizonte (MG), composto por mapas e tabelas comparativos das alternativas. Estas são apresentadas a partir de quatro eixos temáticos principais: caminho das águas, estabilização de encostas, caminho das pessoas e formas de morar.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/22_1.5 - Estudos de Alternativas_VITORIA_vf.jpg">\
                      <p>Publicação</p>\
                      <h5>Estudos de alternativas para a ocupação Vitória</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Publicação apresenta o estudo de alternativas elaboradas para as intervenções na ocupação Vitória, em Belo Horizonte (MG), composto por mapas e tabelas comparativos das alternativas. Estas são apresentadas a partir de quatro eixos temáticos principais: caminho das águas, estabilização de encostas, caminho das pessoas e formas de morar.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/23_plataforma_perfil.png">\
                      <p>Plataforma</p>\
                      <h5>Plataforma de monitoramento do Perfil Socioeconômico de Alagoas</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Dashboard criado no Google Data Studio. O objetivo desta plataforma é fornecer informações básicas para acompanhar o processo de coleta de dados de campo. A base de dados da pesquisa é dividida em áreas de alta e baixa privação social, sendo aplicada nos bairros Bom Parto, Levada, Prado, Ponta Grossa, Trapiche da Barra e Vergel do Lago, todos localizados na região lagunar de Maceió.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/24_painel_jf.png">\
                      <p>Plataforma</p>\
                      <h5>Painel de Dados interativo de Juiz de Fora</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Plataforma personalizável para armazenar todos os resultados do Mapa Rápido Participativo e do Perfil Socioeconômico aplicados na cidade de Juiz de Fora. Essa ferramenta permite relatórios, gráficos, mapas e simulações, e é útil para as secretarias municipais tomarem decisões mais transparentes, baseadas em evidências, justas e responsáveis.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/25_site_circuito.png">\
                      <p>Plataforma</p>\
                      <h5>Site do Circuito Urbano</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Plataforma que disponibiliza informações sobre todas as edições do Circuito Urbano, além das seções de Mural das Artes, Caminho da Ação e programação de eventos com Mapa Virtual.</p>\
                            <a class="btn btn-primary" target="_blank" href="https://www.circuitourbano.org/">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/publicacoes/26_canal_circuito.png">\
                      <p>Plataforma</p>\
                      <h5>Canal do YouTube do Circuito Urbano</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Plataforma que apresenta todas as transmissões de eventos realizadas desde 2020 no Circuito Urbano, além de vídeos de melhores momentos de cada edição e dos eventos presenciais.</p>\
                            <a class="btn btn-primary" target="_blank" href="https://www.youtube.com/channel/UCuntso3y0Vcwvr2kWCeiR1g">Acessar</a>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              <ol class="carousel-indicators">\
                <li data-target="#theCarouselPub" data-slide-to="0" class="active"></li>\
                <li data-target="#theCarouselPub" data-slide-to="1"></li>\
                <li data-target="#theCarouselPub" data-slide-to="2"></li>\
                <li data-target="#theCarouselPub" data-slide-to="3"></li>\
                <li data-target="#theCarouselPub" data-slide-to="4"></li>\
                <li data-target="#theCarouselPub" data-slide-to="5"></li>\
                <li data-target="#theCarouselPub" data-slide-to="6"></li>\
                <li data-target="#theCarouselPub" data-slide-to="7"></li>\
                <li data-target="#theCarouselPub" data-slide-to="8"></li>\
                <li data-target="#theCarouselPub" data-slide-to="9"></li>\
                <li data-target="#theCarouselPub" data-slide-to="10"></li>\
                <li data-target="#theCarouselPub" data-slide-to="11"></li>\
                <li data-target="#theCarouselPub" data-slide-to="12"></li>\
                <li data-target="#theCarouselPub" data-slide-to="13"></li>\
                <li data-target="#theCarouselPub" data-slide-to="14"></li>\
                <li data-target="#theCarouselPub" data-slide-to="15"></li>\
                <li data-target="#theCarouselPub" data-slide-to="16"></li>\
                <li data-target="#theCarouselPub" data-slide-to="17"></li>\
                <li data-target="#theCarouselPub" data-slide-to="18"></li>\
                <li data-target="#theCarouselPub" data-slide-to="19"></li>\
                <li data-target="#theCarouselPub" data-slide-to="20"></li>\
                <li data-target="#theCarouselPub" data-slide-to="21"></li>\
                <li data-target="#theCarouselPub" data-slide-to="22"></li>\
                <li data-target="#theCarouselPub" data-slide-to="23"></li>\
                <li data-target="#theCarouselPub" data-slide-to="24"></li>\
                <li data-target="#theCarouselPub" data-slide-to="25"></li>\
              </ol>\
            </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: "metodologias",
      alignment: "full",
      hidden: false,
      description: '\
      <div class="light">\
        <div class="container container-exp p-bottom">\
            <h1 class="align-self-center azul text-center">2022 em Metodologias</h1>\
            <div class="col-12 text-center pb-3">\
                  <a class="btn btn-primary mr-1 btn-primary-azul " href="#theCarousel" role="button" data-slide="prev">\
                      <i class="fa fa-arrow-left cursor-hover"></i>\
                  </a>\
                  <a class="btn btn-primary btn-primary-azul " href="#theCarousel" role="button" data-slide="next">\
                      <i class="fa fa-arrow-right cursor-hover"></i>\
                  </a>\
            </div>\
            <div class="carousel slide multi-item-carousel" data-ride="carousel" id="theCarousel" data-interval="3000" role="listbox">\
              <ol class="carousel-indicators">\
                  <li data-target="theCarousel" data-slide-to="0" class="active"></li>\
                  <li data-target="theCarousel" data-slide-to="1"></li>\
                  <li data-target="theCarousel" data-slide-to="2"></li>\
                  <li data-target="theCarousel" data-slide-to="3"></li>\
                  <li data-target="theCarousel" data-slide-to="4"></li>\
                  <li data-target="theCarousel" data-slide-to="5"></li>\
                  <li data-target="theCarousel" data-slide-to="6"></li>\
                  <li data-target="theCarousel" data-slide-to="7"></li>\
                  <li data-target="theCarousel" data-slide-to="8"></li>\
                  <li data-target="theCarousel" data-slide-to="9"></li>\
                  <li data-target="theCarousel" data-slide-to="10"></li>\
              </ol>\
              <div class="carousel-inner row w-100 mx-auto  pb-4 pt-4">\
                <div class="carousel-item active col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/01_Avaliação de Espaços Públicos_Sabrina Albuquerque.jpg">\
                      <h5>Avaliação de Espaços Públicos na Escala da Cidade</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">A metodologia visa apoiar governos locais a compreender a situação atual da rede de espaços públicos de suas cidades, com ênfase em parques e praças. Avalia-se distribuição, quantidade e aspectos quantitativos e qualitativos desses espaços, tais como acessibilidade, instalações físicas, conforto ambiental, segurança, verde, tipos de uso e perfil de usuários. Os dados são coletados por questionários aplicados em visita de campo e entrevistas. Os resultados são compilados em mapas e gráficos de indicadores para subsidiar estratégias e políticas urbanas, buscando a oferta de espaços públicos seguros, acessíveis e inclusivos.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/02_Avaliação de necessidades de capacitação_Minne Santos.jpg">\
                      <h5>Avaliação de Necessidades de Capacitação</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">A Avaliação de Necessidades de Capacitação é um processo que identifica as necessidades de treinamento e formação de um determinado grupo de profissionais em áreas específicas, como desenvolvimento, cooperação, gerenciamento, financiamento, planejamento e inovação. Essa avaliação pode ser realizada por meio de questionários ou reuniões com grupos focais, e busca aprimorar o conhecimento e habilidades desses profissionais.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/03_Cidade Mulher_Renatto Mendonça.jpg">\
                      <h5>Cidade Mulher</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Busca compreender a relação das mulheres com a cidade e diagnosticar as sensações de (in)segurança nos espaços públicos por meio das suas percepções, experiências de cidade e levantamento de necessidades. Esta é uma iniciativa do ONU-Habitat Brasil baseada na metodologia global de Auditoria de Segurança das Mulheres.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/04_Desafio de Inovação_Ascom Sudene.jpg">\
                      <h5>Desafio de Inovação</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Iniciativa que estimula a construção coletiva de soluções de inovação para a gestão pública voltadas a enfrentar problemas urbanos que dificultam o desenvolvimento da região. A metodologia envolve a criação de práticas inovadoras, replicáveis e escalonáveis por meio de estratégias criativas e colaborativas e de processos de experimentação capazes de aprimorar a qualidade dos serviços públicos dos municípios. As melhores propostas são apresentadas e premiadas em um evento de reconhecimento.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/05_Desenho de Espaços Públicos_Petrolina_ Renatto Mendonca.jpg">\
                      <h5>Desenho de Espaços Públicos</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Incentiva jovens a melhorar espaços públicos em seus territórios. Com técnicas simples de urbanismo e cartografia, a metodologia desenvolve maquetes físicas dos espaços desejados. As oficinas envolvem dinâmicas e pesquisa de campo, permitindo que os jovens confrontem suas ideias com as de seus vizinhos e comerciantes locais. Os dados coletados são sistematizados em uma proposta final entregue às autoridades e à população local, permitindo que o poder público atue para melhorar os espaços públicos.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/06_Índice de Prosperidade das Cidades_Minne Santos.jpg">\
                      <h5>Índice de Prosperidade das Cidades</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Ferramenta que utiliza indicadores para representar seis dimensões da prosperidade nas cidades: produtividade, desenvolvimento de infraestrutura, qualidade de vida, equidade e inclusão social, sustentabilidade ambiental, e governança e legislação urbanas. É utilizado para conceber, monitorar e avaliar ações, programas e políticas públicas implementadas nessas cidades.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/07_Laboratório de Planejamento_AL.jpg">\
                      <h5>Laboratório de Planejamento e Projetos para o Desenvolvimento Urbano Sustentável</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Inspirada na metodologia Urban Labs do ONU-Habitat, o Laboratório considera o alinhamento dos programas de um governo aos Objetivos de Desenvolvimento Sustentável e à Nova Agenda Urbana e elabora coletivamente, com gestores municipais e representantes da sociedade civil, propostas para aperfeiçoar as políticas públicas em questão e promover o desenvolvimento urbano sustentável.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/08_MRP_JF.jpg">\
                      <h5>Mapa Rápido Participativo</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Consiste no levantamento de informações sobre a cobertura e qualidade dos serviços públicos relacionados diretamente ao território. Esse método permite diagnosticar as condições de infraestrutura urbana e qualidade dos serviços em assentamentos precários de forma ágil e participativa.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/09_Observatório de Políticas Públicas_AL.jpg">\
                      <h5>Observatório de Políticas Públicas</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Criação de uma plataforma aberta com dados e indicadores alinhados às agendas globais de desenvolvimento sustentável para apoiar políticas públicas setoriais e melhorar o atendimento à população.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/10_Perfil Socioeconômico_JF.jpg">\
                      <h5>Perfil Socioeconômico</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Pesquisa domiciliar amostral que tem como objetivo analisar todo o território avaliado através do diagnóstico da situação sociodemográfica e econômica das famílias, além de avaliar a mobilidade residencial, o acesso a equipamentos e serviços na comunidade e a percepção da população sobre o território em que vivem.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="carousel-item col-md-4">\
                  <div class="wrapper">\
                    <div class="card front-face">\
                      <img class="img-fluid mx-auto d-block" src="./images/metodologias/11_Territórios Sociais_RJ.jpg">\
                      <h5>Territórios Sociais</h5>\
                    </div>\
                    <div class="card back-face">\
                        <div class="info">\
                            <p class="card-text">Programa para reduzir o risco social e as vulnerabilidades das famílias atendidas, dividido em três etapas: busca ativa, plano de ação integrado e monitoramento. Através da aplicação do Índice de Pobreza Multidimensional (IPM), adaptado do PNUD, são identificadas as privações em educação, saúde e padrão de vida. As famílias com maior grau de vulnerabilidade passam a ser monitoradas de forma integrada por diversos órgãos da Prefeitura, na perspectiva de inclusão nos serviços e benefícios e na ampliação de oportunidades.</p>\
                        </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'territorio-g52',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left p-bottom">\
          <h1 class="laranja">G52</h1>\
          <p>Uma vocação em comum une 52 municípios espalhados pelo Nordeste brasileiro. Com um papel de destaque e influência, eles carregam a responsabilidade de serem cidades-polo para suas regiões. Juntos, eles são potentes. Representam 7% do Produto Interno Bruto nacional e quase 10% da população brasileira. São estratégicos na oferta de serviços e referências de gestão para as cidades ao seu redor. Reunidos com base nesses critérios, eles formam a Rede de Cidades-Polo do Nordeste — o G52.</p>\
          <p>Ao contrário do que se possa imaginar, eles não estão restritos à região geográfica do Nordeste. Além de 47 municípios dispersos pelos nove estados nordestinos, outros cinco expandem a abrangência da rede para o norte de Minas Gerais e Espírito Santo. Toda essa região compreende uma extensão de 1,6 milhões de km², ricos em diversidade cultural e geográfica. Em comum, também estão altos índices de desigualdade social e limitado acesso a serviços básicos.</p>\
          <p>Para fortalecer as capacidades de planejamento regional e estimular a articulação em rede, as cidades foram alvo de uma iniciativa que estimulou o desenvolvimento de soluções inovadoras, sustentáveis e escalonáveis para os desafios que enfrentam.</p>\
        </div>\
      </div>\
      ',
      location: {
          center: [-43.28458, -10.95274],
          zoom: 4.25,
          pitch: 25.00,
          bearing: 0.00,
          speed: 0.25
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: '',
      onChapterEnter: [
        {
            layer: 'munic-g52',
            opacity: 1,
            duration: 2000
        }//,
        //{
        //    layer: 'sudene',
        //    opacity: 0.5,
        //    duration: 1500
        //}
      ],
      onChapterExit: [
        {
          layer: 'munic-g52',
          opacity: 0
        }//,
        //{
        ////  layer: 'sudene',
        //  opacity: 0
        //}
      ]
    },    

    {
      id: 'historia-g52',
      alignment: 'full',
      hidden: false,
      bookmark: 'SUDENE',
      description: '\
      <div class="light">\
        <div class="container-history no-gutters p-left p-right">\
          <div class="row no-gutters">\
            <div class="col-md-12 col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Espaços verdes do semiárido</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6 col-lg-6">\
                  <p>Localizada no centro do estado de Pernambuco, Serra Talhada pode ser conhecida como a capital do xaxado ou a terra natal de Lampião. Também pode ser ponto de referência na região por ser um polo de educação, saúde e comércio. Mas, recentemente, ela recebeu um destaque inédito: uma menção honrosa no Desafio de Inovação da Rede de Cidades-Polo do Nordeste, com uma proposta que reestrutura espaços verdes em regiões periféricas do município – e que tem planos para sair do papel.</p>\
                  <p>O desafio consistiu na fase final de um projeto da Superintendência de Desenvolvimento do Nordeste (Sudene) em parceria com o ONU-Habitat e o Programa das Nações Unidas para o Desenvolvimento (PNUD). A iniciativa tinha como objetivo aprimorar a construção de políticas de desenvolvimento urbano sustentável na área de atuação da Sudene: 52 cidades-polo do Nordeste que exercem influência em suas regiões.</p>\
                  <p>Depois de participar da fase de capacitações temáticas oferecidas pela iniciativa para fortalecer os servidores da rede, a prefeitura de Serra Talhada se inscreveu no Desafio de Inovação, que tinha como objetivo engajar esses servidores a aplicar, em seu próprio contexto, o conhecimento adquirido.</p>\
                  <p>Para isso, cada proposta precisava conter um diagnóstico de problema, uma solução e um plano de ação – tudo voltado ao desenvolvimento urbano sustentável local. Para escolher a melhor ideia, a Prefeitura de Serra Talhada fez uma chamada interna, pedindo às secretarias o envio de sugestões. As melhores ideias foram construídas coletivamente ao longo de reuniões e debates.</p>\
                </div>\
                <div class="col-md-6 col-lg-6">\
                  <p>De cinco sugestões iniciais, a escolhida foi “Espaços Verdes”, capitaneada pela Secretaria de Meio Ambiente. Transformando espaços públicos ociosos em áreas verdes e sociáveis, a proposta combate as ilhas do calor e aumenta o bem-estar dos moradores, além de potencializar o Plano de Arborização Urbana do município.<\p>\
                  <p>“Pensamos uma proposta do zero, tendo em vista que tinha de ser algo inovador. Queríamos envolver a população, oferecer lazer e qualidade de vida, e trabalhar com áreas verdes nas zonas periféricas do município”, explica o secretário do Meio Ambiente de Serra Talhada, Sinézio Rodrigues.<\p>\              <p>O projeto ficou em quinto lugar no Desafio de Inovação, garantindo a menção honrosa concedida a cidades com menos de 200 mil habitantes. Em Serra Talhada, a proposta foi tão bem recebida que vai virar realidade. A previsão é que ela comece a ser implementada em novembro de 2023, reestruturando canteiros que não possuem arborização e que estão localizados em bairros periféricos.</p>\
                  <p>Rodrigues complementa que os efeitos dessa iniciativa vão ser sentidos por muito tempo. “O principal legado que levamos com esta experiência foi o aprendizado em trabalhar em conjunto com os demais órgãos municipais e construir estratégias que vão ser extremamente benéficas para o desenvolvimento sustentável de nosso município”.</p>\
                </div>\
              </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                <img src="images/historia-sudene.jpg" alt="" class="img-hist"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        //center: [-47.41445, -12.83204],
        //zoom: 4.25,
        //pitch: 30.00,
        //bearing: 0.00,
        speed: 1
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'munic-g52',
            opacity: 1,
            duration: 2000
        },
        {
            layer: 'sudene',
            opacity: 0.5,
            duration: 2000
        }
      ],
      onChapterExit: [
        {
          layer: 'munic-g52',
          opacity: 0
        },
        {
          layer: 'sudene',
          opacity: 0
        }
      ]
    },

    {
      id: 'territorio-teresina',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left p-bottom">\
          <h1 class="laranja">Teresina</h1>\
          <p>Adaptação, flexibilidade, gestão de risco e integração são algumas das palavras que descrevem a atuação de Teresina frente às mudanças climáticas. Localizada no semiárido nordestino, a cidade aquece até duas vezes mais rápido que a média global de temperatura. Isso torna a capital piauiense mais vulnerável aos impactos ambientais, resultando em enchentes, secas e ondas de calor que a desafiam constantemente.</p>\
          <p>Para solucionar estes e demais problemas, a cidade está implementando soluções de baixo custo baseadas na natureza para lidar com o ciclo da água e o desequilíbrio do ecossistema - reforçando a reputação de “cidade verde” que enfrenta os desafios climáticos.</p>\
          <p>Através de oficinas participativas, o Programa Global de Cidades Resilientes do ONU-Habitat e a Prefeitura de Teresina definiram atores urbanos estratégicos e prioridades da cidade para lidar com choques, riscos e impactos causados pela mudança do clima. As atividades realizadas pelo programa possibilitaram uma avaliação das ações do município, além de definir ações eficazes e estratégicas alinhadas aos problemas enfrentados no presente e que virão no futuro, tornando a cidade mais resiliente e sustentável.</p>\
          <p style = "margin-top:1.75em; font-size:0.75rem;">As tonalidades de vermelho indicam áreas onde as temperaturas médias anuais de 2019 foram mais quentes do que no período de 1951 a 1980 (Fonte: <a href="https://neo.gsfc.nasa.gov/view.php?datasetId=GISS_TA_Y&date=2023-03-01">NASA/GISS/2019)</a>.</p>\
          <img style = "width: 35%;" src="assets/legend_teresina.png" alt="Legenda de tonalidades de temperaturas anormais"/>\
        </div>\
      </div>\
      ',
      location: {
          center: [-42.78482, -5.18682],
          zoom: 1.25,
          pitch: 0.00,
          bearing: 0.00,
          speed: 1
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: true,
      callback: '',
      onChapterEnter: [
        {
            layer: 'pin-teresina',
            opacity: 1
        },
        //{
        //  layer: 'global-anomalia',
        //  opacity: 1,
        //  duration: 1500
        //},
        {
          layer: 'country-label',
          opacity: 0
        }
      ],
      onChapterExit: [
          {
              layer: 'pin-teresina',
              opacity: 0
          },
          //{
          //  layer: 'global-anomalia',
          //  opacity: 0
          //},
          {
            layer: 'country-label',
            opacity: 1
          }
      ]
  },

  {
      id: 'territorio-pe',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      //bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left">\
          <h1 class="laranja">Pernambuco</h1>\
          <p>Pernambuco se manifesta nos contrastes entre Zona da Mata, Agreste e Sertão. É o estado mais antigo do Brasil, com uma história vista a olho nu em suas conhecidas construções coloniais, e ouvida em ritmo de frevo e maracatu. São 185 municípios contando sobre passado e presente de uma região diversa em povo e território.</p>\
          <p>As histórias do presente trazem uma rica vida cultural. Elas dividem espaço com altos índices de violência, deixando marcas no cotidiano de jovens e de mulheres. Para contribuir com as políticas públicas de prevenção social à violência, o ONU-Habitat implementou as metodologias participativas de Desenho de Espaços Públicos e Auditoria de Segurança das Mulheres, ou Cidade Mulher, através da iniciativa Cooperação Pernambuco.</p>\
          <p>A implementação das metodologias passou por comunidades de cada uma das regiões pernambucanas. A grande dispersão territorial permitiu compreender nuances locais importantes, que contemplam a enorme diversidade que define o estado de Pernambuco.</p>\
          <ul class="fa-ul">\
                <li class="li-hover pr-4" value="subregioes-pe">\
                  <span class="fa-li" style="color:#e3773b; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Sertão</span>\
                </li>\
                <li class="li-hover pr-4" value="subregioes-pe">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Agreste</span>\
                </li>\
                <li class="li-hover" value="subregioes-pe">\
                  <span class="fa-li" style="color:#f1b944; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Zona da Mata</span>\
                </li>\
          </ul>\
        </div>\
      </div>\
      ',
    location: {
        center: [-38.17727, -8.29398],
        zoom: 5.5,
        pitch: 40.00,
        bearing: 0.00,
        speed: 1
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    spinGlobe: false,
    mapInteractive: true,
    callback: '',
    onChapterEnter: [
      //{
      //    layer: 'munic-pe',
      //    opacity: 1
      //},
      {
        layer: 'subregioes-pe',
        opacity: 0.7
      }
    ],
    onChapterExit: [
      //  {
      //     layer: 'munic-pe',
      //      opacity: 0
      // },
        {
          layer: 'subregioes-pe',
          opacity: 0
        }
    ]
  },

  {
        id: 'historia-pernambuco',
        alignment: 'full',
        hidden: false,
        //title: 'Abertura',
        bookmark: 'Pernambuco',
        description: '\
        <div class="light">\
          <div class="container-history no-gutters p-left p-right">\
            <div class="row no-gutters">\
              <div class="col-md-12 col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Infinitas conexões entre o espaço público e o sideral</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6 col-lg-6">\
                      <p>Foi em uma Oficina de Desenho de Espaços Públicos, realizada na Escola de Referência Senador Antônio Farias, localizada no Ibura, comunidade periférica da capital pernambucana, que Yasmin Bernardo, uma jovem de 14 anos, se destacou.</p>\
                      <p>Comunicativa e articulada, não demorou muito para que isso acontecesse. Em dois dias de atividades ela entrevistou pessoas nas ruas, foi entrevistada, construiu uma maquete, recitou uma poesia e ainda defendeu melhorias prioritárias para um espaço público em seu bairro.</p>\
                      <p>Dentre elas, a instalação de uma luneta em uma quadra localizada no alto da comunidade, para que seus moradores pudessem observar corpos celestes em noites de céu limpo. Por mais lúdico que pareça, é uma sugestão sofisticada.</p>\
                      <p>Lunetas em espaços públicos contribuem para aproximar a ciência das pessoas, servindo também como ferramenta educacional; aumentam a circulação de pessoas no período noturno e, assim, podem reduzir a sensação de insegurança; fortalecem laços de comunidade, oferecendo às pessoas uma experiência comum, de observação astronômica; inspiram maior atenção e cuidado com o espaço público; despertam um potencial turístico para a comunidade — uma lista infinita de benefícios que fortalecem princípios de um desenvolvimento urbano e humano.</p>\
                      <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário “Pés no Chão, Janela do Céu”, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco, através do Departamento de Física, representado pelo professor Antônio Miranda; repercussão na imprensa e recebimento de doações para equipar o Clube, além do telescópio emprestado pela Universidade.</p>\
                  </div>\
                  <div class="col-md-6 col-lg-6">\
                      <p>Ela não tinha consciência da potência de sua ideia e, talvez, um profissional urbanista não elegeria a instalação de uma luneta como prioridade para a qualificação de um espaço público em uma comunidade. Porém, com o encontro desses dois universos e com o respeito às soluções inusitadas, <strong>muitos caminhos foram abertos e alguns já renderam frutos</strong>.</p>\
                      <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário <strong>“Pés no Chão, Janela do Céu”</strong>, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco, através do Departamento de Física, representado pelo professor Antônio Miranda; repercussão na imprensa e recebimento de doações para equipar o Clube, além do telescópio emprestado pela Universidade.</p>\
                      <p>Está aí a importância de se promover oportunidades para que as ideias e críticas de jovens encontrem profissionais e pessoas capazes de tomar decisões, como aconteceu no projeto Cooperação Pernambuco. Em parceria, transformações e melhorarias para a vida das pessoas nas cidades são possíveis.</p>\
                      <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário “Pés no Chão, Janela do Céu”, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco Pernambuco.\
                      </p>\
                  </div>\
                </div>\
              </div>\
              <div class="col-md-12 col-lg-4 align-self-lg-end">\
                  <img src="images/historia-pernambuco.jpg" alt="" class="img-hist"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
          //center: [-38.17727, -8.29398],
          //zoom: 5.5,
          //pitch: 40.00,
          //bearing: 0.00,
          speed: 1
            // flyTo additional controls-
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            //speed: 2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
        //  {
        //      layer: 'munic-pe',
        //      opacity: 1
        //  },
          {
            layer: 'subregioes-pe',
            opacity: 0.7
          }
        ],
        onChapterExit: [
         //   {
         //       layer: 'munic-pe',
         //       opacity: 0
         //   },
            {
              layer: 'subregioes-pe',
              opacity: 0
            }
        ]
    },

    {
      id: 'territorio-alagoas',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left">\
          <h1 class="laranja">Alagoas</h1>\
          <p>Apesar de serem elementos marcantes em Maceió e estarem presentes em mais da metade de seus bairros, as grotas – assentamentos precários que ficam em vales sinuosos e vulneráveis – podem se destacar ou passar totalmente despercebidas na paisagem local.</p>\
          <p>Por muito tempo, as grotas foram invisibilizadas. Até um passado bastante recente, pouco ou quase nada se sabia sobre elas. Por serem morada de boa parte da população de baixa renda da capital alagoana, elas ocupavam também um outro espaço, desta vez imaterial e de estigma no imaginário coletivo.</p>\
          <p>Entendendo que as cerca de cem grotas de Maceió eram muito mais do que os aspectos negativos que geralmente lhes eram atribuídos, o Governo de Alagoas passou a dar novos contornos à paisagem já conhecida do estado, agregando esses territórios aos centros das discussões. Por meio de uma plataforma de ações focadas em melhorias de mobilidade urbana e habitacionais, veio a infraestrutura necessária para que outras narrativas sobre as grotas fossem construídas e, também, a percepção de que era urgente conhecê-las melhor para atender às suas demandas.</p>\
          <p>Seja por meio da coleta e do tratamento de dados qualificados ou pela capacitação de jovens dessas comunidades, o ONU-Habitat se junta a essa história justamente pela necessidade de produzir conhecimentos e dar novos sentidos linguísticos e práticos a esses territórios, reconstruindo a paisagem das grotas ao lado e a partir de quem de fato as vivencia.</p>\
          <ul class="fa-ul">\
                <li class="li-hover" value="grotas">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Grotas</span>\
                </li>\
          </ul>\
        </div>\
      </div>\
      ',
        location: {
            center: [-35.73583, -9.59052],
            zoom: 11.35,
            pitch: 45.00,
            bearing: 0.00,
            speed: 0.75
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: true,
        callback: '',
        onChapterEnter: [
            {
                layer: 'satellite',
                opacity: 0.5,
                duration: 2000
            },
            {
                layer: 'agsn',
                opacity: 0.7,
                duration: 1000
            }
        ],
        onChapterExit: [
            {
                layer: 'satellite',
                opacity: 0
            },
            {
                layer: 'agsn',
                opacity: 0
            }
        ]
      },
  
      {
        id: 'historia-alagoas',
        alignment: 'full',
        hidden: false,
        bookmark: 'Alagoas',
        description: '\
        <div class="light">\
          <div class="container-history no-gutters p-left p-right">\
            <div class="row no-gutters">\
              <div class="col-md-12 col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Menino da vila, menino da ONU</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6 col-lg-6">\
                    <p>A subida que leva até a Vila Emater II, nos arredores do antigo lixão de Maceió, não é das mais simples. No meio do caminho, entretanto, já é possível se deparar com uma das vistas mais bonitas da <strong class="rosa">cidade: a imensidão do mar de Jacarecica está logo ali.</strong> Ao mesmo tempo que orgulha a comunidade, a paisagem também é motivo de preocupação, já que colabora para a especulação imobiliária na terra que há décadas faz com que famílias de catadores se vejam lutando por moradia adequada e melhores condições de vida.</p>\
                    <p>Quem pode falar melhor sobre a Vila, no entanto, é Antônio Givaldo: jovem de 17 anos, adotado por sua avó materna, que hoje é conhecido como o <strong class="rosa">“o menino da ONU”</strong>. É assim que ele diz ser recebido na vizinhança após aparecer em um vídeo nas redes sociais do ONU-Habitat em que conta sobre o seu lugar no mundo. <strong>“Eles dizem: Parabéns, Antônio! Lute sempre pela nossa comunidade”. Isso é bom. Você sente que o seu esforço tá valendo a pena”</strong>.</p>\
                    <p>Antônio é um dos participantes do <strong class="rosa">Programa Digaê – Juventudes</strong>, Comunicação e Cidade. Realizado pelo ONU-Habitat em parceria com o Governo de Alagoas, o projeto dá continuidade ao trabalho desenvolvido pelas duas instituições nos assentamentos precários que, em Maceió, são conhecidos como grotas. <strong>“O Digaê mudou a minha vida. Foi uma experiência com jovens de diferentes grotas que gostam de se envolver nos movimentos, uma diversidade grande. Eu via neles e replicava em mim. Eles eram um espelho de como eu queria estar hoje”</strong>, compartilha.</p>\
                    </div>\
                  <div class="col-md-6 col-lg-6">\
                    <p>A iniciativa vai formar 80 jovens em temas relacionados ao direito à cidade e à comunicação, estimulando que outras narrativas sobre suas comunidades sejam criadas. <strong>“Eu vim conhecer o direito à cidade no Digaê. Moro numa comunidade bem carente e nunca tinha chegado ninguém pra me dizer: você tem direito à cidade”</strong>.</p>\
                    <p>O território em que Antônio cresceu já simboliza, por si só, uma <strong class="rosa">conquista para a sua comunidade</strong>, que concilia a luta pela garantia de seus direitos ao desafio de fazer com que a coleta seletiva seja implementada no município. Isso tudo talvez explique o brilho que o jovem carrega nos olhos ao falar de onde vem, o carinho nas palavras ao frisar: <strong>“minha comunidade representa tudo pra mim”</strong>.</p>\
                    <p>Talvez justifique, também, as vontades que têm para o futuro dela, como a transformação do antigo lixão em um parque municipal. <strong>“A Vila era muito mal falada e ela não é isso. Tem cultura, diversidade, uma juventude talentosa, mães batalhadoras. Espero que os jovens daqui se interessem ainda mais em políticas públicas, no direito à cidade. Que eles tenham forças e vão na frente porque eu vou continuar lutando pela nossa comunidade até o fim da minha vida”</strong>.</p>\
                  </div>\
                </div>\
              </div>\
                <div class="col-md-12 col-lg-4 align-self-lg-end">\
                    <img src="images/historia-alagoas.jpg" alt="" class="img-hist"/>\
                </div>\
              </div>\
          </div>\
        </div>\
        ',
        location: {
          //center: [-35.73026, -9.64462],
          //zoom: 11.35,
          //pitch: 45.00,
          //bearing: 0.00,
          speed: 1
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'agsn',
              opacity: 0.75
          }
        ],
        onChapterExit: [
          {
              layer: 'agsn',
              opacity: 0
          }
        ]
     },

    {
      id: 'territorio-bh',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      //bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left">\
          <h1 class="laranja">Belo Horizonte</h1>\
          <p>A região central de Belo Horizonte apresenta um desenho urbano com ruas amplas, arborizadas e repletas de rios e córregos, com vistas para a Serra do Curral. O cenário de modernização, construído desde o final do século 19, se contrapõe a outro, formado pela expansão urbana, com diversos assentamentos informais. Em um contexto mais recente, iniciado nos anos 2010, quando ocupando as ruas e experimentando a cidade de outras maneiras, as pessoas de Belo Horizonte passam a reivindicar seu pertencimento à cidade e levantam diversas pautas urbanas. E é nesse contexto em que surgem as ocupações da Izidora – considerado um dos maiores conflitos fundiários latino-americanos pela Habitat III, é também um dos maiores movimentos por direito à moradia do país.</p>\
          <p>Izidora carrega em sua essência uma comunidade engajada na busca de melhorias para seu território, que demanda em uníssono: queremos morar, e queremos morar com direitos. Para promover o diálogo e transformar demandas em planos de ação e urbanização, surge o PRO-IZIDORA (Programa de Proteção Ambiental e Melhorias Urbanas da região da Izidora), iniciativa da Prefeitura de Belo Horizonte, por meio da SMPU e da Urbel, em parceria com o ONU-Habitat e o UNOPS. A partir dele, reivindicações da população ganham novos contornos com a real intenção da chegada de políticas públicas e direitos básicos às quatro ocupações da região, cujos nomes refletem mulheres que marcaram a história da cidade e substantivos que representam sua luta: Helena Greco, Rosa Leão, Vitória e Esperança.</p>\
          <ul class="fa-ul">\
                <li class="li-hover" value="agsn">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Ocupações da Izidora</span>\
                </li>\
          </ul>\
        </div>\
      </div>\
      ',
      location: {
          center: [-43.93074, -19.86761],
          zoom: 11.71,
          pitch: 60.50,
          bearing: 0.00,
          speed: 1
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: '',
      onChapterEnter: [
        {
            layer: 'satellite',
            opacity: 0.5,
            duration: 2000
        },
        {
            layer: 'agsn',
            opacity: 0.7,
            duration: 1000
        }
      ],
      onChapterExit: [
          {
              layer: 'satellite',
              opacity: 0
          },
          {
              layer: 'agsn',
              opacity: 0
          }
      ]
  },

   {
      id: 'historia-bh',
      alignment: 'full',
      hidden: false,
      bookmark: 'Belo Horizonte',
      description: '\
      <div class="light">\
        <div class="container-history no-gutters p-left p-right">\
          <div class="row no-gutters">\
            <div class="col-md-12 col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Articulando o direito à moradia</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6 col-lg-6">\
                    <p>Charlene Cristiane Egídio foi uma das primeiras pessoas a chegar no terreno que se tornaria a Rosa Leão, uma das quatro ocupações da Izidora. Ela e seu filho Pedro, na época com três anos, moraram em uma barraca de lona nos primórdios da ocupação, em 2013. Não levou muito tempo até que, em meio a uma comunidade que crescia e tinha a necessidade urgente de se organizar, a liderança nata de Charlene tomasse forma, dando a ela uma posição de coordenação.</p>\
                    <p>Com a ocupação ganhando corpo, casas começaram a ser construídas, ruas precisavam ser abertas. E cada centímetro de decisão passava por uma força característica da Izidora: a participação popular. Ela está presente em cada fase da história de ocupação, em cada articulação com instituições que, ao longo do tempo, passaram a auxiliar a comunidade.</p>\
                    <p>Assumir o papel de liderança trouxe mudanças. Uma delas foi receber formações que aguçaram seu olhar político, ético e humano, que expandiu o horizonte da função a ser cumprida. "A gente passa a se formar ser humano. Porque aqui você começa a sentir a dor do outro, e aí começa a entender que é um chamado ser liderança. É insano, mas é um chamado necessário".</p>\
                    <p>Para ela, sua principal função é a articulação. E esse papel é fundamental na elaboração do plano de urbanização popular que passou a nascer. Junto à comunidade, a Prefeitura de Belo Horizonte, o ONU-Habitat e o UNOPS trabalham no Plano de Urbanização Sustentável da Izidora, o primeiro para um assentamento informal em Belo Horizonte que traz a resiliência urbana como tema central.</p>\
                </div>\
                <div class="col-md-6 col-lg-6">\
                    <p>Charlene se envolveu com o Plano desde o princípio, abrindo caminhos de diálogo entre as partes. Para ela, é importante mediar a conversa entre os técnicos e a população, garantindo que esta entenda o papel e a linguagem dos parceiros. "A linguagem técnica tem que ser transformada em linguagem popular quando a gente tá falando de diversidade. Se o povo não tá entendendo, o meu papel é buscar entendimento e saber como funciona o projeto". Sua expectativa é de que o plano, fruto dessa parceria, seja o ideal para o território, contemplando os desejos e demandas de quem vive ali.</p>\
                    <p>Nesse processo, ela vê que muito já mudou. Ela se descobriu uma mulher empoderada, que não abaixa a cabeça a ninguém. Já Izidora tem o potencial de ser exemplo internacional, transformando o que era conflito fundiário em um projeto urbanístico feito em conjunto pelo olhar dos moradores e pelo poder público. "Imagine se todo mundo, todos os bairros que são feitos em Belo Horizonte, tivessem a oportunidade dessa escuta, de você dizer o que que quer aqui, e você discutir isso com o povo que vai viver lá, né? Hoje, depois de 10 anos, a gente vê esperança, perspectiva de melhora, de respeito, de cidadania, de dizer que a gente faz parte de Belo Horizonte e tem direito de morar em Belo Horizonte".</p>\
                </div>\
              </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                <img src="images/historia-bh.jpg" alt="" class="img-hist"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
          center: [-43.92136, -19.80455],
          zoom: 14.40,
          pitch: 56.69,
          bearing: 28.64,
          speed: 2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'agsn',
            opacity: 0.7
        }
      ],
      onChapterExit: [
          {
              layer: 'agsn',
              opacity: 0
          }
      ]
  },

  {
        id: 'territorio-jf',
        alignment: 'left',
        hidden: false,
        //title: 'Escritório ONU-Habitat Brasil',
        //bookmark: 'Territorios',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left">\
            <h1 class="laranja">Juiz de Fora</h1>\
            <p>Maior cidade da Zona da Mata de Minas Gerais, Juiz de Fora é reconhecida pelo seu povo acolhedor, pelo espírito vanguardista e pelas diversas experiências que proporciona. Com uma população de aproximadamente 577 mil habitantes e uma localização estratégica, ela se apresenta como capital regional, exercendo influência nos municípios do entorno.</p>\
            <p>Manchester Mineira e Princesa de Minas são alguns títulos que demonstram sua identidade pioneira e singular. O município foi um importante polo industrial, abrigando diversas fábricas ao longo de sua expansão, como Marmelos Zero, a primeira grande usina hidrelétrica da América do Sul.</p>\
            <p>Andar pelas ruas é reconhecer em cada canto um pouco da sua história de 172 anos, da sua arquitetura tradicional, dos seus contornos culturais. Mas é também perceber as inúmeras desigualdades territoriais. Conhecer o seu espaço, suas contradições e seus moradores possibilita que Juiz de Fora seja transformada para garantir o direito à cidade a sua população. Para isso, o projeto Territórios da Cidadania atua em 141 microterritórios historicamente excluídos do planejamento urbano. Neste contexto, os dados se transformam em políticas públicas capazes de melhorar a vida de todos os juizforanos.</p>\
            <ul class="fa-ul">\
                <li class="li-hover" value="grotas">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Microterritórios</span>\
                </li>\
            </ul>\
          </div>\
        </div>\
        ',
      location: {
          center: [-43.34615, -21.75693],
          zoom: 11,
          pitch: 45.00,
          bearing: 0.00,
          speed: 2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: true,
      callback: '',
      onChapterEnter: [
        {
            layer: 'satellite',
            opacity: 0.5,
            duration: 2000
        },
        {
            layer: 'agsn',
            opacity: 0.7,
            duration: 1000
        }
      ],
      onChapterExit: [
          {
              layer: 'satellite',
              opacity: 0
          },
          {
              layer: 'agsn',
              opacity: 0
          }
      ]
    },

    {
      id: 'historia-jf',
      alignment: 'full',
      hidden: false,
      bookmark: 'Juiz de Fora',
      description: '\
      <div class="light">\
        <div class="container-history no-gutters p-left p-right">\
          <div class="row no-gutters">\
            <div class="col-md-12 col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">De volta às origens</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6 col-lg-6">\
                    <p>Em 2022, a geógrafa Elaine Cristóvão Coelho viajou quase 1,5 mil km de Salvador para voltar ao lugar onde sua trajetória começou. Ela cresceu no bairro Marumbi, na zona leste de Juiz de Fora (MG), uma região que historicamente apresenta alta vulnerabilidade social. Atuando como supervisora de campo no ONU-Habitat, ela percorreu uma extensão equivalente a 350 campos de futebol em vias íngremes, sinuosas, com características que mesclam rural e urbano. Tudo para promover o desenvolvimento socioeconômico e garantir o acesso a programas de cidadania em 141 microterritórios da cidade.</p>\
                    <p>O Territórios da Cidadania, projeto no qual atuou, é uma parceria com a Prefeitura de Juiz de Fora para realizar um diagnóstico dos espaços urbanos, das moradias e da população que reside nesses locais. Atuando como uma ferramenta de planejamento e gestão, os dados coletados auxiliam na superação de desigualdades socioespaciais, embasando a formulação de políticas públicas e priorizações de investimento.</p>\
                    <p>A conexão de Elaine com trabalhos de impacto social parte da sua própria vivência. Enquanto crescia, sua casa era de chão batido, as ruas não tinham asfalto e, para estudar, seu padrinho ajudava na compra dos cadernos. A educação era um instrumento de transformação social. “Venho de uma linhagem de empregadas domésticas: minha mãe, minha avó, minhas tias e eu também fomos empregadas domésticas. Sempre tive fé na educação porque sabia que ela poderia me salvar profissional e economicamente”.</p>\
                    <p>Elaine se formou geógrafa e, vinte anos depois, retornou ao território para atuar como profissional do projeto. A contratação de habitantes dos microterritórios no projeto possibilitou a entrada de pessoas especializadas que entendem melhor a realidade dessas localidades e se identificam</p>\
                </div>\
                <div class="col-md-6 col-lg-6">\
                    <p>com sua população. Essa é também uma forma de dar um retorno para regiões historicamente invisibilizadas no planejamento urbano da cidade.</p>\
                    <p>Elaine entende que as informações coletadas não são só números. Por trás, há uma pessoa com frustrações, problemas e sonhos. “É preciso analisar o que aquele dado quer dizer. Existe um contexto que ajuda a explicar esse indicador. As pessoas precisam e querem ser ouvidas. Por isso sempre gostei muito de acompanhar o trabalho de campo”.</p>\
                    <p>As metodologias aplicadas na cidade — Mapa Rápido Participativo e Perfil Socioeconômico — são participativas. Para Elaine, equilibrar a visão técnica com a percepção da população é o primeiro passo para garantir o sucesso do projeto: perceber que a Prefeitura busca conhecer o indivíduo e suas necessidades é uma forma de trazer como retorno políticas públicas mais assertivas. “Nesse diagnóstico, é importante se esvaziar das nossas próprias percepções. Eu vou ouvir do outro o que ele pensa sobre si e sobre onde ele mora”, explica. “Não me lembro disso já ter sido feito aqui; é uma inovação da qual fico muito feliz por ter participado. Sei que vai mudar a vida de muita gente”.</p>\
                    <p>E mudou a vida dela também. “Parecia uma possibilidade tão remota trabalhar na ONU, era algo que eu nem sonhava. Isso me dá esperança de que pessoas como eu, mulheres negras, de origem pobre, podem alcançar esses espaços”, comemora. “Eu parti de muito longe, é como uma chancela da minha trajetória: tá vendo onde você pode chegar? Isso só me motiva a buscar mais e entender que eu posso, que as minhas também podem. Acho que eu sou parecida com quem sempre sonhei ser”.</p>\
                </div>\
              </div>\
          </div>\
          <div class="col-md-12 col-lg-4 align-self-lg-end">\
                <img src="images/historia-jf.jpg" alt="" class="img-hist"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-43.34615, -21.75693],
        zoom: 11,
        pitch: 45.00,
        bearing: 0.00,
        speed: 2
          // flyTo additional controls-
          // These options control the flight curve, making it move
          // slowly and zoom out almost completely before starting
          // to pan.
          //speed: 2, // make the flying slow
          //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'agsn',
            opacity: 0.7
        }
      ],
      onChapterExit: [
          {
              layer: 'agsn',
              opacity: 0
          }
      ]
    },

    {
      id: 'territorio-rj',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      //bookmark: 'Territorios',
      image: false,
      description: '\
      <div class="light rounded-lg shadow-lg">\
        <div class="container p-right-left">\
          <h1 class="laranja">Rio de Janeiro</h1>\
            <p>“A rua tem alma!”, declarou João do Rio em 1908. No Rio de Janeiro, a alma das ruas tem protagonismo de quem produz a história da cidade. Por elas, estas histórias são transportadas como células nas veias de uma cidade viva.</p>\
            <p>São mais de seis milhões de pessoas ocupando as ruas de formas distintas – e, portanto, vivendo cidades distintas. Por isso, a rua também ensina sobre desigualdades. Há 1.074 favelas no Rio de Janeiro, onde vive 22% da população carioca. É o maior percentual de pessoas vivendo em favelas do Brasil. Nesse contexto, os desafios do crescimento urbano acelerado são mais latentes e visíveis.</p>\
            <p>Ao mesmo tempo em que denunciam desigualdades, as ruas das favelas guardam uma fonte inesgotável de cultura, potencial econômico e desenvolvimento de capacidades. É por elas que, de porta em porta, o ONU-Habitat e a Prefeitura da Cidade do Rio de Janeiro mapeiam a materialidade das condições de vida de quem as ocupam, na busca de reduzir o risco social de famílias mais vulneráveis. Os dados coletados são uma ferramenta essencial para a implementação de políticas públicas baseadas em evidência, promovendo um atendimento integrado e um monitoramento da situação. É assim que, com o olhar atento do poder público, as ruas da favela vão pouco a pouco transformando as histórias que contam.</p>\
            <ul class="fa-ul">\
                <li class="li-hover" value="grotas">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Vilas e Favelas</span>\
                </li>\
            </ul>\
        </div>\
      </div>\
      ',
        location: {     
            center: [-43.39320, -22.92253],
            zoom: 10.40,
            pitch: 46.00,
            bearing: -13.60,
            speed: 1
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: true,
        callback: '',
        onChapterEnter: [
          {
              layer: 'satellite',
              opacity: 0.5,
              duration: 2000
          },
          {
              layer: 'agsn',
              opacity: 0.7,
              duration: 1000
          }
        ],
        onChapterExit: [
            {
                layer: 'satellite',
                opacity: 0
            },
            {
                layer: 'agsn',
                opacity: 0
            }
        ]
    },

    {
        id: 'historia-rj',
        alignment: 'full',
        hidden: false,
        //title: 'Abertura',
        bookmark: 'Rio de Janeiro',
        description: '\
        <div class="light">\
          <div class="container-history no-gutters p-left p-right">\
            <div class="row no-gutters">\
              <div class="col-md-12 col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">De um teto para um lar</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6 col-lg-6">\
                      <p>Há mais de 40 anos, Vera Lucia Jorge – ou dona Vera – fez da Vila do João sua casa. Ela não “é cria” de lá, mas seus filhos são. Hoje, ela é aposentada e mora com seu filho caçula em uma casa de cinco cômodos.</p>\
                      <p>A Vila do João é uma favela que faz parte do Complexo da Maré, no Rio de Janeiro. Dona Vera conta que tem tudo perto de casa: do mercado à ginástica. “Eu amo isso aqui”, enfatiza, olhando ao redor como quem tem na casa uma parceira. O amor pela comunidade é antigo, afinal, foi lá onde ela criou filhos e filhas, mas o olhar sobre a casa já foi de preocupação.</p>\
                      <p>“A casa era uma coisa muito complicada, muito pobre mesmo. A janela era a mesma coisa que não ter. Ela era segurada com uma bengala: quando encostava, caía. Porta a gente encostava com o sofá".</p>\
                      <p>Hoje, o piso branco, as portas e janelas de ferro e o banheiro com água encanada contam a história de uma construção que se transformou em lar. Dona Vera foi contemplada pelo projeto Casa Carioca, da Secretaria de Ação Comunitária da Prefeitura da Cidade do Rio de Janeiro. O projeto seleciona moradias, a partir de critérios sociais, e realiza melhorias habitacionais focadas no bem-estar e na saúde de seus moradores.</p>\
                      <p>As famílias contempladas foram identificadas a partir da busca ativa do programa Territórios Sociais. Foi o que aconteceu com dona Vera, que respondeu ao questionário do programa em novembro de 2019, e o atendimento da família seguiu até 2022, quando a obra foi iniciada. “Foi um presente de Natal e ano novo”, relembra.</p>\
                  </div>\
                  <div class="col-md-6 col-lg-6">\
                      <p>O Territórios Sociais é uma parceria entre ONU-Habitat e a Prefeitura da Cidade do Rio de Janeiro que se baseia em três pilares: busca ativa, atendimento integrado e monitoramento. O programa realiza o mapeamento das áreas com os menores índices de desenvolvimento social, identificando famílias mais vulneráveis com o objetivo de reduzir seu risco social através de ações integradas das diversas políticas públicas que compõem a iniciativa.</p>\
                      <p>Informações como condições de edificação, acessibilidade e vulnerabilidade social são compartilhadas como insumo para oferta de serviços e políticas públicas orientadas por dados. O programa tem atuado nos dez maiores complexos de favela da cidade, e recentemente iniciou a expansão para outros territórios – com a qual pretende alcançar mais 486 mil domicílios.</p>\
                      <p>“A parceria do Casa Carioca com o Territórios Sociais foi importantíssima porque a gente pula a etapa de diagnóstico justamente porque ele já existe. Com esses dados, o Casa Carioca fica muito mais embasado, o que é fundamental. A melhoria da casa não é só a parte física: mexe com a autoestima da pessoa também”, compartilha Marli Peçanha, secretária de Ação Comunitária.</p>\
                      <p>Para dona Vera, participar do projeto Casa Carioca foi um presente. Muito além das melhorias em sua casa, ela se encantou com as mudanças que ocorreram em sua comunidade como um todo. Para ela, essa foi a “coisa mais linda” da iniciativa. “Pra mim, foi uma mudança muito boa que eles trouxeram pra comunidade. Como moradora, amei esse projeto”.</p>\
                  </div>\
                </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                  <img src="images/historia-rj.jpg" alt="" class="img-hist"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
            //center: [-43.39320, -22.92253],
            //zoom: 10.40,
            //pitch: 46.00,
            //bearing: -13.60,
            speed: 1
            // flyTo additional controls-
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            //speed: 2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'agsn',
              opacity: 0.7
          }
        ],
        onChapterExit: [
            {
                layer: 'agsn',
                opacity: 0
            }
        ]
    },

    {
        id: 'territorio-sp',
        alignment: 'left',
        hidden: false,
        bookmark: 'Territorio São Paulo',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left">\
            <h1 class="laranja">São Paulo</h1>\
            <p>Uma metrópole global profundamente dinâmica, digitalizada e complexa. São Paulo é lar de 12,4 milhões de pessoas, distribuídas em uma área de mais de 1,5 mil quilômetros quadrados. Somada aos outros 38 municípios que compõem sua Região Metropolitana, ela concentra metade da população do Estado e mais de 30% do PIB do país.</p>\
            <p>Ao longo do século 19, durante o Ciclo do Café, o rápido crescimento populacional e produtivo da cidade consolidou sua mancha urbana, comprometendo os biomas locais – especialmente o de Mata Atlântica, predominante na região. Além do espaço geográfico, também se perderam inúmeras espécies de fauna e flora que faziam parte desse ecossistema.</p>\
            <p>Essa trajetória, no entanto, está em transformação. Hoje, apesar da fama de selva de pedra ser parte incontornável do imaginário da cidade, quase metade do território de São Paulo corresponde à cobertura verde, e quase um terço é território rural. Em 30 anos, o número de parques cresceu de 32 para 111, o que ilustra a preocupação do município em incentivar o desenvolvimento e a ocupação dos espaços verdes pelas pessoas.</p>\
            <p>Neste processo, São Paulo tem mantido em vista a necessidade de avaliar a qualidade de parques e áreas de conservação, promovendo espaços verdes de maneira mais igualitária para seus milhões de moradores. Além disso, outras ações também estão em foco: capacitar instituições e sociedade civil para criar, gerir e monitorar a qualidade dos equipamentos urbanos; identificar áreas em potencial para desenvolver novos espaços públicos verdes e garantir a participação da população de forma equilibrada com relação a raça, classe, gênero e território.</p>\
            <ul class="fa-ul">\
                <li class="li-hover pr-4" value="grotas">\
                  <span class="fa-li" style="color:#cc3480; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Zona urbana</span>\
                </li>\
                <li class="li-hover" value="grotas">\
                  <span class="fa-li" style="color:#378f24; opacity: 0.75">\
                  <i class="fa fa-square"></i></span>\
                  <span>Zona rural</span>\
                </li>\
            </ul>\
          </div>\
        </div>\
        ',
        location: {
          center: [-46.87607, -23.69847],
          zoom: 9.16,
          pitch: 45.00,
          bearing: 0.00,
          speed: 1
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'sp-urbano-rural',
              opacity: 0.75
          }
        ],
        onChapterExit: [
            {
                layer: 'sp-urbano-rural',
                opacity: 0
            }
        ]
    },

    {
        id: 'historia-sp',
        alignment: 'full',
        hidden: false,
        bookmark: 'História São Paulo',
        description: '\
        <div class="light">\
          <div class="container-history no-gutters p-left p-right">\
            <div class="row no-gutters">\
              <div class="col-md-12 col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Horizonte mais verde na metrópole global</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6 col-lg-6">\
                      <p><strong>Espaços públicos verdes</strong> ganharam ainda mais protagonismo após a pandemia da COVID-19. Na percepção da coordenadora de Gestão de Parques e Biodiversidade da Secretaria Municipal do Verde e do Meio Ambiente (SVMA) de São Paulo, Tamires Oliveira, <strong>“as pessoas passaram a ocupar os parques com muito mais intensidade nos últimos três anos, criaram novos usos e finalidades, estão muito mais presentes ali”</strong>. E a cidade está atenta a essa tendência. Nos últimos anos, a SVMA vem trabalhando para aprimorar estratégias de planejamento, implementação e gestão dos espaços verdes.</p>\
                      <p>Parte desse movimento foi o diálogo iniciado com o ONU-Habitat para trocar experiências, metodologias e ferramentas. O primeiro marco da parceria foi a participação ativa da Prefeitura de São Paulo no Circuito Urbano – a maior iniciativa nacional para celebrar o Outubro Urbano.</p>\
                      <p>A formalização da cooperação se deu com a assinatura de um Memorando de Entendimento (MoU) do ONU-Habitat com a SMVA, a Secretaria Municipal de Relações Internacionais (SMRI) e a Secretaria de Governo em novembro de 2021, permitindo a ampliação das frentes de intercâmbio e atividades conjuntas. Para avançar nos esforços de promover maior acesso, participação popular e resiliência dos espaços verdes de São Paulo, em 2022 foi assinado um projeto conjunto entre a SVMA e o ONU-Habitat que terá a duração de três anos.</p>\
                      <p>Em 2021 e 2022, a cidade marcou presença como organizadora principal e coorganizadora de 13 eventos do Circuito Urbano,</p>\
                  </div>\
                  <div class="col-md-6 col-lg-6">\
                      <p>e também contou com o apoio institucional do ONU-Habitat para a representação da equipe da SVMA da 11ª edição Fórum Urbano Mundial, na Polônia, e da COP27, no Egito, ambos em 2022.</p>\
                      <p>No final de 2022, a parceria avançou mais uma etapa, com a assinatura do acordo para o desenvolvimento do projeto <strong>Viva o Verde SP</strong>, que visa a promoção de espaços públicos verdes mais justos, resilientes e sustentáveis, acessíveis a todas e todos. Iniciado em janeiro de 2023, o projeto conta com uma equipe alocada em São Paulo para aplicar as metodologias de avaliação do ONU-Habitat, entre outras.</p>\
                      <p><strong>“Um aspecto crucial dessa parceria é termos um diagnóstico real dos parques. Isso é desafiador devido ao número muito grande de equipamentos e à diversidade entre eles. Contar com esse trabalho com o ONU-Habitat, com uma equipe qualificada, vai trazer muitos ganhos. Teremos material, um norte a seguir e consistência em qualquer política pública que se queira desenhar para esses equipamentos públicos”</strong>, explica Tamires.</p>\
                      <p>O projeto seguirá até 2025, mas as primeiras etapas serão desenvolvidas já em 2023, com a aplicação das metodologias de avaliação de espaços públicos em toda a cidade, oficinas participativas para elaborar propostas de melhoria desses espaços, treinamentos com o governo e sociedade civil para aplicação dessas metodologias e elaboração de planos de gestão para oito parques pré-selecionados.</p>\
                      </p>\
                  </div>\
                </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                  <img src="images/historia-sao-paulo.jpg" alt="" class="img-hist"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
          //center: [-46.87607, -23.69847],
          //zoom: 9.76,
          //pitch: 45.00,
          //bearing: 0.00,
          speed: 1
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'sp-parques-cent',
              opacity: 0.5
          }
        ],
        onChapterExit: [
            {
                layer: 'sp-parques-cent',
                opacity: 0
            }
        ]
      },

      {
          id: 'territorio-conexoes',
          alignment: 'left',
          hidden: false,
          //title: 'Escritório ONU-Habitat Brasil',
          //bookmark: 'Territorios',
          image: false,
          description: '\
          <div class="light rounded-lg shadow-lg">\
            <div class="container p-right-left">\
              <h1 class="laranja">Conexões Urbanas</h1>\
                <p>Mais do que bordas de um território, cidades nas fronteiras podem ser pontos de encontro cultural. Lugares nos quais são fortalecidas as conexões urbanas. Esse é o exemplo percebido em duas regiões na fronteira entre Brasil, Argentina e Paraguai.</p>\
                <p>A primeira fica entre Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai) e tem 500 mil habitantes - o maior núcleo urbano da fronteira brasileira. A região é conhecida pelas Cataratas do Iguaçu, pela Usina Hidrelétrica de Itaipu e pela expressividade das atividades comerciais. Além de portas de entrada para seus respectivos países, os municípios também são o destino de imigrantes, que somam cerca de 80 nacionalidades.</p>\
                <p>A segunda região é formada pelos municípios de Barracão, Bom Jesus do Sul, Dionísio Cerqueira (Brasil) e Bernardo de Irigoyen (Argentina). Com 50 mil habitantes, apresentam modelos de governança e protagonismo de atores locais para o desenvolvimento integrado. Um exemplo dessa colaboração foi a implementação do Parque Turístico e Ambiental de Integração, um espaço público na fronteira.</p>\
                <p>Apesar de suas diferenças, ambas as regiões têm em comum a existência de uma mancha urbana única. Por apresentarem desafios e potenciais conjuntos, a colaboração transfronteiriça é vista como fundamental para o desenvolvimento integrado. E, para que o território expresse esse desejo, é imprescindível que o meio urbano seja integrado por uma rede de espaços públicos bem distribuídos, acessíveis, seguros e inclusivos, capazes de servir de ferramenta para a coesão social entre pessoas de nacionalidades distintas.</p>\
                <ul class="fa-ul">\
                  <li class="li-hover" value="grotas">\
                    <span class="fa-li" style="color:#cc3480; opacity: 1">\
                    <i class="fa fa-minus"></i></span>\
                    <span>Fronteira compartilhada entre Argentina, Brasil e Paraguai</span>\
                  </li>\
                </ul>\
            </div>\
          </div>\
          ',
          location: {
                center: [-54.24178, -26.16576],
                zoom: 8.42,
                pitch: 54.02,
                bearing: -30.90,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'fronteira',
                  opacity: 1
              }
            ],
            onChapterExit: [
                {
                    layer: 'fronteira',
                    opacity: 0
                }
            ]
    },

    {
        id: 'historia-conexoes',
        alignment: 'full',
        hidden: false,
        //title: 'Abertura',
        bookmark: 'Conexões',
        description: '\
        <div class="light">\
          <div class="container-history no-gutters p-left p-right">\
            <div class="row no-gutters">\
              <div class="col-md-12 col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Juntos pelo bem comum</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6 col-lg-6">\
                    <p>Oito lugares, um só espaço. A mágica que acontece na fronteira seca entre Brasil e Argentina parece afrontar as leis da física, mas é real. No mesmo ponto geográfico, ficam concentradas três cidades, três estados e dois países: Dionísio Cerqueira, em Santa Catarina, e Barracão, no Paraná, ambos no Brasil; e Bernardo de Irigoyen, em Misiones, na Argentina.</p>\
                    <p>Essa mágica se expande, também, para os moradores da região, que vivem uma característica cada vez mais rara: harmonia. Por ser uma fronteira seca, as pessoas circulam livremente entre os dois países sem se darem conta da travessia. Da mesma forma, o idioma se mescla em um “portunhol” característico, assim como em diversos outros aspectos culturais. E essa composição gera uma identidade única.</p>\
                    <p>“O material humano que existe em nossa região é muito particular. Talvez isso tenha se formado justamente por esse contexto. A gente não vê a fronteira como um ponto de separação, mas sim de união”.</p>\
                    <p>A frase é de Monica Raquel Franchini, professora que mora do lado argentino da fronteira há mais de 30 anos. Ela integra a coordenação de educação do La Frontera – grupo binacional que trabalha para promover o desenvolvimento e a integração da região em quatro áreas: inovação, turismo, economia e educação.</p>\
                  </div>\
                  <div class="col-md-6 col-lg-6">\
                    <p>A missão do grupo está baseada em promover os pontos fortes da região através da cooperação e da socialização, estabelecendo parcerias e divulgando sua cultura. Apesar de estar à frente da área de educação, a paixão de Monica pela região transborda para os outros domínios.</p>\
                    <p>Um marco para o grupo foi a chegada do Conexões Urbanas, iniciativa do ONU-Habitat cujo objetivo é apoiar os municípios na definição de ações para melhorar sua rede de espaços públicos. O projeto promoveu uma avaliação de 32 espaços públicos da região, analisando sua distribuição, acessibilidade, instalações físicas, conforto, segurança, verde, governança, tipos de usos e usuários. Além do conglomerado na fronteira Brasil e Argentina, fazem parte do projeto os municípios de Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai) e mais duas cidades no Líbano.</p>\
                    <p>Para Monica, essa parceria vai potencializar as ações do grupo La Frontera, já que os dados fornecidos poderão servir de base para muitas outras ações. Ela sente que as duas instituições têm uma sinergia única em seus objetivos. “Temos que acreditar na nossa gente. Não somos uma só cidade, não somos um só povo: somos uma região fronteiriça com as mesmas necessidades e o mesmo interesse: o bem comum. E o projeto Conexões Urbanas está nos ajudando a se potencializar e crescer como um todo”.</p>\
                  </div>\
                </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                  <img src="images/historia-conexoes.jpg" alt="" class="img-hist"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
            center: [-22.32528, -2.14945],
            zoom: 1.5,
            pitch: 0,
            bearing: 0,
            speed: 1
            // flyTo additional controls-
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            //speed: 2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
              layer: 'fronteira',
              opacity: 1
          }
        ],
        onChapterExit: [
            {
                layer: 'fronteira',
                opacity: 0
            }
        ]
    },

    {
        id: 'territorio-curitiba',
        alignment: 'left',
        hidden: false,
        //title: 'Escritório ONU-Habitat Brasil',
        //bookmark: 'Territorios',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">Curitiba</h1>\
              <p>Para além das araucárias e calçadas de petit-pavê, Curitiba é referência internacional em planejamento urbano e soluções de mobilidade. A partir dos anos 1960, a criação de estações-tubo, canaletas exclusivas para ônibus expressos (sistema conhecido por BRT) e parques públicos atrelados a obras arquitetônicas icônicas popularizaram mundo afora a imagem de uma cidade que estava à frente do seu tempo.</p>\
              <p>Não é exagero dizer, portanto, que a capital paranaense tem em seu cerne a inovação. No século 21, no entanto, essa ideia começa a ganhar novos contornos: a de cidade inteligente. As marcas do urbanismo passam a estar interligadas à ideia de que, mais do que conectada, a cidade deve promover qualidade de vida para seus quase dois milhões de habitantes.</p>\
              <p>Esse percurso passa necessariamente pelo desenvolvimento urbano sustentável. Não à toa, uma das metas da cidade é atingir a neutralidade de carbono até 2050. Para auxiliar no alcance desse objetivo, a cidade foi a única do Brasil a participar de um desafio de inovação promovido pelo ONU-Habitat – o <strong class="rosa">Climate Smart Cities Challenge</strong> –, com o objetivo de avançar em soluções para criar comunidades carbono zero.</p>\
          </div>\
        </div>\
        ',
        location: {
            center: [-49.33857, -25.50005],
            zoom: 9.93,
            pitch: 45.00,
            bearing: 0.00,
            speed: 0.5
            // flyTo additional controls-
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            //speed: 2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: true,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    },

    {
      id: 'historia-curitiba',
      alignment: 'full',
      hidden: false,
      //title: 'Abertura',
      bookmark: 'Curitiba',
      description: '\
      <div class="light">\
        <div class="container-history no-gutters p-left p-right">\
          <div class="row no-gutters">\
            <div class="col-md-12 col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Criando comunidades carbono zero</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6 col-lg-6">\
                    <p>Apesar de próximas, o Vale do Pinhão e a Vila Torres não compartilham entre si muitas características. Enquanto a primeira é uma região industrial em reurbanização, a segunda é uma comunidade com baixo índice de desenvolvimento humano. Uma nova iniciativa, no entanto, promete unir as duas regiões em torno de um mesmo objetivo: tornarem-se as primeiras comunidades carbono zero de Curitiba.</p>\
                    <p>Esse foi o objetivo proposto pelo Instituto de Pesquisa e Planejamento Urbano de Curitiba no Climate Smart Cities Challenge – competição proposta pelo ONU-Habitat com o governo da Suécia para acelerar a transição para a neutralidade climática em quatro cidades: Curitiba, Bogotá (Colômbia), Bristol (Reino Unido) e Makindye Ssabagabo (Uganda).</p>\
                    <p>O time vencedor da iniciativa, Curitiba Smart Neighborhoods, é formado pela união de quatro empresas. A startup curitibana Agentes do Meio Ambiente (AMA), líder do time, se inscreveu na competição decidida a avançar. Com aplicativos de zeladoria urbana e educação ambiental, a empresa promove a sustentabilidade em cidades do Paraná e Santa Catarina.</p>\
                    <p>O Desafio é uma competição em etapas. Quando os nove finalistas foram divulgados, a iniciativa convidou os inovadores a formar times que incorporassem seus concorrentes, criando soluções mais robustas. Pensando nisso, o AMA convidou os demais finalistas a se unirem a ela. A resposta positiva veio de três empresas: a também curitibana Ambiente Livre e as suecas Nudgd e Smart Green Stations. Com uma proposta inédita integrando as quatro soluções, a nova equipe foi anunciada vencedora.</p>\
                </div>\
                <div class="col-md-6 col-lg-6">\
                    <p>Para colocar as ideias em prática, o caminho ainda está sendo percorrido. Após o resultado, a equipe passou para a fase de planejamento, detalhando como tornar as comunidades curitibanas neutras em carbono com soluções de energia elétrica, gestão de resíduos e mobilidade.</p>\
                    <p>O resultado é uma complexa proposta de soluções físicas e digitais que, integradas, formam um sistema que atua para reduzir emissões em várias frentes. Cada empresa contribui dentro do time com sua área de expertise. O AMA promove a criação de comunidades digitais com moradores engajados pela sustentabilidade, criando líderes locais e promovendo educação ambiental, gerindo o sistema físico por meio de seus aplicativos. O Ambiente Livre contribui com sistemas de compostagem e hortas urbanas, criando um ciclo orgânico de reciclagem e produção de alimentos. A Smart Green Stations fornece mobiliário urbano inteligente e autossuficiente em energia, potencializando a compostagem. Já a Nudgd acrescenta soluções de ciência comportamental por meio de interações com os cidadãos, promovendo escolhas sustentáveis no dia a dia.</p>\
                    <p>Com a fase de planejamento finalizada, o momento é de iniciar a demonstração do sistema, que ocorrerá após a captação de recursos. O time destaca que, desde que foram anunciados vencedores, já houve mudanças concretas. Além da divulgação internacional e de novas oportunidades de negócio, a equipe ganhou o sentimento de esperança. “A partir do momento em que as pessoas entendem o que estamos fazendo, tem muita gente disposta a ajudar”, destaca Carolina Neiverth Rosas, gestora ambiental no Ambiente Livre. “Percebemos que existe uma nova complementação em prol de projetos socioambientais”.</p>\
                </div>\
              </div>\
          </div>\
          <div class="col-md-12 col-lg-4 align-self-lg-end">\
                <img src="images/historia-curitiba.jpg" alt="" class="img-hist"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-49.33857, -25.50005],
        zoom: 9.93,
        pitch: 45.00,
        bearing: 0.00,
        speed: 0.5
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
  },

  {
        id: 'territorio-sul-global',
        alignment: 'left',
        hidden: false,
        //title: 'Escritório ONU-Habitat Brasil',
        //bookmark: 'Territorios',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left">\
            <h1 class="laranja">Sul Global</h1>\
              <p>O termo Sul Global surgiu nos anos 1980 para substituir expressões tidas como obsoletos, como “países subdesenvolvidos” ou “em desenvolvimento”. Embora a maior parte dos países de baixa e média renda esteja localizada no hemisfério sul, a distinção não reflete totalmente sua real divisão geográfica. Um país é definido como Norte ou Sul não devido à sua localização geográfica, mas a certos indicadores econômicos e de qualidade de vida de sua população.</p>\
              <p>De forma geral, o Sul Global abrange países e regiões muito diferentes entre si. No entanto, uma das formas de uso do termo está relacionada à ideia de que esses países podem colaborar para avançarem juntos em questões sociais, econômicas, ambientais e políticas.</p>\
              <p>No contexto urbano, diferentes territórios do Sul Global podem, por exemplo, trocar conhecimentos para resolver problemas relacionados à falta de moradia ou o acesso à água. Essa forma de colaboração é chamada de Cooperação Sul-Sul (CSS), por meio da qual dois ou mais países promovem intercâmbios de conhecimento, transferências de tecnologias, respostas a emergências e desenvolvimento de meios de subsistência.</p>\
              <p>Sua vantagem é que diferentes regiões do Sul com frequência apresentam problemas ou capacidades similares. Isso significa que, quando um país ou cidade do Sul desenvolve uma solução para um desafio, essa boa prática pode ser adaptada para outro contexto com mais facilidade, chegando a bons resultados de forma mais eficiente.</p>\
              <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="global-south">\
                  <span class="fa-li" style="color:#f1b944;">\
                  <i class="fa fa-square"></i></span>\
                  <span>Região considerada como Sul Global</span>\
                </li>\
              </ul>\
          </div>\
        </div>\
        ',
        location: {
          center: [-51.06166, -15.66707],
          zoom: 0.7,
          pitch: 0.00,
          bearing: 0.00,
          speed: 0.5,
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: true,
        mapInteractive: false,
        callback: '',
        onChapterEnter: [
          {
            layer: 'global-south',
            opacity: 0.85,
            duration: 1000
          },
          {
            layer: 'satellite',
            opacity: 0,
            duration: 100
          }
        ],
        onChapterExit: [
          {
            layer: 'global-south',
            opacity: 0
          },
          {
            layer: 'satellite',
            opacity: 0,
            duration: 0
          }
        ]
    },

    {
      id: 'historia-wwc',
      alignment: 'full',
      hidden: false,
      bookmark: 'Alagoas',
      description: '\
      <div class="light">\
        <div class="container-history no-gutters p-left p-right">\
          <div class="row no-gutters">\
            <div class="col-md-12 col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">O lugar do outro como terreno fértil para aprendizados</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6 col-lg-6">\
                  <p>Era início de 2020, e o mundo ainda se adaptava à rápida digitalização que se deu junto à pandemia da COVID-19. Igor Rezende Vilela, assessor de Assuntos Internacionais da Prefeitura de São Paulo, buscava oportunidades de cooperação internacional que se adequassem às novas recomendações sanitárias.</p>\
                  <p>Foi assim que ele chegou ao <strong class="rosa">Waste Wise Cities</strong>. Desde 2018, o projeto coordenado pela sede do ONU-Habitat promove um intercâmbio de conhecimentos entre cidades do Sul Global. As temáticas de trabalho focam principalmente em reduzir o impacto ambiental negativo das cidades, prestando especial atenção à qualidade do ar e à gestão de resíduos municipais.</p>\
                  <p>São Paulo foi a primeira cidade brasileira a participar da iniciativa, escolhendo Praia, capital de Cabo Verde, para um intercâmbio em gestão de resíduos. As cidades têm diferenças concretas como número de habitantes e características geográficas, mas foram as semelhanças que chamaram atenção.</p>\
                  <p><strong>"Um grande catalizador do intercâmbio foi a proximidade não só linguística como cultural, mesmo com proporções tão diferentes. Em algum momento, São Paulo já teve cem mil habitantes. O que já aconteceu aqui pode ser compartilhado"</strong>, afirma Igor.</p>\
                  <p>Geisa Barreto, técnica superior de Limpeza Urbana em Praia, conta do entusiasmo da equipe ao receber o convite. A capital se candidatou no programa esperando descobrir novos horizontes para a gestão de resíduos.</p>\
                </div>\
                <div class="col-md-6 col-lg-6">\
                  <p><strong>“Aprendemos muito sobre informatização do sistema de recolhimento de resíduos, organização de catadores em cooperativas, tratamento de resíduos hospitalares e estações de transferência. Essa missão teve um impacto positivo, adquirimos experiências que podemos aplicar aqui”</strong>, destaca.</p>\
                  <p>A cooperação estava prevista para ocorrer virtualmente. Qual não foi a felicidade geral ao descobrir que um intercâmbio presencial seria possível em 2022? A experiência envolveu missões para Praia e para São Paulo, e foi essencial para identificar “pontos-cegos” das trocas online.</p>\
                  <p>Hoje, as melhorias nos processos de ambos os territórios já são perceptíveis. Em São Paulo, os técnicos aprenderam formas didáticas de falar sobre o trabalho de gestão de resíduos e passaram a tratar a transparência como prioridade. Em Praia, novas recomendações sobre o tratamento diferenciado de resíduos potencialmente tóxicos, como os hospitalares, estão sendo estudadas.</p>\
                  <p><strong>“Temos vários centros de saúde e grandes hospitais. Fiquei encantada em como São Paulo faz o tratamento deste tipo de resíduos. Eles são transportados separadamente, passam por uma descontaminação, para então serem transportadas para o aterro"</strong>, ressaltou Geisa.</p>\
                  <p>Igor também enfatizou a importância de iniciativas de cooperação Sul-Sul para fortalecer relações entre países do Sul Global e desenvolver a região. <strong>“Para a diplomacia subnacional, a participação de São Paulo nessa iniciativa foi um case. Espero que a partir desse ano isso seja colocado a nível nacional. Essa experiência de sair do seu lugar e ir para o lugar do outro foi valiosa"</strong>.</p>\
                </div>\
              </div>\
            </div>\
            <div class="col-md-12 col-lg-4 align-self-lg-end">\
                  <img src="images/historia-wwc.jpg" alt="" class="img-hist"/>\
              </div>\
            </div>\
        </div>\
      </div>\
      ',
      location: {
        /*center: [-51.06166, -15.66707],*/
        zoom: 0.7,
        pitch: 0.00,
        bearing: 0.00,
        speed: 0.5,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: true,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'global-south',
          opacity: 0.85
        },
        {
          layer: 'satellite',
          opacity: 0,
          duration: 500
        },
        {
          layer: 'country-label',
          opacity: 0
        }
      ],
      onChapterExit: [
        {
          layer: 'global-south',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'satellite',
          opacity: 1,
          duration: 750
        },
        {
          layer: 'country-label',
          opacity: 1
        }
      ]
    }

  ]
  
};