<template>
  <div id="abc">
    <ul>
      <li>lili</li>
      <li>mary</li>
    </ul>
    <p id="say"></p>
    <button @click="getNew">我是按钮</button>
  </div>
</template>
<script>
import $ from '../../node_modules/jquery'
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    getNew() {
      let d = document.createDocumentFragment();
      d.appendChild(document.getElementsByTagName("LI")[0]);
      console.log(d.childNodes[0].childNodes[0].nodeValue);    
      d.childNodes[0].childNodes[0].nodeValue = "Milk";
      document.getElementsByTagName("UL")[0].appendChild(d);

      //createTextNode 创建文本节点
      let p = document.createTextNode("HELLO");
      let a = document.createElement
      $('#say').append(p);
      console.log(p)

      //createElement 创建元素节点
      let btn = document.createElement("BUTTON");
      btn.appendChild(p);
      document.body.appendChild(btn);
    }, 
  },
};
</script>
<style scoped>
</style>