<template>
    <div class="login">
      <div class="nav">
        <div class="bar">
          <mu-icon value="arrow_back" size="32" @click="showPage"></mu-icon>
          <span>登陆</span>
        </div>
      </div>
      <div class="inp">
        <div class="username">
          <mu-icon value="phone_iphone" size="20"></mu-icon><input type="text" v-model="username" placeholder="+86 请输入你的手机号">
          <mu-divider/>
        </div>
        <div class="pwd">
          <mu-icon value="lock" size="20"></mu-icon><input type="password" v-model="password" placeholder="请输入密码"><span>忘记密码？</span>
          <mu-divider/>
        </div>
      </div>
      <div class="btn"><span @click="getLoginInfrom">登陆</span></div>
    </div>
</template>

<script>
  import * as types from '../../store/types-mutations'
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      showPage() {
        this.$store.commit(types.CHANGE_LOGINPAGE_SHOW, {showpage: false, showview: true})
      },
      getLoginInfrom() {
        this.$store.dispatch('getLoginData', {post: this.username, password: this.password})
        this.username = ''
        this.password = ''
        this.$store.commit('CHANGE_LOGINPAGE_SHOW', {showpage: false, showview: false})
        this.$store.commit(types.CHANGEPERSONAL_SHOW)
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .login
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fff
    z-index: 200
    .nav
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 11%
      background: #df4336
      .bar
        margin-top: 1.5rem
        margin-left: 1rem
        font-size: 18px
        color: #fdd
        & > span
          display: inline-block
          margin-top: 1%
          margin-left: 2%
          vertical-align: top
    .inp
      box-sizing: border-box
      margin: 0 4%
      margin-top: 33%
      color: #999
      font-size: 17px
      .username
        box-sizing: border-box
        & > input
          display: inline-block
          margin-top: -1%
          padding-left: 2%
          width: 75%
          border: none
          outline: none
          vertical-align: top
          color: #aaa
      .pwd
        box-sizing: border-box
        margin-top: 9%
        & > span
          position: absolute
          right: 3%
          color: #888
          font-size: 12px
        & > input
          display: inline-block
          margin-top: -1%
          padding-left: 2%
          width: 75%
          line-height: 1px
          border: none
          outline: none
          vertical-align: top
          color: #aaa
    .btn
      margin-top: 12%
      width: 100%
      text-align: center
      & > span
        display: inline-block
        padding: 2% 0
        width: 90%
        background: #df4336
        border-radius: 20px
        font-size: 17px
        color: #fff
</style>
