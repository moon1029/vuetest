// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueJsonp from 'vue-jsonp'
import BaiduMap from 'vue-baidu-map'
import router from './router'
import animate from 'animate.css'
import echarts from '../node_modules/echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'
import AMap from 'vue-amap';
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(animate)
Vue.use(ElementUI)
Vue.use(vueJsonp)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'LQ3ytyDvFElLUddIWr74FvSgO0R5sCHk'
})
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '0815422120f70b7a21ea32dff78e1354',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4',
  uiVersion: '1.0'
});
/* eslint-disable no-new */
Vue.prototype.$echarts = echarts
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
