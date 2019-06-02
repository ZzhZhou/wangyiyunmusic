<template>
  <div style="margin-bottom: 50px">
    <div class="mine">
      <div class="top"></div>
      <div class="middle">
        <mu-appbar style="width: 100%;height: 55%;border-radius: 6px;background: #fff;" z-depth="5">
          <div class="personinform" v-if="$store.state.userData.code === 200">
            <img :src="$store.state.userData.profile.avatarUrl" alt="">
            <span class="name">{{$store.state.userData.profile.nickname}}</span>
            <span class="icon">
              <img src="../../public/img/a52.png" alt="" v-if="$store.state.userData.profile.vipType===0">
            <img src="../../public/img/a53.png" alt="" v-if="$store.state.userData.profile.vipType===1">
            </span>
            <span class="plus">开通会员</span>
          </div>
          <div class="gift" v-if="$store.state.userData.code === 200">
            <span><span class="fl">福利</span>黑胶VIP送你三重礼</span>
            <span class="look"><span>查看</span><img src="../../public/img/acy.png" alt=""></span>
          </div>
          <div class="nologin" v-if="$store.state.userData.code !== 200">
            <img src="../../public/img/ani.png" alt="" @click="goLogin">
            <span @click="goLogin">未登录</span>
            <span class="plus"><span>开通会员</span></span>
          </div>
        </mu-appbar>
      </div>
      <div class="body" :style="$store.state.userData.code === 200?'margin-top: 5.5rem':'margin-top: 0'">
        <mu-list>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/a_q.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>本地音乐</mu-list-item-title>
            </mu-list-item>
              <mu-divider></mu-divider>
           </span>
          </mu-list-item>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/aad.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>最近播放</mu-list-item-title>
            </mu-list-item>
             <mu-divider></mu-divider>
           </span>
          </mu-list-item>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/aa0.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>下载管理</mu-list-item-title>
            </mu-list-item>
              <mu-divider></mu-divider>
           </span>
          </mu-list-item>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/aat.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>我的电台</mu-list-item-title>
            </mu-list-item>
             <mu-divider></mu-divider>
           </span>
          </mu-list-item>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/a_s.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>我的收藏</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
           </span>
          </mu-list-item>
          <mu-list-item button :ripple="true">
            <img src="../../public/img/a_u.png" alt="" class="img-item">
            <span class="item">
             <mu-list-item button :ripple="false">
             <mu-list-item-title>Sati空间</mu-list-item-title>
            </mu-list-item>
           </span>
          </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
      </div>
      <div class="title clearfloat">
        <img src="../../public/img/as2.png" alt="" class="down">
        <span>
          创建的歌单
          <span v-if="$store.state.userData.code === 200">({{$store.state.userPlayList.playlist.length===0?0:$store.state.userPlayList.playlist.length}})</span>
        </span>
        <img src="../../public/img/ah0.png" alt="" class="set">
      </div>
      <div class="playlist">
        <mu-list textline="two-line" v-if="$store.state.userData.code === 200">
          <mu-list-item button :ripple="true" v-for="(list,index) in $store.state.userPlayList.playlist" :key="index" @click="getListId(list.id)">
            <img v-lazy="list.coverImgUrl" alt="" class="list-item">
            <span class="item">
             <mu-list-item button :ripple="false">
                <mu-list-item-content>
        <mu-list-item-title>{{list.name}}</mu-list-item-title>
        <mu-list-item-sub-title>{{list.trackCount}}首歌，已下载{{list.cloudTrackCount}}首</mu-list-item-sub-title>
      </mu-list-item-content>
               <span class="icon"><mu-list-item-action>
        <mu-button icon>
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
      </mu-list-item-action></span>
            </mu-list-item>
              <mu-divider></mu-divider>
           </span>
          </mu-list-item>
        </mu-list>
        <mu-list textline="two-line" v-if="$store.state.userData.code !== 200">
          <mu-list-item button :ripple="true">
            <img src="../../public/img/asp.png" alt="" class="list-item">
            <span class="item">
             <mu-list-item button :ripple="false">
                <mu-list-item-content>
        <mu-list-item-title>我喜欢的音乐</mu-list-item-title>
        <mu-list-item-sub-title>0首歌，已下载0首</mu-list-item-sub-title>
      </mu-list-item-content>
               <span class="icon"><mu-list-item-action>
        <mu-button icon>
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
      </mu-list-item-action></span>
            </mu-list-item>
             <mu-divider></mu-divider>
           </span>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from './../../store/types-mutations'
  import BScroll from 'better-scroll'
  export default {
    methods: {
      goLogin() {
        this.$router.push('/login')
      },
      getListId(val) {
        console.log(val)
        this.$store.commit(types.CHANGELIST_SHOW)
        this.$store.dispatch('getListData', val)
      },
      getScroll() {
        this.scroll = new BScroll(this.$refs.mine, {click: true})
      }
    },
    created() {
      this.$nextTick(() => {
//        this.getScroll()
      })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .mine
    width: 100%
    height: 100%
    background: #fff
    overflow: hidden
    .top
      padding: 3.2rem
      background: #e04437
    .middle
      position: absolute
      top: 4rem
      left: 0
      padding: .5rem
      box-sizing: border-box
      width: 100%
      .nologin
        padding: 1rem 0
        & > img
          border-radius: 50%
          vertical-align: middle
        & > span
          font-size: 1rem
        .plus
          float: right
          margin-right: .3rem
          & > span
            padding: .2rem .5rem
            border: 1px solid #e04437
            border-radius: 15px
            font-size: 13px
            color: #e04437
      .personinform
        margin-top: 3rem
        font-size: 12px
        .name
          font-size: .6rem
          padding-left: .3rem
          vertical-align: middle
        .plus
          padding: .2rem .5rem
          border: 1px solid #e04437
          border-radius: 15px
          color: #e04437
        & > img
          width: 3rem
          height: 3rem
          border-radius: 50%
          vertical-align: middle
        .icon
          display: inline-block
          padding: 0 2.8rem 0 0
          & > img
            width: 2.5rem
            height: 1.1rem
            vertical-align: middle
      .gift
        margin-top: 1rem
        font-size: 12px
        color: #888
        & > span
          display: inline-block
          .fl
            margin-right: .5rem
            border: 1px solid #e04437
            color: #e04437
        .look
          float: right
          & > span
            display: inline-block
            margin-right: .5rem
            vertical-align: middle
          & > img
            margin-right: .5rem
            vertical-align: middle
            width: 22%
            height: 22%
      .mu-appbar
        background: rgba(255,255,255,0.96)!important
        /deep/ .mu-appbar-title
          padding: 0
          line-height: 50px
    .body
      /deep/ .mu-list
        padding-top: 3rem
        padding-bottom: 0
      .img-item
        padding-left: 0
        margin-left: 5px
        width: 10%
        height: 75%
      .item
        display: inline-block
        margin-left: 8px
        width: 100%
      /deep/ .mu-item
        padding: 0
        height: 54px
    .title
      padding: 2% 3%
      background: #f3f3f3
      font-size: 12px
      .down
        margin: 0 3% 0 0
        width: 4%
        height: 4%
        vertical-align: middle
      .set
        float: right
        margin-right: 1%
        width: 5.5%
        height: 5.5%
    .clearfloat:after
      display: block
      clear: both
      content: ""
      visibility: hidden
      height: 0
    .playlist
      width: 100%
      height: 100%
      /deep/ .mu-list
        padding-top: 0
      .list-item
        margin-left: 1%
        width: 16%
        height: 92%
        border-radius: 5px
      .item
        position: relative
        display: inline-block
        margin-left: 8px
        width: 100%
        height: 54px
      .icon
        position: absolute
        left: 84%
      /deep/ .mu-item
        padding: 0
        /deep/ .mu-item-title
          width: 80%
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
</style>
