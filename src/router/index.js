import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './../components/homeview/HomeView.vue'
import MyView from './../components/mysongs/MyView.vue'
import VideoView from './../components/videoview/VideoView.vue'
import LoginView from './../components/login/LoginView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'HomeView', meta: {requireAuth: true, keepAlive: true}, component: HomeView, xhrFields: {withCredentials: true}},
    {path: '/mine', name: 'MyView', meta: {requireAuth: true, keepAlive: true}, component: MyView, xhrFields: { withCredentials: true }},
    {path: '/video', name: 'VideoView', meta: {requireAuth: true, keepAlive: true}, component: VideoView, xhrFields: { withCredentials: true }},
    {path: '/login', name: 'LoginView', component: LoginView}
  ]
})
