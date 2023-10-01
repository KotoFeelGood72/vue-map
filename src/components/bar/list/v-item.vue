<template>
  <div class="item">
    <div class="item-img">
      <img :src="data.img" alt="">
    </div>
    <div class="item-content">
      <h3>{{ data.title }}</h3>
      <ul>
        <li v-for="(item, i) in data.labels" :key="'features-' + i"><p>{{ item }}</p></li>
      </ul>
      <p>{{ data.address }}</p>
      <a href="#">Показать на карте</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 0 0 10px 0 #00000025;
  margin: 20px 0;
  padding: 10px;
}

.item-img {
  min-width: 80px;
  max-width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.item-content {
  h3 {
    font-size: 14px;
    margin: 0;
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: -5px -5px 0 0;

    li {
      padding: 5px 5px 0 0;
      p {
        margin: 0;
        padding: 3px 5px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        color: white;
      }
      &:nth-child(1) {
        p {
          background-color: orange;
        }
      }
      &:nth-child(3) {
        p {
          background-color: orangered;
        }
      }
      &:nth-child(2) {
        p {
          background-color: rgb(17, 221, 187);
        }
      }
      &:nth-child(4) {
        p {
          background-color: red;
        }
      }
    }
  }

  p {
    font-size: 12px;
  }
  a {
    font-size: 13px;
    color: rgb(13, 172, 145);
  }
}
</style>