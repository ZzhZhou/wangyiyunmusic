<template>
    <div class="home">
      <div class="tab" style="width: 100%;">
          <mu-container>
          <mu-tabs :value.sync="active" color="#e04437" indicator-color="#fff" full-width>
            <mu-tab><span class="item">推荐</span></mu-tab>
            <mu-tab><span class="item">朋友</span></mu-tab>
            <mu-tab><span class="item">电台</span></mu-tab>
          </mu-tabs>
          <div class="demo-text" v-if="active === 0" ref="recwrapper">
            <ul ref="content">
            <recom-view></recom-view>
            </ul>
          </div>
          <div class="demo-text" v-if="active === 1">
            <friend-view></friend-view>
          </div>
          <div class="demo-text" v-if="active === 2">
            <dj-view></dj-view>
          </div>
        </mu-container>
      </div>
    </div>
</template>

<script>
  import RecomView from './RecomView.vue'
  import FriendView from './FriendView.vue'
  import DjView from './DjView.vue'
  export default {
    data () {
      return {
        active: 0
      }
    },
    components: {
      RecomView,
      FriendView,
      DjView
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../public/scss/mixin"
  .home
    position: fixed
    top: 3.9rem
    width: 100%
    height: 100%
    background: #fff
    overflow: hidden
    /deep/ .tab
      width: 100%
      padding-bottom: 1rem
      background: #e04437
      /deep/ .container
        padding: 0
        .mu-tab-link-highlight
          margin-left: 12%
          padding: 0 1rem
          max-width: 10% !important
        .item
          font-size: 1rem
</style>
