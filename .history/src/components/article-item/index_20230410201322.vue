<template>
  <van-cell class="article-item"> 
    <div slot="title"> {{ article.title }} </div>
    <div slot="label"> 1 </div>
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