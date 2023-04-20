<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3196fa"
        @search="onSearch"
        @cancel="onCancel"
    />
    </form>
    <!-- 顶部搜索栏 -->

    <!-- 搜索结果 -->
    <searchResult v-if="isResultShow"/>
    <!-- 搜索结果 -->

    <!-- 搜索历史记录 -->
        <searchHistory />

    <!-- 搜索历史记录 -->

    <!-- 联想建议 -->
    <searchSuggestion />
    <!-- 联想建议 -->


  </div>
</template>

<script>
import { is } from '@babel/types';
import searchHistory from './components/search-history.vue';
import searchResult from './components/search-result.vue';
import searchSuggestion from './components/search-suggestion.vue';
export default {    
    name:'SearchIndex',
    components:{
        searchHistory,
        searchResult,
        searchSuggestion
    },
    data(){
        return{
            searchText: '',
            isResultShow:false  //控制搜索结果的展示
        }
    },
    methods:{
        onSearch(val) {
           console.log(val);
        },
        onCancel() {
            console.log('取消');
            this.$router.back()
        },
    }
}
</script>

<style lang="less" scoped>
    .van-search__action{
        color: #fff;
    }
</style>