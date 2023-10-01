<template>
  <div class="input-search">
    <input type="search" name="search" id="search-city" placeholder="Поиск мест, скидок, карт поблизости" @focus="focusSearch">
    <button class="search-btn">
      <global-icon icon="iconamoon:search-thin" width="15" height="15"/>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      focusSearch() {
        this.$emit('focusSearch')
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