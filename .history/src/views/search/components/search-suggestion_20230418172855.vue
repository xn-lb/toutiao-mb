<template>
  <div class="search-suggestion">
    <van-cell title="联想建议" icon="search"></van-cell>
    <van-cell title="联想建议" icon="search"></van-cell>
    <van-cell title="联想建议" icon="search"></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
export default {
    name:'searchSuggestion',
    components:{},
    props:{
      searchText:{
        type: String,
        required: true
      }
    },
    data(){
        return{
          suggestions:[]  //联想建议数据列表
        }
    },
    computed:{},
    watch:{
      // 监听输入框的内容变化
      searchText:{
        // 当searchText发生改变的时候就会调用handler函数
        // handler函数名称是固定的
        handler(value){
          console.log(value);
          this.loadSearchSuggestions(value)
        },
        // 该函数会在侦听开始之后被立即调用
        immediate: true
      }
    },
    methods:{
      async loadSearchSuggestions (q) {
        try{
          const { data } = await getSearchSuggestions(q)
          console.log(data);
        } catch(err){
          this.$toast('搜索数据获取')
        }
      }
    }
    
}
</script>

<style lang="less" scoped>

</style>