<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow:  0px 1px 2px rgb(167, 162, 162);
    /* position: fixed;
  
    z-index: 100; */
  width: 100%;
  }

  .left, .right{
    width:60px ;
    /* background-color: rgb(243, 236, 242); */
    text-align: center;
  }

  .center{
    flex: 1;
    /* background-color: rgb(219, 186, 217); */
    text-align: center;
  }

</style>