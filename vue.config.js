var path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit:37.5//设计稿等分之后的值 等分的值是与页面的rem比例一致的
})
module.exports={
    configureWebpack:{//内部写webpack的原生配置
        resolve:{
            extensions:['.js','.vue','.json'],
            alias:{
                // 'vue$':'vue/dist/vue.esm.js'
            }
        },
        module:{
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:4000',
                pathRewrite:{
                    '^/api':''
                },
                changeOrigin:true
            },
            '/ding':{
                target:'https://apis.map.qq.com/ws/location/v1/ip?&key=TNCBZ-ZED3P-EEKD5-LI5UJ-FZO5Q-ALB5U',
                pathRewrite:{
                    '^/ding':''
                }
            }
        }
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    postcss
                ]
            }
        }
    }
}