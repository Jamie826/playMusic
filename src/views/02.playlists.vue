<template>
  <div class="playlist_con">
      <!-- top推荐 -->
       <div class="top-card">
          <div class="icon-wrap">
            <!-- 封面 -->
            <img :src="topList.coverImgUrl" alt="" />
          </div>
          <div class="content-wrap">
            <div class="tag">精品歌单</div>
            <!-- 标题 -->
            <div class="title">
              {{topList.name}}
            </div>
            <!-- 介绍 -->
            <div class="info">
              {{topList.description}}
            </div>
          </div>
          <!-- 背景 -->
          <img src="../assets/3.jpg" alt="" class="bg" />
          <div class="bg-mask"></div>
       </div>
       <!-- tab栏 -->
       <el-tabs v-model="activeName">
          <el-tab-pane label="全部" name="全部"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="欧美" name="欧美"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="华语" name="华语"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="说唱" name="说唱"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="摇滚" name="摇滚"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="民谣" name="民谣"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="电子" name="电子"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="轻音乐" name="轻音乐"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="影视原声" name="影视原声"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="ACG" name="ACG"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="怀旧" name="怀旧"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="治愈" name="治愈"><listbar :list='playlists'></listbar></el-tab-pane>
          <el-tab-pane label="旅行" name="旅行"><listbar :list='playlists'></listbar></el-tab-pane>

       </el-tabs>
       
  </div>
</template>

<script>
import axios from 'axios'
import listbar from './002.listbar'
export default {
    components:{
      listbar

  },

  data(){
     return {
        activeName: '全部',
        topList:{},  //顶部推荐歌单
        playlists:[]  //歌单列表
      };
  },

  watch:{
    activeName: function() {

        // 获取顶部精品歌单
        this.getTopList(),

        // 获取歌单列表
        this.getPlaylists()
      }
  },

  created() {

    // 获取顶部精品歌单
    this.getTopList(),

    // 获取歌单列表
    this.getPlaylists()

  },
  methods:{

    // 抽取接口1:顶部精品歌单
    getTopList() {      
      // 获取精品歌单
      axios({
        url:"https://autumnfish.cn/top/playlist/highquality",
        method:'get',
        params:{
          limit:1,
          cat:this.activeName
        }
      }).then(res=>{
        // console.log(res)
        this.topList = res.data.playlists[0]
      })
    },

    // 抽取接口2:歌单列表
    getPlaylists() {
      // 获取歌单列表
      axios({
        url:"https://autumnfish.cn/top/playlist",
        method:'get',
        params:{
          limit:10,
          offset:0,
          cat:this.activeName
        }
      }).then(res=>{
        // console.log(res)
        this.playlists = res.data.playlists
        // console.log(this.playlists)
      })
    }
  }

}
</script>

<style>

</style>