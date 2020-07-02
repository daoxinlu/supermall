module.exports = {
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                
                'assets':'@/assets',
                'components':'@/components',
                'common':'@/common',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/", //部署应用包时的基本 URL
    devServer:{
        port:8082
    }
}