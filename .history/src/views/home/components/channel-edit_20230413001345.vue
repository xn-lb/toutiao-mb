<template>
  <div class="channel-edit">
    <van-cell center :border="false">
        <div slot="title">频道列表</div>
        <van-button
        type="danger"
        size="mini"
        round
        plain
        >编辑</van-button>
    </van-cell>

    <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
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
}
</style>