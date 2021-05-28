<template>
  <div id="shop-info">
    <div class="shop-detail">
      <div class="shop-logo">
        <img :src="shopInfo.shopLogo" alt="" />
      </div>
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>

    <div class="shop-details">
      <div class="sells-goods">
        <div class="num">
          <span class="sells">{{ (shopInfo.cSells / 1000).toFixed(2) }}万</span>
          <span class="goods">{{ shopInfo.cGoods }}</span>
        </div>
        <div class="text">
          <span>总销量</span>
          <span> 全部宝贝</span>
        </div>
      </div>

      <div class="scores">
        <div v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span class="bgcolor0" :class="{bgcolor:item.isBetter}">{{item.score}}</span>
          <span class="scores-score bgcolor1" :class="{bgcolor2:item.isBetter}">{{item.isBetter? high:low}}</span>
        </div>
       
      </div>

      
    </div>
    <div class="btn">
        <button>进店逛逛</button>
      </div>
  </div>
</template>
<script>
export default {
  data(){
return {
  high:'高',
  low:'低'
}
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#shop-info {
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
}
.shop-logo img {
  width: 65px;
  border-radius: 100%;
}

.shop-logo {
  background-color: rgb(211, 211, 211);
  width:70px;
  height: 70px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shop-detail {
  display: flex;

  align-items: center;
}

.shop-name {
  margin-left: 20px;
  color: rgb(136, 129, 129);
}
.shop-details{
  display: flex;
  padding: 20px;
}
.sells-goods{
flex: 1;
 text-align: center;
 border-right: rgb(202, 202, 202) solid 2px;

 padding: 10px;
 font-size: 15px;
 justify-content: center;
 display: flex;
 flex-direction: column;
 font-weight: bold;
}
.sells{
  margin: 0 10px;
  font-size: 20px;
}

.goods{
  margin: 0 10px;
   font-size: 20px;
}

.text span{
  margin:0 10px;
}

.scores{
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding-right: 20px;
  margin-left: 20px;
}

.scores div{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.scores div span{
  margin: 2px;
  display: inline-block;
}
.bgcolor0{
  color: green;
}
.bgcolor{
  color: red;
}

.bgcolor1{
  color: white;
  background-color: green;
}
.bgcolor2{
  color: white;
  background-color: red;
}
button{
  border: none;
  background-color: rgb(236, 236, 236);
  padding: 8px;
  border-radius: 10px;
  width: 130px;
  color: rgb(107, 107, 107);
}

.btn{
  text-align: center;
}
</style>