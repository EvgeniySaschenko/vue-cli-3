<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  +b.BUTTON.button-menu-main КАТАЛОГ ТОВАРОВ
</template>

<script>
  export default {
    name: 'app-button-menu-main'
  }
</script>

<style lang="sass">
  @import button-menu-main
</style>