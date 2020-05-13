<template>
  <div>
    <button @click="showBox">点击显示弹框</button>
    <div class="showWindow" v-if="showSonBox">
      <sonBox></sonBox>
    </div>
  </div>
</template>
<script>
import sonBox from "./sonBox";
export default {
  components: { sonBox },
  data() {
    return {
      showSonBox: false
    };
  },
  methods: {
    showBox() {
      this.showSonBox = true;
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