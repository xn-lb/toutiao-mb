<template>
  <div class="article-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(article, index) in articles" 
       :key="index" :title="articles.title" />
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/api/article';

export default {
  name: "ArtitleList",
  data() {
    return {
      articles: [],  //数据列表
      loading: false,  //控制加载中的loading状态
      finished: false   //控制加载结束的状态，当加载结束，就不再加载更多
    };
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onLoad () {
      // 1.请求获取数据
      const {data} = await getArticles({
        channel_id: this.channel.id,
        timestamp: 1681009394726,   //相当于页码
        with_top:1
          //频道ID
      })
      // 2.把数据push到list数组中
      this.articles.push(...data.data.results)
      // 3.设置本次加载状态结束，它才可以判定是否需要加载下一次，否则不加载
      this.loading = false
      //4. 数据全部加载完成
      
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