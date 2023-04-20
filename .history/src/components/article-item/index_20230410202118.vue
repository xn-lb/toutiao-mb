<template>
  <van-cell class="article-item"> 
    <div slot="title"> {{ article.title }} </div>

    <div slot="label"> 
        <span>{{ article.aut_name }}</span>    
        <span>{{ article.comm_count }}评论</span>    
        <span>{{ article.pubdate }}</span>    
    </div>
    <van-image
    v-if="article.cover.type === 1"
        width="116"
        height="73"
        fit="cover"
        :src="article.cover.images[0]"
    />
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