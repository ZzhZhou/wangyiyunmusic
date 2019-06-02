<template>
  <div class="bg" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;background: #fff; z-index: 153">
    <div class="login">
      <div class="icon"></div>
      <div class="inp">
        <button>手机号登陆</button>
        <button>注册</button>
      </div>
      <div class="visitor" @click="goHome">游客试用</div>
      <div class="loginway">
        <div class="text"><span></span>其他登录方式<span></span></div>
        <span><img src="./../../public/img/aih.png" alt=""><span>微信</span></span>
        <span> <img src="./../../public/img/aid.png" alt=""><span>QQ</span></span>
        <span><img src="./../../public/img/aif.png" alt=""><span>微博</span></span>
        <span @click="showView(value='邮箱')"><img src="./../../public/img/aia.png" alt=""><span>网易邮箱</span></span>
      </div>
      <login-page v-if="$store.state.showLoginPage"></login-page>
    </div>
  </div>
</template>

<script>
import * as types from '../../store/types-mutations'
import LoginPage from './LoginPage.vue'
  export default {
    data() {
      return {
        whichlogin: ''
      }
    },
    components: {
      LoginPage
    },
    methods: {
    showView(val) {
      console.log(val)
      this.$store.commit(types.CHANGE_LOGINPAGE_SHOW, {showpage: true, showview: false})
    },
      goHome() {
      this.$router.push('/home')
      }
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "./../../public/scss/_mixin.scss"
  .login
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: url(./../../public/img/ahs.jpg) no-repeat
    background-size: 100% 60%
    z-index: 199
    .login-enter,.login-leave-to
      transition: all .5s
      height: 0
    .login-enter-to,.login-leave
      transition: all .5s
      height: 100%
    .icon
      position: absolute
      left: 50%
      top: 8rem
      margin-top: -48px
      margin-left: -48px
      width: 96px
      height: 96px
      background: #fff
      @include icon-img('./../../public/img/', 96px 96px)
    .inp
      position: absolute
      top: 13rem
      width: 100%
      text-align: center
      & > button
        display: inline-block
        margin: 8px
        width: 80%
        height: 44px
        line-height: 44px
        border: 1px solid #b3001b
        border-radius: 20px
        background: rgba(255,255,255,0.2)
        font-size: 17px
        outline: none
        color: #b3001b
    .visitor
      position: absolute
      bottom: 10rem
      left: 50%
      margin-left: -28px
      text-decoration: underline
      z-index: 152
    .loginway
      position: absolute
      bottom: 2rem
      width: 100%
      text-align: center
      color: #666
      background: #fff
      .text
        margin-bottom: 20px
        width: 100%
        color: #666
        font-size: 13px
        vertical-align: top
        & > span
          display: inline-block
          margin: 1.5% 3%
          width: 15%
          @include border-top-1px(#eee)
      & > span
        display: inline-block
        padding: 2%
        font-size: 12px
        & > img
          margin-bottom: 4%
          width: 70%
          height: 70%
        & > span
          display: block
          font-size: 12px
          transform: scale(0.8)
</style>
