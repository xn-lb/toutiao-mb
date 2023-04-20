<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <!-- Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮 -->
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
    <search-result v-if="isResultShow" :q="searchText" />
    <!-- 搜索结果 -->
    
    <!-- 联想建议 -->
    <searchSuggestion  
    v-else-if="searchText"
    :search-text="searchText"
    @search="onSearch"
    />
    <!-- 联想建议 -->

    <!-- 搜索历史记录 -->
        <searchHistory v-else/>

    <!-- 搜索历史记录 -->



  </div>
</template>

<script>
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
           this.searchText = val
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