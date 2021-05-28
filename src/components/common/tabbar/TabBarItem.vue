<template>
  <div class="tab-bar-item" @click="itemclick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      
    }
    
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1;
      // indexOf()查找是否含有某个字符串，没有则返回-1，有责返回其他值
    },
    activeStyle(){
      return this.isActive?{color: this.activeColor} : {}
    }
  },
  methods: {
    itemclick(){
      this.$router.push(this.path);
    //
    }
  },
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active {
  color: rgb(223, 67, 223);
}
</style>