<template>
  <!-- 本页主要有插槽，map数组的页面渲染（json格式） -->
  <div>
    <div class="border">
      <p>{{counter}}</p>
      <strong>Error!</strong>
      <!-- 插槽，在父组件里面的内容渲染到子组件里面来 -->
      <slot></slot>
    </div>
    <div class="border">
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item.job}}:{{item.count}}</li>
      </ul>
    </div>
    <div class="border">
      <p>计算后反转字符串：{{reversedMessage}}</p>千米:
      <input type="text" v-model="kilometers" />
      米:
      <input type="text" v-model="meters" />
    </div>
    <div class="border">
      <p>购物车</p>
      <table>
        <tr>
          <th>序号</th>
          <th>商品名称</th>
          <th>商品价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        <tr v-for="(iphone,index) in apples" :key="index">
          <td>{{ iphone.id }}</td>
          <td>{{ iphone.name }}</td>
          <td>{{ iphone.price }}</td>
          <td>
            <button v-bind:disabled="iphone.count === 0" v-on:click="iphone.count-=1">-</button>
            {{ iphone.count }}
            <button v-on:click="iphone.count+=1">+</button>
          </td>
          <td>
            <button v-on:click="iphone.count=0">移除</button>
          </td>
        </tr>
      </table>
      <p>总价：${{totalPrice()}}</p>
    </div>
    <div class="border">
      <p>动画过渡</p>
      <button v-on:click="show = !show">点我</button>
      <transition name="fade">
        <p v-show="show" v-bind:style="styleobj">动画实例</p>
      </transition>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated tada"
      >
        <p v-if="show">字符弹跳</p>
      </transition>
      <!-- duration 属性定制一个显性的过渡持续时间 (以毫秒计) -->
      <transition :duration='1000'>
      <!-- <transition :duration="{enter:500,leave:5000}"> -->
        <p v-if="show">设置动画进入时间和离开时间</p>
      </transition>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        :css='false'
      >
      <p v-if="show">调用方法执行动画效果</p>
        
      </transition>
    </div>
  </div>
</template>
<script>
import  Velocity from 'velocity-animate'

export default {
  props: ["counter"],
  data() {
    return {
      list: [],
      message: "123",
      kilometers: 0,
      meters: 0,
      apples: [
        {
          id: 1,
          name: "iphoneX",
          price: 7999,
          count: 0
        },
        {
          id: 2,
          name: "iphoneXR",
          price: 4999,
          count: 0
        },
        {
          id: 3,
          name: "iphone11Pro",
          price: 8999,
          count: 0
        }
      ],
      show: true,
      styleobj: {
        fontSize: "30px",
        color: "red"
      }
    };
  },
  created() {
    this.getlist();
  },
  computed: {
    //依赖缓存，如果不想依赖缓存可以用methods
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    getlist() {
      let map = {
        student: 0,
        teacher: 1,
        manager: 2
      };
      for (let key in map) {
        //定义一个新对象,目的是将map的key和value分开成两个属性
        //将key和value赋值新的对象，遍历一次赋值一次
        let person = {
          job: key,
          count: map[key]
        };
        //将新的对象添加进数组
        this.list.push(person);
      }
      console.log(this.list);
    },
    totalPrice() {
      var totalPrice = 0;
      for (let i = 0; i < this.apples.length; i++) {
        totalPrice += this.apples[i].price * this.apples[i].count;
      }
      return totalPrice;
    },
    beforeEnter(el){
      el.style.opacity=0;
      el.style.transformOrigin = 'left'
    },
    enter(el,done){
      Velocity(el,{opacity:1,fontSize:'1.4em'},{duration:300})
      Velocity(el,{fontSize:'1em'},{complete:done})
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
      }

  },
  watch: {
    //监听千米和米的变化
    kilometers(val) {
      this.kilometers = val;
      this.meters = this.kilometers * 1000;
    },
    meters(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.border {
  border: 1px solid #000;
  margin-bottom: 20px;
  padding: 10px;
}
</style>