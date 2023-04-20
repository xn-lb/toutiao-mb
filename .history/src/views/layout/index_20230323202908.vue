<template>
    <di class="layout-container">
         <!-- 子路由出口 -->
        <router-view />

        <!-- 底部导航栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">问答</van-tabbar-item>
            <van-tabbar-item icon="friends-o">视频</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </di>


</template>

<script>
export default {
    name:'layoutIndex',
    components:{},
    props:{},
    data(){
        return{
            active:0
        }
    }
}
</script>

<style>

</style>