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
      description: '<h1>Palavras de Abertura</h1>\
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat justo sit amet lorem elementum, imperdiet condimentum nunc tincidunt. Mauris pulvinar purus leo, eu auctor felis consectetur vel. In vehicula vulputate felis vel aliquet. Maecenas interdum molestie ligula a maximus. In nulla tellus, sagittis sed magna in, cursus pretium diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur diam nulla, fermentum eu bibendum in, maximus quis ligula. Ut hendrerit pellentesque lorem. Nunc facilisis felis sit amet sem dapibus ullamcorper. Nullam nec posuere ipsum, eget aliquet neque. Etiam et scelerisque odio, nec viverra nibh. Aliquam eu aliquet neque. Etiam a elementum augue, ac tincidunt nisi. Integer cursus malesuada felis non lacinia. Maecenas dictum magna quis orci tincidunt tristique. Ut sodales nibh a lacus sodales gravida.</p>\
      <img src="images/abertura.png" alt="Palavras de Abertura"/>\
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
        description: '<h1>Escritório ONU-Habitat Brasil</h1>\
        <p>O ONU-Habitat está presente no Brasil há mais de 20 anos, atuando em projetos relacionados a diversos temas urbanos em cidades de todo o país. O Escritório Regional para América Latina e o Caribe e o escritório para o Brasil e Cone Sul estão localizados no Rio de Janeiro.</p>\
        <img src="images/logo_onuhabitat_branco.png" alt="Logo ONU-Habitat em Português"/>\
        ',
        location: {                   
            center: [-43.18182, -22.93120],
            zoom: 12.70,
            pitch: 60.50,
            bearing: -9.60,
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
      <div class="wrapper">\
            <h1>Linha do Tempo<h1>\
            <div class="carousel">\
              <div id="flip1" class="flipcard">\
                <div class="flip flip_front">\
                  <img alt="piscum.photos random image" src="https://picsum.photos/300?image=980" />\
                </div><!-- .flip_front -->\
                <div class="flip flip_back">\
                  <h3>Lorem ipsum</h3>\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui viverra, ornare lorem ut, condimentum nibh. Quisque ut bibendum nulla.</p>\
                </div><!-- .flip_back -->\
              </div><!-- #flip1 -->\
              <div id="flip2" class="flipcard">\
                <div class="flip flip_front">\
                  <img alt="piscum.photos random image" src="https://picsum.photos/300?image=1078" />\
                </div><!-- .flip_front -->\
                <div class="flip flip_back">\
                  <h3>Lorem ipsum</h3>\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui viverra, ornare lorem ut, condimentum nibh. Quisque ut bibendum nulla.</p>\
                </div><!-- .flip_back -->\
              </div><!-- #flip2 -->\
              <div id="flip3" class="flipcard">\
                <div class="flip flip_front">\
                  <img alt="piscum.photos random image" src="https://picsum.photos/300?image=565" />\
                </div><!-- .flip_front -->\
                <div class="flip flip_back">\
                  <h3>Lorem ipsum</h3>\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui viverra, ornare lorem ut, condimentum nibh. Quisque ut bibendum nulla.</p>\
                </div><!-- .flip_back -->\
              </div><!-- #flip3 -->\
              <div id="flip4" class="flipcard">\
                <div class="flip flip_front">\
                  <img alt="piscum.photos random image" src="https://picsum.photos/300?image=565" />\
                </div><!-- .flip_front -->\
                <div class="flip flip_back">\
                  <h3>Lorem ipsum</h3>\
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dui viverra, ornare lorem ut, condimentum nibh. Quisque ut bibendum nulla.</p>\
                </div><!-- .flip_back -->\
              </div><!-- #flip4 -->\
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
    }

  ]
  
};
