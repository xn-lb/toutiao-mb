<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

  </div>
</template>

<script>
import {getSearchResults} from '@/api/search'
export default {
    name:'searchResult',
    components:{},
    props:{
      searchText:{
        type: String,
        required: true
      }
    },
    data(){
        return{
          list: [],
          loading: false,
          finished: false,
          page:1,
          per_page:10
        };
    },
    methods:{
      async  onLoad() {
        try{
          const {data} = await getSearchResults({
            page: this.page,  //页码
            per_page: this.per_page,//每页大小
            q:this.searchText  //查询关键词
          })
        } catch (err){
          this.$toast('数据获取失败，请稍后重试')
        }
        // 1.请求获取数据

        // 2.将数据添加到数组列表中
        // 3.将本次加载中的loading 关闭
        // 4.判断是否还有数据  有->更新获取下一个数据的页码 没有->将加载状态 finished 设置为结束
      },
      
    }
    
    
}
</script>

<style lang="less" scoped>

</style>