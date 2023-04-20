<template>
    <div class="my-container">
        <van-cell-group class="my-info">
            <!-- 头像、昵称、编辑资料 -->
            <van-cell 
                class="base-info"
                title="单元格" 
                value="内容"
                center
                :border="false"
            >
                <van-image
                    slot="icon"
                    width="50"
                    height="50"
                    round
                    fit="cover"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div slot="title">昵称</div>
                <van-button
                    size="small"
                    round
                >编辑资料</van-button>
            </van-cell>
            <!-- 宫格 -->
            <van-grid :border=0>
                <van-grid-item>
                    <div slot="text">
                        <div class="span">123</div>
                        <div class="text">头条</div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span">123</div>
                        <div class="text">关注</div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span">123</div>
                        <div class="text">粉丝</div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span">123</div>
                        <div class="text">获赞</div>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-cell-group>
        
        <!-- 收藏、历史、作品 -->
        <van-grid :column-num="3">
            <van-grid-item
            icon-prefix="toutiao"
                icon="shoucang" 
                text="文字" 
                border="false"
                />
            <van-grid-item 
            icon-prefix="toutiao"
            icon="lishi" 
            text="文字" 
            />
            <van-grid-item 
            icon-prefix="toutiao"
            icon="zuopin" 
            text="文字" 
            />
        </van-grid>
        <!-- 消息通知…… -->
        <!-- is-link  表示小箭头 -->
        <div class="bottom">
            <van-cell title="消息通知" is-link to="/" />
            <van-cell title="小智同学" is-link to="/" />
            <van-cell title="退出登录" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("@/assets/banner.png");
  }
  
}

</style>