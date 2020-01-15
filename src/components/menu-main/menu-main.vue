<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug
  
  +b.NAV(v-show="menuMainShow").menu-main
    +e.list(v-for="item in items")
      +e.ROUTER-LINK(:to="item.link").list-item {{ item.name }}
</template>

<script>
  export default {
    name: 'appMenuMain',
    props: ['items', 'menuMainShow']
  }
</script>

<style lang="sass">
  @import menu-main
</style>