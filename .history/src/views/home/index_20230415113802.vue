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
      <!-- 在汉堡按钮前加一个占位元素 -->
      <div slot="nav-right" class="wap-nav-placeholder"></div>
      <div 
      slot="nav-right" 
      @click="isChannelEditShow = true"
      class="wap-nav-wrap"
      >
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>

    <!-- 弹出层 -->
    <van-popup v-model="isChannelEditShow" 
    class="channel-edit-pupop"
    position="bottom" 
    closeable
    close-icon-position="top-left"
    get-container="body"   
    style="height:100%"
    >
    <channelEdit
      :userChannels="channels"
      :active="active"
      @update-active="onUpdateActive"
    ></channelEdit>
    </van-popup>
  </div>

</template>

<script>
import channelEdit from './components/channel-edit.vue'
import {getUserChannels} from '@/api/user'
import artitleList from './components/artitle-list.vue'
export default {
  name:'HomeIndex',
  components:{
    artitleList,
    channelEdit
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
    },
    onUpdateActive(index , isChannelEditShow = true){
      this.active = index
      this.isChannelEditShow = isChannelEditShow
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
    
    .channel-edit-pupop{
      height: 100%;
    }

    .wap-nav-placeholder{
      width: 18px;
      flex-shrink: 0;
    }
    .wap-nav-wrap{
      position: fixed;
      right: 0;
      height: 44px;
      width: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: .9;
      .van-icon{
        font-size: 22px;
      }
    }
  }
</style>