<template>
  <div id="commentInfo" v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  props:{
    commentInfo:{
      type:Object,
      default(){}
    }
  },
  filters:{
    showDate(value){
      //1.先将时间戳转成Date对象
      const date = new Date(value*1000)

      //2.将date进行格式化
      return formatDate(date,'yyyy-MM-dd')
    }
  }

}
</script>

<style scoped>
.comment-info{
  padding: 10px;
}
  .info-header{
    display: flex;
    justify-content: space-between;
  }

  .info-user img{
    width: 60px;
    border-radius: 20px;
  }

  .info-user{
    display: flex;
    flex-direction: column;
  }

.info-other{
  margin-top: 10px;
}
  .info-other span{
   
    font-size: 12px;
    color:rgb(148, 148, 148);
  }

  .date{
    margin-left: 0px;
    margin-right: 20px;
  }

  .info-detail p{
    font-size: 15px;
    margin-top: 10px;
  }
  .info-user span{
    margin-top: 10px;
  }

  .info-imgs img{
    width: 150px;
  }
  
</style>