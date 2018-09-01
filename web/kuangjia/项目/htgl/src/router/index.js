import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import index from '@/components/index'
import admin from '@/components/admin/admin'
import student from '@/components/student/studentList'
import video from '@/components/video/video'  
import course from '@/components/course/course'  
import courseEdit from '@/components/course/coursEdit'  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/home',
      component:index
    },
    {
      path:'/admin',
      component:admin
    },
    {
      path:'/student',
      component:student
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/course',
      component: course
    },
    {
      path: '/courseEdit',
      component: courseEdit
    }
  ]
})
