<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentSccoll">
      <detail-lun-bo :banners="topImages"></detail-lun-bo>

      <detail-base-info :goods="goods">aa</detail-base-info>
      <shop-info :shopInfo="shopInfo"></shop-info>
      <detail-info
        :detailImage="detailInfo.detailImage"
        @imageLoad="imageLoad"
      ></detail-info>
      <param-info ref="params" :paramInfo="paramInfo"></param-info>
      <comment-info ref="comments" :commentInfo="commentInfo"></comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>

      <!-- <div>{{$store.state.cartList.length}}</div> -->
    </scroll>
    <back-top @click.native="backClick" v-show="isshow"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>
<script>
import DetailNavBar from "pages/detail/childComps/DetailNavBar";
import { getDetail, Goods, GoodParam, getRecommend } from "network/detail.js";
import DetailLunBo from "./childComps/DetailLunBo";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import Scroll from "components/common/betterscroll/Scroll";
import ShopInfo from "./childComps/ShopInfo";
import DetailInfo from "./childComps/DetailInfo";
import ParamInfo from "./childComps/ParamInfo";
import CommentInfo from "./childComps/CommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";
// import Toast from 'components/common/toast/Toast'

import { debounce } from "common/utils.js";
import { backTop } from "common/mixins.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  mixins: [backTop],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTop(0, -this.themeTopYs[index], 100);
    },
    contentSccoll(position) {
      //1.获取y值
      const positionY = -position.y;
      //2.positionY和主题中值进行对比
      //[0,7938,9120,9452]

      //positionY 在 0和 7938 之间，index = 0
      //positionY 在 7938 和 9120 之间，index = 1
      //positionY 在 9120 和 9452 之间，index = 2

      //positionY 超过 9120 值，index = 3
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY > this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY > this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      //监听backTop
      this.isshow = -position.y > 1000;
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      product.count = 0;
      product.check = true;

     //2.将商品添加到购物车里
     this.$store.dispatch('addCart',product).then(
       res =>{
         this.$toast.show(res,2000)
       
         
       }
     )
     
    }
  },

  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.id;
    // 这里的id是路由里面设置的id

    //2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //1.获取顶部的图片轮播数据
      const data = res.result;
      // console.log(data)
      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3.获取店铺信息
      this.shopInfo = data.shopInfo;
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //5.获取参数信息
      this.paramInfo = new GoodParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.取出商品评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    this.$nextTick(() => {
      //根据最新的数据，对应的DOM是已经被渲染出来
      //但是图片依然是没有加载完
      //offsetTop值不对的时候，都是因为图片的问题
      // this.themeTopYs = []
      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    //4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTopYs);
    });
  },
  mounted() {
    //3.监听Item中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
  },
  components: {
    DetailNavBar,
    DetailLunBo,
    DetailBaseInfo,
    Scroll,
    ShopInfo,
    DetailInfo,
    ParamInfo,
    CommentInfo,
    GoodsList,
    DetailBottomBar,
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  /* position: absolute; */
  /* top:44px ; */
  /* bottom: 44px; */
  height: calc(100% - 93px);
  /* calc减号两边的空格不能省 */

  width: 100%;
  overflow: hidden;
}
</style>