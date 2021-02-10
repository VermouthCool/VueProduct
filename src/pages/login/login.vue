<template>
    <div>
        <div v-html="svgsrc.data"></div>
        <button @click="scroll">jian</button>
        <div ref="jian" style="height:300px; overflow:hidden">
            <div>
                <ul @click="laodah">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>56</li>
                    <li v-show="a">{{a}}</li>
                    <li v-show="b">{{b}}</li>
        </ul>
        <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import {reqCaptch} from '../../api/index'
import BScorll from 'better-scroll'
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'
export default {
    props:['id'],
    data() {
        return {
            svgsrc:{}
        }
    },
    methods: {
       scroll(){
           this.jian.scrollTo(0,-300,300)
       },
       laodah:throttle(function(){
               console.log('-jainjian-');
           },1000,{leading:false})
    },
    mounted(){
        console.log(this.id+'------------');
        this.$store.dispatch('di')
        reqCaptch().then((value)=>{
            this.svgsrc = value
        });
        this.jian = new BScorll(this.$refs.jian,{
            movable: true,
            zoom: true,
            probeType:1,
            // scrollY:false
        });
        console.log(this.jian);
        this.jian.on('scroll',({x,y})=>{
            console.log(x,y);
        })
    },
    computed:{
        ...mapState({
            a:c=>c.a.name,
            b:c=>c.a.name,
        })
    },
    beforeRouteEnter(){
        
    }
}
</script>
<style lang="stylus" scoped>
    ul
        li
            width 350px
            height 30px
</style>