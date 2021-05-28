<template>
  <div id="cart-items">
    <cart-item v-for="(item,index) in cartList " :key="index" :item="item"></cart-item>
  </div>
</template>
<script>
import CartItem from './CartItem'
export default {
  // props:{
  //   cartList:{
  //     type:Array,
  //     default(){
  //       return []
  //     }
  //   }
  // }
  components:{
    CartItem
  },
   data(){
    return{
      cartList:[]
    }
  },
  created() {
    this.cartList = this.$store.state.cartList
  },
}
</script>