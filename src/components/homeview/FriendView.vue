<template>
  <div style="position: fixed;top: 120px;bottom: 0;">
    <div ref="recom" style="height: 100%;overflow: hidden;">
      <div class="friend">
        <div class="other" v-for="(people,index) in informations.event" :key="index">
          <h2 class="title">
            <div class="icon"><img v-lazy="people.user.avatarUrl" alt=""></div>
            <div class="inform">
              <p class="author">
                <span class="name">{{people.user.nickname}}</span>
                <span v-if="JSON.parse(people.json).video">发布视频：</span>
                <span v-if="JSON.parse(people.json).song">分享单曲：</span>
                <span v-if="JSON.parse(people.json).playlist">分享专辑：</span>
              </p>
              <p class="fans" v-if="people.rcmdInfo"><span>{{people.rcmdInfo.userReason}}</span></p>
            </div>
            <div class="listen"><span>+ 关 注</span></div>
          </h2>
          <div class="content">{{JSON.parse(people.json).msg}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['informations'])
    },
    created() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.recom, {click: true, momentum: true, hasVerticalScroll: true, scrollY: true})
          // console.log(this.scroll)
        } else {
          this.scroll.refresh()
        }
      })
      console.log(this.informations)
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .friend
    width: 100%
    overflow-x: hidden
    background: #fff
    .other
      padding: 1rem 1.5rem
      .title
        display: flex
        .icon
          flex: 0 0 40px
          width: 40px
          height: 40px
          & > img
            width: 100%
            height: 100%
            border-radius: 50%
            vertical-align: top
        .inform
          flex: 1
          padding: 0 2% 0 0
          .author
            margin-left: 5%
            padding-bottom: 1%
            width: 100%
            & > span
              font-size: 15px
            .name
              text-align: left
              color: #074F88
          .fans
            margin-bottom: 5%
            width: 100%
            font-size: 12px
            color: #888
            transform: scale(0.9)
            & > span
              text-align: left
        .listen
          flex: 0 0 30%
          text-align: right
          & > span
            display: inline-block
            margin-top: 10%
            padding: 3% 10%
            background: #e04437
            border-radius: 15px
            font-size: 12px
            color: #fff
    .content
      width: 70%
      padding: 0 1rem
</style>
