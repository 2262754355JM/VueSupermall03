<template>
  <div class="goods">
    <good-list-item class="goods-item" v-for="(item,index) in goods" :key="index" :goodsitem="item"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodsItem'
export default {
  components:{
    GoodListItem
  },
props:{
  goods:{
    type:Array,
    default(){
      return []
    }
  }
},
mounted() {
  // console.log(this.goods)
},
}
</script>

<style scoped>
.goods{
  display: flex; 
   flex-flow: wrap;
  

}

.goods-item{

margin: auto;

}
</style>