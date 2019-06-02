<template>
    <div class="playlist" v-if="false">
        <div class="nav">
          <img src="../../public/img/ta.png" alt=""><span>歌单</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NewPlayList'
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .playlist
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: url('../../public/img/a2i.jpg')
    background-position: 100% 100%
    z-index: 200
    .nav
      padding: 10% 4% 0 4%
      width: 100%
      & > img
        width: 7%
        height: 7%
        vertical-align: middle
      & > span
        padding-left: 4%
        font-size: 18px
        font-weight: 300
        color: #fff
        vertical-align: middle
</style>
