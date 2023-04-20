<template>
  <van-cell class="article-item"> 
    <div slot="title"> {{ article.title }} </div>
    <div slot="label"> 
    <span>{{ article.aut_name }}</span>    
    
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