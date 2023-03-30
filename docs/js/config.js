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
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 0.5,
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
      <div class="light-branco">\
        <div class="container-history p-bottom p-top">\
          <div class="row no-gutters p-right-left">\
            <div class="col-lg-7">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="azul-habitat">Palavras de Abertura</h1>\
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
          center: [-51.06166, -15.66707],
          zoom: 1.5,
          pitch: 0,
          bearing: 0,
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
      id: 'onu-habitat',
      alignment: 'left',
      hidden: false,
      //title: 'Escritório ONU-Habitat Brasil',
      bookmark: 'ONU-Habitat',
      image: false,
      description: '\
      <div class="light-branco rounded-lg shadow-lg">\
        <div class="container p-right-left p-bottom">\
          <h1 class="azul-habitat">Onde estamos e<br>quem somos</h1>\
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. <strong>In nulla tellus, sagittis sed magna in, cursus pretium diam.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam.</p>\
        </div>\
      </div>\
      ',
      location: {     
        center: [36.78120, -1.21891],
        zoom: 5.49,
        pitch: 55.50,
        bearing: -8.80,
        speed: 0.25,
        curve: 3
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
           {
               layer: 'pin-nairobi',
               opacity: 1
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
          <p>O ONU-Habitat está presente no Brasil há mais de 20 anos, atuando em projetos relacionados a diversos temas urbanos em cidades de todo o país. O Escritório Regional para América Latina e o Caribe e o escritório para o Brasil e Cone Sul estão localizados no Rio de Janeiro.</p>\
          <img class="p-top" src="images/logo_onuhabitat.png" alt="Logo ONU-Habitat em Português"/>\
        </div>\
      </div>\
      ',
      location: {     
          center: [-43.22909, -22.92985],
          zoom: 11.62,
          pitch: 0.00,
          bearing: 0.00,
          speed: 0.5,
          curve: 3
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
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
      id: "retrospectiva-2022",
      alignment: "full",
      hidden: false,
      //title: 'Abertura',
      //bookmark: 'Abertura',
      description: '\
      <div class="light">\
        <div class="container p-bottom">\
          <h1 class="rosa">Retrospectiva 2022</h1>\
          <div class="container">\
          <div class="carousel-container position-relative row">\
          <div id="myCarousel" class="carousel slide" data-ride="carousel">\
            <div class="carousel-inner">\
              <div class="carousel-item active" data-slide-number="0">\
                <img src="./images/jan.jpg" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Pn6iimgM-wo/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
                <div class="card-title">\
                      <h3>Janeiro</h3>\
                </div>\
              </div>\
              <div class="carousel-item" data-slide-number="1">\
                <img src="./images/jan.jpg" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Pn6iimgM-wo/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
                <div class="card-title">\
                      <h3>Fevereiro</h3>\
                </div>\
              </div>\
              <div class="carousel-item" data-slide-number="2">\
                <img src="https://source.unsplash.com/qlYQb7B9vog/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/qlYQb7B9vog/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="3">\
                <img src="https://source.unsplash.com/QfEfkWk1Uhk/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/QfEfkWk1Uhk/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="4">\
                <img src="https://source.unsplash.com/CSIcgaLiFO0/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/CSIcgaLiFO0/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="5">\
                <img src="https://source.unsplash.com/a_xa7RUKzdc/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/a_xa7RUKzdc/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="6">\
                <img src="https://source.unsplash.com/uanoYn1AmPs/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/uanoYn1AmPs/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="7">\
                <img src="https://source.unsplash.com/_snqARKTgoc/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/_snqARKTgoc/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="8">\
                <img src="https://source.unsplash.com/M9F8VR0jEPM/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/M9F8VR0jEPM/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
              <div class="carousel-item" data-slide-number="9">\
                <img src="https://source.unsplash.com/Q1p7bh3SHj8/1600x900/" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Q1p7bh3SHj8/" data-type="image" data-toggle="lightbox" data-gallery="example-gallery">\
              </div>\
            </div>\
          </div>\
          <!-- Carousel Navigation -->\
          <div id="carousel-thumbs" class="carousel slide" data-ride="carousel">\
            <div class="carousel-inner">\
              <div class="carousel-item active">\
                <div class="row mx-0">\
                  <div id="carousel-selector-0" class="thumb col-4 col-sm-2 px-1 py-2 selected" data-target="#myCarousel" data-slide-to="0">\
                    <img src="./images/jan-min.jpg" class="img-fluid" alt="...">\
                    <div class="nav-card-title">\
                      <h4>01</h4>\
                    </div>\
                  </div>\
                  <div id="carousel-selector-1" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="1">\
                  <img src="./images/jan-min.jpg" class="img-fluid" alt="...">\
                    <div class="nav-card-title">\
                      <h4>02</h4>\
                    </div>\
                  </div>\
                  <div id="carousel-selector-2" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="2">\
                    <img src="https://source.unsplash.com/qlYQb7B9vog/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-3" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="3">\
                    <img src="https://source.unsplash.com/QfEfkWk1Uhk/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-4" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="4">\
                    <img src="https://source.unsplash.com/CSIcgaLiFO0/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-5" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="5">\
                    <img src="https://source.unsplash.com/a_xa7RUKzdc/600x400/" class="img-fluid" alt="...">\
                  </div>\
                </div>\
              </div>\
              <div class="carousel-item">\
                <div class="row mx-0">\
                  <div id="carousel-selector-6" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="6">\
                    <img src="https://source.unsplash.com/uanoYn1AmPs/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-7" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="7">\
                    <img src="https://source.unsplash.com/_snqARKTgoc/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-8" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="8">\
                    <img src="https://source.unsplash.com/M9F8VR0jEPM/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div id="carousel-selector-9" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="9">\
                    <img src="https://source.unsplash.com/Q1p7bh3SHj8/600x400/" class="img-fluid" alt="...">\
                  </div>\
                  <div class="col-2 px-1 py-2"></div>\
                  <div class="col-2 px-1 py-2"></div>\
                </div>\
              </div>\
            </div>\
            <a class="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">\
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
              <span class="sr-only">Previous</span>\
            </a>\
            <a class="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">\
              <span class="carousel-control-next-icon" aria-hidden="true"></span>\
              <span class="sr-only">Next</span>\
            </a>\
          </div>\
          </div> <!-- /row -->\
          </div> <!-- /container -->\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 0.5,
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
          <h1 class="rosa">2022 em Números</h1>\
        </div>\
      </div>\
      ',
      location: {
        center: [-51.06166, -15.66707],
        zoom: 1.5,
        pitch: 0.00,
        bearing: 0.00,
        speed: 0.5,
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
      id: 'territorio-sudene',
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
          center: [-47.41445, -12.83204],
          zoom: 4.91,
          pitch: 46.00,
          bearing: 0.00,
          speed: 0.25
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'munic-g52',
            opacity: 1
        }
      ],
      onChapterExit: [
          {
              layer: 'munic-g52',
              opacity: 0
          }
      ]
    },    

    {
      id: 'historia-sudene',
      alignment: 'full',
      hidden: false,
      bookmark: 'SUDENE',
      description: '\
      <div class="light">\
        <div class="container-history text-left">\
          <div class="row no-gutters p-left">\
            <div class="col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Espaços verdes do semiárido</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                  <p>Localizada no centro do estado de Pernambuco, Serra Talhada pode ser conhecida como a capital do xaxado ou a terra natal de Lampião. Também pode ser ponto de referência na região por ser um polo de educação, saúde e comércio. Mas, recentemente, ela recebeu um destaque inédito: uma menção honrosa no Desafio de Inovação da Rede de Cidades-Polo do Nordeste, com uma proposta que reestrutura espaços verdes em regiões periféricas do município – e que tem planos para sair do papel.</p>\
                  <p>O desafio consistiu na fase final de um projeto da Superintendência de Desenvolvimento do Nordeste (Sudene) em parceria com o ONU-Habitat e o Programa das Nações Unidas para o Desenvolvimento (PNUD). A iniciativa tinha como objetivo aprimorar a construção de políticas de desenvolvimento urbano sustentável na área de atuação da Sudene: 52 cidades-polo do Nordeste que exercem influência em suas regiões.</p>\
                  <p>Depois de participar da fase de capacitações temáticas oferecidas pela iniciativa para fortalecer os servidores da rede, a prefeitura de Serra Talhada se inscreveu no Desafio de Inovação, que tinha como objetivo engajar esses servidores a aplicar, em seu próprio contexto, o conhecimento adquirido.</p>\
                  <p>Para isso, cada proposta precisava conter um diagnóstico de problema, uma solução e um plano de ação – tudo voltado ao desenvolvimento urbano sustentável local. Para escolher a melhor ideia, a Prefeitura de Serra Talhada fez uma chamada interna, pedindo às secretarias o envio de sugestões. As melhores ideias foram construídas coletivamente ao longo de reuniões e debates.</p>\
                </div>\
                <div class="col-md-6">\
                <p>De cinco sugestões iniciais, a escolhida foi “Espaços Verdes”, capitaneada pela Secretaria de Meio Ambiente. Transformando espaços públicos ociosos em áreas verdes e sociáveis, a proposta combate as ilhas do calor e aumenta o bem-estar dos moradores, além de potencializar o Plano de Arborização Urbana do município.<\p>\
                <p>“Pensamos uma proposta do zero, tendo em vista que tinha de ser algo inovador. Queríamos envolver a população, oferecer lazer e qualidade de vida, e trabalhar com áreas verdes nas zonas periféricas do município”, explica o secretário do Meio Ambiente de Serra Talhada, Sinézio Rodrigues.<\p>\              <p>O projeto ficou em quinto lugar no Desafio de Inovação, garantindo a menção honrosa concedida a cidades com menos de 200 mil habitantes. Em Serra Talhada, a proposta foi tão bem recebida que vai virar realidade. A previsão é que ela comece a ser implementada em novembro de 2023, reestruturando canteiros que não possuem arborização e que estão localizados em bairros periféricos.</p>\
                <p>Rodrigues complementa que os efeitos dessa iniciativa vão ser sentidos por muito tempo. “O principal legado que levamos com esta experiência foi o aprendizado em trabalhar em conjunto com os demais órgãos municipais e construir estratégias que vão ser extremamente benéficas para o desenvolvimento sustentável de nosso município”.</p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-4 align-self-end">\
                <img src="images/historia-sudene.png" alt="" class="img-fluid"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-47.41445, -12.83204],
        zoom: 4.91,
        pitch: 46.00,
        bearing: 0.00,
        speed: 2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'munic-g52',
            opacity: 0.5
        }
      ],
      onChapterExit: [
          {
              layer: 'munic-g52',
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
        </div>\
      </div>\
      ',
      location: {
          center: [-42.80643, -5.08873],
          zoom: 11.99,
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
            layer: 'teresina',
            opacity: 1
        }
      ],
      onChapterExit: [
          {
              layer: 'teresina',
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
      <div class="container p-right-left p-bottom">\
        <h1 class="laranja">Alagoas</h1>\
        <p>Apesar de serem elementos marcantes em Maceió e estarem presentes em mais da metade de seus bairros, as grotas – assentamentos precários que ficam em vales sinuosos e vulneráveis – podem se destacar ou passar totalmente despercebidas na paisagem local.</p>\
        <p>Por muito tempo, as grotas foram invisibilizadas. Até um passado bastante recente, pouco ou quase nada se sabia sobre elas. Por serem morada de boa parte da população de baixa renda da capital alagoana, elas ocupavam também um outro espaço, desta vez imaterial e de estigma no imaginário coletivo.</p>\
        <p>Entendendo que as cerca de cem grotas de Maceió eram muito mais do que os aspectos negativos que geralmente lhes eram atribuídos, o Governo de Alagoas passou a dar novos contornos à paisagem já conhecida do estado, agregando esses territórios aos centros das discussões. Por meio de uma plataforma de ações focadas em melhorias de mobilidade urbana e habitacionais, veio a infraestrutura necessária para que outras narrativas sobre as grotas fossem construídas e, também, a percepção de que era urgente conhecê-las melhor para atender às suas demandas.</p>\
        <p>Seja por meio da coleta e do tratamento de dados qualificados ou pela capacitação de jovens dessas comunidades, o ONU-Habitat se junta a essa história justamente pela necessidade de produzir conhecimentos e dar novos sentidos linguísticos e práticos a esses territórios, reconstruindo a paisagem das grotas ao lado e a partir de quem de fato as vivencia.</p>\
      </div>\
    </div>\
    ',
      location: {
          center: [-35.76117, -9.61398],
          zoom: 11.35,
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
              layer: 'baixada-lagunar',
              opacity: 1
          }
      ],
      onChapterExit: [
          {
              layer: 'baixada-lagunar',
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
        <div class="container-history text-left">\
          <div class="row no-gutters p-left">\
            <div class="col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Menino da vila, menino da ONU</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                  <p>A subida que leva até a Vila Emater II, nos arredores do antigo lixão de Maceió, não é das mais simples. No meio do caminho, entretanto, já é possível se deparar com uma das vistas mais bonitas da <strong class="rosa">cidade: a imensidão do mar de Jacarecica está logo ali.</strong> Ao mesmo tempo que orgulha a comunidade, a paisagem também é motivo de preocupação, já que colabora para a especulação imobiliária na terra que há décadas faz com que famílias de catadores se vejam lutando por moradia adequada e melhores condições de vida.</p>\
                  <p>Quem pode falar melhor sobre a Vila, no entanto, é Antônio Givaldo: jovem de 17 anos, adotado por sua avó materna, que hoje é conhecido como o <strong class="rosa">“o menino da ONU”</strong>. É assim que ele diz ser recebido na vizinhança após aparecer em um vídeo nas redes sociais do ONU-Habitat em que conta sobre o seu lugar no mundo. <strong>“Eles dizem: Parabéns, Antônio! Lute sempre pela nossa comunidade”. Isso é bom. Você sente que o seu esforço tá valendo a pena”</strong>.</p>\
                  <p>Antônio é um dos participantes do <strong class="rosa">Programa Digaê – Juventudes</strong>, Comunicação e Cidade. Realizado pelo ONU-Habitat em parceria com o Governo de Alagoas, o projeto dá continuidade ao trabalho desenvolvido pelas duas instituições nos assentamentos precários que, em Maceió, são conhecidos como grotas. <strong>“O Digaê mudou a minha vida. Foi uma experiência com jovens de diferentes grotas que gostam de se envolver nos movimentos, uma diversidade grande. Eu via neles e replicava em mim. Eles eram um espelho de como eu queria estar hoje”</strong>, compartilha.</p>\
                  </div>\
                <div class="col-md-6">\
                  <p>A iniciativa vai formar 80 jovens em temas relacionados ao direito à cidade e à comunicação, estimulando que outras narrativas sobre suas comunidades sejam criadas. <strong>“Eu vim conhecer o direito à cidade no Digaê. Moro numa comunidade bem carente e nunca tinha chegado ninguém pra me dizer: você tem direito à cidade”</strong>.</p>\
                  <p>O território em que Antônio cresceu já simboliza, por si só, uma <strong class="rosa">conquista para a sua comunidade</strong>, que concilia a luta pela garantia de seus direitos ao desafio de fazer com que a coleta seletiva seja implementada no município. Isso tudo talvez explique o brilho que o jovem carrega nos olhos ao falar de onde vem, o carinho nas palavras ao frisar: <strong>“minha comunidade representa tudo pra mim”</strong>.</p>\
                  <p>Talvez justifique, também, as vontades que têm para o futuro dela, como a transformação do antigo lixão em um parque municipal. <strong>“A Vila era muito mal falada e ela não é isso. Tem cultura, diversidade, uma juventude talentosa, mães batalhadoras. Espero que os jovens daqui se interessem ainda mais em políticas públicas, no direito à cidade. Que eles tenham forças e vão na frente porque eu vou continuar lutando pela nossa comunidade até o fim da minha vida”</strong>.</p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-4 align-self-end">\
                <img src="images/historia-alagoas.png" alt="" class="img-fluid"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-35.76117, -9.61398],
        zoom: 11.35,
        pitch: 45.00,
        bearing: 0.00,
        speed: 2
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      spinGlobe: false,
      mapInteractive: false,
      callback: '',
      onChapterEnter: [
        {
            layer: 'baixada-lagunar',
            opacity: 0.5
        }
      ],
      onChapterExit: [
          {
              layer: 'baixada-lagunar',
              opacity: 0
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
        <div class="container p-right-left p-bottom">\
          <h1 class="laranja">Pernambuco</h1>\
          <p>Pernambuco se manifesta nos contrastes entre Zona da Mata, Agreste e Sertão. É o estado mais antigo do Brasil, com uma história vista a olho nu em suas conhecidas construções coloniais, e ouvida em ritmo de frevo e maracatu. São 185 municípios contando sobre passado e presente de uma região diversa em povo e território.</p>\
          <p>Pernambuco se manifesta nos contrastes entre Zona da Mata, Agreste e Sertão. É o estado mais antigo do Brasil, com uma história vista a olho nu em suas conhecidas construções coloniais, e ouvida em ritmo de frevo e maracatu. São 185 municípios contando sobre passado e presente de uma região diversa em povo e território.</p>\
          <p>A implementação das metodologias passou por comunidades de cada uma das regiões pernambucanas. A grande dispersão territorial permitiu compreender nuances locais importantes, que contemplam a enorme diversidade que define o estado de Pernambuco.</p>\
        </div>\
      </div>\
      ',
    location: {
        center: [-39.39162, -8.60275],
        zoom: 6.13,
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
          layer: 'munic-pe',
          opacity: 1
      }
    ],
    onChapterExit: [
        {
            layer: 'munic-pe',
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
          <div class="container-history text-left">\
            <div class="row no-gutters p-left">\
              <div class="col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Infinitas conexões entre o espaço público e o sideral</h1>\
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
              <div class="col-lg-4 align-self-end">\
                  <img src="images/pernambuco.png" alt="" class="img-fluid"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
          center: [-39.39162, -8.60275],
          zoom: 6.13,
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
              layer: 'munic-pe',
              opacity: 0.5
          }
        ],
        onChapterExit: [
            {
                layer: 'munic-pe',
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
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">Juiz de Fora</h1>\
            <p>Maior cidade da Zona da Mata de Minas Gerais, Juiz de Fora é reconhecida pelo seu povo acolhedor, pelo espírito vanguardista e pelas diversas experiências que proporciona. Com uma população de aproximadamente 577 mil habitantes e uma localização estratégica, ela se apresenta como capital regional, exercendo influência nos municípios do entorno.</p>\
            <p>Manchester Mineira e Princesa de Minas são alguns títulos que demonstram sua identidade pioneira e singular. O município foi um importante polo industrial, abrigando diversas fábricas ao longo de sua expansão, como Marmelos Zero, a primeira grande usina hidrelétrica da América do Sul.</p>\
            <p>Andar pelas ruas é reconhecer em cada canto um pouco da sua história de 172 anos, da sua arquitetura tradicional, dos seus contornos culturais. Mas é também perceber as inúmeras desigualdades territoriais. Conhecer o seu espaço, suas contradições e seus moradores possibilita que Juiz de Fora seja transformada para garantir o direito à cidade a sua população. Para isso, o projeto Territórios da Cidadania atua em 141 microterritórios historicamente excluídos do planejamento urbano. Neste contexto, os dados se transformam em políticas públicas capazes de melhorar a vida de todos os juizforanos.</p>\
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
              layer: 'microterritorios',
              opacity: 1
          }
      ],
      onChapterExit: [
          {
              layer: 'microterritorios',
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
        <div class="container-history text-left">\
          <div class="row no-gutters p-left">\
            <div class="col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">De volta às origens</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                    <p>Em 2022, a geógrafa Elaine Cristóvão Coelho viajou quase 1,5 mil km de Salvador para voltar ao lugar onde sua trajetória começou. Ela cresceu no bairro Marumbi, na zona leste de Juiz de Fora (MG), uma região que historicamente apresenta alta vulnerabilidade social. Atuando como supervisora de campo no ONU-Habitat, ela percorreu uma extensão equivalente a 350 campos de futebol em vias íngremes, sinuosas, com características que mesclam rural e urbano. Tudo para promover o desenvolvimento socioeconômico e garantir o acesso a programas de cidadania em 141 microterritórios da cidade.</p>\
                    <p>O Territórios da Cidadania, projeto no qual atuou, é uma parceria com a Prefeitura de Juiz de Fora para realizar um diagnóstico dos espaços urbanos, das moradias e da população que reside nesses locais. Atuando como uma ferramenta de planejamento e gestão, os dados coletados auxiliam na superação de desigualdades socioespaciais, embasando a formulação de políticas públicas e priorizações de investimento.</p>\
                    <p>A conexão de Elaine com trabalhos de impacto social parte da sua própria vivência. Enquanto crescia, sua casa era de chão batido, as ruas não tinham asfalto e, para estudar, seu padrinho ajudava na compra dos cadernos. A educação era um instrumento de transformação social. “Venho de uma linhagem de empregadas domésticas: minha mãe, minha avó, minhas tias e eu também fomos empregadas domésticas. Sempre tive fé na educação porque sabia que ela poderia me salvar profissional e economicamente”.</p>\
                    <p>Elaine se formou geógrafa e, vinte anos depois, retornou ao território para atuar como profissional do projeto. A contratação de habitantes dos microterritórios no projeto possibilitou a entrada de pessoas especializadas que entendem melhor a realidade dessas localidades e se identificam</p>\
                </div>\
                <div class="col-md-6">\
                    <p>com sua população. Essa é também uma forma de dar um retorno para regiões historicamente invisibilizadas no planejamento urbano da cidade.</p>\
                    <p>Elaine entende que as informações coletadas não são só números. Por trás, há uma pessoa com frustrações, problemas e sonhos. “É preciso analisar o que aquele dado quer dizer. Existe um contexto que ajuda a explicar esse indicador. As pessoas precisam e querem ser ouvidas. Por isso sempre gostei muito de acompanhar o trabalho de campo”.</p>\
                    <p>As metodologias aplicadas na cidade — Mapa Rápido Participativo e Perfil Socioeconômico — são participativas. Para Elaine, equilibrar a visão técnica com a percepção da população é o primeiro passo para garantir o sucesso do projeto: perceber que a Prefeitura busca conhecer o indivíduo e suas necessidades é uma forma de trazer como retorno políticas públicas mais assertivas. “Nesse diagnóstico, é importante se esvaziar das nossas próprias percepções. Eu vou ouvir do outro o que ele pensa sobre si e sobre onde ele mora”, explica. “Não me lembro disso já ter sido feito aqui; é uma inovação da qual fico muito feliz por ter participado. Sei que vai mudar a vida de muita gente”.</p>\
                    <p>E mudou a vida dela também. “Parecia uma possibilidade tão remota trabalhar na ONU, era algo que eu nem sonhava. Isso me dá esperança de que pessoas como eu, mulheres negras, de origem pobre, podem alcançar esses espaços”, comemora. “Eu parti de muito longe, é como uma chancela da minha trajetória: tá vendo onde você pode chegar? Isso só me motiva a buscar mais e entender que eu posso, que as minhas também podem. Acho que eu sou parecida com quem sempre sonhei ser”.</p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-4 align-self-end">\
                <img src="images/historia-jf.png" alt="" class="img-fluid"/>\
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
            layer: 'microterritorios',
            opacity: 0.5
        }
      ],
      onChapterExit: [
        {
            layer: 'microterritorios',
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
        <div class="container p-right-left p-bottom">\
          <h1 class="laranja">Rio de Janeiro</h1>\
            <p>“A rua tem alma!”, declarou João do Rio em 1908. No Rio de Janeiro, a alma das ruas tem protagonismo de quem produz a história da cidade. Por elas, estas histórias são transportadas como células nas veias de uma cidade viva.</p>\
            <p>São mais de seis milhões de pessoas ocupando as ruas de formas distintas – e, portanto, vivendo cidades distintas. Por isso, a rua também ensina sobre desigualdades. Há 1.074 favelas no Rio de Janeiro, onde vive 22% da população carioca. É o maior percentual de pessoas vivendo em favelas do Brasil. Nesse contexto, os desafios do crescimento urbano acelerado são mais latentes e visíveis.</p>\
            <p>Ao mesmo tempo em que denunciam desigualdades, as ruas das favelas guardam uma fonte inesgotável de cultura, potencial econômico e desenvolvimento de capacidades. É por elas que, de porta em porta, o ONU-Habitat e a Prefeitura da Cidade do Rio de Janeiro mapeiam a materialidade das condições de vida de quem as ocupam, na busca de reduzir o risco social de famílias mais vulneráveis. Os dados coletados são uma ferramenta essencial para a implementação de políticas públicas baseadas em evidência, promovendo um atendimento integrado e um monitoramento da situação. É assim que, com o olhar atento do poder público, as ruas da favela vão pouco a pouco transformando as histórias que contam.</p>\
        </div>\
      </div>\
      ',
          location: {     
            center: [-43.18504, -22.93452],
            zoom: 12.19,
            pitch: 45.00,
            bearing: -40.00,              
            speed: 0.5,
            curve: 3
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
        id: 'historia-rj',
        alignment: 'full',
        hidden: false,
        //title: 'Abertura',
        bookmark: 'Rio de Janeiro',
        description: '\
        <div class="light">\
          <div class="container-history text-left">\
            <div class="row no-gutters p-left">\
              <div class="col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">De um teto para um lar</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6">\
                      <p>Há mais de 40 anos, Vera Lucia Jorge – ou dona Vera – fez da Vila do João sua casa. Ela não “é cria” de lá, mas seus filhos são. Hoje, ela é aposentada e mora com seu filho caçula em uma casa de cinco cômodos.</p>\
                      <p>A Vila do João é uma favela que faz parte do Complexo da Maré, no Rio de Janeiro. Dona Vera conta que tem tudo perto de casa: do mercado à ginástica. “Eu amo isso aqui”, enfatiza, olhando ao redor como quem tem na casa uma parceira. O amor pela comunidade é antigo, afinal, foi lá onde ela criou filhos e filhas, mas o olhar sobre a casa já foi de preocupação.</p>\
                      <p>“A casa era uma coisa muito complicada, muito pobre mesmo. A janela era a mesma coisa que não ter. Ela era segurada com uma bengala: quando encostava, caía. Porta a gente encostava com o sofá".</p>\
                      <p>Hoje, o piso branco, as portas e janelas de ferro e o banheiro com água encanada contam a história de uma construção que se transformou em lar. Dona Vera foi contemplada pelo projeto Casa Carioca, da Secretaria de Ação Comunitária da Prefeitura da Cidade do Rio de Janeiro. O projeto seleciona moradias, a partir de critérios sociais, e realiza melhorias habitacionais focadas no bem-estar e na saúde de seus moradores.</p>\
                      <p>As famílias contempladas foram identificadas a partir da busca ativa do programa Territórios Sociais. Foi o que aconteceu com dona Vera, que respondeu ao questionário do programa em novembro de 2019, e o atendimento da família seguiu até 2022, quando a obra foi iniciada. “Foi um presente de Natal e ano novo”, relembra.</p>\
                  </div>\
                  <div class="col-md-6">\
                      <p>O Territórios Sociais é uma parceria entre ONU-Habitat e a Prefeitura da Cidade do Rio de Janeiro que se baseia em três pilares: busca ativa, atendimento integrado e monitoramento. O programa realiza o mapeamento das áreas com os menores índices de desenvolvimento social, identificando famílias mais vulneráveis com o objetivo de reduzir seu risco social através de ações integradas das diversas políticas públicas que compõem a iniciativa.</p>\
                      <p>Informações como condições de edificação, acessibilidade e vulnerabilidade social são compartilhadas como insumo para oferta de serviços e políticas públicas orientadas por dados. O programa tem atuado nos dez maiores complexos de favela da cidade, e recentemente iniciou a expansão para outros territórios – com a qual pretende alcançar mais 486 mil domicílios.</p>\
                      <p>“A parceria do Casa Carioca com o Territórios Sociais foi importantíssima porque a gente pula a etapa de diagnóstico justamente porque ele já existe. Com esses dados, o Casa Carioca fica muito mais embasado, o que é fundamental. A melhoria da casa não é só a parte física: mexe com a autoestima da pessoa também”, compartilha Marli Peçanha, secretária de Ação Comunitária.</p>\
                      <p>Para dona Vera, participar do projeto Casa Carioca foi um presente. Muito além das melhorias em sua casa, ela se encantou com as mudanças que ocorreram em sua comunidade como um todo. Para ela, essa foi a “coisa mais linda” da iniciativa. “Pra mim, foi uma mudança muito boa que eles trouxeram pra comunidade. Como moradora, amei esse projeto”.</p>\
                  </div>\
                </div>\
            </div>\
              <div class="col-lg-4 align-self-end">\
                  <img src="images/historia-rj.png" alt="" class="img-fluid"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
          center: [-39.39162, -8.60275],
          zoom: 6.13,
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
              layer: 'munic-pe',
              opacity: 0.5
          }
        ],
        onChapterExit: [
            {
                layer: 'munic-pe',
                opacity: 0
            }
        ]
    },

    {
        id: 'territorio-sp-1',
        alignment: 'left',
        hidden: false,
        bookmark: 'Territorio São Paulo',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">São Paulo</h1>\
            <p>Uma metrópole global profundamente dinâmica, digitalizada e complexa. São Paulo é lar de 12,4 milhões de pessoas, distribuídas em uma área de mais de 1,5 mil quilômetros quadrados. Somada aos outros 38 municípios que compõem sua Região Metropolitana, ela concentra metade da população do Estado e mais de 30% do PIB do país.</p>\
            <p>Ao longo do século 19, durante o Ciclo do Café, o rápido crescimento populacional e produtivo da cidade consolidou sua mancha urbana, comprometendo os biomas locais – especialmente o de Mata Atlântica, predominante na região. Além do espaço geográfico, também se perderam inúmeras espécies de fauna e flora que faziam parte desse ecossistema.</p>\
          </div>\
        </div>\
        ',
        location: {
          center: [-46.87607, -23.69847],
          zoom: 9.16,
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
              layer: 'sp-urbano-rural',
              opacity: 1
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
        id: 'territorio-sp-2',
        alignment: 'left',
        hidden: false,
        bookmark: 'Territorio São Paulo',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">São Paulo</h1>\
            <p>Essa trajetória, no entanto, está em transformação. Hoje, apesar da fama de selva de pedra ser parte incontornável do imaginário da cidade, quase metade do território de São Paulo corresponde à cobertura verde, e quase um terço é território rural. Em 30 anos, o número de parques cresceu de 32 para 111, o que ilustra a preocupação do município em incentivar o desenvolvimento e a ocupação dos espaços verdes pelas pessoas.</p>\
            <p>Neste processo, São Paulo tem mantido em vista a necessidade de avaliar a qualidade de parques e áreas de conservação, promovendo espaços verdes de maneira mais igualitária para seus milhões de moradores. Além disso, outras ações também estão em foco: capacitar instituições e sociedade civil para criar, gerir e monitorar a qualidade dos equipamentos urbanos; identificar áreas em potencial para desenvolver novos espaços públicos verdes e garantir a participação da população de forma equilibrada com relação a raça, classe, gênero e território.</p>\
          </div>\
        </div>\
        ',
        location: {
          center: [-46.87607, -23.69847],
          zoom: 9.76,
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
              layer: 'sp-parques-cent',
              opacity: 1
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
        id: 'historia-sp',
        alignment: 'full',
        hidden: false,
        bookmark: 'História São Paulo',
        description: '\
        <div class="light">\
          <div class="container-history">\
            <div class="row no-gutters p-left">\
              <div class="col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Horizonte mais verde na metrópole global</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6">\
                      <p><strong>Espaços públicos verdes</strong> ganharam ainda mais protagonismo após a pandemia da COVID-19. Na percepção da coordenadora de Gestão de Parques e Biodiversidade da Secretaria Municipal do Verde e do Meio Ambiente (SVMA) de São Paulo, Tamires Oliveira, <strong>“as pessoas passaram a ocupar os parques com muito mais intensidade nos últimos três anos, criaram novos usos e finalidades, estão muito mais presentes ali”</strong>. E a cidade está atenta a essa tendência. Nos últimos anos, a SVMA vem trabalhando para aprimorar estratégias de planejamento, implementação e gestão dos espaços verdes.</p>\
                      <p>Parte desse movimento foi o diálogo iniciado com o ONU-Habitat para trocar experiências, metodologias e ferramentas. O primeiro marco da parceria foi a participação ativa da Prefeitura de São Paulo no Circuito Urbano – a maior iniciativa nacional para celebrar o Outubro Urbano.</p>\
                      <p>A formalização da cooperação se deu com a assinatura de um Memorando de Entendimento (MoU) do ONU-Habitat com a SMVA, a Secretaria Municipal de Relações Internacionais (SMRI) e a Secretaria de Governo em novembro de 2021, permitindo a ampliação das frentes de intercâmbio e atividades conjuntas. Para avançar nos esforços de promover maior acesso, participação popular e resiliência dos espaços verdes de São Paulo, em 2022 foi assinado um projeto conjunto entre a SVMA e o ONU-Habitat que terá a duração de três anos.</p>\
                      <p>Em 2021 e 2022, a cidade marcou presença como organizadora principal e coorganizadora de 13 eventos do Circuito Urbano, e também contou com o apoio institucional do ONU-Habitat para a representação da equipe da SVMA da 11ª edição Fórum Urbano Mundial, na Polônia, e da COP27, no Egito, ambos em 2022. </p>\
                  </div>\
                  <div class="col-md-6">\
                      <p>No final de 2022, a parceria avançou mais uma etapa, com a assinatura do acordo para o desenvolvimento do projeto <strong>Viva o Verde SP</strong>, que visa a promoção de espaços públicos verdes mais justos, resilientes e sustentáveis, acessíveis a todas e todos. Iniciado em janeiro de 2023, o projeto conta com uma equipe alocada em São Paulo para aplicar as metodologias de avaliação do ONU-Habitat, entre outras.</p>\
                      <p><strong>“Um aspecto crucial dessa parceria é termos um diagnóstico real dos parques. Isso é desafiador devido ao número muito grande de equipamentos e à diversidade entre eles. Contar com esse trabalho com o ONU-Habitat, com uma equipe qualificada, vai trazer muitos ganhos. Teremos material, um norte a seguir e consistência em qualquer política pública que se queira desenhar para esses equipamentos públicos”</strong>, explica Tamires.</p>\
                      <p>O projeto seguirá até 2025, mas as primeiras etapas serão desenvolvidas já em 2023, com a aplicação das metodologias de avaliação de espaços públicos em toda a cidade, oficinas participativas para elaborar propostas de melhoria desses espaços, treinamentos com o governo e sociedade civil para aplicação dessas metodologias e elaboração de planos de gestão para oito parques pré-selecionados.</p>\
                      </p>\
                  </div>\
                </div>\
            </div>\
              <div class="col-lg-4 align-self-end">\
                  <img src="images/sao_paulo.png" alt="" class="img-fluid"/>\
              </div>\
            </div>\
          </div>\
        </div>\
        ',
        location: {
          center: [-46.87607, -23.69847],
          zoom: 9.76,
          pitch: 45.00,
          bearing: 0.00,
          speed: 2
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
          id: 'territorio-conexoes-1',
          alignment: 'left',
          hidden: false,
          //title: 'Escritório ONU-Habitat Brasil',
          //bookmark: 'Territorios',
          image: false,
          description: '\
          <div class="light rounded-lg shadow-lg">\
            <div class="container p-right-left p-bottom">\
              <h1 class="laranja">Conexões Urbanas</h1>\
                <p>Mais do que bordas de um território, cidades nas fronteiras podem ser pontos de encontro cultural. Lugares nos quais são fortalecidas as conexões urbanas. Esse é o exemplo percebido em duas regiões na fronteira entre Brasil, Argentina e Paraguai.</p>\
                <p>A primeira fica entre Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai) e tem 500 mil habitantes - o maior núcleo urbano da fronteira brasileira. A região é conhecida pelas Cataratas do Iguaçu, pela Usina Hidrelétrica de Itaipu e pela expressividade das atividades comerciais. Além de portas de entrada para seus respectivos países, os municípios também são o destino de imigrantes, que somam cerca de 80 nacionalidades.</p>\
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
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
      },

      {
        id: 'territorio-conexoes-2',
        alignment: 'left',
        hidden: false,
        //title: 'Escritório ONU-Habitat Brasil',
        //bookmark: 'Territorios',
        image: false,
        description: '\
        <div class="light rounded-lg shadow-lg">\
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">Conexões Urbanas</h1>\
              <p>A segunda região é formada pelos municípios de Barracão, Bom Jesus do Sul, Dionísio Cerqueira (Brasil) e Bernardo de Irigoyen (Argentina). Com 50 mil habitantes, apresentam modelos de governança e protagonismo de atores locais para o desenvolvimento integrado. Um exemplo dessa colaboração foi a implementação do Parque Turístico e Ambiental de Integração, um espaço público na fronteira.</p>\
              <p>Apesar de suas diferenças, ambas as regiões têm em comum a existência de uma mancha urbana única. Por apresentarem desafios e potenciais conjuntos, a colaboração transfronteiriça é vista como fundamental para o desenvolvimento integrado. E, para que o território expresse esse desejo, é imprescindível que o meio urbano seja integrado por uma rede de espaços públicos bem distribuídos, acessíveis, seguros e inclusivos, capazes de servir de ferramenta para a coesão social entre pessoas de nacionalidades distintas.</p>\
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
          mapInteractive: true,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
    },

    {
        id: 'historia-conexoes',
        alignment: 'full',
        hidden: false,
        //title: 'Abertura',
        bookmark: 'Conexões',
        description: '\
        <div class="light">\
          <div class="container-history text-left">\
            <div class="row no-gutters p-left">\
              <div class="col-lg-8">\
                <div class="row">\
                  <div class="col-md-12">\
                    <h1 class="laranja">Juntos pelo bem comum</h1>\
                  </div>\
                </div>\
                <div class="row p-bottom">\
                  <div class="col-md-6">\
                    <p>Oito lugares, um só espaço. A mágica que acontece na fronteira seca entre Brasil e Argentina parece afrontar as leis da física, mas é real. No mesmo ponto geográfico, ficam concentradas três cidades, três estados e dois países: Dionísio Cerqueira, em Santa Catarina, e Barracão, no Paraná, ambos no Brasil; e Bernardo de Irigoyen, em Misiones, na Argentina.</p>\
                    <p>Essa mágica se expande, também, para os moradores da região, que vivem uma característica cada vez mais rara: harmonia. Por ser uma fronteira seca, as pessoas circulam livremente entre os dois países sem se darem conta da travessia. Da mesma forma, o idioma se mescla em um “portunhol” característico, assim como em diversos outros aspectos culturais. E essa composição gera uma identidade única.</p>\
                    <p>“O material humano que existe em nossa região é muito particular. Talvez isso tenha se formado justamente por esse contexto. A gente não vê a fronteira como um ponto de separação, mas sim de união”.</p>\
                    <p>A frase é de Monica Raquel Franchini, professora que mora do lado argentino da fronteira há mais de 30 anos. Ela integra a coordenação de educação do La Frontera – grupo binacional que trabalha para promover o desenvolvimento e a integração da região em quatro áreas: inovação, turismo, economia e educação.</p>\
                  </div>\
                  <div class="col-md-6">\
                    <p>A missão do grupo está baseada em promover os pontos fortes da região através da cooperação e da socialização, estabelecendo parcerias e divulgando sua cultura. Apesar de estar à frente da área de educação, a paixão de Monica pela região transborda para os outros domínios.</p>\
                    <p>Um marco para o grupo foi a chegada do Conexões Urbanas, iniciativa do ONU-Habitat cujo objetivo é apoiar os municípios na definição de ações para melhorar sua rede de espaços públicos. O projeto promoveu uma avaliação de 32 espaços públicos da região, analisando sua distribuição, acessibilidade, instalações físicas, conforto, segurança, verde, governança, tipos de usos e usuários. Além do conglomerado na fronteira Brasil e Argentina, fazem parte do projeto os municípios de Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai) e mais duas cidades no Líbano.</p>\
                    <p>Para Monica, essa parceria vai potencializar as ações do grupo La Frontera, já que os dados fornecidos poderão servir de base para muitas outras ações. Ela sente que as duas instituições têm uma sinergia única em seus objetivos. “Temos que acreditar na nossa gente. Não somos uma só cidade, não somos um só povo: somos uma região fronteiriça com as mesmas necessidades e o mesmo interesse: o bem comum. E o projeto Conexões Urbanas está nos ajudando a se potencializar e crescer como um todo”.</p>\
                  </div>\
                </div>\
            </div>\
              <div class="col-lg-4 align-self-end">\
                  <img src="images/historia-conexoes.png" alt="" class="img-fluid"/>\
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
              <p>Esse percurso passa necessariamente pelo desenvolvimento urbano sustentável. Não à toa, uma das metas da cidade é atingir a neutralidade de carbono até 2050. Para auxiliar no alcance desse objetivo, a cidade foi a única do Brasil a participar de um desafio de inovação promovido pelo ONU-Habitat – o Climate Smart Cities Challenge –, com o objetivo de avançar em soluções para criar comunidades carbono zero.</p>\
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
        <div class="container-history text-left">\
          <div class="row no-gutters p-left">\
            <div class="col-lg-8">\
              <div class="row">\
                <div class="col-md-12">\
                  <h1 class="laranja">Criando comunidades carbono zero</h1>\
                </div>\
              </div>\
              <div class="row p-bottom">\
                <div class="col-md-6">\
                    <p>Apesar de próximas, o Vale do Pinhão e a Vila Torres não compartilham entre si muitas características. Enquanto a primeira é uma região industrial em reurbanização, a segunda é uma comunidade com baixo índice de desenvolvimento humano. Uma nova iniciativa, no entanto, promete unir as duas regiões em torno de um mesmo objetivo: tornarem-se as primeiras comunidades carbono zero de Curitiba.</p>\
                    <p>Esse foi o objetivo proposto pelo Instituto de Pesquisa e Planejamento Urbano de Curitiba no Climate Smart Cities Challenge – competição proposta pelo ONU-Habitat com o governo da Suécia para acelerar a transição para a neutralidade climática em quatro cidades: Curitiba, Bogotá (Colômbia), Bristol (Reino Unido) e Makindye Ssabagabo (Uganda).</p>\
                    <p>O time vencedor da iniciativa, Curitiba Smart Neighborhoods, é formado pela união de quatro empresas. A startup curitibana Agentes do Meio Ambiente (AMA), líder do time, se inscreveu na competição decidida a avançar. Com aplicativos de zeladoria urbana e educação ambiental, a empresa promove a sustentabilidade em cidades do Paraná e Santa Catarina.</p>\
                    <p>O Desafio é uma competição em etapas. Quando os nove finalistas foram divulgados, a iniciativa convidou os inovadores a formar times que incorporassem seus concorrentes, criando soluções mais robustas. Pensando nisso, o AMA convidou os demais finalistas a se unirem a ela. A resposta positiva veio de três empresas: a também curitibana Ambiente Livre e as suecas Nudgd e Smart Green Stations. Com uma proposta inédita integrando as quatro soluções, a nova equipe foi anunciada vencedora.</p>\
                </div>\
                <div class="col-md-6">\
                    <p>Para colocar as ideias em prática, o caminho ainda está sendo percorrido. Após o resultado, a equipe passou para a fase de planejamento, detalhando como tornar as comunidades curitibanas neutras em carbono com soluções de energia elétrica, gestão de resíduos e mobilidade.</p>\
                    <p>O resultado é uma complexa proposta de soluções físicas e digitais que, integradas, formam um sistema que atua para reduzir emissões em várias frentes. Cada empresa contribui dentro do time com sua área de expertise. O AMA promove a criação de comunidades digitais com moradores engajados pela sustentabilidade, criando líderes locais e promovendo educação ambiental, gerindo o sistema físico por meio de seus aplicativos. O Ambiente Livre contribui com sistemas de compostagem e hortas urbanas, criando um ciclo orgânico de reciclagem e produção de alimentos. A Smart Green Stations fornece mobiliário urbano inteligente e autossuficiente em energia, potencializando a compostagem. Já a Nudgd acrescenta soluções de ciência comportamental por meio de interações com os cidadãos, promovendo escolhas sustentáveis no dia a dia.</p>\
                    <p>Com a fase de planejamento finalizada, o momento é de iniciar a demonstração do sistema, que ocorrerá após a captação de recursos. O time destaca que, desde que foram anunciados vencedores, já houve mudanças concretas. Além da divulgação internacional e de novas oportunidades de negócio, a equipe ganhou o sentimento de esperança. “A partir do momento em que as pessoas entendem o que estamos fazendo, tem muita gente disposta a ajudar”, destaca Carolina Neiverth Rosas, gestora ambiental no Ambiente Livre. “Percebemos que existe uma nova complementação em prol de projetos socioambientais”.</p>\
                </div>\
              </div>\
          </div>\
            <div class="col-lg-4 align-self-end">\
                <img src="images/historia-curitiba.png" alt="" class="img-fluid"/>\
            </div>\
          </div>\
        </div>\
      </div>\
      ',
      location: {
        center: [-39.39162, -8.60275],
        zoom: 6.13,
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
          <div class="container p-right-left p-bottom">\
            <h1 class="laranja">Sul Global</h1>\
              <p>O termo Sul Global surgiu nos anos 1980 para substituir expressões tidas como obsoletos, como “países subdesenvolvidos” ou “em desenvolvimento”. Embora a maior parte dos países de baixa e média renda esteja localizada no hemisfério sul, a distinção não reflete totalmente sua real divisão geográfica. Um país é definido como Norte ou Sul não devido à sua localização geográfica, mas a certos indicadores econômicos e de qualidade de vida de sua população.</p>\
              <p>De forma geral, o Sul Global abrange países e regiões muito diferentes entre si. No entanto, uma das formas de uso do termo está relacionada à ideia de que esses países podem colaborar para avançarem juntos em questões sociais, econômicas, ambientais e políticas.</p>\
              <p>No contexto urbano, diferentes territórios do Sul Global podem, por exemplo, trocar conhecimentos para resolver problemas relacionados à falta de moradia ou o acesso à água. Essa forma de colaboração é chamada de Cooperação Sul-Sul (CSS), por meio da qual dois ou mais países promovem intercâmbios de conhecimento, transferências de tecnologias, respostas a emergências e desenvolvimento de meios de subsistência.</p>\
              <p>Sua vantagem é que diferentes regiões do Sul com frequência apresentam problemas ou capacidades similares. Isso significa que, quando um país ou cidade do Sul desenvolve uma solução para um desafio, essa boa prática pode ser adaptada para outro contexto com mais facilidade, chegando a bons resultados de forma mais eficiente.</p>\
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
        mapInteractive: true,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
    }

  ]
  
};