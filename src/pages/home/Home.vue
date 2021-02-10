<template>
    <div>
        <myhead :title="title">
            <mt-button icon="search" slot="123"></mt-button>
            <div slot="456">
            <span>登录</span>
            <span>|</span>
            <span>注册</span>
            </div>
        </myhead>
        <!-- 首页轮播 -->
        <div class="swip">
            <mt-swipe :auto="0">
            <mt-swipe-item class="item">
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" alt="美食"></a>
                <span>美食</span>
                </div>
                <div>
                    <a href=""><img src="https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png" alt="美食"></a>
                <span>美团超市</span>
                </div>
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png" alt="美食"></a>
                <span>生鲜果蔬</span>
                </div>
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png" alt="美食"></a>
                <span>美团专送</span>
                </div>
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png" alt="美食"></a>
                <span>快食简餐</span>
                </div>
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/a2a306c5467aba7fac8d7410d161f8db9364.png" alt="美食"></a>
                <span>下午茶</span>
                </div>
                <div>
                    <a href=""><img src="https://p1.meituan.net/jungle/a2a306c5467aba7fac8d7410d161f8db9364.png" alt="美食"></a>
                <span>家常菜</span>
                </div>
                <div>
                    <a href=""><img src="https://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png" alt="美食"></a>
                <span>小吃馆</span>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
// import {reqAddress} from '../../api'

export default {
    data() {
        return {
            title:'正在获取当前位置'
        }
    },
    mounted(){
        // reqAddress().then((value)=>{
        //     console.log();
        // })
    }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
    .swip
        width 375px
        height 200px
        margin-top 10px
        .item
            div
                display flex
                flex-direction column
                float left
                margin 10px
                clearfix()
                a   
                    display inline-block
                    width 44px
                    height 44px
                    img
                        width 100%
                        height 100%

</style>