<template>
    <div class="listbar">
        <!-- 标签页 -->
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
        <!-- 分页器 -->
        <div class="laypage">
            <el-pagination
            @current-change="handelCurrentChange"
            background
            layout="prev, pager, next"
            :total="total"
            :current-page="page"
            :page-size="10">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name:'listbar',
    props:{
        list:Array,
        total:Number,
        page:Number
    },
    data(){
        return {
            pageVal: 0, //当前页数
        }
    },
    methods:{
        // 页码改变事件
        handelCurrentChange(val) {
            console.log(`当前页${val}`)
            this.pageVal = val
            // 给父组件传参
            this.$emit('pageVal',this.pageVal);
            // console.log(this.pageVal)
        }
    }
}
</script>

<style>

</style>