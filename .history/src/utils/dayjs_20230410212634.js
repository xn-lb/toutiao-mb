// 初始化dayjs相关配置
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn' // ES 2015 
import relativeTime from require('dayjs/plugin/relativeTime')
    // 配置使用相对时间
dayjs.extend(relativeTime)
    // 配置中文语言包
dayjs.locale('zh-cn') // 全局使用