<template>
  <div class="wrapper">
    <div class="box1">
      <img src="../assets/login/login01.png" alt />
    </div>
    <div class="box2">
        <div class="smallbox">
            <p>你好</p>
        </div>
    </div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
  </div>
</template>
<script>
export default {};
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
}
.box1 {
  flex: 1;
  background-color: blue;
  position: relative;
}
.box1 img {
  vertical-align: middle;
  width: 130px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px; /* 高度的一半 */
  margin-left: -65px; /* 宽度的一半 */
}
.box2 {
  flex: 5;
  background-color: red;
}
.smallbox{
    
}
.box3 {
  flex: 1;
  background-color: blue;
}
.box4 {
  flex: 1.5;
  background-color: red;
}
.box5 {
  flex: 1;
  background-color: blue;
}
</style>