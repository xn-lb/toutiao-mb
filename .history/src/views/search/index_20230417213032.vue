<template>
  <div class="search-container">
    <!-- 顶部搜索栏 -->
    <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
</form>
  </div>
</template>

<script>
export default {    
    name:'SearchIndex',
    data(){
        return{
            value: '',
        }
    },
    methods:{
        onSearch(val) {
           console.log(val);
        },
        onCancel() {
            console.log('取消');
        },
    }
}
</script>

<style>

</style>