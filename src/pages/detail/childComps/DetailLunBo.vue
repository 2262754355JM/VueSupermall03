<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img v-lazy="item" @load="imageLoad"   >
          
        </a>
        
        <!-- <img :src="item.image" alt=""> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {

  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    },
    
  },
  data() {
    return {
      isLoad:false
      // banners: [],
      // recommends: [],
    };
  },

  created() {
   
  },
  methods: {
    imageLoad(){
      // console.log('----')
      if (!this.isLoad) {
         this.$emit('swiperImageLoad');
         this.isLoad=true;  //使加载完成只发送一次
         
      }
     
    }
  },
};
</script>

<style scoped>
/* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */

img {
  width: 100%;
   /* height: 200px; */

}

.my-swipe{
  height: 300px;
  overflow: hidden;
}
</style>