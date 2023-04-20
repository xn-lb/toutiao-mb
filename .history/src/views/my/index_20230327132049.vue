<template>
    <div class="my-cotainer">
        <van-cell-group>
            <!-- 头像、昵称、编辑资料 -->
            <van-cell 
            title="单元格" 
            value="内容"
            center
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
            <van-grid>
                <van-grid-item>
                    <div slot="text">
                        <div class="span"></div>
                        <div class="text"></div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span"></div>
                        <div class="text"></div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span"></div>
                        <div class="text"></div>
                    </div>
                </van-grid-item>
                <van-grid-item>
                    <div slot="text">
                        <div class="span"></div>
                        <div class="text"></div>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-cell-group>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>