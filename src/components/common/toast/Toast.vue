<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow:false,
      message:''

    }
  },
  methods: {
    show(message,duration){
      this.message = message;
      this.isShow = true;
      setTimeout(() =>{
        this.isShow = false;
        this.message = ''
      },duration)
    }
  },
}
</script>

<style scoped>
  .toast{
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .7);
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
  
  }
</style>