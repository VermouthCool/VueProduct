<template>
  <div>
    <router-view></router-view>
    <footer-nav/>
  </div>
</template>

<script>
import Vue from 'vue'
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import { Tabbar, TabItem } from 'mint-ui';
import router from './router'
import FooterNav from './component/FooterNav/FooterNav';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
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
