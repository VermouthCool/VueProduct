<template>
  <div>
    <router-view></router-view>
    <footer-nav/>
  </div>
</template>

<script>
import Vue from 'vue'
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import {  Header,Button,Swipe, SwipeItem } from 'mint-ui';
import router from './router'
import head from '../src/component/Header/Header'
import FooterNav from './component/FooterNav/FooterNav';

Vue.component(Header.name, Header);
Vue.component(Button.name,Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('myhead', head);
export default {
  name: 'App',
  components:{
    FooterNav
  },
  router
}
</script>

<style lang="stylus" scoped>

</style>
