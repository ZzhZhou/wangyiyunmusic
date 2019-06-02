<template>
  <div>
  <div class="list">
    <div class="loading" v-if="$store.state.listdetail.code !==200" style="text-align: center;font-size: 17px;">
      <span>数据加载中...</span>
    </div>
    <div class="nav" v-if="$store.state.listdetail.code ===200">
      <div class="back">
        <img src="../../public/img/ta.png" alt="" @click="back">
      </div>
      <div class="middle">
        <p>歌单</p>
        <p v-if="$store.state.listdetail.playlist.description!==''">编辑推荐 :{{$store.state.listdetail.playlist.description}}</p>
      </div>
      <div class="search">
        <img src="../../public/img/u0.png" alt="">
      </div>
      <div class="more">
        <img src="../../public/img/tt.png" alt="">
      </div>
    </div>
    <div ref="scroll">
      <div style="height: 100%;overflow: hidden;">
      <div class="body" v-if="$store.state.listdetail.code ===200">
        <div class="bgcolor"></div>
        <div class="bgimg"><img :src="$store.state.listdetail.playlist.coverImgUrl" alt=""></div>
        <div class="infrom">
          <div class="icon">
            <img :src="$store.state.listdetail.playlist.coverImgUrl" alt="">
            <span class="count"><img src="../../public/img/a_f.png" alt="">
            <span>{{Math.floor($store.state.listdetail.playlist.playCount/10000)}}万</span>
          </span>
            <span class="form"><img src="./../../public/img/acr.png" alt=""></span>
          </div>
          <div class="desc">
            <p>{{$store.state.listdetail.playlist.name}}</p>
            <p>
            <span class="icon">
              <img :src="$store.state.listdetail.playlist.creator.avatarUrl" alt="" class="ic">
              <img src="./../../public/img/a6u.png" alt="" class="icn" v-if="$store.state.listdetail.playlist.creator.vipType">
            </span>
              <span>{{$store.state.listdetail.playlist.creator.nickname}}</span>
              <img src="./../../public/img/atl.png" alt="">
            </p>
          </div>
        </div>
        <div class="tab">
          <div class="img-item">
            <img src="./../../public/img/acn.png" alt="">
            <p>{{$store.state.listdetail.playlist.commentCount}}</p>
          </div>
          <div class="img-item">
            <img src="./../../public/img/acv.png" alt="">
            <p>{{$store.state.listdetail.playlist.shareCount}}</p>
          </div>
          <div class="img-item">
            <img src="./../../public/img/aco.png" alt="">
            <p>下载</p>
          </div>
          <div class="img-item">
            <img src="./../../public/img/acs.png" alt="">
            <p>多选</p>
          </div>
        </div>
      </div>
      <div class="songslist" v-if="$store.state.listdetail.code ===200">
        <div class="listnav">
          <div class="playall">
            <span class="icon"><img src="../../public/img/adk.png" alt=""></span>
            <span @click="getSongId(0)">播放全部<span>(共{{$store.state.listdetail.playlist.trackCount}}首)</span></span>
          </div>
          <div class="storge">
            <span class="ico"><img src="../../public/img/axx.png" alt=""></span>
            <span>收藏<span v-if="$store.state.listdetail.code ===200">({{$store.state.listdetail.playlist.subscribedCount}})</span></span>
          </div>
        </div>
        <mu-divider></mu-divider>
        <div class="songs">
          <mu-list>
            <mu-list-item button :ripple="true" v-for="(song,index) in $store.state.listdetail.playlist.tracks" :key="index">
              <div class="no">{{index+1}}</div>
              <div class="item">
                <mu-list-item button :ripple="false">
                  <div class="content" @click="getSongId(index)"><mu-list-item-content >
                    <mu-list-item-title>{{song.name}}</mu-list-item-title>
                    <mu-list-item-sub-title><img src="../../public/img/adu.png" alt="" v-if="$store.state.listdetail.privileges[index].maxbr===999000">
                      {{song.ar[0].name}}-{{song.al.name}}
                    </mu-list-item-sub-title>
                  </mu-list-item-content></div>
                  <div class="play"><img src="../../public/img/aav.png" alt="" v-if="song.mv !== 0"></div>
                  <div class="more"><img src="../../public/img/adh.png" alt=""></div>
                </mu-list-item>
                <mu-divider></mu-divider>
              </div>
            </mu-list-item>
            <div class="box"></div>
          </mu-list>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
  import * as types from './../../store/types-mutations'
  import {mapMutations, mapActions} from 'vuex'

  export default {
    methods: {
      ...mapActions(['getSongIndex']),
      ...mapMutations({
        changeshow: 'CHANGEMINI_PLAYER',
        changePlay: types.SHOW_PLAYER
      }),
      back() {
        this.$store.commit(types.CHANGELIST_SHOW)
      },
      getSongId(val) {
        console.log(val)
        this.changeshow()
        this.changePlay(false)
        this.getSongIndex({index: val, data: this.$store.state.listdetail})
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .list
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 150
    background: #fff
    overflow: hidden
    .loading
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: url('../../public/img/b6.png')
      background-position: 100% 100%
      color: #fff
      & > span
        display: inline-block
        margin-top: 50%
    .nav
      position: fixed
      top: 0
      display: flex
      padding: 0 4% 0 4%
      color: #fff
      width: 100%
      height: 4.4rem
      background: rgba(7,17,27,0.9)
      z-index: 152
      .back
        flex: 0 0 15%
        & > img
          margin-top: 2rem
          width: 1.6rem
          height: 1.6rem
      .middle
        flex: 0 0 55%
        margin-top: 1rem
        width: 0
        & > p
          font-size: 17px
          font-weight: 300
        & > p:nth-child(2)
          transform: scale(.9)
          font-size: 12px
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 1
          -webkit-box-orient: vertical
          color: #bbb
      .search
        flex: 0 0 15%
        text-align: right
        & > img
          margin-top: 2rem
          width: 1.6rem
          height: 1.6rem
      .more
        flex: 0 0 15%
        text-align: right
        & > img
          margin-top: 2rem
          width: 1.6rem
          height: 1.6rem
    .body
      padding-top: 5rem
      .bgcolor
        position: absolute
        top: 4.3rem
        left: 0
        width: 100%
        height: 20rem
        background: rgba(7, 17, 27, 0.9)
        z-index: -1
      .bgimg
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 20rem
        z-index: -2
        & > img
          width: 100%
          height: 100%
          filter: blur(16px)
      .infrom
        display: flex
        padding: 5% 0 5% 6%
        width: 100%
        .icon
          position: relative
          flex: 0 0 38%
          width: 100%
          height: 50%
          & > img
            width: 100%
            height: 100%
            border-radius: 4px
          .count
            position: absolute
            top: 2%
            right: 4%
            font-size: 12px
            color: #fff
            & > img
              margin-right: 1px
              width: 12px
              height: 12px
              line-height: 12px
          .form
            position: absolute
            bottom: 5%
            right: 3%
            background: rgba(7,17,27,0.7)
            border-radius: 50%
            width: 16%
            height: 15%
            & > img
              width: 100%
              height: 100%
        .desc
          flex: 1
          color: #fff
          margin: 2% 6%
          font-weight: 300
          & > p:nth-child(1)
            margin-bottom: 15%
            font-size: 18px
          & > p:nth-child(2)
            & > span
              vertical-align: middle
            & > img
              width: 14px
              height: 14px
              vertical-align: middle
            .icon
              position: relative
              margin-right: 5%
              font-size: 12px
              .ic
                width: 32px
                height: 32px
                border-radius: 50%
                vertical-align: middle
              .icn
                position: absolute
                top: 70%
                right: 0
                width: 14px
                height: 14px
      .tab
        display: flex
        padding: 0 2rem
        color: #fff
      .img-item
        flex: 1
        text-align: center
        font-size: 12px
        & > img
          width: 1.5rem
          height: 1.5rem
    .songslist
      position: absolute
      top: 20rem
      width: 100%
      height: 100%
      overflow: hidden
      border-top-right-radius: 10px
      border-top-left-radius: 10px
      z-index: 151
      background: #fff
      .listnav
        display: flex
        .playall
          flex: 0 0 60%
          padding: 3% 4%
          font-size: 17px
          font-weight: 500
          & > span
            padding-left: 5%
            vertical-align: middle
            & > span
              font-size: 15px
              color: #aaa
          .icon
            display: inline-block
            width: 17%
            height: 75%
            vertical-align: middle
            & > img
              height: 100%
              width: 100%
        .storge
          flex: 0 0 40%
          padding: 3% 2%
          background: #f85743
          border-top-right-radius: 10px
          & > span
            color: #fff
            font-size: 15px
            vertical-align: middle
            & > span
              margin-left: 2%
          .ico
            display: inline-block
            width: 16%
            height: 62%
            vertical-align: middle
            & > img
              height: 100%
              width: 100%
      .songs
        display: flex
        height: 52%
        font-size: 15px
        .box
          content: ''
          padding: 3.5rem 0
        /deep/ .mu-list
          padding-top: 0
          padding-bottom: 0
      .img-item
        padding-left: 0
        margin-left: 5px
        width: 10%
        height: 75%
      .no
        flex: 0 0 12%
        display: inline-block
        padding: 1%
        width: 12%
        text-align: center
      .item
        flex: 1
        margin-left: 8px
        width: 100%
        .content
          flex: 1
          width: 0
          .mu-item-content
            width: 100%
        .play
          flex: 0 0 10%
          text-align: center
          & > img
            width: 100%
            height: 100%
            vertical-align: middle
        .more
          flex: 0 0 10%
          margin-right: 5%
          text-align: center
          & > img
            width: 60%
            height: 60%
            vertical-align: middle
      /deep/ .mu-item
        display: flex
        padding: 0
        height: 54px
        .mu-item-title
          font-size: 15px
        .mu-item-sub-title
          width: 70%
          font-size: 12px
          & > img
            margin-right: 1%
            width: 20px
            height: 10px
</style>
