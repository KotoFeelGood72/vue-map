<template>
  <div id="app">
    <div class="mobile-map">
      <v-map/>
      <mobile-bar/>
    </div>
  </div>
</template>

<script>
import vMap from '@/components/map/v-map.vue'
import mobileBar from '@/components/bar/mobile-bar.vue'
export default {
  components: {
    vMap,
    mobileBar
  }
}
</script>

<style lang="scss">

#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

body {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  
}

.mobile-map {
  height: 100vh;
  overflow-y: hidden!important;
  position: relative;
}


</style>
