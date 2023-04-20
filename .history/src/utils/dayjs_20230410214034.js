// 初始化dayjs相关配置
import Vue from "vue";
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn' // ES 2015 
import relativeTime from require('dayjs/plugin/relativeTime')


// 配置使用相对时间
dayjs.extend(relativeTime)

// 配置中文语言包
dayjs.locale('zh-cn') // 全局使用


// 把处理相对时间的代码包装成全局过滤器
// 然后就可以在任何组件的模板中使用了
// 所谓的过滤器其实就是一个可以在模板中调用的函数而已
// 在组建的模板中使用过滤器：{{ xxx | relativeTime }}
// 管道符前面的内容会作为参数传递给过滤器
// 过滤器的返回值会渲染到使用过滤器的模板中
Vue.filter('relativeTime', value => {
    return dayjs(value).from(dayjs())
})