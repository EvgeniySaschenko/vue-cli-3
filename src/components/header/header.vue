<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  +b.HEADER.header
    .container
      +e.row_main HEADER
    .container
      +e.row_second
        +e.col_button-main-menu Кнопка
        +e.col_search Поиск
</template>

<script>
  export default {
      name: 'appHeader'
  }
</script>

<style lang="sass" scoped>
  @import header
</style>