<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/tabbar/返回.svg" alt="">
        </div>
      
      <div slot="center" class="text">
        <div v-for="(item,index) in titles" :key="index" @click="textClick(index)" :class="{isactive:currentIndex==index}">{{item}}</div>
      </div>
    </nav-bar>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  // props:{
  //   currentIndex:{
  //     type:Number,
  //     default(){
  //       return 0
  //     }
  //   }
  // },
   components:{
    NavBar,
  },
  methods: {
    textClick(index){
      this.currentIndex=index;
      this.$emit('titleClick',index);
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>
<style scoped>
  .nav-bar{
    background-color: #fff;
    color: rgb(97, 97, 97);
  }

  .text{
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  img{
    width: 28px;
    margin: auto;
  }

  .text div{
    flex: 1;
  }

  .left{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .isactive{
    color: var(--color-tint);
  }
</style>