<template>
  <div id="app">
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
    </div>
    <router-view/>
    <div class="box"></div>
  </div>
</template>
<script>
export default {
  name: 'APP'
}
</script>
<style lang="less">
#box{
  width: 200px;
  height: 200px;
  background-color:pink
  ;
}
</style>
