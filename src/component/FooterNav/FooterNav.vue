<template>
    <div class="foot" v-show="$route.meta.isShowFoot">
        <span class="item" :class="{on:this.$route.path==='/home'}" @click="goto('/home')">
            <span>
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>
                {{$t('footer_home')}}
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/search'}" @click="goto('/search')">
            <span>
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span>
                {{$t('footer_search')}}
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/ding'}" @click="goto('/ding')">
            <span>
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>
                {{$t('footer_order')}}
            </span>
        </span>
         <span class="item" :class="{on:this.$route.path==='/mine'}" @click="goto('/mine')">
            <span>
                <i class="iconfont icon-yonghu"></i>
            </span>
            <span>
                {{$t('footer_mine')}}
            </span>
        </span>
    </div>
</template>
<script>
export default {
    methods: {
        goto(path){
            if(this.$route.fullPath!=path)
            this.$router.replace(path)
            else window.location = path
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixins.styl'
$color = #26a2ff;
    .foot
        top-border-1px(#ccc)
        display flex
        position fixed
        left 0
        bottom 0
        height 50px
        width 100%
        background-color #fff
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