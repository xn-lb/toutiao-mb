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
    <!-- 标签页组件本身具有一个功能，只有你第一次查看标签页的时候才会渲染里面的内容 -->
    <van-tabs class="channel-tabs" v-model="active">
      <van-tab 
      :title="channel.name"
      v-for="channel in channels"
      :key="channel.id"
      >
      <!-- 文章列表 -->
      <!-- 第一个channel是props里的channel -->
      <artitleList :channel="channel"></artitleList>
      </van-tab>
    </van-tabs>

    <!-- 弹出层 -->
    <van-popup v-model="isChannelEditShow" 
    position="bottom" 
    :style="{ height: '30%' }" 
    />
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
      channels:[], //频道列表
      isChannelEditShow: false   //控制编辑频道的显示状态 
    }
  },
  created () {
    this.loadChannels()
  },
  methods:{
    async loadChannels(){
      // 请求获取频道数据
      const {data} = await getUserChannels()
      // console.log(data);
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

    .channel-tabs{
      /deep/ .van-tab {
        border-right: 1px solid #edeff3;
        border-bottom: 1px solid #edeff3;
      }
      /deep/ .van-tabs__line{
        width: 15px ;
        height: 3px;
        background: #5babfb;
        margin-bottom: 4px;
      }
    }
    
  }
</style>