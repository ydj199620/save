import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '@/components/user'
import zzc from '@/components/zzc'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component:user
    },
    {
      path:'/zzc',
      component:zzc
    }
  ]
})
/* 1、准备路由所需组件
2、配置路由
3、把配置好的路由注入路由实例中
4、把路由实例挂载到vue实例中
 */