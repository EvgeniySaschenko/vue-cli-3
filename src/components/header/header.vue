<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  +b.HEADER.header
    .container
      +e.row
        +e.col_logo
          +e.ROUTER-LINK(to="/").logo
            +e.IMG(src="~@/assets/img/logo.svg").logo-img
</template>

<script>
  export default {
      name: 'appHeader'
  }
</script>

<style lang="sass" scoped>
  @import header
</style>