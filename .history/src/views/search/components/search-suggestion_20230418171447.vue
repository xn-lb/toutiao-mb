<template>
  <div class="search-suggestion">
    <van-cell title="联想建议" icon="search"></van-cell>
    <van-cell title="联想建议" icon="search"></van-cell>
    <van-cell title="联想建议" icon="search"></van-cell>
  </div>
</template>

<script>
export default {
    name:'searchSuggestion',
    components:{},
    props:{
      searchText:{
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    },
    computed:{},
    watch:{
      
    }
    
}
</script>

<style lang="less" scoped>

</style>