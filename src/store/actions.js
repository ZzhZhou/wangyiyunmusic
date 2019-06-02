/**
 * Created by zhouzhengh on 2018/11/27.
 */
import * as types from './types-mutations'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
   getLoginData({commit}, user) { // 我的登录信息
      commit(types.CHANGE_AJAX, true)
      axios.get(`/api/login?email=${user.post}&password=${user.password}`, {xhrFields: { withCredentials: true }})
      .then((res) => {
        commit(types.GETLOGIN_DATA, res.data)
        axios.get(`/api/user/detail?uid=${res.data.profile.userId}`, {xhrFields: { withCredentials: true }})
          .then((res) => {
            commit(types.GETUSER_DATA, res.data)
          })
        axios.get(`/api/user/playlist?uid=${res.data.profile.userId}`, {xhrFields: { withCredentials: true }})
          .then((res) => {
            commit(types.GETUSER_PLAYLIST, res.data)
          })
      })
    commit(types.CHANGE_AJAX, false)
     Cookies.set('token', 1)
  },
  async getBanner({commit}) { // 获取轮播图
    commit(types.CHANGE_AJAX, true)
     let bar = await axios.get('/api/banner', {xhrFields: { withCredentials: true }})
    commit(types.GETBANNER, bar.data)
    commit(types.CHANGE_AJAX, false)
  },
  async getRecomList({commit}) { // 获取推荐歌单
    commit(types.CHANGE_AJAX, true)
     let list = await axios.get('/api/personalized', {xhrFields: { withCredentials: true }})
    commit(types.GETRECOM_LIST, list.data)
    commit(types.CHANGE_AJAX, false)
  },
  async getNewSongs({commit}) { // 获取最新歌曲
     commit(types.CHANGE_AJAX, true)
    let songs = await axios.get('/api/personalized/newsong', {xhrFields: { withCredentials: true }})
     commit(types.GETNEWS_SONGS, songs.data.result)
     commit(types.CHANGE_AJAX, false)
  },
  backLogin({commit}) { // 退出登陆
    commit(types.CHANGE_AJAX, true)
     axios.get('/api/logout', {xhrFields: { withCredentials: true }})
       .then((res) => {
         Cookies.remove('token')
         commit(types.GETUSER_DATA, {})
       })
    commit(types.CHANGE_AJAX, false)
  },
  async getListData({commit}, listID) { // 获取歌单详情
    commit(types.CHANGE_AJAX, true)
    let listdata = await axios.get(`/api/playlist/detail?id=${listID}`, {xhrFields: { withCredentials: true }})
    commit(types.GETLIST_DATA, listdata.data)
    commit(types.CHANGE_AJAX, false)
  },
  async getDjData({commit}, axios) { // 获取推荐电台
    commit(types.CHANGE_AJAX, true)
    let djdata = await axios.get(`/api/personalized/djprogram`, {xhrFields: { withCredentials: true }})
    commit(types.GETDJ_DATA, djdata.data)
    commit(types.CHANGE_AJAX, false)
  },
  async getSongIndex({commit}, index) { // 获取歌曲信息
    commit(types.GETSONG_DETAIL, {theindex: index.index, thedata: index.data})
  },
  async getFriends({commit}, axios) { // 获取朋友圈
    commit(types.CHANGE_AJAX, true)
    let informdata = await axios.get(`/api/event`, {xhrFields: { withCredentials: true }})
    commit(types.GETFRIEND_INFORM, informdata.data)
    commit(types.CHANGE_AJAX, false)
  },
  async getHotList({commit}, axios) { // 获取全部歌单
    commit(types.CHANGE_AJAX, true)
    let list = await axios.get(`/api/top/playlist`, {xhrFields: { withCredentials: true }})
    commit(types.GETPLUS_PLAYLIST, list.data)
    commit(types.CHANGE_AJAX, false)
  }
}
