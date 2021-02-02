<template>
    <div class="foot">
        <span class="item" :class="{on:this.$route.path==='/home'}" @click="goto('/home')">
            <span>
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>
                首页
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/search'}" @click="goto('/search')">
            <span>
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span>
                搜索
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/ding'}" @click="goto('/ding')">
            <span>
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>
                订单
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/mine'}" @click="goto('/mine')">
            <span>
                <i class="iconfont icon-yonghu"></i>
            </span>
            <span>
                个人
            </span>
        </span>
    </div>
</template>
<script>
export default {
    methods: {
        goto(path){
            this.$router.replace(path) 
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
$color = #008c8c;
    .foot
        top-border-1px(#ccc)
        display flex
        position fixed
        left 0
        bottom 0
        height 50px
        width 100%
        .item
            display flex
            flex-direction column
            width 25%
            text-align center
            &.on
                color $color
            span
                margin-top 3px
                font-size 12px
                i
                    font-size 20px
</style>