<template>
  <div>
    <nav>
      <ul class="custom-menu">
        <li v-for="(item, i) in custom" :key="'custom-item-' + i">
          <div class="custom-icon">
            <global-icon :icon="item.icon" width="20" height="20"/>
          </div>
          <p v-if="item.name">{{ item.name }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data: () => ({
      custom: [
        {
          icon: 'mingcute:settings-6-line',
          name: ''
        },
        {
          icon: 'fluent:food-24-filled',
          name: 'Где поесть'
        },
        {
          icon: 'material-symbols:fastfood-rounded',
          name: 'Продукты'
        },
        {
          icon: 'fluent:building-32-regular',
          name: 'ТЦ'
        },
        {
          icon: 'healthicons:pharmacy-alt',
          name: 'Аптека'
        },
      ]
    })
  }
</script>

<style lang="scss" scoped>
.custom-menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;
  padding: 0 10px 20px 10px;
  li {
    display: flex;
    align-items: center;
    color: rgba(128, 128, 128, 0.836);
    border: 1px solid rgba(128, 128, 128, 0.308);
    white-space: nowrap;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #fff;
    &:not(:last-child) {
      margin-right: 10px;
    }

    p {
      padding-left: 5px;
      font-size: 12px;
      font-weight: 500;
      margin: 0;
    }
  }
}

.custom-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>