<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <!--  Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮 -->
    <form action="/" class="search-form"> 
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3196fa"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
    />
    </form>
    <!-- 顶部搜索栏 -->

    <!-- 搜索结果 -->
    <!-- <searchResult v-if="isResultShow" :search-text="searchText"/> -->
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
    <searchHistory 
    v-else 
    :search-histories="searchHistories"
    @clear-search-histories="searchHistories = []"
    @search="onSearch"
    />
    <!-- 搜索历史记录 -->

  </div>
</template>

<script>
import { getItem, setItem } from '@/utils/strorage';
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
            isResultShow: false,  //控制搜索结果的展示
            searchHistories:getItem('TOUTIAO_SEARCH_HISTORY') || [] //搜索历史记录数据
        }
    },
    watch:{
        searchHistories (value){
            // console.log('hh');
            setItem('TOUTIAO_SEARCH_HISTORY',value)
        }
    },
    methods:{
        onSearch(val) {
            
           this.searchText = val // 更新文本框内容
            //要求：不要有重复的历史记录，最后的排在最前面
            // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
            // 如果没有找到匹配的字符串则返回 -1。

            const index = this.searchHistories.indexOf(val)   
            if (index !== -1){
                this.searchHistories.splice(index)
            }
            this.searchHistories.unshift(val)
            this.isResultShow = true  //展示搜索结果
        },
        onCancel() {
            // console.log('取消');
            this.$router.back()
        },
    }
}
</script>

<style lang="less" scoped>
.search-container{
    padding-top: 54px;
    .van-search__action{
        color: #fff;
    }
    .search-form{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        right: 0;
    }
}

</style>