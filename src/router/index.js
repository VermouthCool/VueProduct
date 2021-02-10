import VueRouter from 'vue-router'
import Vue from 'vue'
import Ding from '../pages/Ding/Ding'
import Home from '../pages/home/Home'
import Mine from '../pages/Mine/Mine'
import Login from '../pages/login/login.vue'
import Search from '../pages/Search/Search'
import Jina from '../../src/jian.vue'

Vue.use(VueRouter);
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                isShowFoot:true
            }
        },
        {
            path:'/ding',
            component:Ding,
            meta:{
                isShowFoot:true
            }
        },
        {
           path:'/mine',
           component:Mine,
           meta:{
            isShowFoot:true
        }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                isShowFoot:true
            }
        },
        {
            name:'login',
            path:'/login/:id',
            component:Login,
            props: a => ({id:a.params.id}),
            children:[
                {
                    path:'good',
                    component:Jina
                },
                {
                    path:'/login/:id',
                    redirect:'good'
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})