<template>
  <div class="aa">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="content">
  <cate-gory-left :category="categoryList" @select="select"></cate-gory-left>
      

    </scroll>
    <scroll ref="scroll" class="content-right">
      <cate-gory-right :rightIndex="rightIndex"></cate-gory-right>
    </scroll>
    
  </div>
</template>
<script>
import Scroll from "components/common/betterscroll/Scroll.vue";
import NavBar from 'components/common/navbar/NavBar.vue'
import {cateGory} from 'network/category.js';
import CateGoryLeft from './CateGoryLeft'
import CateGoryRight from './CateGoryRight'

export default {
  data(){
    return {
      // bscroll:null
      categoryList:[],
      rightIndex:0
    }
  },
  components:{
    Scroll,
     CateGoryLeft,
     CateGoryRight,
     NavBar
  },
  created() {
    this.getCateGory();
  },
  mounted() {
    this.$bus.$on('rightImgLoad',()=>{
      this.$refs.scroll.refresh();
    })
    // this.$refs.scroll.refresh();
  },
  methods: {
    getCateGory(){
      cateGory().then((res) => {
        // console.log(res);
        this.categoryList = res.data.category.list
       
      })
    },
    select(index){
      this.rightIndex = index;
      // console.log(this.rightIndex);
    }
  },

}
</script>

<style scoped>
/* .ab{
  width: 100%;
 background-color: var(--color-tint);
  color: white;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
} */
  .content{
    width: 30%;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    position: absolute;
    /* width: 100%; */
    top: 44px;
    bottom: 49px;
    
  }

  .content-right{
      width: 60%;
    background-color: rgb(253, 249, 249);
    overflow: hidden;
    position: absolute;
    /* width: 100%; */
    top: 44px;
    bottom: 49px;
    left: 40%;
  }

  .aa{
    position: relative;
    height: 100vh;
  }

  .navbar{
    background-color:var(--color-tint);
    color: aliceblue;
  }
</style>