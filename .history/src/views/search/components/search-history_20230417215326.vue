<template>
  <div class="search-history"> 
    <van-cell title="搜索历史">
      <span>全部删除</span>
      <span>完成</span>
      <van-icon name="delete-o" />
    </van-cell>
    <van-cell>
      <van-icon name="close"></van-icon>
    </van-cell>

  </div>
</template>

<script>
export default {
    name:'searchHistory',
    components:{},
    props:{},
    data(){
        return{

        }
    },

}
</script>

<style lang="less" scoped>

</style>