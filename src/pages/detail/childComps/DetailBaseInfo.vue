<template>
  <div v-if="Object.keys(goods).length !=0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
         <img :src="goods.services[index-1].icon" alt="">
         {{goods.services[index-1].name}}
      </span>
     
    </div>
  </div>
</template>

<script>
export default {
  
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted() {
    // console.log(this.goods.title)
  },
}
</script>
<style scoped>
  .base-info{
    
    padding: 10px;
   
    
  }
  .info-title{
   
  }
  .n-price{
    color: var(--color-tint);
    font-size: 25px;
    font-weight: bold;
    margin: 5px;
  }

  .o-price{
    font-size: 10px;
    color: rgb(136, 136, 136);
    margin: 5px;
      text-decoration: line-through;
  }
  .info-price{
    margin-top: 10px;
  }
  .discount{
    display: inline-block;
    background-color: var(--color-tint);
    border-radius: 30%;
    padding: 5px;
    font-size: 10px;
    color: white;
  
  }


  .info-other{
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
    font-size: 13px;
    color: rgb(133, 131, 131);
    
  }
  .info-other span{
    flex: 1;
  }

  .info-service{
    display: flex;
    text-align: center;
    margin-top: 10px;
    border-top: rgb(221, 221, 221) solid 1px;
    padding-top: 15px;
  }
  .info-service span{
    flex: 1;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .info-service img{
    width: 14px;
  }
</style>