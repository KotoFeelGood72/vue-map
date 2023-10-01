<template>
  <div>
    <ul class="">
      <item v-for="(item, i) in items" :key="'items-' + i" :data="item"/>
    </ul>
  </div>
</template>

<script>
  import item from './v-item.vue'
  export default {
    components: {
      item
    },
    props: ['items']
  }
</script>

<style lang="scss" scoped>

ul {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}

</style>