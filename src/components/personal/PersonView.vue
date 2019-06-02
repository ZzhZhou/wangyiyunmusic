<template>
    <div class="personal">
      <div class="inform">
        <div class="bgimg">
          <img src="./../../public/img/aww.png" alt="" v-if="$store.state.userData.code !== 200">
          <img :src="$store.state.userData.profile.backgroundUrl" alt="" v-if="$store.state.userData.code === 200"></div>
        <div class="text" v-if="$store.state.userData.code !== 200">
          <p>登录网易云音乐</p>
          <p>手机电脑多端同步，尽享海量高品质音乐</p>
        </div>
        <div class="btn" v-if="$store.state.userData.code !== 200">
          <span @click="hidePerson">立即登陆</span></div>
        <div class="person" v-if="$store.state.userData.code === 200">
          <div class="icon">
            <img :src="$store.state.userData.profile.avatarUrl" alt="">
          </div>
          <div class="content">
            <span class="name">{{$store.state.userData.profile.nickname}}</span>
            <img src="../../public/img/a4w.png" alt="" v-if="$store.state.userData.profile.vipType===0">
            <img src="../../public/img/a4x.png" alt="" v-if="$store.state.userData.profile.vipType===1">
            <span class="lv">lv {{$store.state.userData.level}}</span>
            <span class="qd">签到</span>
          </div>
        </div>
      </div>
      <div class="tab">
        <div><mu-paper :z-depth="1" class="demo-list-wrap">
          <mu-list>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="mail" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>我的消息</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="cloud" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>音乐云盘</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="shopping_cart" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>商城</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="child_care" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>亲子频道</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="access_alarm" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>音乐闹钟</mu-list-item-title>
            </mu-list-item>
          </mu-list>
          <mu-divider></mu-divider>
          <mu-list>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="person" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>我的好友</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="room" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>附近的人</mu-list-item-title>
            </mu-list-item>
          </mu-list>
          <mu-divider></mu-divider>
          <mu-list>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="watch_later" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>定时停止播放</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="true">
              <mu-list-item-action>
                <mu-icon value="keyboard_voice" size="20" color="#ccc"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>听歌识曲</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-paper></div>
      </div>
      <mu-divider></mu-divider>
      <div class="tabbar">
        <span><mu-icon value="brightness_3" size="22" color="#aaa"></mu-icon><span>夜间模式</span></span>
        <span><mu-icon value="settings" size="22" color="#aaa"></mu-icon><span>设置</span></span>
        <span @click="back"><mu-icon value="power_settings_new" size="22" color="#aaa"></mu-icon><span>退出</span></span>
      </div>
    </div>
</template>

<script>
  import * as types from '../../store/types-mutations'
  import BScroll from 'better-scroll'
  export default {
    methods: {
    hidePerson() {
      this.$store.commit(types.CHANGE_LOGINPAGE_SHOW, {showpage: false, showview: true})
      this.$store.commit(types.CHANGEPERSONAL_SHOW)
      this.$router.push('/login')
    },
      getScroll() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.tabs, {click: true})
      })
      },
      back() {
        this.$store.commit(types.CHANGE_LOGINPAGE_SHOW, {showpage: false, showview: true})
        this.$store.commit(types.CHANGEPERSONAL_SHOW)
        this.$store.dispatch('backLogin')
        this.$router.push('/login')
      }
   },
    created() {
//      this.getScroll()
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .personal
    position: fixed
    top: 0
    left: 0
    width: 80%
    height: 100%
    background: #fff
    z-index: 154
    .inform
      width: 100%
      height: 28%
      color: #ddd
      font-size: 13px
      .bgimg
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 28%
        z-index: -1
        & > img
          width: 100%
          height: 100%
      .text
        padding-top: 2rem
        text-align: center
      .btn
        padding-top: 2rem
        text-align: center
        & > span
          display: inline-block
          padding: 2% 18%
          border: 1px solid #666
          border-radius: 20px
          font-size: 14px
          color: #fff
      .person
        margin: 0 4%
        color: #fff
        .icon
          padding-top: 3rem
          & > img
            width: 4rem
            height: 4rem
            border-radius: 50%
        .content
          margin-top: 1rem
          width: 100%
          font-size: 14px
          & > img
            margin: 0 2%
            margin-bottom: .1rem
            width: 2.5rem
            height: 1.2rem
            vertical-align: middle
          .qd
            float: right
            padding: .1rem .5rem
            margin-top: -.1rem
            font-size: 12px
            border: 1px solid #fff
            border-radius: 12px
          .lv
            padding: 0 .2rem
            margin-bottom: 1%
            border: 1px solid #fff
            border-radius: 0.5rem
            font-size: 0.8rem
    /deep/ .tab
      padding-bottom: 50px
      height: 100%
      overflow: hidden
    /deep/ .mu-list
      padding: 0
      .mu-item
        height: 40px
        /deep/ .mu-item-action
          min-width: 36px
    .tabbar
      position: fixed
      bottom: 0
      left: 0
      display: flex
      padding: .8rem 0
      width: 80%
      height: 3.5rem
      background: #fff
      text-align: center
      border-top: 1px solid #ccc
      z-index: 10
      & > span
        flex: 0 0 33%
        margin-top: 0.1rem
        font-size: 15px
        & > span
          vertical-align: top
</style>
