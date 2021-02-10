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
# 移动端300ms事件延迟的解决方案
    原因：移动端浏览器检测用户有没有双击click事件不会立即分发
    是什么：绑定了click点击回调，300ms后才执行
    解决：
        1.使用touch事件监听，不用click
        2.使用fastclick库
    fastclick基本原理：在touchend事件里，分发一个自定义的click事件，阻止浏览器300ms以后分发的点击事件
# lodcah
    1.按需引入import _ from 'lodash/chunk'
    _.chunk(this.title,2)
    div.onclick = _.throttle(fn,1000)用于节流
    lodash默认trailing为true，那么最终的效果是在点击时会立即打印throttle，且5秒后又会再打印一次，即节流之前和之后都会执行该节流函数。
    可以设置leading为false 或者trailing为false
# watch原理
    1.更新数据
    2.立即同步执行监视回调函数
    3.异步更新界面
# vue.nextTick(callback)
    1.watch + nextTick
    2.callback + nextTick
    3.dispatch
 1.在修改数据之后立即使用他，等待下次DOM更新
 2.dispatch返回一个promise 在数据更新后而且界面更新完才执行.then()回调
# Vue项目国际化
 1.下载引入 import a from 'vue-i18n'
 2、在src下创立文件夹language

language 下放两js

en.js

export default {
  message: {
    hello: 'hello'
  }
}
zh.js

export default {
  message: {
    hello: '你好'
  }
}
3、在main.js引入

import VueI18n from 'vue-i18n'
import en from './language/en'
import zh from './language/zh'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: (navigator.language || navigator.browserLanguage).toLowerCase(),
  messages: {
    'zh-cn': zh,
    'en': en
  }
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
})
4、组件中用

{{$t('message.hello')}}
5.this.$i18n.locale 获取/更新当前的语言
# json的理解和设计
 1.json的结构
  1）json对象'{"key":"value"}';
  2)json数组 '["value"]'
  v-if来替代v-show
# better-scroll
  new BScorll(this.$refs.jian,{
    movable: true,
    zoom: true,
    })
        better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。
外盒子设置固定宽或高和属性：overflow: hidden;
# Vue.set(object,key,value)
 给一个响应式的对象添加响应式的属性 value为初始值
# Vue-lazyload图片懒加载
```javascript
import img from '././.....'
  Vue.use(VueLazyload,{
   img //在要显示得图片没有加载到前显示
 })//内部定义了一个全局指令 lazy 在要显示得图片上面添加该指令 v-lazy
```
# vue的vuex的状态管理
```javascript
  modules={
    jian,
    ge
  }
```
# 路由处理
 在调用push()进行路由跳转时  直接写path：自动跳转有效  配置对象 指定name/params 自动跳转失败
# keep-alive
 添加了这个标签vue会缓存router-view exclude="name" include
# 路由组件懒加载
 es8的import import(模块路径)动态引入  被引入的包会单独打包 代码分割
 const a = () => import('././')
 函数开始的时候不加载 所以函数开始的时候不执行  当请求对应路径时才会执行
 作用：提高首屏的加载更快
# 导航守卫
  vue-router提供的
  监视路由
  控制路由跳转
  1.跳转到界面前检查是否登录
  2.做一些收尾工作
分为全局和局部   全局针对全部路由跳转   局部只针当前组件的跳转
to:目的地
from：当前
next(path)进行下一步
router.beforeEach((to,from,next)=>{
  //在跳转之前
})
router.afterEach((to,from)=>{})
# 作用域插槽
  slot-... =a a.todo.name
mixins
# 动态路由
 component