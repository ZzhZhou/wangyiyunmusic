<template>
    <div class="play">
      <div class="top">
        <mu-appbar style="width: 100%;" color="#888" z-depth="1">
          <mu-button icon slot="left" @click="back">
            <div class="back">
              <img src="../../public/img/ta.png" alt="">
            </div>
          </mu-button>
          <div class="inform">
            <div class="songname">{{listdata.playlist.tracks[songsindex].name}}</div>
            <div class="singer">{{listdata.playlist.tracks[songsindex].ar[0].name}}</div>
          </div>
          <mu-button flat slot="right">
            <span class="absolute">关注</span>
          </mu-button>
          <mu-button flat slot="right">
            <div class="share">
              <img src="./../../public/img/acv.png" alt="">
            </div>
          </mu-button>
        </mu-appbar>
      </div>
      <div class="body">
        <div class="songimg">
        <transition name="rotate"><img :src="listdata.playlist.tracks[songsindex].al.picUrl" :style="rotate" alt=""></transition>
        </div>
      </div>
      <div class="footer"></div>
    </div>
</template>

<script>
  import * as types from './../../store/types-mutations'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data() {
      return {
        rotate: {
          transform: 'rotateZ(360deg)',
          transition: 'all 50s linear'

        }
      }
    },
    computed: {
      ...mapState(['listdata', 'songsindex', 'clickindex', 'playshow'])
    },
    methods: {
     ...mapMutations({
       back: types.SHOW_PLAYERVIEW
     })
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .play
    position: fixed
    width: 100%
    height: 100%
    background: #888
    z-index: 1001
    .top
      /deep/ .mu-button-wrapper
        padding: 0 8px
        .back > img
          width: 2rem
          height: 2rem
        .share > img
          width: 1.5rem
          height: 1.5rem
        .absolute
          padding: .3rem .5rem
          border-radius: 1rem
          background: #999
          color: #fff
      .inform
        height: 100%
        color: #eee
        .songname
          line-height: 1.2rem
          font-size: 1rem
        .singer
          line-height: 1.2rem
          font-size: 0.5rem
    .body
      padding: 5rem 0
      text-align: center
      .songimg > img
        width: 16rem
        height: 16rem
        border-radius: 50%
</style>
