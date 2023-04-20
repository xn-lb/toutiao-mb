<template>
<div class="login-container">
  <!-- 导航栏 -->
  <van-nav-bar class="app-nav-bar"
    title=" 注册/ 登录" 
    left-arrow
    @click-left="$router.back()"
    />

  <!-- 登录表单 -->
<!-- 
给予vant的表单验证
1、使用van-from 组件包裹所有的表单项 van-filed
2、给van-form 绑定submit事件， 当表单提交的时候会触发submit事件
    提示：只有表单验证通过，它才会调用submit
3、使用filed的rules属性定义校验规则(不建议直接放到)
-->
  
  <van-form 
    @submit="onLogin"
    :show-error="false"
    :show-error-message="false"
    @failed="onFailed"
    ref="login-form"
    >
   
    <!-- 输入手机号 -->
<van-field
  class="icon-hl"
  v-model="user.mobile"
  name="mobile"
  placeholder="请输入手机号"
  :rules="formRules.mobile"
  validate-first
  >
    <i slot="left-icon" class="toutiao toutiao-shouji"></i>
  </van-field>
  <!-- 输入验证码 -->
<van-field
class="icon-hl"
  v-model="user.code"
  name="code"
  placeholder="请输入验证码"
  :rules="formRules.code"
>
  <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
  
  <template #button>
    <van-count-down 
    :time="1000 * 60" 
    format="ss s" 
    />

  <van-button 
  size="small" 
  type="default" 
  round 
  class="send-sms-btn"
  @click.prevent="onSendSms"
  >发送验证码</van-button>
  </template>
</van-field>
<!-- 登录按钮 -->
<div style="margin: 16px;">
  <div class="login-btn-wrap">
  <van-button 
  block 
  type="info" 
  class="login-btn"

  >登录</van-button>
  </div>
</div>
</van-form>
</div>
</template>

<script>
import {login,sendSms} from '@/api/user'
import { Toast } from 'vant';

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
    },
    formRules:{
      mobile:[
        { required: true, message: '请输入手机号' },
        {pattern:/^1{3|5|7|9]\d{9}$/,message:'手机号格式错误'}
      ],
      code:[
        { required: true, message: '请输入验证码' },
        {pattern:/^\d{6}$/,message:'验证码格式错误'}
      ]
      
    },
    isCountDownShow:false   //控制倒计时和发送按钮的显示状态

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
    Toast.loading({
    message: '登录中...',//提示文本
    forbidClick: true,
    duration:0  //展示时长，为0时，toast不会消失
});
      const res = await login(this.user)
      // console.log('登录成功', res);
      Toast.success('登陆成功')
    } catch (err){
      // console.log('登录失败', err);
      Toast.fail('登录失败')
    }
    
    // 4.根据请求响应结果处理后续操作
  },

  onFailed(error){
    console.log('验证失败',error);
    if(error.errors[0]){
      this.$toast({
        message:error.errors[0].message,  //验证错误弹出错误信息
        position:'top'  //错误信息弹出在顶部
      })
    }
  },
  async onSendSms(){
    try{
      // 验证通过，请求发送验证码
      await this.$refs['login-form'].validate('mobile')
      const res = await sendSms(this.user.mobile)
      console.log(res);

       // 请求发送验证码->隐藏发送按钮，显示倒计时
       

    }catch(err){
      // console.dir(err);
      // try里面任何代码的错误都会进入到catch里面
      // 不同的错误需要有不同的提示， 那就需要判断了
      let message = ''
      if(err && err.response && err.response.status === 429){
        // 发送短信失败的错误提示
        message = '发送太频繁了，请一分钟后重试'
      } else if(err.name === mobile){
        // 表单验证失败的错误提示
        message: err.mes
      }else{
        message:'发送失败，请稍后重试'
      }
      // 提示用户
      this.$toast({
        message:message,  //验证错误弹出错误信息
        position:'top'  //错误信息弹出在顶部
      })
    }
    // 校验手机号码
   
    // 倒计时结束->隐藏倒计时，显示发送按钮
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
