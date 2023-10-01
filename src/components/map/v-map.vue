<template>
  <div class="map">
    <yandex-map :coords="map.coord" :zoom="10" :controls="map.controlYandex" :scroll-zoom="false">
        <ymap-marker
            :marker-id="12"
            :coords="map.coord"
            :icon=map.markerIcon
            balloon-template="Good yandex maps"
          />
    </yandex-map>   
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  export default {
    components: {
      yandexMap, 
      ymapMarker
    },
    data: () => ({
        map: {
        controlYandex: ['zoomControl', 'routeButtonControl'],
        shouldRenderMap: false,
        coord: [45.0448, 38.976],
        theme: "islands#dark",
        markerIcon: {
          layout: 'default#imageWithContent',
          // imageHref: '/assets/img/icons/map.svg',
          imageSize: [30, 30],
          imageOffset: [0, 0],
          content: '',
          contentOffset: [0, 15],
          contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        },
      },
    })
  }
</script>

<style lang="scss" scoped>

.map {
  height: 100%;
  max-width: 475px;
  z-index: -1;

  .ymap-container {
    height: 100%;
  }
}


</style>