var config = {
  style: "mapbox://styles/gabrielvazdemelo/clc0l7t96001k14s44ih6kdi0",
  accessToken:
    "pk.eyJ1IjoiZ2FicmllbHZhemRlbWVsbyIsImEiOiJja3NqZ2xnbGcyZWNnMzFxdHdibzd0bGU5In0.PC9uOpr-sNcBIYadfuEgUg",
  showMarkers: false,
  markerColor: "#00afe2",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  legend: false, // if legend is set to true, inset will be disabled.
  theme: "light",
  use3dTerrain: false, //set true for enabling 3D maps.
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
      alignment: "left",
      hidden: true,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      description: "",
      location: {
        center: [-22.32528, -2.14945],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
        speed: 2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: 'abertura',
      alignment: 'full',
      hidden: false,
      //title: 'Abertura',
      bookmark: 'Abertura',
      description: '\
      <div class="light">\
        <div class="container-history text-left p-bottom">\
          <div class="row no-gutters">\
            <div class="col-lg-7 pl-4">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1>Palavras de Abertura</h1>\
                </div>\
              </div>\
              <div class="row">\
                <div class="col-md-6">\
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam.</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. <strong>Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet.</strong> Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\
                </div>\
                <div class="col-md-6">\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. <strong>In nulla tellus, sagittis sed magna in, cursus pretium diam.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam.</p>\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet.</p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-5 align-self-center">\
                <img src="images/abertura.png" alt="" class="img-fluid" />\
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
      onChapterEnter: [],
      onChapterExit: []
    },

    {
        id: 'onu-habitat-brasil',
        alignment: 'left',
        hidden: false,
        //title: 'Escritório ONU-Habitat Brasil',
        bookmark: 'ONU-Habitat no Brasil',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-bottom p-right-left">\
            <h1>Escritório ONU-Habitat Brasil</h1>\
            <p>O ONU-Habitat está presente no Brasil há mais de 20 anos, atuando em projetos relacionados a diversos temas urbanos em cidades de todo o país. O Escritório Regional para América Latina e o Caribe e o escritório para o Brasil e Cone Sul estão localizados no Rio de Janeiro.</p>\
            <img class="p-top" src="images/logo_onuhabitat_branco.png" alt="Logo ONU-Habitat em Português"/>\
          </div>\
        </div>\
        ',
        location: {     
            center: [-43.20277, -22.95009],
            zoom: 12.19,
            pitch: 45.00,
            bearing: -40.00,              
            speed: 2
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        spinGlobe: false,
        mapInteractive: true,
        callback: '',
        onChapterEnter: [
             {
                 layer: 'pin-rio',
                 opacity: 1
             }
        ],
        onChapterExit: [
             {
                 layer: 'pin-rio',
                 opacity: 0
             }
        ]
    },

    {
      id: "linha-tempo",
      alignment: "full",
      hidden: false,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      description: '\
      <div class="light">\
        <div class="container p-bottom">\
          <h1 class="p-bottom">Linha do Tempo</h1>\
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\
          <ol class="carousel-indicators cursor-hover">\
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\
          </ol>\
          <div class="carousel-inner">\
              <div class="carousel-item active">\
                  <div class="card">\
                    <img class="card-img-top img-fluid" src="./images/jan.jpg" alt="Card image cap">\
                    <div class="card-static-title">\
                      <h3>Janeiro</h3>\
                      <p>Texto de descrição aqui</p>\
                    </div>\
                    <div class="card-overlay">\
                    <div class="card-body">\
                      <h5 class="card-title">Janeiro</h5>\
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\
                      <a href="http://visaoalagoas2030.al.gov.br/" target="_blank" class="btn-primary cursor-hover">Saiba mais</a>\
                    </div>\
                  </div>\
                </div>\
              </div>\
              <div class="carousel-item">\
              <div class="card">\
                <img class="card-img-top img-fluid" src="./images/jan.jpg" alt="Card image cap">\
                <div class="card-static-title">\
                  <h3>Fevereiro</h3>\
                  <p>Texto de descrição aqui</p>\
                </div>\
                <div class="card-overlay">\
                <div class="card-body">\
                  <h5 class="card-title">Fevereiro</h5>\
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\
                  <a href="http://visaoalagoas2030.al.gov.br/" target="_blank" class="btn-primary cursor-hover">Saiba mais</a>\
                </div>\
              </div>\
            </div>\
          </div>\
          </div>\
          <a class="carousel-control-prev cursor-hover" href="#carouselExampleIndicators" role="button" data-slide="prev">\
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
              <span class="sr-only">Previous</span>\
          </a>\
          <a class="carousel-control-next cursor-hover" href="#carouselExampleIndicators" role="button" data-slide="next">\
              <span class="carousel-control-next-icon" aria-hidden="true"></span>\
              <span class="sr-only">Next</span>\
          </a>\
        </div>\
      </div>\
      ',
      location: {
        center: [-22.32528, -2.14945],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
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
      id: 'historia-sp',
      alignment: 'full',
      hidden: false,
      //title: 'Abertura',
      bookmark: 'Parcerias São Paulo',
      description: '\
      <div class="light">\
        <div class="container-history text-left">\
          <div class="row no-gutters">\
            <div class="col-lg-7 pl-4">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1>Horizonte mais verde na metrópole global</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                    <p>Espaços públicos verdes ganharam ainda mais protagonismo após a pandemia da COVID-19. Na percepção da coordenadora de Gestão de Parques e Biodiversidade da Secretaria Municipal do Verde e do Meio Ambiente (SVMA) de São Paulo, Tamires Oliveira, “as pessoas passaram a ocupar os parques com muito mais intensidade nos últimos três anos, criaram novos usos e finalidades, estão muito mais presentes ali”. E a cidade está atenta a essa tendência. Nos últimos anos, a SVMA vem trabalhando para aprimorar estratégias de planejamento, implementação e gestão dos espaços verdes.</p>\
                    <p>Parte desse movimento foi o diálogo iniciado com o ONU-Habitat para trocar experiências, metodologias e ferramentas. O primeiro marco da parceria foi a participação ativa da Prefeitura de São Paulo no Circuito Urbano – a maior iniciativa nacional para celebrar o Outubro Urbano.</p>\
                    <p>A formalização da cooperação se deu com a assinatura de um Memorando de Entendimento (MoU) do ONU-Habitat com a SMVA, a Secretaria Municipal de Relações Internacionais (SMRI) e a Secretaria de Governo em novembro de 2021, permitindo a ampliação das frentes de intercâmbio e atividades conjuntas. Para avançar nos esforços de promover maior acesso, participação popular e resiliência dos espaços verdes de São Paulo, em 2022 foi assinado um projeto conjunto entre a SVMA e o ONU-Habitat que terá a duração de três anos.</p>\
                    <p>Em 2021 e 2022, a cidade marcou presença como organizadora principal e coorganizadora de 13 eventos do Circuito Urbano, e também contou com o apoio institucional do ONU-Habitat para a representação da equipe da SVMA da 11ª edição Fórum Urbano Mundial, na Polônia, e da COP27, no Egito, ambos em 2022. </p>\
                </div>\
                <div class="col-md-6">\
                    <p>No final de 2022, a parceria avançou mais uma etapa, com a assinatura do acordo para o desenvolvimento do projeto Viva o Verde SP, que visa a promoção de espaços públicos verdes mais justos, resilientes e sustentáveis, acessíveis a todas e todos. Iniciado em janeiro de 2023, o projeto conta com uma equipe alocada em São Paulo para aplicar as metodologias de avaliação do ONU-Habitat, entre outras.</p>\
                    <p>“Um aspecto crucial dessa parceria é termos um diagnóstico real dos parques. Isso é desafiador devido ao número muito grande de equipamentos e à diversidade entre eles. Contar com esse trabalho com o ONU-Habitat, com uma equipe qualificada, vai trazer muitos ganhos. Teremos material, um norte a seguir e consistência em qualquer política pública que se queira desenhar para esses equipamentos públicos”, explica Tamires.</p>\
                    <p>O projeto seguirá até 2025, mas as primeiras etapas serão desenvolvidas já em 2023, com a aplicação das metodologias de avaliação de espaços públicos em toda a cidade, oficinas participativas para elaborar propostas de melhoria desses espaços, treinamentos com o governo e sociedade civil para aplicação dessas metodologias e elaboração de planos de gestão para oito parques pré-selecionados.</p>\
                    </p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-5 align-self-end">\
                <img src="images/sao_paulo.png" alt="" class="img-fluid"/>\
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
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'historia-pernambuco',
      alignment: 'full',
      hidden: false,
      //title: 'Abertura',
      bookmark: 'Pernambuco',
      description: '\
      <div class="light">\
        <div class="container-history text-left">\
          <div class="row no-gutters">\
            <div class="col-lg-7">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1>Infinitas conexões entre o espaço público e o sideral</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                    <p>Foi em uma Oficina de Desenho de Espaços Públicos, realizada na Escola de Referência Senador Antônio Farias, localizada no Ibura, comunidade periférica da capital pernambucana, que Yasmin Bernardo, uma jovem de 14 anos, se destacou.</p>\
                    <p>Comunicativa e articulada, não demorou muito para que isso acontecesse. Em dois dias de atividades ela entrevistou pessoas nas ruas, foi entrevistada, construiu uma maquete, recitou uma poesia e ainda defendeu melhorias prioritárias para um espaço público em seu bairro.</p>\
                    <p>Dentre elas, a instalação de uma luneta em uma quadra localizada no alto da comunidade, para que seus moradores pudessem observar corpos celestes em noites de céu limpo. Por mais lúdico que pareça, é uma sugestão sofisticada.</p>\
                    <p>Lunetas em espaços públicos contribuem para aproximar a ciência das pessoas, servindo também como ferramenta educacional; aumentam a circulação de pessoas no período noturno e, assim, podem reduzir a sensação de insegurança; fortalecem laços de comunidade, oferecendo às pessoas uma experiência comum, de observação astronômica; inspiram maior atenção e cuidado com o espaço público; despertam um potencial turístico para a comunidade — uma lista infinita de benefícios que fortalecem princípios de um desenvolvimento urbano e humano.</p>\
                    <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário “Pés no Chão, Janela do Céu”, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco, através do Departamento de Física, representado pelo professor Antônio Miranda; repercussão na imprensa e recebimento de doações para equipar o Clube, além do telescópio emprestado pela Universidade.</p>\
                </div>\
                <div class="col-md-6">\
                    <p>Ela não tinha consciência da potência de sua ideia e, talvez, um profissional urbanista não elegeria a instalação de uma luneta como prioridade para a qualificação de um espaço público em uma comunidade. Porém, com o encontro desses dois universos e com o respeito às soluções inusitadas, <strong>muitos caminhos foram abertos e alguns já renderam frutos</strong>.</p>\
                    <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário <strong>“Pés no Chão, Janela do Céu”</strong>, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco, através do Departamento de Física, representado pelo professor Antônio Miranda; repercussão na imprensa e recebimento de doações para equipar o Clube, além do telescópio emprestado pela Universidade.</p>\
                    <p>Está aí a importância de se promover oportunidades para que as ideias e críticas de jovens encontrem profissionais e pessoas capazes de tomar decisões, como aconteceu no projeto Cooperação Pernambuco. Em parceria, transformações e melhorarias para a vida das pessoas nas cidades são possíveis.</p>\
                    <p>As lunetas ainda não foram instaladas, mas a proposta inspirou a realização do documentário “Pés no Chão, Janela do Céu”, estrelado pela jovem; a criação de um Clube de Astronomia com atividades abertas à comunidade, liderado pela gestora da escola, Anita Cordeiro, com apoio de Levi Costa, presidente da associação de moradores local e em parceria com a Universidade Federal Rural de Pernambuco Pernambuco.\
                    </p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-5 align-self-end">\
                <img src="images/pernambuco.png" alt="" class="img-fluid"/>\
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
      onChapterEnter: [],
      onChapterExit: []
    }

  ]
  
};

