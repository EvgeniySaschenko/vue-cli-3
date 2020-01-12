<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  +b.FOOTER.footer
    +e.row Footer
</template>

<script>
  export default {
      name: 'appFooter'
  }
</script>

<style lang="sass" scoped>
    @import footer
</style>