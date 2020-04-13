import Vue from 'vue'
import App from './App.vue'

// 引入ElementUI
import ElementUI from 'element-ui';
// 导入Element样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式
import './assets/index.css'
// 使用
Vue.use(ElementUI)

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 引入组件
import discovery from './views/01.discovery.vue'
import playlists from './views/02.playlists.vue'
import songs from './views/03.songs.vue'
import mvs from './views/04.mvs.vue'
import result from './views/05.result.vue'
import playlist from './views/06.playlist.vue'
import mv from './views/07.mv.vue'

// 配置路由
let router = new VueRouter({
  routes: [
    {
      path:'',
      redirect: '/discovery'
    },
    {
      path:'/discovery',
      component: discovery
    },
    {
      path:'/playlists',
      component: playlists
    },
    {
      path:'/songs',
      component: songs
    },
    {
      path:'/mvs',
      component: mvs
    },
    {
      path:'/result',
      component: result
    },
    {
      path:'/playlist',
      component: playlist
    },
    {
      path:'/mv',
      component: mv
    }
  ]
})


Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
