<template>
<!-- ref/children -> -->
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },

  data(){
    return {
      scroll:null
    }
  },

  mounted() {
    //1.创建BScroll对象
      this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
      
      
    })
    //2.监听滚动的位置
    this.scroll.on('scroll',(position) => {
      // console.log(position)
      
      this.$emit('scroll',position)
    })
    //3.监听上拉事件
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多')
      this.$emit('pullingUp')
    })

    // this.scroll.refresh();
    // this.scroll.on('scroll',() => {
    //   // console.log(position)
    // })

    // this.scroll.on('pullingUp',() => {
    //   console.log('上拉加载更多')
    // })
   
  },
  methods: {
    //第三个参数是一种写法，若不传，在按默认值500处理
    scrollTop(x,y,time=500){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
    //  console.log('---')
      this.scroll && this.scroll.refresh();
    }
  },

}
</script>

<style scoped>
/* .wrapper{
  height: 500px;
} */
</style>