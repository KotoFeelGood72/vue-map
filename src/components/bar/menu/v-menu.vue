<template>
  <nav>
    <ul class="menu-list">
      <li 
        v-for="(item, i) in menu" 
        :key="'menu-item-' + i"
        @click="selectTab(i)"
        :class="{ active: activeTab === i }"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { menu } from './menu'
  export default {
    data() {
      return {
        menu,
        activeTab: 0
      }
    },
    methods: {
      selectTab(index) {
        this.$emit('selectTab', index)
        this.activeTab = index;

        console.log(index)
      },
    }
  }
</script>

<style lang="scss" scoped>
.menu-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(128, 128, 128, 0.651);
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    transition: all .3s ease;
    &:before {
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: rgb(17, 221, 187);
        content: '';
        transition: all .3s ease;
        opacity: 0;
        visibility: hidden;
        transform: translateX(-100%);
      }
      &.active {
        color: rgb(17, 221, 187);
        &:before {
          opacity: 1;
          visibility: visible;
          transform: translateX(0%);
      }
    }
  }
}
</style>