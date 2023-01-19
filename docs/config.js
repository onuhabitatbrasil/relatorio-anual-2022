var config = {
    style: 'mapbox://styles/gabrielvazdemelo/clc0l7t96001k14s44ih6kdi0',
    accessToken: 'pk.eyJ1IjoiZ2FicmllbHZhemRlbWVsbyIsImEiOiJja3NqZ2xnbGcyZWNnMzFxdHdibzd0bGU5In0.PC9uOpr-sNcBIYadfuEgUg',
    showMarkers: false,
    markerColor: '#00b2e3',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: false,
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: false,
    //title: 'Relatório Anual',
    //logo: 'images/capa.png',
    //subtitle: 'Brasil 2022',
    //byline: 'ONU-Habitat',
    //mobileview: '<div id="rotate-mobile"><em>Para melhor visualização do relatório, utilize o dispositivo móvel na horizontal</em><br><br><img src="assets/device_white.svg" style = "width: 25%;">', // to add custom messaging in the header for mobile devices
    footer: '\
    <div>\
        <ul class="social-icons">\
            <li>\
                <a href="https://www.instagram.com/onuhabitatbrasil/" target="_blank" title="Instagram">\
                    <i class="fa fa-instagram fa-2x"></i>\
                </a>\
            </li>\
            <li>\
                <a href="https://www.instagram.com/onuhabitatbrasil/" target="_blank" title="Facebook">\
                    <i class="fa fa-facebook fa-2x"></i>\
                </a>\
            </li>\
            <li>\
                <a href="https://www.instagram.com/onuhabitatbrasil/" target="_blank" title="Facebook">\
                    <i class="fa fa-twitter fa-2x"></i>\
                </a>\
            </li>\
            <li>\
                <a href="https://www.instagram.com/onuhabitatbrasil/" target="_blank" title="YouTube">\
                        <i class="fa fa-youtube-play fa-2x"></i>\
                </a>\
            </li>\
        </ul>\
    </div>\
    <p>Copyright © ONU-Habitat 2023</p>',

    chapters: [

        {
            id: 'intro-empty',
            alignment: 'left',
            hidden: true,
            //title: 'Abertura',
            //bookmark: 'Abertura',
            description: '',
            location: {
                center: [-22.32528, -2.14945],
                zoom: 1.5,
                pitch: 0,
                bearing: 0,
                speed: 2
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
            id: 'abertura',
            alignment: 'full',
            hidden: false,
            //title: 'Abertura',
            bookmark: 'Abertura',
            description: '<h1>Palavras de Abertura</h1>\
            <br><iframe width="100%" height="375" src="https://www.youtube-nocookie.com/embed/qFvCL0nSzUA" title="Abertura" frameborder="0" allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>',
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
            //title: 'Abertura',
            bookmark: 'ONU-Habitat Brasil',
            image: false,
            description: '<img src="images/logo_onuhabitat.png" alt="Logo ONU-Habitat em Português"/>\
            <p>O ONU-Habitat está presente no Brasil há mais de 20 anos, atuando em projetos relacionados a diversos temas urbanos em cidades de todo o país. O Escritório Regional para América Latina e o Caribe e o escritório para o Brasil e Cone Sul estão localizados no Rio de Janeiro.',
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
            id: 'flip-cards',
            alignment: 'full',
            hidden: false,
            //title: 'Display Title',
            //bookmark: 'Indice 1',
            image: 'images/foto_ex.jpg',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description:  
            "<div id=container'>\
            <h1> Título </h1>\
            <div class='card'>\
              <div class='front'>\
                <img class='contact' src='images/foto_ex.jpg'/>\
                <span class='name'>Nome</span>\
                <hr>\
                <span class='job'>Descrição</span>\
              </div>\
              <div class='back'>\
                <span>Título:</span>\
                <p>HTML, CSS, Javascript. UX/UI designer</p>\
                <span>Social media </span>\
                <div class='icons'>\
                    <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' title='Facebook'>\
                    <i class='fa fa-facebook'></i>\
                    </a>\
                </div>\
              </div>\
            </div>\
            <div class='card'>\
              <div class='front'>\
                <img src='images/foto_ex.jpg' class='contact' />\
                <span class='name'>Peter Panda</span>\
                <hr>\
                <span class='job'> - back-end web developer - </span>\
              </div>\
              <div class='back'>\
                <span>Skills:</span>\
                <p>PHP, Ruby, Python, Django</p>\
                <span>Social media </span>\
              </div>\
            </div>\
            <div class='card'>\
              <div class='front'>\
                <img src='images/foto_ex.jpg' class='contact' />\
                <span class='name'>John Rodent</span>\
                <hr>\
                <span class='job'>- QA engineer -</span>\
              </div>\
              <div class='back'>\
                <span>Skills:</span>\
                <p> JIRA, FogBugz, Pivotal Tracker, Trac</p>\
                <span>Social media </span>\
              </div>\
            </div>\
            <div class='card'>\
              <div class='front'>\
                <img src='images/foto_ex.jpg' class='contact' />\
                <span class='name'>Julien King</span>\
                <hr>\
                <span class='job'>- iOS developer -</span>\
              </div>\
              <div class='back'>\
                <span>Skills:</span>\
                <p>GCD, Swift, Git</p>\
                <span>Social media </span>\
              </div>\
            </div>\
          </div>\
          ",
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
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
          id: 'alagoas',
          alignment: 'left',
          hidden: false,
          //title: 'Display Title',
          //bookmark: 'Indice 1',
          image: 'images/foto_ex.jpg',
          //caption: 'Source image caption',
          //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
          //author: 'Rudo Kemper, Digital Democracy',
          //legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
          description:  
          '\
            <h1>Alagoas</h1>\
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec ligula facilisis pellentesque.</p>\
            <ul class="fa-ul ul-legend">\
                <li class="li-hover" value="al-baixada-lagunar-bairros"><span class="fa-li" style="color:#ff0000;"><i class="fa fa-square"></i></span>Baixada Lagunar</li>\
            </ul>\
            <img class="image-wrapper" src="images/foto_ex.jpg"/>\
            <p class="caption">Caption</p>\
          ',
          location: {
            center: [-35.75963, -9.64175],
            zoom: 13.26,
            pitch: 59.00,
            bearing: 35.20,
            speed: 1.5
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          spinGlobe: false,
          mapInteractive: true,
          callback: '',
          onChapterEnter: [
            {
                layer: 'al-baixada-lagunar-bairros',
                opacity: 1
            }
          ],
          onChapterExit: [
              {
                  layer: 'al-baixada-lagunar-bairros',
                  opacity: 0
              }
          ]
      }

        



    ]
};
