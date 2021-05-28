<template>
  <div class="category-left">
    <div class="left-items" v-for="(item,index) in category" :key="index" @click="select(index)">{{item.title}}</div>

  </div>
</template>
<script>
export default {
  props:{
    category:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    select(index){
      this.$emit('select',index);
      // console.log(index)
     
    }
  },
}
</script>

<style scoped>
  .left-items{
    margin-top: 10px;
    background-color: rgb(255, 255, 255);
  }
  .category-left{
    padding: 10px;
  }
</style>