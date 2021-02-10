import Vuex from 'vuex'
import Vue from 'vue'
// import state from './state'
import mutations from './mutation'
import actions from './action'
// import getters from './getter'
Vue.use(Vuex);

export default new Vuex.Store({
    // getters,
    // mutations:{},
    // actions:{},
    modules:{
        a:mutations,
        b:actions
    }
})