<template lang="pug">
  include /node_modules/bemto.pug/bemto.pug

  .wrapper
    app-header
    +b.layout_root
      .container
        +e.row_top-panel
          app-button-menu-main
        +e.row_content
          +e.col_sidebar
            app-sidebar(:sidebarShow="sidebarShow" :menuMainShow="menuMainShow")
              slot(name="sidebar")
          +e.col_content
            slot(name="content")
    app-footer
</template>

<script>
  export default {
    name: 'appLayout',
    props: ['content', 'sidebar', 'sidebarShow', 'menuMainShow'],
  }
</script>

<style lang="sass">
  @import "src/layouts/layout"
  @import root
</style>
