<template>
  <div id="categoryright">
    <div class="text">这是分类的商品</div>
    <div v-if="rightGoods[rightIndex]">
      <div class="goods-item"  v-for="(item,index) in rightGoods[rightIndex].listItem" :key="index">
        <span>{{item.goodsName}}</span>
      <img :src="item.img" alt="" @load="imgLoad">
      
     </div>
    </div>
     
  </div>
</template>
<script>
import {getCategoryRight} from 'network/category.js'
export default {
  props:{
    rightIndex:{
      type:Number,
      default:1
    }
  },
  data() {
    return {
      rightGoods:[],
      count:0,
      allGoods:[],
    // nowIndex:0
    }
  },
  created() {
    this.getCategoryRight();
  },
  mounted() {
    
  },
  computed:{
  
  },
  methods: {
      getCategoryRight(){
        // 获取mock.js的模拟数据
      getCategoryRight().then((response)=>{
        console.log(response.data);
        this.rightGoods = response.data.list;
        // console.log(this.rightIndex)
      })
    },
    imgLoad(){
      if (++this.count ==this.rightGoods[this.rightIndex].listItem.length) {
        this.$bus.$emit('rightImgLoad')
      }
    }
  },
}
</script>
<style scoped>
  #categoryright{
    /* background-color: rgb(252, 184, 184);
    width:100px;
    height: 100px;
    z-index: 999; */
    padding: 10px;
  
  }

  .text{
    margin-top: 10px;
  }

  .goods-item{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  span{
    margin-right: 10px;
  }
</style>