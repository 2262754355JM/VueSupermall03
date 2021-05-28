<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="kefu">
        <img src="~assets/img/detailtabbar/客服.svg" alt="">
        <span>客服</span>
      </div>
      <div class="dianpu">
        <img src="~assets/img/detailtabbar/店铺.svg" alt="">
        <span>店铺</span>
      </div>
      <div class="shoucang">
          <img src="~assets/img/detailtabbar/收藏.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <span class="add" @click="addToCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
}
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  background-color: rgb(255, 255, 255);
  display: flex;
}

.right,.left{
  width: 50%;
  display: flex;
}

.left div{
  flex: 1;
}

img{
  width: 25px;
 
}

.kefu,.dianpu,.shoucang{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 13px;
  justify-content: center;
  color: rgb(105, 105, 105);
}

.kefu span,.dianpu span,.shoucang span{
  margin-top: 5px;
}

.right span{
  flex: 1;
}

.add{
  line-height: 49px;
  background-color: yellow;
  text-align: center;
}

.buy{
    line-height: 49px;
  background-color:var(--color-tint);
    text-align: center;
    color: aliceblue;
}


</style>