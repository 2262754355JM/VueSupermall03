<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !==0">
    <table v-for="(table,index) in paramInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="oaram-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.info-param{
  font-size: 14px;
  padding: 10px;
}
.info-param-key{
  width: 30px;
   border-bottom: rgb(238, 238, 238) solid 1px;
  
}
.info-size{
  padding: 10px;
}

.info-size td{
  width: 40px;
  font-size: 13px;
    border-bottom: rgb(238, 238, 238) solid 1px;
}
tr{
  height: 50px;
  
 

}
.oaram-value{
  color: var(--color-tint);
   border-bottom: rgb(238, 238, 238) solid 1px;
}

.info-param-key{
  width: 50px;
}
.info-img img{
  width: 100%;
}
</style>