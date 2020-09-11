<template>
  <div>
    <button @click="getProxy">测试asyns</button>
  </div>
</template>
<script>
var myMixin = {
  created() {
    document.write("这是一个混入实例");
  },
};
export default {
  mixins: [myMixin],
  data() {
    return {};
  },
  created() {},
  methods: {
    getSomething() {
      return "something";
    },
    async testAsync() {
      return "hello world";
    },
    async printTest() {
      // const result = this.testAsync();
      // console.log(result);
      //这边可以对比一下添加await前后的区别，不添加await得到的是Promise对象，添加之后得到的是async的返回值
      const v1 = await this.getSomething();
      const v2 = await this.testAsync();
      console.log(v1, v2);
    },
    getProxy() {
      let target = {
        name: "jack",
        age: 14,
      };
      let handle = {
        get(target,name) {
          // get方法为读取操作
          console.log("getting:" + name); //对象面Pro的取值做了拦截处理, 设定的读取拦截操作为输出一个“getting:”+属性字符串
          return target[name]; //取得是数组类型
        },
      };
      let pro = new Proxy(target, handle);
      console.log(pro.name);
    },
  },
};
</script>
<style scoped>
</style>