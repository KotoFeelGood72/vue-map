<template>
  <div class="input-search">
    <input type="search" name="search" id="search-city" placeholder="Поиск мест, скидок, карт поблизости" @focus.prevent="focusSearch">
    <button class="search-btn">
      <global-icon icon="iconamoon:search-thin" width="15" height="15"/>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      focusSearch(e) {
        this.$emit('focusSearch', e)
    }
  }
  }
</script>

<style lang="scss" scoped>
  .input-search {
    position: relative;
    margin-bottom: 20px;
    input {
      border: none;
      width: 100%;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-color: aliceblue;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 12px; /* Задайте желаемый размер шрифта */
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      word-wrap: break-word;
    }
  }

  .search-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      border: none;
      background: transparent;
  }
</style>