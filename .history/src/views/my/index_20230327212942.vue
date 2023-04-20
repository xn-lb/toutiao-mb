<template>
    <div class="my-container">
        <van-cell-group class="my-info">
            <!-- 头像、昵称、编辑资料 -->
            <van-cell 
                class="base-info"
                title="单元格" 
                value="内容"
                center
                :border= "false"
            >
                <van-image
                    class="avater"
                    slot="icon"
                    round
                    fit="cover"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div class="name" slot="title">昵称</div>
                <van-button
                    class="update-btn"
                    size="small"
                    round
                >编辑资料</van-button>
            </van-cell>
            <!-- 宫格 -->
            <van-grid :border= "false" class="data-info">
                <van-grid-item class="data-info-item">
                    <div class="text-wrap" slot="text" >
                        <div class="count">123</div>
                        <div class="text">头条</div>
                    </div>
                </van-grid-item>
                <van-grid-item class="data-info-item">
                    <div class="text-wrap" slot="text">
                        <div class="count">123</div>
                        <div class="text">关注</div>
                    </div>
                </van-grid-item>
                <van-grid-item class="data-info-item">
                    <div class="text-wrap" slot="text">
                        <div class="count">123</div>
                        <div class="text">粉丝</div>
                    </div>
                </van-grid-item>
                <van-grid-item class="data-info-item">
                    <div class="text-wrap" slot="text">
                        <div class="count">123</div>
                        <div class="text">获赞</div>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-cell-group>
        
        <!-- 收藏、历史、作品 -->
        <van-grid class="nav-grid" :column-num="3">
            <van-grid-item
            class="nav-grid-item"
            icon-prefix="toutiao"
                icon="shoucang" 
                text="收藏" 
                border="false"
                />
            <van-grid-item 
            class="nav-grid-item"
            icon-prefix="toutiao"
            icon="lishi" 
            text="历史" 
            />
            <van-grid-item 
            class="nav-grid-item"
            icon-prefix="toutiao"
            icon="zuopin" 
            text="作品" 
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
    background-size: cover;
    .base-info{
        box-sizing: border-box;
        height: 115px;
        background-color: unset;
        padding-block: 11px;
        padding-top: 38px;
        .avater{
            box-sizing: border-box;
            width: 66px;
            height: 66px;
            border: 1px solid #fff;
            margin-right: 11px;
        }
        .name{
            color: #fff;
            font-size: 15px;
        }
        .update-btn{
            // 不用设置宽，由内容撑开
            height: 16px;
            font-size: 10px;
            color: #666;
        }
    }
    .data-info{
        .data-info-item{
            height: 65px;
            color: #fff;
            .text-wrap{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .count{
                font-size:18px ;
            }
            .text{
                font-size: 11px;
            }
            }
            
        }
    }
  
    /deep/ .van-grid-item__content {
        background-color: unset;
    }
    
  }
  .nav-grid{
        .nav-grid-item{
            height: 70px;
            /deep/.toutiao{
                font-size: 22px;
            }
            toutiao 
        }
    }

}

</style>