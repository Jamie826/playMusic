<template>
  <div class="discovery_main">
    <div class="con">
          <!-- 轮播图 -->
      <el-carousel :interval="5000" type="card" height="230px">
        <el-carousel-item v-for="(item,index) in banners" :key="index">
         <img :src="item.imageUrl" alt="">
        </el-carousel-item>
      </el-carousel>
      <!-- 推荐歌单 -->
      <div class="list_box">
        <h3>推荐歌单</h3>
        <div class="items">
          <div class="item" v-for="(item,index) in list" :key="index">
            <div class="img-wrap">
              <div class="desc-wrap">
                <span class="desc">{{item.copywriter}}</span>
              </div>
              <img :src="item.picUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{item.name}}</p>
          </div>
        </div>
      </div>
      <!-- 独家放送 -->
      <div class="exc_mvs">
        <h3 class="title">独家放送</h3>
        <div class="items">
          <div class="item" v-for="(item,index) in exc_mvs" :key="index">
            <div class="img-wrap">
              <img :src="item.picUrl" alt="" />
            </div>
            <div class="info-wrap">
              <!-- mv名 -->
              <div class="desc">{{item.copywriter}}</div>
            </div>
          </div>

        </div>
      </div>
      <!-- 最新音乐 -->
      <div class="new">
        <h3 class="title">
          最新音乐
        </h3>
        <div class="items">
          <div class="item" v-for="(item,index) in new_list" :key="index">
            <div class="img-wrap">
              <!-- 封面 -->
              <img :src="item.picUrl" alt="" />
              <span @click="playMusic(item.id)" class="iconfont icon-play"></span>
            </div>
            <div class="song-wrap">
              <!-- 歌名 -->
              <div class="song-name">{{item.name}}</div>
              <!-- 歌手名 -->
              <div class="singer">{{item.song.artists[0].name}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐MV -->
      <div class="mvs">
        <h3 class="title">推荐MV</h3>
        <div class="items">
          <div class="item" v-for="(item,index) in new_mvs" :key="index">
            <div class="img-wrap">
              <div class="desc-wrap">
                <span class="desc">{{item.copywriter}}</span>
              </div>
              <img :src="item.picUrl" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <!-- 播放次数 -->
                <div class="num">{{item.playCount}}</div>
              </div>
            </div>
            <div class="info-wrap">
              <!-- mv名 -->
              <div class="name">{{item.name}}</div>
              <!-- 歌手名 -->
              <div class="singer">{{item.artists[0].name}}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'discovery',
  data(){
    return{
      banners:[],//轮播图
      list:[],//推荐歌单
      exc_mvs:[],//独家放送
      new_list:[],//最新音乐
      new_mvs:[]//最新MV
    }
  },
  created(){
    // 轮播图
    axios({
      url:"https://autumnfish.cn/banner",
      method:"get",
    }).then(res=>{
      this.banners = res.data.banners
    }),

    // 推荐歌单
    axios({
      url:"https://autumnfish.cn/personalized",
      method:"get",
      params:{
        limit:10
      }
    }).then(res=>{
      this.list = res.data.result
    }),

    // 独家放送
    axios({
      url:"https://autumnfish.cn/personalized/privatecontent",
      method:"get"
    }).then(res=>{
      // console.log(res)
      this.exc_mvs = res.data.result
    }),

    // 最新音乐
    axios({
      url:"https://autumnfish.cn/personalized/newsong",
      method:"get"
    }).then(res=>{
      this.new_list = res.data.result
    }),

    // 推荐MV
    axios({
      url:"https://autumnfish.cn/personalized/mv",
      method:"get",
    }).then(res=>{
      this.new_mvs = res.data.result
    })
  },
  methods:{
    // 点击播放
    playMusic(id){
      // console.log(id)
      axios({
        url:"https://autumnfish.cn/song/url",
        method:"get",
        params:{
          id
        }
      }).then(res=>{
        let url = res.data.data[0].url
        // console.log(this.$parent.musicUrl)
        this.$parent.musicUrl = url
      })
    }
  }

}
</script>

<style>


</style>
