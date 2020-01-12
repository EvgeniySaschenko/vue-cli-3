const path = require("path")

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader',
                    options: {
                        // Позволяет файлам PUG при "include" задавать путь от корня (в начале пути нужно указать "/")
                        basedir: path.resolve(__dirname, '')
                    }
                },
            ]
        }
    },
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "~@/assets/style/variables.sass"; @import "~@/assets/style/_mixins.sass";`
          }
        }
    }
}