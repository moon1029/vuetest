<template>
  <div>
    <button @click="showBox">点击显示弹框{{age}}</button>
    <div class="showWindow" v-if="showSonBox">
      <sonBox @sendAge="getAgeData"></sonBox>
    </div>
  </div>
</template>
<script>
import sonBox from "./sonBox";
export default {
  components: { sonBox },
  data() {
    return {
      showSonBox: false,
      age:"",
    };
  },
  methods: {
    showBox() {
      this.showSonBox = true;
    },
    getAgeData(data){
      this.age = data;
      console.log(data)
    }
  }
};
</script>
<style lang="less" scoped>
.showWindow {
  background: rgba(255, 255, 255, 0.5);
// background: yellow;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>