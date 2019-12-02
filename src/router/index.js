import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PropsTest from '@/components/PropsTest'
import Drag from '@/components/Drag'
import Mixins from '@/components/Mixins'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PropsTest',
      name: 'PropsTest',
      component: PropsTest
    },
    {
      path: '/Drag',
      name: 'Drag',
      component: Drag
    },
    {
      path: '/Mixins',
      name: 'Mixins',
      component: Mixins
    },
  ]
})
