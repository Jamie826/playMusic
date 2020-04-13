<template>
  <div class="index">
    <!-- 导航栏 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
          <i class="icon_music"></i>
          发现音乐
        </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <i class="icon_list"></i>
            推荐歌单
          </router-link>
        </li>
        <li>        
          <router-link to="/songs">
            <i class="icon_new"></i>
            最新音乐
            </router-link>
        </li>
        <li>        
         <router-link to="/mvs">
            <i class="icon_mv"></i>
            最新MV
          </router-link>
        </li>
      </ul>

    </div>
    <!-- 主要内容 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 播放器 -->
    <div class="player">
      <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      musicUrl:"http://m701.music.126.net/20200327171705/cec0b39f1dc7bc0b64b8bd43c427cd30/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1930889848/5352/8e4c/dad6/de2cd00a12721e80053190dbce763c74.mp3"
    }
  }

}
</script>

<style>

</style>