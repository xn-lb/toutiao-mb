<template>
  <van-cell class="article-item"> 
    <div class="title van-multi-ellipsis--l3" slot="title">{{ article.title }}</div>
    
    <div slot="label"> 
        <div class="cover-wrap" 
        v-if="article.cover.type ===3">
            <div class="cover-wrap-item">
                <van-image
                    width="116"
                    height="73"
                    fit="cover"
                    v-for="(img , index) in article.cover.images"
                    :key="index"
                    :src="img"
                />
            </div>
        </div>
        <div class="label-wrap">
            <span>{{ article.aut_name }}</span>    
            <span>{{ article.comm_count }}评论</span>    
            <span>{{ article.pubdate }}</span>  
        </div>
    </div>
    <van-image
    class="right-cover"
    v-if="article.cover.type === 1"
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

<style lang="less" scoped>
.article-item{ 
    .title{
        font-style: 16px;
        color: #3a3a3a;
    }
    /deep/.van-cell__value{
        flex: unset;
        width: 116px;
        height: 73px;
        margin-left: 12px;
    }
    .right-cover{
        width: 116px;
        height: 73px;
    }
    .cover-wrap{
        display: flex;
    }
}
</style>