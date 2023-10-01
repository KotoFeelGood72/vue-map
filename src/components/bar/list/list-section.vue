<template>
  <div class="list-section">
      <div class="list-head">
        <h2>{{ title }}</h2>
        <a href="#">
          <p>Смотреть все</p>
          <global-icon icon="mdi-light:chevron-right" width="15" height="15"/>
        </a>
      </div>
      <v-list :items="list"/>
    </div>
</template>

<script>
  import vList from './v-list.vue';
  import { list } from './list.js'
  export default {
    props: {
      title: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        list
      }
    },
    components: {
      vList
    }
  }
</script>

<style lang="scss" scoped>
.list-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;


  a {
    display: flex;
    align-items: center;
    color: rgb(17, 221, 187);
    font-size: 12px;
    text-decoration: none;
  }

  h2 {
    font-size: 16px;
    color: #424242;
  }
}

.list-section {
  height: 100%;
}
</style>