<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug
  
  +b.APP-LAYOUT(:sidebarShow="true" :menuMainShow="true").page_home
    template(v-slot:content)
      +b.MAIN.main
        +e.row HOME PAGE
</template>

<script>
  import appLayout from '@/layouts/root/root.vue'

  export default {
      name: "home",
      components: {
        appLayout
      }
  }
</script>

<style lang="sass">
  @import home
</style>
