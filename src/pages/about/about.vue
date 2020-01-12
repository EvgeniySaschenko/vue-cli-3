<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug
  
  +b.APP-LAYOUT.page_about
    template(v-slot:content)
      +b.MAIN.main
        +e.row About Page
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
  @import about
</style>
