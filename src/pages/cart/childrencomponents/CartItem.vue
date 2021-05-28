<template>
  <div class="cart-item">
    <div id="cart-item">
       <input type="checkbox" @click="itemClick()" v-model="item.check">
    
    <div class="img"><img :src="item.image" alt=""></div>
    <div class="detail">
      <div class="title"><span>{{item.title}}</span></div>
      <div class="desc"><span>{{item.desc}}</span></div>
      <span class="price">{{item.price}}</span>
      <span class="count">{{'x' + item.count}}</span>
    </div>
    </div>
   
    
  </div>
</template>
<script>
export default {
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    itemClick(){
      this.item.check=!this.item.check;
      // this.$bus.$emit('check')
    }
  },
 
}
</script>

<style scoped>
  .img{
    width: 80px;
    /* height: 100px; */
    overflow: hidden;
    
    margin-left: 10px;
    margin-right: 10px;
  }
  img{
    width: 80px;border-radius: 8px;
  }

  #cart-item{
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: rgb(224, 224, 224) solid 2px;
    width: 100%;
  }

  .title{
    text-overflow: ellipsis;
    white-space: nowrap;
   width: 230px;
    overflow: hidden;
    top: 0;
  }
  .cart-item{
    width: 100%;
    display: block;
  }

  .desc{
     text-overflow: ellipsis;
    white-space: nowrap;
   width: 230px;
    overflow: hidden;
    font-size: 13px;
    margin-top: 20px;
    color: rgb(161, 161, 161);
  }

  .detail{
    height: 120px;
    position: relative;
  }
 .price{
   margin-left: 0px;
  bottom: 0;
   position: absolute;
   color: rgb(255, 100, 52);
   font-weight: bold;
 }
 .count{
    right: 0px;
  bottom: 0;
   position: absolute;
 }
</style>