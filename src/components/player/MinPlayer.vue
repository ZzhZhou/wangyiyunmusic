<template>
    <div class="miniplayer">
      <mu-list>
        <mu-list-item button :ripple="false">
          <div class="item">
            <mu-list-item button :ripple="false">
              <div class="icon">
                <img src="../../public/img/akc.9.png" alt="" v-if="listdata.code !== 200">
                <img :src="listdata.playlist.tracks[songsindex].al.picUrl" alt="" v-if="listdata.code === 200">
              </div>
               <div class="text" @click="showplayerview">
                 <mu-list-item-content >
                   <mu-list-item-title>
                     <span v-if="listdata.code === 200">
                       {{listdata.playlist.tracks[songsindex].name}}
                     </span>
                   </mu-list-item-title>
                   <mu-list-item-sub-title>
                     <span v-if="listdata.code === 200">
                       {{listdata.playlist.tracks[songsindex].ar[0].name}}
                     </span>
                   </mu-list-item-sub-title>
                 </mu-list-item-content>
               </div>
            </mu-list-item>
          </div>
          <div class="play">
            <img src="../../public/img/aoh.png" alt="" class="pla" v-if="!playshow" @click="play()">
            <img src="../../public/img/aoj.png" alt="" class="pause" @click="pause()">
          </div>
          <div class="more"><img src="../../public/img/ar2.png" alt=""></div>
          </mu-list-item>
        </mu-list>
      <audio v-if="listdata.code === 200" :src="`https://music.163.com/song/media/outer/url?id=${listdata.playlist.trackIds[clickindex].id}.mp3`
" ref="audio" autoplay="autoplay" preload="auto" @timeupdate="updateTime"></audio>
    </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import * as types from './../../store/types-mutations'
  export default {
    data() {
      return {
        currentTime: []
      }
    },
    computed: {
      ...mapState(['listdata', 'songsindex', 'clickindex', 'playshow'])
    },
    methods: {
      ...mapMutations({
        changeindex: types.CHANGE_INDEX,
        changePlay: types.SHOW_PLAYER,
        showplayerview: types.SHOW_PLAYERVIEW
      }),
      ...mapActions(['getSongIndex']),
      updateTime(e) {
        this.currentTime = e.target.currentTime
      },
      play() {
        this.changePlay(true)
        this.$refs.audio.pause()
      },
      pause() {
        this.changePlay(false)
        this.$refs.audio.play()
      }
    },
    watch: {
      currentTime(now) {
        if (now === this.$refs.audio.duration) {
          this.changeindex(this.songsindex + 1)
         if (this.songsindex <= (this.listdata.playlist.trackCount - 1)) {
           this.$nextTick(() => {
             this.$refs.audio.src = `https://music.163.com/song/media/outer/url?id=${this.listdata.playlist.trackIds[this.songsindex].id}.mp3`
             // this.$refs.img.src = this.imgUrl[this.index]
           })
         } else {
           this.changeindex(0)
           this.$refs.audio.src = `https://music.163.com/song/media/outer/url?id=${this.listdata.playlist.trackIds[this.songsindex].id}.mp3`
         }
        }
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .miniplayer
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 3rem
    background: #fff
    border-top: 1px solid #ccc
    z-index: 152
    .mu-list
      padding: 0
      /deep/ .mu-item
        display: flex
        padding: 1%
        height: 42px
        overflow: hidden
        .play
          position: relative
          flex: 0 0 15%
          width: 15%
          & > img
            width: 100%
            height: 100%
            vertical-align: middle
          .pla
            position: absolute
            top: 0
            left: 0
        .more
          flex: 0 0 15%
          width: 15%
          & > img
            width: 100%
            height: 100%
            vertical-align: middle
        .item
          flex: 1
          /deep/ .mu-item
            display: flex
            padding: 0
            margin-top: 1%
            .text
              flex: 0 0 80%
              padding: 1% 2% 2% 2%
              width: 0
              .mu-item-title
                font-size: 15px
              .mu-item-sub-title
                font-size: 13px
            .icon
              flex: 0 0 16%
              width: 16%
              border-radius: 4px
              & > img
                width: 100%
                height: 100%
                vertical-align: middle
                border-radius: 4px
</style>
