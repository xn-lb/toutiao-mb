<template>
  <div class="artitle-list">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
    name:'ArtitleList',
    data(){
        return{
            list: [],
            loading: false,
            finished: false,
        }
    },
    props:{
        channel:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>