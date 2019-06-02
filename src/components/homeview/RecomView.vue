<template>
  <div style="position: fixed;top: 120px;bottom: 0;">
    <div ref="recom" style="height: 100%;overflow: hidden;">
        <div class="recom">
          <div class="top"></div>
          <div class="banner">
            <mu-carousel transition="fade">
              <mu-carousel-item  v-for="(bar, index) in $store.state.banner.banners" :key="index">
                <img v-lazy="bar.imageUrl">
              </mu-carousel-item>
            </mu-carousel>
          </div>
          <div class="content">
            <div class="title">
              <span><img src="../../public/img/t_dragonball_icn_fm.png" alt=""></span>
              <span><span class="date">{{today}}</span><img src="../../public/img/t_dragonball_icn_daily.png" alt=""></span>
              <span><img src="../../public/img/t_dragonball_icn_playlist.png" alt=""></span>
              <span><img src="../../public/img/t_dragonball_icn_rank.png" alt=""></span>
              <div class="text">
                <span class="fm">私人FM</span>
                <span class="re">每日推荐</span>
                <span class="list">歌单</span>
                <span class="rank">排行榜</span>
              </div>
            </div>
            <mu-divider></mu-divider>
          </div>
          <div class="list">
            <h2 class="title"><span>推荐歌单</span><img src="../../public/img/am4.png" alt=""></h2>
            <div class="playlist">
              <div class="list-item" v-for="(list,index) in $store.state.recomlist.result" :key="index" v-if="index<6" @click="getListId(list.id)">
                <img v-lazy="list.picUrl" alt="">
                <p>{{list.name}}</p>
                <span class="icon"><img src="../../public/img/a_f.png" alt="">{{Math.floor(list.playCount/10000)}}万</span>
              </div>
            </div>
          </div>
          <div class="list">
            <h2 class="title"><span>最新音乐</span><img src="../../public/img/am4.png" alt=""></h2>
            <div class="songslist">
              <!--<div class="recomsongs">-->
              <!--<div class="songs"><img src="../../public/img/at1.png" alt=""><p></p></div>-->
              <!--<div class="album"><img src="../../public/img/at0.png" alt=""><p></p></div>-->
              <!--</div>-->
              <div class="alllist">
                <div class="songs-item" v-for="(songs,index) in $store.state.newsongs" :key="index" v-if="index<6">
                  <img v-lazy="songs.song.album.picUrl" alt="">
                  <p><span>{{songs.song.name}}</span>
                    <span class="song">{{songs.song.artists[0].name}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="list">
            <h2 class="title"><span>主播电台</span><img src="../../public/img/am4.png" alt=""></h2>
            <div class="djlist">
              <div class="list-item" v-for="(dj,index) in $store.state.djlist.result" :key="index">
                <img v-lazy="dj.picUrl" alt="">
                <p>{{dj.name}}</p>
                <span class="djname">{{$store.state.djlist.result[index].program.dj.nickname}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import * as types from './../../store/types-mutations'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        today: 0
      }
    },
    methods: {
      getListId(val) {
        console.log(val)
        this.$store.commit(types.CHANGELIST_SHOW)
        this.$store.dispatch('getListData', val)
      }
    },
   created() {
      this.today = new Date().getDate()
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.recom,
            {
              click: true,
              momentum: true,
              scrollY: true
            })
          console.log(this.scroll)
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .recom
    width: 100%
    background: #fff
    overflow: hidden
    .top
      position: relative
      top: 0
      padding: 3.2rem
      width: 100%
      background: #e04437
    .banner
      position: absolute
      top: 0.4rem
      padding: 0 1rem
      width: 100%
      height: 50%
      .mu-carousel
        height: 9rem
        border-radius: 8px
        .mu-carousel-item
          & > img
            width: 100%
            height: 100%
            border-radius: 8px
        /deep/ .mu-carousel-indicators
          height: 1.2rem
          /deep/ .mu-button
            padding: 0
            width: 1.2rem
            /deep/ .mu-carousel-indicator-icon
              width: 0.5rem
              height: 0.5rem
    .content
      margin-top: 3.8rem
      margin-bottom: 1.8rem
      text-align: center
      .title
        & > span
          position: relative
          display: inline-block
          margin: 0 1rem 0 1rem
          padding: 0 1%
          background: #e04437
          text-align: center
          border-radius: 50%
          width: 14%
          height: 14%
          & > img
            width: 100%
            height: 100%
          .date
            position: absolute
            top: 50%
            left: 50%
            margin-left: -0.40rem
            margin-top: -0.55rem
            color: #fff
            font-size: 12px
        .text
            margin: 0.5rem 1rem 0 1rem
            margin-bottom: 1rem
            display: flex
            & > span
              flex: 1
              font-size: 0.5rem
    .list
      .title
        margin-left: 1.5%
        margin-bottom: 2%
        font-size: 1rem
        font-weight: 600
        & > span
          display: inline-block
          margin-right: 2%
          vertical-align: middle
        & > img
          vertical-align: middle
          width: 2.5%
          height: 2.5%
      .playlist
        display: flex
        flex-wrap: wrap
        margin: 0 0.4%
        margin-bottom: 4%
        width: 100%
        .list-item
          position: relative
          flex: 0 0 32%
          margin: 2% 0
          margin-left: 0.8%
          width: 33.3%
          height: 33.3%
          font-size: 12px
          & > img
            width: 100%
            height: 100%
            border-radius: 3px
          & > p
            margin-top: 4%
            width: 99%
            height: 36px
            word-wrap: break-word
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
          .icon
            position: absolute
            top: 1%
            right: 2%
            font-size: 12px
            color: #fff
            transform: scale(0.9)
            & > img
              margin-right: 1px
              width: 12px
              height: 12px
              line-height: 12px
      .songslist
        width: 100%
        margin-left: 0.4%
        .alllist
          flex: 0 0 32%
          display: flex
          flex-wrap: wrap
          margin-bottom: 4%
          margin-top: 2%
          .songs-item
            flex: 0 0 32%
            margin: 2% 0
            margin-left: 0.8%
            width: 33.3%
            height: 33.3%
            font-size: 12px
            & > img
              width: 100%
              height: 100%
              border-radius: 3px
            & > p
              margin-top: 4%
              width: 99%
              height: 36px
              word-wrap: break-word
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-line-clamp: 2
              -webkit-box-orient: vertical
              & > span
                display: block
                font-size: 13px
              .song
                color: #888
                font-size: 12px
                text-align: left
      .djlist
        display: flex
        flex-wrap: wrap
        margin: 0 0.4%
        margin-bottom: 4%
        width: 100%
        .list-item
          position: relative
          flex: 0 0 32%
          margin: 2% 0
          margin-left: 0.8%
          width: 33.3%
          height: 33.3%
          font-size: 12px
          & > img
            width: 100%
            height: 100%
            border-radius: 3px
          & > p
            margin-top: 4%
            width: 99%
            height: 36px
            word-wrap: break-word
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
          .djname
            position: absolute
            bottom: 30%
            left: 0
            font-size: 12px
            color: #fff
            transform: scale(0.85)
</style>
