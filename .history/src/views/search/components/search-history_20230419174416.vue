<template>
  <div class="search-history"> 
    <van-cell title="搜索历史">
      <div v-if="isDeleteShow">
        <span>全部删除</span>
        <span>完成</span>
      </div>
      <van-icon v-else name="delete-o" />
    </van-cell>
    <van-cell :title="item" 
        v-for="(item,index) in searchHistories " 
        :key=index>
      <van-icon name="close" v-if="isDeleteShow"></van-icon>
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

}
</script>

<style lang="less" scoped>

</style>