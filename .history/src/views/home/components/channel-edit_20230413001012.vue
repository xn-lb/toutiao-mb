<template>
  <div class="channel-edit">
    <van-cell center>
        <div slot="title">频道列表</div>
        <van-button
        type="danger"
        size="mini"
        round
        plain
        >编辑</van-button>
    </van-cell>
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