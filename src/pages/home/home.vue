<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug
  
  +b.APP-LAYOUT.page_home
    template(v-slot:sidebar)
      div 5555
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
