<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
  <van-field

    name="用户名"
    placeholder="请输入手机号"
   >
      <i slot="left-icon" class="toutiao toutiao-shouji"></i>
   </van-field>
  <van-field
    type="password"
    name="密码"
    placeholder="请输入验证码"
  >
   <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
   <template #button>
    <van-button size="small" type="default" round class="send-sms-btn">发送验证码</van-button>
  </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button  block type="info" native-type="submit" class="login-btn-wrap">登录</van-button>
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

<style scoped lang="less">
.page-nav-bar{
  background-color:#3296fa;
}
.login-container{
  .toutiao{
    font-style: 37px;
  }
}
.send-sms-btn{
  background-color: #ededed;
  font-style: 22px;
  color: #666;
  width: 102px;
  height: 46px;
  line-height: 46;
}
.login-btn-wrap{
  background-color: #6db4fb;
  border: none;
    .van-button__text{
      font-style: 22px;
    }
}
</style>
