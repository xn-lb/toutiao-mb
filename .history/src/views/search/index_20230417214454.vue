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

    <!-- 搜索历史记录 -->
    <!-- 搜索历史记录 -->

    <!-- 联想建议 -->
    <!-- 联想建议 -->

    <!-- 历史记录 -->
    <!-- 历史记录 -->
  </div>
</template>

<script>
import searchHistory from './components/search-history.vue';
import searchResult from './components/search-result.vue';
import searchSuggestion from './components/search-suggestion.vue';
export default {    
    name:'SearchIndex',
    data(){
        return{
            searchText: '',
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