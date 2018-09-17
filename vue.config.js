module.exports = {
  
    transpileDependencies:[
        // other js file
        //'node_modules/@antv/g2/dist/g2.min.js',
        //'node_modules/@antv/data-set/dist/data-set.min.js',
        //'node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js'
    ],
      css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
  }
