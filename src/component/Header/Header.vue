<template>
    <div>
        <header style="height:1.066667rem">
            <mt-header fixed :title="title">
                <router-link to="/search" slot="left">
                <slot name="123"></slot>
                </router-link>
                <span @click="$router.push({
                    name:'login',
                    params:{id:1}
                })" slot="right">
                    <slot name="456"></slot>
                </span>
            </mt-header>
        </header>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>