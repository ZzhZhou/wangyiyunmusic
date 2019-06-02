/**
 * Created by zhouzhengh on 2018/11/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import Cookies from 'js-cookie'

Vue.use(Vuex)
const state = {
  showLoginView: true,
  showLoginPage: false,
  personshow: false,
  isAJAX: false,
  listshow: false,
  showminiplayer: false,
  playshow: false,
  playerview: false,
  logininform: {},
  routername: 'HomeView',
  userData: {},
  userPlayList: {},
  banner: {},
  recomlist: {},
  listdata: {},
  listdetail: {},
  newsongs: {},
  djlist: {},
  token: Cookies.get('token'),
  clickindex: 0,
  songsindex: 0,
  informations: {},
  playlistplus: {}
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
