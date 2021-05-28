<template>
  <div class="back-top" >
    <div class="back-top-bg">
       <img src="~assets/img/backTop/back-top.svg" alt="">
    </div>
   
  </div>
</template>
<script>
export default {
  
  methods: {
  
  },
}
</script>
<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
  .back-top-bg{
    background:var(--color-tint);
    width: 33px;
    height: 33px;
    border-radius: 100%;
    overflow: hidden;
   
  }
  img{
    width: 35px;
    height: 35px;
    
  }
</style>