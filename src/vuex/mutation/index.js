/*

*/
export default {
    state:{
        name:'ge'
   },
   mutations:{
        ge(a){
             console.log('ge',a);
        }
   },
   actions:{
     ge({commit,state}){
          console.log('ge',state);
          commit('di');
     }
   },
   getters:{}
}