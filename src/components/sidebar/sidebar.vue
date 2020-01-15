<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  //- Чтобы в "sidebar" передать компонент / кусок кода - необходимо в шаблоне страницы написать "template(v-slot:sidebar)"
  //- template(v-slot:sidebar)
  //-   custom-code


  //- Чтобы отобразить "sidebar" (по умолчанию скрыт) - необходимо в шаблоне страницы передать props ":sidebarShow="true""
  //- APP-LAYOUT(:sidebarShow="true").page_home

  +b.ASIDE(v-show="sidebarShow").sidebar
    app-menu-main(:items="menuMain" :menuMainShow="menuMainShow")
    slot(:sidebar="sidebar") {{ sidebar }}
</template>

<script>
  let menuMain = require("@/components/menu-main/menu-main.json")

  export default {
    name: "appSidebar",
    props: ['sidebar', 'sidebarShow', 'menuMainShow'],
    data() {
      return {
        menuMain
      }
    }
  }
</script>

<style lang="sass">
  @import sidebar
</style>
