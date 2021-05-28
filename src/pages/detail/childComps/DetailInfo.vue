<template>
  <div id="detaiInfo" v-if="Object.keys(detailImage).length !== 0">
    <span v-if="detailImage[0].desc">{{detailImage[0].desc}}</span>
    <span v-if="detailImage[0].key">{{detailImage[0].key}}</span>
    <img v-for="(item,index) in detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  props:{
    detailImage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      //判断，所有的图片都加载完了，那么进行一次回调就可以了
    
      if (++this.counter==this.imagesLength) {
        this.$emit('imageLoad');
        
      }
    }
  },
  watch:{
    detailImage(){
      this.imagesLength = this.detailImage[0].list.length
      
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>