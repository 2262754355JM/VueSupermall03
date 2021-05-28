<template>
  <div class="goods-item" @click="goodItemClick">
    <img :src=" imageDetail " alt="" @load="imgLoad">
    <div class="textdetail">
      <p>{{goodsitem.title}}</p>
      <div class="textall">
         <span class="price">价格:{{goodsitem.price}}</span>
       
      <span class="collect"> &nbsp;&nbsp;&nbsp;收藏:{{goodsitem.cfav}}</span>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      if (this.$route.path.indexOf('/home')+1) {
        
        this.$bus.$emit('homeItemImgLoad')
       
        
      }else if(this.$route.path.indexOf('/detail')+1){
       
          this.$bus.$emit('itemImageLoad');
         
      //发射事件
      }
    
    },
    goodItemClick(){
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },
  computed:{
    imageDetail(){
      return this.goodsitem.image ||this.goodsitem.show.img
    }
  }
}
</script>
<style scoped>
  .textdetail{
font-size: 5px;

  }
  img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-item{
    padding-top: 20px;
    width: 46%;
    display: flex;
    flex-direction: column;
  }

  .textall{
    text-align: center;
    margin: auto;
    font-size: 15px;
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
    font-size: 15px;
  }

  .price{
    color: var(--color-tint);
  }

</style>