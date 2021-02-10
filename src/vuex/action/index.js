/*

*/
export default {
    /*
    获取位置
    */
   state:{
        name:'jian'
   },
   mutations:{
        di(a){
             console.log('di',a);
        }
   },
   actions:{
     di({commit,state}){
          console.log('di',state);
          commit('ge');
     }
   },
   getters:{}
}