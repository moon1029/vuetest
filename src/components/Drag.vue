<template>
  <div class="container">
    <div class="inner_box">
      <div class="left_flex">
        <ul class="left_ul">
          <li v-for="(item,index) in models" :key="index">{{item.title}}</li>
        </ul>
      </div>
      <div class="right_flex"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      models: [
        { id: 1, title: "模块1" },
        { id: 2, title: "模块2" },
        { id: 3, title: "模块3" }
      ]
    };
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
.left_flex {
  flex: 3;
  border: 1px solid #000000;
  border-radius: 15px;
}
.left_ul{
    margin-top: 20px;
}
.left_ul li{
    width: 100%;
    height: 80px;
    list-style: none;
    font-size: 16px;
    margin-bottom: 20px;    
    background-color: #d8d2d2

}
.right_flex {
  flex: 9;
  border: 1px solid #000000;
  border-radius: 15px;
  margin-left: 120px;
}
</style>