<template>
  <div class="home-container">
  <!-- 首页 -->
    <van-nav-bar class="app-nav-bar">
      <van-button 
      class="search-btn"
      slot="title" 
      icon="search"
      type="info"
      round
      size="small"
      >搜索</van-button>
    </van-nav-bar>

    <!-- 文章频道列表 -->
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 5</van-tab>
    </van-tabs>
  </div>

</template>

<script>
export default {
  name:'HomeIndex',
  components:{},
  props:{},
  data () {
    return{
      active: 0, //tab标签 初始标签
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  /deep/ .van-nav-bar__title{
      max-width: none;
    }
  .search-btn{
    width: 277px;
    height: 32px;
    background: #5babfb;
    .van-button__text{
      font-size: 14px;
    }
    .van-icon{
      font-size: 16px;
    }
    }
    
  }
</style>