<template>
  <div class="article-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "ArtitleList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    onLoad () {
      // 1.请求获取数据
      setTimeout(() => {
        // 2.把数据push到list数组中
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 3.设置本次加载状态结束，它才可以判定是否需要加载下一次，否则不加载
        // this.loading = false

        // // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true
        // }
      }, 1000)
    }
  }
};
</script>

<style lang="less" scoped>
.article-list{
  position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    top: 90px;
    overflow-y: auto;
}
</style>