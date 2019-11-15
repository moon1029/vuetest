/**
 * 路由配置，此项属于手动配置
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * 插件的使用方法
 */
Vue.use(VueRouter)

/**
 * 引入页面
 */
import HelloWorld from '@/components/HelloWorld'
import { resolve } from 'dns';

/**
 * 路由数组
 * resolve(懒加载。页面划分。具体百度https://www.jianshu.com/p/81e8c241ee68)
 * 两种moda模式：history；hash  区别：前者的url里没有#  具体学习https://www.jianshu.com/p/9449d7605279
 */
export default new Route({
    mode:'history',
    routes: [
        {
            //访问路径
            path: '/test1',
            name: 'HelloWorld',
            //  写法1
            //  component: ()=>import('@/components/test1')
            // 写法2
            component: resolve=>require(HelloWorld,resolve),
        }
    ]
})