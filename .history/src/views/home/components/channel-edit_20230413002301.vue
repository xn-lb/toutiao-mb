<template>
  <div class="channel-edit">
    <van-cell center :border="false">
        <div slot="title" class="channel-title">频道列表</div>
        <van-button
        type="danger"
        size="mini"
        round
        plain
        >编辑</van-button>
    </van-cell>
    <van-grid :gutter="10">
        <van-grid-item 
        class="channel-grid-item"
        v-for="value in 8" 
        :key="value" 
        text="文字" />
    </van-grid>

    <van-cell center :border="false">
        <div slot="title" class="channel-title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
        <van-grid-item 
        class="channel-grid-item"
        v-for="value in 8" 
        :key="value" 
        text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
    name:'ChannelEdit'
}
</script>

<style lang="less" scoped>
.channel-edit{
    padding-top: 54px;
    .channel-title{
        font-size: 16px;
        color: #333;
    }
    .channel-grid-item{
        width: 80px;
        height: 43px;
        background-color: #f4f5f6;
    }
}
</style>