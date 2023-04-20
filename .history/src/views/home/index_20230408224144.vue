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
      <van-tab 
      :title="channel.name"
      v-for="channel in channels"
      :key="channel.id"
      >
      <!-- 文章 -->
      <artitleList></artitleList>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
import {getUserChannels} from '@/api/user'
import artitleList from './components/artitle-list.vue'
export default {
  name:'HomeIndex',
  components:{
    artitleList
  },
  props:{},
  data () {
    return{
      active: 0, //tab标签 初始标签
      channels:[] //频道列表
    }
  },
  created () {
    this.loadChannels()
  },
  methods:{
    async loadChannels(){
      // 请求获取频道数据
      const {data} = await getUserChannels()
      console.log(data);
      this.channels = data.data.channels
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