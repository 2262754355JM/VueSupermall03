<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- 在这里单独设置背景颜色，不要在nabbar里面设置 -->
      <!-- <div slot="left">1</div> -->
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      class="tabbar-control"
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="pullUpLoad"
      @pullingUp="loadMore"
    >
      <lun-bo :banners="banners" @swiperImageLoad="swiperImageLoad"> </lun-bo>

      <re-commend-main :recommends="recommends"></re-commend-main>

      <feature></feature>

      <tab-control
        class="tabbar-control"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabControl2"
      ></tab-control>

      <goods-list :goods="showGoods"></goods-list>
      <!-- <ul>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
        <li>88</li>
      </ul> -->
    </scroll>
    <back-top @click.native="backClick" v-show="isshow"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

import NavBar from "components/common/navbar/NavBar";
import LunBo from "components/common/lunbo/lunbo";
import ReCommendMain from "components/common/RecommendMain/RecommendMain";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/betterscroll/Scroll.vue";
import BackTop from "components/content/backTop/backTop";

import Feature from "pages/home/childrencomponents/feature";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isshow: false,
      pullUpLoad: true,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },

  components: {
    NavBar,
    LunBo,
    ReCommendMain,
    GoodsList,
    Scroll,
    BackTop,

    TabControl,

    Feature,
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    //3.赋值
  },
  mounted() {
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeItemImgLoad", () => {
    //  console.log(999)
      refresh();
    });

    //    //3.监听Item中图片加载完成
    // this.$bus.$on('itemImageLoad',() => {
    //   this.$refs.scroll.refresh();
    //   // console.log('------')

    // })
  },
  methods: {
    /** 事件监听相关*/

    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.number = index;
      this.$refs.tabControl2.number = index;
      // 这两步是为了同步 两个相同组件的index值
    },
    /*网络请求相关*/
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      this.$refs.scroll.scrollTop(0, 0);
    },
    contentScroll(position) {
      // console.log(position)
      //判断backTop是否显示
      this.isshow = -position.y > 1000;
      //2.绝对tabcontrol是否吸顶(position:fixed)
      this.isTabFixed = -position.y >this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    swiperImageLoad() {
      //2.获取tabControl的offsetTop
      //所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>


<style scoped>
/* @import "~assets/css/base.css" ; */
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* 在使用浏览器原生滚动，固定 才使用的 */
  /* 
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0; */
}

#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.tabbar-control {
  /* position: sticky; */
  /* 粘性属性 */
  /* top: 44px; */
  z-index: 10;
  background-color: #fff;
  position: relative;
}

.content {
  width: 100%;
  /* height: 2000px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  /* white-space: nowrap; */
}
</style>
          