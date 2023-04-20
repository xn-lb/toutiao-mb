<template>
  <div class="channel-edit">
    <van-cell center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button type="danger" size="mini" round plain>编辑</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        icon="clear"
        class="grid-item"
        v-for="(channel ,index) in userChannels"
        :key="index"
        :text="channel.name"
      />
    </van-grid>

    <van-cell center :border="false">
      <div slot="title" class="channel-title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        @click="onAdd(channel)"
        class="grid-item"
        v-for="(channel ,index) in recommendChannels"
        :key="index"
        :text="channel.name"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels } from "@/api/channel";
export default {
  name: "ChannelEdit",
  data() {
    return {
      AllChannels: [], //所有频道列表数据
      isEdit:false
    };
  },
  computed: {
    // 推荐频道
    recommendChannels() {
      // 所有频道 - 我的频道 = 剩下的推荐频道
      // filter方法 ： 过滤数据，根据方法返回布尔值，true来收集数据
      // filter 方法查找满足条件的所有元素
      return this.AllChannels.filter(channel => {
        // 判断channel是否属于用户频道
        // find方法查找满足条件的单个元素
        return !this.userChannels.find(userChannel => {
          // 找到满足该条件的元素
          return userChannel.id === channel.id;
        });
      });
    }
  },
  props: {
    userChannels: {
      type: Array,
      required: true
    }
  },
  created() {
    this.loadAllChannels();
  },
  methods: {
    async loadAllChannels() {
      const { data } = await getAllChannels();
      console.log(data);
      this.AllChannels = data.data.channels;
    },

    onAdd (channel) {
        this.userChannels.push(channel)
    }
  }
};
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 54px;
  .channel-title {
    font-size: 16px;
    color: #333;
  }
  .grid-item {
    width: 80px;
    height: 43px;

    /deep/ .van-grid-item__content {
      background-color: #f4f5f6;
      .van-grid-item__text {
        color: #222;
      }
    }

    /deep/ .van-icon{
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 20px;
    color: #ccc;
    }
   
  }
}
</style>