<template>
  <div class="container">
    <div class="inner_box">
      <div id="left_flex" class="container">
        <ul class="left_ul">
          <li v-for="(item,index) in models" :key="index">{{item.title}}</li>
        </ul>
      </div>
      <div id="right_flex" class="container">
        <div class="drag_one">
          <p>这是一个拖拽框</p>
          <div class="inner_drag"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dragula from "../../node_modules/dragula/dragula";
import "dragula/dist/dragula.css";
import $ from '../../node_modules/jquery'

export default {
  data() {
    return {
      models: [
        { id: 1, title: "模块1" },
        { id: 2, title: "模块2" },
        { id: 3, title: "模块3" }
      ]
    };
  },
  created(){
    this.drag();
  },
  methods: {
    drag() {
      dragula([$('left_flex'),$('right_flex')])
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
.inner_box {
  width: 90%;
  display: flex;
  overflow: auto;
  height: 98vh;
  margin: 0 auto;
}
#left_flex {
  flex: 3;
  border: 1px solid #000000;
  border-radius: 15px;
}
.left_ul {
  width: 200px;
  margin-top: 20px;
}
.left_ul li {
  width: 100%;
  line-height: 40px;
  list-style: none;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: #d8d2d2;
}
#right_flex {
  flex: 9;
  border: 1px solid #000000;
  border-radius: 15px;
  margin-left: 120px;
  display: table-cell;
  padding-top: 50px;
}
.drag_one {
  width: 90%;
  height: 300px;
  border-radius: 13px;
  margin: 0 auto;
  border: 1px solid #000;
  box-shadow: 0 0 5px 5px #000;
}
.inner_drag {
  width: 90%;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
}
</style>

