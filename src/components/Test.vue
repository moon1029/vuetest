<template>
  <div class="wrapper">
    <div class="box1">
      <img src="../assets/login/login01.png" alt />
    </div>
    <div class="box2">
      <div class="smallbox">
        <p>特定目标监测分析系统</p>
      </div>
    </div>
    <div class="box3">{{time}}</div>
    <div class="box4">
      <input type="text" class="searchtext" />
      <button class="button">
        <i class="el-icon-search" />
      </button>
    </div>
    <div class="box5">
      <span>退出登录</span>
        <i class="el-icon-switch-button" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      time: ""
    };
  },
  created() {},
  mounted() {
    this.getTime();
  },
  methods: {
    getTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      this.time = year + "年" + month + "月" + day + "日";
      console.log(this.time);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #0085d0;
}
.box1 {
  flex: 1.5;
  /* background-color: blue; */
  position: relative;
}
.box1 img {
  vertical-align: middle;
  width: 145px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px; /* 高度 */
  margin-left: -65px; /* 宽度 */
}
.box2 {
  flex: 7;
  /* background-color: red; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.smallbox {
  height: 45px;
  border-left: 4px solid white;
  display: flex;
  align-items: center;
}
.smallbox p {
  color: white;
  font-size: 40px;
  margin-left: 15px;
  font-family: "Microsoft YaHei";
}
.box3 {
  flex: 1.5;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  letter-spacing: 1px; /**字符间距 */
}
.box4 {
  flex: 1.5;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchtext {
  border-radius: 10px;
  border: 0px;
  padding-left: 15px;
  height: 20px;
  width: 75%;
  margin-right: 8px;
}
.button {
  border: 0px;
  background-color: transparent;
  color: white;
}
.button i {
  font-weight: 900;
  font-size: 18px;
}
.box5 {
  flex: 1.5;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}
.box5 span {
  margin-right: 10px;
}
.box5 i {
  font-size: 19px;
}
</style>