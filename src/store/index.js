import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    //mutations唯一的目的就是修改state中的状态
    //nutations中的每一个方法尽可能完成的事情比较单一一点

    addCounter(state,oldProduct){
      oldProduct.count+=1;
    },

    addToCart(state,payload){
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context,payload){
   return new Promise((resolve) => {
        //payload新添加的商品
        let oldProduct = null;
        for (let item of context.state.cartList) {
          if(item.iid ===payload.iid){
            oldProduct = item;
          }
          
        }
        //2.判断oldProduct
        if(oldProduct){
          context.commit('addCounter',oldProduct)
          resolve('当前数量+1')
        }else{
          payload.count=1;
          context.commit('addToCart',payload)
         resolve('添加了新的商品')
        }
   })
      
    }
  },
  modules: {
  }
})
export default store
