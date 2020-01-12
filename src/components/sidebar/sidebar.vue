<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug
  
  +b.ASIDE.sidebar 
    div sidebar-home
    slot(v-bind:sidebar="sidebar") {{ sidebar }}
</template>

<script>
  export default {
    name: "appSidebar",
    props: ['sidebar']
  }
</script>

<style lang="sass">
  @import sidebar
</style>
