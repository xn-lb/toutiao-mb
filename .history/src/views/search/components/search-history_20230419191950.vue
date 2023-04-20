<template>
  <div class="search-history"> 
    <van-cell title="搜索历史">
      <div v-if="isDeleteShow">
        <span @click="searchHistories = []">全部删除</span>
        <span @click="isDeleteShow = false" class="finish">完成</span>
      </div>
      <van-icon v-else name="delete-o" @click="isDeleteShow = true"/>   <!-- 垃删除图表 -->
      
    </van-cell>
    <van-cell :title="item" 
        v-for="(item,index) in searchHistories " 
        :key=index
        @click="OnSearchItemClick(item,index)"
        >
      <van-icon name="close" v-show="isDeleteShow"></van-icon>
    </van-cell>

  </div>
</template>

<script>

export default {
    name:'searchHistory',
    components:{},
    props:{ 
      searchHistories:{
        type:Array,
        required: true
      }
    },
    data(){
        return{
          isDeleteShow:false //控制删除显示状态
        }
    },
    methods:{
      OnSearchItemClick(item,index){
        if(this.isDeleteShow){
          // 删除状态，删除历史记录数据
          this.searchHistories.splice(index,1)
        }
      }
    }

}
</script>

<style lang="less" scoped>
.search-history{
  .finish{
    padding-left: 10px;
  }
}
</style>