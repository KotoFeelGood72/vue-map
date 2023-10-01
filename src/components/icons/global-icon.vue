<template>
  <Icon :icon="icon" :width="width" :height="height" :color="color" />
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'GlobalIcon',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: '24' // Здесь можно указать значение по умолчанию для ширины иконки
    },
    height: {
      type: [Number, String],
      default: '24' // Здесь можно указать значение по умолчанию для высоты иконки
    },
    color: {
      type: String,
      default: 'currentColor' // Здесь можно указать значение по умолчанию для цвета иконки
    }
  }
}
</script>