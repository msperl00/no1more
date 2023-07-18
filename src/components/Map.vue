<template>
    <div id="map" class="grow relative z-10  border-2">

    </div>
</template>

<script>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { reactive, toRefs, ref, onMounted } from 'vue'

export default {
    setup() {
        let countZoom = 3;
        let map;
        const southWest = leaflet.latLng(-89.98155760646617, -180);
        const northEast = leaflet.latLng(89.99346179538875, 180);
        const bounds = leaflet.latLngBounds(southWest, northEast);

        onMounted(() => {


            map = leaflet.map('map', {
                smoothSensitivity: 1,
                zoomSpan: 0.20,
                doubleClickZoom: true,
                maxBounds: bounds,
                zoomAnimation: true
            }).setView([39.505, -2.59], 3);
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
        });
    }
}
</script>

<style lang="scss" scoped>
</style>