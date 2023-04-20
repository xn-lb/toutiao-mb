<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <van-cell v-for="(article,index) in list" :key="index" :title="article.title" />
    </van-list>
  </div>
</template>

<script>
import { getSearchResults } from "@/api/search";
export default {
  name: "searchResult",
  components: {},
  props: {
    q: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perPage: 10,
      error: false
    };
  },
  methods: {
    async onLoad() {
      try {
        // 1.请求获取数据
        const { data } = await getSearchResults({
          page: this.page, //页码
          per_page: this.perPage, //每页大小
          q: this.q //查询关键词
        });
        // // 模拟随机加载失败
        // if(Math.random() > 0.5){
        //   JSON.parse('dsnajndjsa')
        // }

        // 2.将数据添加到数组列表中
        const { results } = data.data;
        this.list.push(...results);

        // 3.将本次加载中的loading 关闭
        this.loading = false;
        // 4.判断是否还有数据  有->更新获取下一个数据的页码 没有->将加载状态 finished 设置为结束
        if (results.length) {
          this.page++;
        } else {
          this.finished = true;
        }
      } catch (err) {
        // 展示加载失败的提示状态
        this.error = true;
        // 加载失败了loading 也要关闭
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>