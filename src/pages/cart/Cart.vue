<template>
  <div class="cart">
    <nav-bar class="cart-navbar">
      <span class="cart-navbar-text" slot="center">{{
        "购物车" + "(" + Length + ")"
      }}</span>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-items></cart-items>
     
    <h2>购物车</h2>
    </scroll>
    <cart-tab-bar></cart-tab-bar>
    <!-- <span class="text">{{cartList[0].count}}</span> -->
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartItems from "pages/cart/childrencomponents/CartItems";
import CartTabBar from './childrencomponents/CartTabBar'
import Scroll from 'components/common/betterscroll/Scroll'
export default {
  data() {
    return {
      cartList: null,
      length: 0,
    };
  },
  components: {
    NavBar,
    CartItems,
    CartTabBar,

    Scroll,
  },
  created() {
    this.cartList = this.$store.state.cartList;
    if (this.cartList.length) {
        this.length = this.cartList.length;
      }
  },
  computed: {
    Length() {
      
      return this.cartList.length;
    },
  },
  activated() {
    this.$refs.scroll.refresh();
    
  },
};
</script>
<style scoped>
.cart {
  width: 100%;
  height: 100vh;
  position: relative;
}
.text {
  width: 100%;
  word-wrap: break-word;
}

.cart-navbar {
  background-color: var(--color-tint);
}
.cart-navbar-text {
  color: aliceblue;
}

.scroll{
  height: calc(100% - 133px);
  overflow: hidden;
}
</style>
