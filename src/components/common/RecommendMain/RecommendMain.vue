<template>
  <div class="main">
    <recommend-view class="review">
      <re-item v-for="(item,index) in recommends " :key="index" class="re-item">
        <a :href="item.link">
          <div class="img-box">
             <img :src="item.image" alt="">
          </div>
         
          <div class="title">{{item.title}}</div>
        </a>
        
      </re-item>
    </recommend-view>
  </div>
</template>
<script>
import RecommendView from 'pages/home/childrencomponents/RecommendView'
import ReItem from 'pages/home/childrencomponents/ReItem'
export default {
  components:{
    RecommendView,
    ReItem
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
  img{
    width: 80px;
    height: 80px;
     /* border-radius: 50%; */
  }

  .review{
    display: flex;
    width:100%;
    text-align: center;
  
  }
  .re-item{
    flex: 1;
  }

  a{
    font-size: 15px;
  }

  .title{
    margin-top:10px ;
    line-height: 10px;
    color: rgb(129, 129, 129);
  }

  .img-box{
    width: 75px;
    height: 75px;
    overflow: hidden;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
   left: 0;
   right: 0;
  }
</style>