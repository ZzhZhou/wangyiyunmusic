<template>
  <div id="app">
    <div class="nav">
      <span class="item-menu"><img src="./public/img/tf.png" alt="" @click="changeShow"></span>
      <span class="item">
        <router-link to="/mine">
          <img src="./public/img/t_actionbar_music_normal.png" alt="" v-if="$store.state.routername!=='MyView'">
          <img src="./public/img/t_actionbar_music_selected.png" alt="" v-if="$store.state.routername==='MyView'">
      </router-link>
      </span>
      <span class="item">
        <router-link to="/home">
          <img src="./public/img/t_actionbar_discover_normal.png" alt="" v-if="$store.state.routername!=='HomeView'">
          <img src="./public/img/t_actionbar_discover_selected.png" alt="" v-if="$store.state.routername==='HomeView'">
        </router-link>
      </span>
      <span class="item"><router-link to="/video">
        <img src="./public/img/t_actionbar_video_normal.png" alt="" v-if="$store.state.routername!=='VideoView'">
        <img src="./public/img/t_actionbar_video_selected.png" alt="" v-if="$store.state.routername==='VideoView'">
      </router-link>
      </span>
      <span class="item-search"><img src="./public/img/u0.png" alt=""></span>
    </div>
    <player-view v-if="$store.state.playerview"></player-view>
    <router-view/>
    <transition name="person"><person-view v-if="$store.state.personshow"></person-view></transition>
    <div class="black" v-if="$store.state.personshow" @click="changeHide"></div>
    <list-view v-if="$store.state.listshow"></list-view>
    <min-player v-if="$store.state.showminiplayer"></min-player>
    <NewPlayList></NewPlayList>
  </div>
</template>

<script>
  import LoginView from './components/login/LoginView.vue'
  import PersonView from './components/personal/PersonView.vue'
  import ListView from './components/homeview/ListView.vue'
  import * as types from './store/types-mutations'
  import MinPlayer from './components/player/MinPlayer.vue'
  import NewPlayList from './components/homeview/NewPlayList.vue'
  import PlayerView from './components/player/PlayerView'
export default {
  name: 'App',
  data() {
    return {
      personshow: false
    }
  },
  components: {
    LoginView,
    PersonView,
    ListView,
    MinPlayer,
    NewPlayList,
    PlayerView
  },
  methods: {
    changeShow() {
      this.$store.commit(types.CHANGEPERSONAL_SHOW)
    },
    changeHide() {
      this.$store.commit(types.CHANGEPERSONAL_SHOW)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "public/scss/mixin"
  .person-enter,.person-leave-to
    transition: all .3s
    transform: translateX(-100%)
  .person-enter-to,.person-leave
    transition: all .2s
    transform: translateX(0)
  .black
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0,0,0,0.3)
    z-index: 153
  .nav
    position: fixed
    top: 0
    left: 0
    display: flex
    width: 100%
    height: 4rem
    background: #e04437
    z-index: 102
    overflow: hidden
    .item-menu
      position: relative
      flex: 0 0 20%
      & > img
        position: absolute
        top: 50%
        left: 0.8rem
        width: 1.8rem
        height: 1.8rem
    .item-search
      position: relative
      flex: 0 0 20%
      & > img
        position: absolute
        top: 50%
        right: 0.8rem
        margin-left: -0.9rem
        width: 1.8rem
        height: 1.8rem
    .item
      flex: 0 0 20%
      display: flex
      padding-top: 1rem
      /deep/ & > a
        & > img
          width: 4rem
          height: 3rem
</style>
