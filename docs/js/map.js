var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

var currentChapter;

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

// add navigation control for interactive chapters
const navigation = new mapboxgl.NavigationControl();

// add custom hover popups for interactive chapters
const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
});
const popupHover = (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.Community_;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
}
const popupHoverAway = () => {
    popup.remove();
    map.getCanvas().style.cursor = 'default';
}
const turnPopupsOn = (layer) => {
    map.on('mouseenter', layer, popupHover);
    map.on('mouseleave', layer, popupHoverAway);
};
const turnPopupsOff = (layer) => {
    map.off('mouseenter', layer, popupHover);
    map.off('mouseleave', layer, popupHoverAway);
};

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

//var header = document.createElement('div');

/*if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

// add logo if found in config
if (config.logo) {
    var image = new Image();
    image.src = config.logo;
    header.appendChild(image);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}*/

config.chapters.forEach((record, idx) => {

    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.description) {

        //var story = document.createElement('p');
        //story.innerHTML = record.description;
        //chapter.appendChild(story);

        chapter.innerHTML = record.description;

    }

    //chapter.classList.add(config.theme);

    container.setAttribute('id', record.id);

    container.classList.add('step');

    if (idx === 0) {
        container.classList.add('active');
    }
    
    container.appendChild(chapter);
    
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }

    features.appendChild(container);

});

story.appendChild(features);

var footer = document.createElement('div');

// add bookmarks for chapters with title, append to header and footer
/*if (config.bookmarks) {
    var bookmarksText = "<strong>Índice</strong>: ";
    for (i = 0; i < config.chapters.length; i++) {
        if (config.chapters[i].bookmark) {
            bookmarksText += `<a href=#${config.chapters[i].id}>${config.chapters[i].bookmark}</a>`;
            if (i != config.chapters.length - 1) {
                bookmarksText += " ";
            }
        }
    }
    var headerBookmarks = document.createElement('h5');
    headerBookmarks.innerHTML = bookmarksText;
    header.appendChild(headerBookmarks);
    var footerBookmarks = document.createElement('p');
    footerBookmarks.innerHTML = bookmarksText;
    footer.appendChild(footerBookmarks);
}*/

// add prefix content for mobile view
if (config.mobileview) {
    var mobileText = document.createElement('p');
    mobileText.innerHTML = config.mobileview;
    header.appendChild(mobileText);
}

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    transformRequest: transformRequest,
    // set custom projection
    projection: config.projection,
    // make storymap partially interactive
    interactive: config.mapInteractive,
    dragPan: true,
    dragRotate: false,
    doubleClickZoom: false,
    scrollZoom: false,
    touchZoomRotate: false,
});

// Create a inset map if enabled in config.js
if (config.inset == true && config.legend == false) {
    var insetMap = new mapboxgl.Map({
        container: 'mapInset', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: config.chapters[0].location.center,
        // Hardcode above center value if you want insetMap to be static.
        zoom: 3, // starting zoom
        hash: false,
        interactive: false,
        attributionControl: false,
        //Future: Once official mapbox-gl-js has globe view enabled,
        //insetmap can be a globe with the following parameter.
        //projection: 'globe'
    });
}

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {

    document.getElementById("2020Btn").addEventListener("click", layerToggle);
    document.getElementById("2021Btn").addEventListener("click", layerToggle);
    document.getElementById("2022Btn").addEventListener("click", layerToggle);

    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.75 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // add custom layers
    if (config.useCustomLayers) {
        for (i = 0; i < externalData.sources.length; i++) {
            let currentSource = externalData.sources[i];
            let sourceObj = { "type": currentSource.type, "url": currentSource.url };
            map.addSource(currentSource.name, sourceObj);
        }
        for (i = 0; i < externalData.layers.length; i++) {
            map.addLayer(externalData.layers[i], 'your-layer'); // arrange layers beneath this layer in your Studio map
        }
    }

    // As the map moves, grab and update bounds in inset map.
    if (config.inset && !config.legend) {
        map.on('move', getInsetBounds);
    }

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(async response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);

            currentChapter = chapter.id;

            // add legend to each chapter
            if (config.legend && !config.inset) {
                for (i = 0; i < config.chapters.length; i++) {
                    if (config.chapters[i].legend != undefined) {
                        if (config.chapters[i].id == response.element.id) {
                            document.getElementById(config.chapters[i].id + "Legend").style.display = "block";
                        } else {
                            document.getElementById(config.chapters[i].id + "Legend").style.display = "none";
                        }
                    }
                };
            }

            response.element.classList.add('active');

            map[chapter.mapAnimation || 'flyTo'](chapter.location);
            // Incase you do not want to have a dynamic inset map,
            // rather want to keep it a static view but still change the
            // bbox as main map move: comment out the below if section.
            if (config.inset && !config.legend) {
                if (chapter.location.zoom < 5) {
                    insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
                }
                else {
                    insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
                }
            }
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }

            // radio input 
            if (chapter.id === 'evol-territorio') {
                document.getElementById('mapToggle').style.opacity = 1;
                document.getElementById("2020Btn").checked = false;
                document.getElementById('2021Btn').checked = false;
                document.getElementById("2022Btn").checked = true;
            } 
            if (chapter.id !== 'evol-territorio') {
                document.getElementById('mapToggle').style.opacity = 0;
            }

            // set interactive properties for chapters set as mapInteractive = true
            if (chapter.mapInteractive) {
                map.addControl(navigation);
                map.dragPan.enable();
                map.dragRotate.enable();
                map.doubleClickZoom.enable();
                map.getCanvas().style.cursor = 'grab';
            } else {
                if (map.hasControl(navigation)) {
                    map.removeControl(navigation);
                }
                map.dragPan.disable();
                map.dragRotate.disable();
                map.doubleClickZoom.disable();
                map.getCanvas().style.cursor = 'default';
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 180, {
                        duration: 30000, easing: function (t) {
                            return t;
                        }
                    });
                });
            }

            if (chapter.spinGlobe) {
                map.once('moveend', () => {
                    const center = map.getCenter();
                    const newCenter = [center.lng + 360, center.lat];
                    map.easeTo({ center: newCenter, duration: 150000, easing: n => n });
                });
            }
        })
        
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

function layerToggle(e) {

    document.getElementById('2020Btn').checked = false;
    document.getElementById('2021Btn').checked = false;
    document.getElementById('2022Btn').checked = false;
    this.checked = true;

    map.setPaintProperty(
        'pin-teresina',
        'fill-opacity',
        0
    );
    map.setPaintProperty(
        'pin-onu',
        'fill-opacity',
        0
    );
    map.setPaintProperty(
        'munic-pe-conex',
        'fill-opacity',
        0
    );

    if (this.id === "2020Btn") {
        map.setPaintProperty(
            'pin-teresina',
            'fill-opacity',
            1
        );
    } else if (this.id === "2021Btn") {
        map.setPaintProperty(
            'pin-onu',
            'fill-opacity',
            1
        );
    } else if (this.id === "2022Btn") {
        map.setPaintProperty(
            'munic-pe-conex',
            'fill-opacity',
            1
        );
    }
}

//Helper functions for insetmap
function getInsetBounds() {
    let bounds = map.getBounds();

    let boundsJson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            bounds._sw.lng,
                            bounds._sw.lat
                        ],
                        [
                            bounds._ne.lng,
                            bounds._sw.lat
                        ],
                        [
                            bounds._ne.lng,
                            bounds._ne.lat
                        ],
                        [
                            bounds._sw.lng,
                            bounds._ne.lat
                        ],
                        [
                            bounds._sw.lng,
                            bounds._sw.lat
                        ]
                    ]
                ]
            }
        }]
    }

    if (initLoad) {
        addInsetLayer(boundsJson);
        initLoad = false;
    } else {
        updateInsetLayer(boundsJson);
    }

}

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}

// setup resize event
window.addEventListener('resize', scroller.resize);

document.querySelectorAll('.ul-legend').forEach(item => {
    item.addEventListener("mouseover", function (e) {
        [...item.children].forEach(function (li) {
            setLayerOpacity({
                layer: li.getAttribute('value'),
                opacity: 1
            })
        })
        setLayerOpacity({
            layer: e.target.getAttribute('value'),
            opacity: 1
        })
    }, false)

    item.addEventListener("mouseout", function (e) {
        [...item.children].forEach(function (li) {
            setLayerOpacity({
                layer: li.getAttribute('value'),
                opacity: 0.8
            })
        })
    }, false);

})