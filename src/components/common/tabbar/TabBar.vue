<template>
  <div>
      <div id="tab-bar">
    <slot></slot>
    </div>
  </div>
</template>

<style scoped>
body{
  padding: 0px;
  margin: 0px;

}
#tab-bar{
  display: flex;
  background-color: rgb(248, 248, 248);
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  box-shadow:0px -1px 5px rgba(100, 100, 100, 0.2) ;

}

</style>