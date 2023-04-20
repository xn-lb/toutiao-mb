<template>
  <div class="search-suggestion">
    <van-cell 
    icon="search"
    v-for="(text , index) in suggestions"
    :key="index"
    >
    <div slot="title" v-html="heighLight(text)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search'
// 按需加载
import { debounce } from 'lodash';
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
        // debounce函数 --> 防抖
        handler: debounce(function (value) {
          console.log(value);
          this.loadSearchSuggestions(value)
        }, 200),
        // 该函数会在侦听开始之后被立即调用
        immediate: true
      }
    },
    methods:{
      async loadSearchSuggestions (q) {
        try{
          const { data } = await getSearchSuggestions(q)
          console.log(data);
          this.suggestions = data.data.options
        } catch(err){
          this.$toast('联想建议数据获取')
        }
      },
      heighLight(text) {
        const heighLightStr = `<span class="active">${this.searchText}</span>`
        // 如果需要根据数据变量动态的创建正则表达式，则需要手动 new RegExp 
        // RegExp  正则表达式构造函数
        // 参数1：匹配模式字符串，根据这个字符串创建正则对象   
        // 参数2：匹配模式，要写到字符串中  'gi'  表示  所有字符串 且不  管字体大小写
        const reg = new RegExp(this.searchText,'gi') 
        return text.replace(reg,heighLightStr)
      }
    }
}
</script>

<style lang="less" scoped>
.search-suggestion {
  span.active{
    color: #3296fa;
  }
}
</style>