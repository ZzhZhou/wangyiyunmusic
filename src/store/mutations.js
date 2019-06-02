/**
 * Created by zhouzhengh on 2018/11/27.
 */
import * as types from './types-mutations'
import Cookies from 'js-cookie'
export default {
  [types.CHANGE_LOGINPAGE_SHOW](state, val) { // 显示登录界面
    console.log()
    state.showLoginPage = val.showpage
    state.showLoginView = val.showview
  },
  [types.CHANGEPERSONAL_SHOW](state) {
    state.personshow = !state.personshow // 显示个人信息
  },
  [types.CHANGELIST_SHOW](state) { // 显示歌单详情
    state.listshow = !state.listshow
  },
  [types.CHANGE_AJAX](state, ajax) { // 是否发送ajax请求
    state.isAJAX = ajax
  },
  [types.GETROUTER_NAME](state, name) { // 获取路由名
    state.routername = name
  },
  [types.GETLOGIN_DATA](state, login) {
    state.logininform = login
    console.log(state.logininform)
    Cookies.set('token', state.logininform.account.userName)
    console.log(state.token)
  },
  [types.GETUSER_DATA](state, user) { // 获取登陆后个人信息
    state.userData = user
    // console.log(state.userData)
  },
  [types.GETUSER_PLAYLIST](state, playlist) { // 获取用户歌单
    state.userPlayList = playlist
    // console.log(state.userPlayList)
  },
  [types.GETBANNER](state, bar) { // 轮播图
    state.banner = bar
    // console.log(state.banner)
  },
  [types.GETRECOM_LIST](state, list) { // 推荐歌单
    state.recomlist = list
    // console.log(state.recomlist)
  },
  [types.GETNEWS_SONGS](state, songs) { // 最新音乐
    state.newsongs = songs
    // console.log(state.newsongs)
  },
  [types.GETLIST_DATA](state, content) { // 获取歌单详情
    state.listdetail = content
    // console.log(state.listdata)
  },
  [types.GETDJ_DATA](state, dj) { // 获取推荐电台
    state.djlist = dj
    // console.log(state.djlist)
  },
  [types.CHANGEMINI_PLAYER](state) { // 是否显示下方小播放器
    state.showminiplayer = true
  },
  [types.GETSONG_DETAIL](state, songindex) { // 获取歌曲信息
    state.clickindex = songindex.theindex
    state.songsindex = state.clickindex
    state.listdata = songindex.thedata
    // console.log(state.listdata)
    // console.log(state.songsindex)
  },
  [types.CHANGE_INDEX](state, index) { // 获取下一首歌索引
      state.songsindex = index
  },
  [types.GETFRIEND_INFORM](state, inform) { // 获取朋友圈
    state.informations = inform
    console.log(state.informations)
  },
  [types.GETPLUS_PLAYLIST](state, list) {
    state.playlistplus = list
    // console.log(state.playlistplus)
  },
  [types.SHOW_PLAYER](state, isshow) {
    state.playshow = isshow
  },
  [types.SHOW_PLAYERVIEW](state) {
    state.playerview = !state.playerview
  }
}
