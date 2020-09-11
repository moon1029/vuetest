import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PropsTest from '@/components/PropsTest'
import Drag from '@/components/Drag'
import Mixins from '@/components/Mixins'
import Dragula from '@/components/Dragula'
import LineEchart from '@/components/LineEchart'
import Login from '@/components/loginfile/Login'
import GetYear from '@/components/GetYear'
import Test from '@/components/Test'  /**这是head页面布局 */
import Table from '@/components/Table'
import box from '@/components/box'
import tra01 from '@/components/mapfile/tra03'
import websocket from '../components/websocketKnow/websocket'
import bigBox from '../components/tankuang/bigBox'
import imagChoose from '../components/example/imagChoose'
import symbol from '../components/promise/symbol'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
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
    {
      path: '/Dragula',
      name: 'Dragula',
      component: Dragula
    },
    {
      path: '/LineEchart',
      name: 'LineEchart',
      component: LineEchart
    },
    {
      path: '/GetYear',
      name: 'GetYear',
      component: GetYear
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/box',
      name: 'box',
      component: box
    },
    {
      path: '/tra01',
      name: 'tra01',
      component: tra01
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: websocket
    },
    {
      path: '/bigBox',
      name: 'bigBox',
      component: bigBox
    },
    {
      path: '/imagChoose',
      name: 'imagChoose',
      component: imagChoose
    },
    {
      path: '/symbol',
      name: 'symbol',
      component: symbol
    }
    
  ]
})
