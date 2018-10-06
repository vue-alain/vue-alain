

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
    devServer: {
        before: app=>{
            //app.use('/api',mockRouter);
            // require('./_mock/index.ts');
            // mockRouter
        },//require('_mock/index'),
    },
    chainWebpack: config => {

        /*
        config.module
            .rule('tsx')
            .test(/\.tsx?$/)
            .use('tslint-loader')
                .loader('tslint-loader');

        config.module
            .rule('vuetsx')
            .test(/\.tsx?$/)
            .use('babel-loader')
                .loader('babel-loader')
                .tap(opt=>{
                    opt={};
                    Object.assign(opt,{
                        appendTsxSuffixTo: [/\.vue$/]
                    });
                    return opt;
                });
                */
    },
    configureWebpack: config => {

        /*
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                extensions: ['.js', '.vue', '.json', '.ts', '.tsx']

            }
        });
        */
    }
}
