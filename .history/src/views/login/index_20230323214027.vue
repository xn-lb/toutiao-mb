<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar"
     title=" 注册/ 登录" 
     left-arrow
     @click-left="$router.back()"
     />

    <!-- 登录表单 -->
    <van-form >
  <van-field
    class="icon-hl"
    v-model="user.mobile"
    name="手机号"
    placeholder="请输入手机号"
   >
      <i slot="left-icon" class="toutiao toutiao-shouji"></i>
   </van-field>
  <van-field
  class="icon-hl"
    v-model="user.code"
    name="验证码"
    placeholder="请输入验证码"
  >
   <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
   <template #button>
    <van-button size="small" type="default" round class="send-sms-btn">发送验证码</van-button>
  </template>
  </van-field>
  <div style="margin: 16px;">
   <div class="login-btn-wrap">
    <van-button 
    block 
    type="info" 
    class="login-btn"
    @click="onLogin"
    >登录</van-button>
   </div>
  </div>
</van-form>
  </div>
</template>

<script>
import {login} from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {
    onsubmit
  },
  props: {},
  data () {
    return {
      user:{
        mobile:'',//手机号
        code:''//验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin (){
      //1.获取表单数据
     
      //2.表单验证
      //3.提交表单登录
      try{
        const res = await login(this.user)
        console.log('登录成功', res);
      } catch (err){
        console.log('登录失败', err);
      }
      
      // 4.根据请求响应结果处理后续操作
    }
  },
  
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
  height: 30px;
  // line-height: 46;
}
.login-btn-wrap{
  background-color: #6db4fb;
  border: none;
  font-style: 42px;
}
.icon-hl{
  line-height:  30px;
}
</style>
