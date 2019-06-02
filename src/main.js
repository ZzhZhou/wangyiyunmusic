// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Muse from './muse-ui.config'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as types from './store/types-mutations'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Muse)
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  error: './static/img/akc.9.png',
  loading: './static/img/akc.9.png'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    if (this.$store.state.token) {
      // console.log(this.$store.state.token)
      axios.get('/api/login/status', {xhrFields: { withCredentials: true }})
        .then((res) => {
          axios.get(`/api/user/detail?uid=${res.data.profile.userId}`, {xhrFields: { withCredentials: true }})
            .then((res) => {
              store.commit(types.GETUSER_DATA, res.data)
            })
          axios.get(`/api/user/playlist?uid=${res.data.profile.userId}`, {xhrFields: { withCredentials: true }})
            .then((res) => {
              store.commit(types.GETUSER_PLAYLIST, res.data)
            })
        })
      this.$store.dispatch('getFriends', axios)
    } else {
      return console.log('请登录')
    }
  }
})
store.dispatch('getBanner', axios)
store.dispatch('getRecomList', axios)
store.dispatch('getNewSongs', axios)
store.dispatch('getDjData', axios)
store.dispatch('getHotList', axios)
router.push('/home')
router.beforeEach((to, from, next) => {
  store.commit('GETROUTER_NAME', to.name)
    next()
})
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) {
//       config.headers.Authorization = `token ${store.state.token}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   })
