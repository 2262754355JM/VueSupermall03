<template>
  <div class="main">
    <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
       <img slot="item-icon" src="~assets/img/tabbar/首页.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/首页_active.svg" alt="">
       <!-- 改别名  在html中前面要加~ -->
      <div slot="item-text"> 首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
       <img slot="item-icon" src="~assets/img/tabbar/类别.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/类别_active.svg" alt="">
      <div slot="item-text"> 类别</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
       <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/购物车_active.svg" alt="">
      <div slot="item-text"> 购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
       <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/我的_active.svg" alt="">
      <div slot="item-text"> 我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  /* .main{
    z-index: 100;
  } */
</style>