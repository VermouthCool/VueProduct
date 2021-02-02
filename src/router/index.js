import VueRouter from 'vue-router'
import Vue from 'vue'
import Ding from '../pages/Ding/Ding'
import Home from '../pages/home/Home'
import Mine from '../pages/Mine/Mine'
import Search from '../pages/Search/Search'

Vue.use(VueRouter);
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/ding',
            component:Ding
        },
        {
           path:'/mine',
           component:Mine 
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})