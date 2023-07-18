<template>
  
<div class="lg:flex h-screen bg-gray-700  border-t-2 border-b-2">
    <div class="bg-gray-700 text-white p-8 ">
        <button @click="toggleGeojsonLayer" class="bg-purple-600 hover:bg-purple-700 text-white flex py-2 px-4 font-bold rounded ">
        Violencia de género 
        </button>
        <div class="mt-4">
    <button @click="toggleGeojsonLayerDomestica" class="w-full h-full  bg-amber-500  hover:bg-amber-700  text-white font-bold py-2 px-4 rounded">
      Violencia doméstica
    </button>
  </div>
    </div>
</div>
    <div id="map" class="grow relative z-10  border-2">
    </div>
  </template>


<script>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref } from 'vue'

export default {
    setup() {
        let countZoom = 3;
        let map;
        let comunidadesGenero;
        let comunidadesDomestica;
        const geojsonLayerGenero = ref(null);
        const geojsonLayerDomestica = ref(null);
        const southWest = leaflet.latLng(-89.98155760646617, -180);
        const northEast = leaflet.latLng(89.99346179538875, 180);
        const bounds = leaflet.latLngBounds(southWest, northEast);

        function highlightFeatureGenero(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#8A2BE2',
                        opacity: 1, // opacidad del borde
                color: 'white', // color del borde
                dashArray: '3', // estilo del borde
                fillOpacity: 0.8
            });

            if (!leaflet.Browser.ie && !leaflet.Browser.opera && !leaflet.Browser.edge) {
                layer.bringToFront();
            }
        }

        function highlightFeatureDomestica(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#F59E0B',
                opacity: 1, // opacidad del borde
                color: 'white', // color del borde
                dashArray: '3', // estilo del borde
                fillOpacity: 0.8
            });

            if (!leaflet.Browser.ie && !leaflet.Browser.opera && !leaflet.Browser.edge) {
                layer.bringToFront();
            }
        }


       

        const toggleGeojsonLayer = () => {
    if (map.hasLayer(geojsonLayerGenero.value)) {
        map.removeLayer(geojsonLayerGenero.value);
    } else {
        geojsonLayerGenero.value.addTo(map);
    }
};

const toggleGeojsonLayerDomestica = () => {
    if (map.hasLayer(geojsonLayerDomestica.value)) {
        map.removeLayer(geojsonLayerDomestica.value);
    } else {
        geojsonLayerDomestica.value.addTo(map);
    }
};

        function resetHighlightGenero(e) {
            var layer = e.target;
            layer.setStyle({
                fillColor: '#8A2BE2', // color de relleno
                weight: 2, // grosor del borde
                opacity: 1, // opacidad del borde
                color: 'white', // color del borde
                dashArray: '3', // estilo del borde
                fillOpacity: 0.8 // opacidad del relleno
            });
        }

        function resetHighlightDomestica(e) {
            var layer = e.target;
            layer.setStyle({
                fillColor: '#F59E0B', // color de relleno
                weight: 2, // grosor del borde
                opacity: 1, // opacidad del borde
                color: 'white', // color del borde
                dashArray: '3', // estilo del borde
                fillOpacity: 0.8 // opacidad del relleno
            });
        }

        onMounted(async () => {
            // Fetch the GeoJSON data
             comunidadesGenero = await fetch('../../public/spain-gender-violence.geojson').then(res => res.json());
            comunidadesDomestica = await fetch('../../public/spain-domestic-violence.geojson').then(res => res.json());
           
            console.log(comunidadesDomestica);

            map = leaflet.map('map', {
                smoothSensitivity: 1,
                zoomSpan: 0.20,
                doubleClickZoom: true,
                maxBounds: bounds,
                zoomAnimation: true
            }).setView([40.463667, -3.74922], 3);

            leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                minZoom: 3,
                noWrap: true,
                center: bounds.getCenter(),
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                maxBoundsViscosity: 0.5,
                accessToken: 'pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA'
            }).addTo(map);

            map.zoomControl.setPosition('topright');
            map.on('drag', function () {
                map.panInsideBounds(bounds, { animate: true });
            });

            setInterval(function () {
                if (countZoom < 6)
                    map.setZoom(countZoom += 0.25)
            }, 100);

            geojsonLayerGenero.value = leaflet.geoJSON(comunidadesGenero, {
                style: function () {
                    return {
                        fillColor: '#8A2BE2', // color de relleno
                        weight: 2, // grosor del borde
                        opacity: 1, // opacidad del borde
                        color: 'white', // color del borde
                        dashArray: '3', // estilo del borde
                        fillOpacity: 0.8 // opacidad del relleno
                    };
                },
                onEachFeature: function (feature, layer) {

                    if (feature.properties) {
                        layer.bindPopup("<h2>" + feature.properties.noml_ccaa + "</h2>" +
                            "<p>En lo que llevamos de 2023, se han registrado <strong>" + feature.properties.violence_victims +
                            "</strong> víctimas de violencia de género.</p>" +
                            "<p>Esto representa un <strong>" + feature.properties.percentage +
                            "%</strong> del total del riesgo en España.</p>");
                    }
                    layer.on({
                        mouseover: highlightFeatureGenero,
                        mouseout: resetHighlightGenero
                    });
                },
            });

    geojsonLayerDomestica.value = leaflet.geoJSON(comunidadesDomestica, {
        style: function () {
            return {
                fillColor: '#F59E0B', // color de relleno para doméstica
                weight: 2, // grosor del borde
                opacity: 1, // opacidad del borde
                color: 'white', // color del borde
                dashArray: '3', // estilo del borde
                fillOpacity: 0.8 // opacidad del relleno
            };
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties) {
                layer.bindPopup("<h2>" + feature.properties.noml_ccaa + "</h2>" +
                    "<p>Desde el año 2011, se han registrado <strong>"+
                    "</strong> víctimas de violencia doméstica.</p>" +
                    "<p>Esto representa un <strong>" + feature.properties.percentage +
                    "%</strong> del total del riesgo en España.</p>");
            }
            layer.on({
                mouseover: highlightFeatureDomestica,
                mouseout: resetHighlightDomestica
            });
        },
    });
        });

        return { toggleGeojsonLayer, toggleGeojsonLayerDomestica };
    }
}
</script>

<style lang="scss" scoped>
</style>
