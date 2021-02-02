# 比较vue2和vue3的区别
    1.vue2的配置是直接可见的，vue3的是隐藏起来的
    2.修改配置：v2是直接修改v3提供了专门的配置文件叫vue.config.js
# webpack只能加载js和json
# 移动端的适配
    原因：终端的机型太多了 尺寸不一样
    目的：在各个客户端等比显示
    1.默认的布局视口是980px和视觉视口不一样 所以width=device-width,initial-scale=1.0使二者的比为1比1
    npm i postcss-px2rem lib-flexible
    import 'lib-flexible/flexible'
    这是淘宝的适配 只需要引入来设置根标签的字体大小