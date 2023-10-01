<template>
  <div id="app">
    <div class="mobule-map">
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

body {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.mobule-map {
  height: 100vh;
}

</style>
