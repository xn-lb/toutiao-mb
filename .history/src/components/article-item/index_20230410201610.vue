<template>
  <van-cell class="article-item"> 
    <div slot="title"> {{ article.title }} </div>

    <div slot="label"> 
        <span>{{ article.aut_name }}</span>    
        <span>{{ article.comm_count }}评论</span>    
        <span>{{ article.pubdate }}</span>    
    </div>
  </van-cell>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        article:{
            type: Object,
            required: true
        }
    },
}
</script>

<style>

</style>