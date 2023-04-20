<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
     title="标题"
     left-arrow
    />

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
  <van-field

    name="用户名"
    placeholder="请输入手机号"
   
  />
  <van-field
    type="password"
    name="密码"
    placeholder="请输入验证码"
  />
  <div style="margin: 16px;">
    <van-button  block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
