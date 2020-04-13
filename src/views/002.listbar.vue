<template>
    <div class="listbar">
        <div class="list_box">
            <div class="items">
            <div class="item" v-for="(item,index) in list" :key="index">
                <div class="img-wrap">
                <div class="desc-wrap">
                    <span class="desc">{{item.description}}</span>
                </div>
                <img :src="item.coverImgUrl" alt="" />
                <span class="iconfont icon-play"></span>
                </div>
                <p class="name">{{item.name}} </p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'listbar',
    props:{
        list:Array
    },
    methods:{
    }
}
</script>

<style>

</style>