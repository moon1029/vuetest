<template>
  <div class="showwindows">这是弹框</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
/**
  *弹窗背景布
  */
.showwindows {
  width: 200px;
  height: 100px;
  background-color: #0f092b !important;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 700px;
  overflow-y: auto;
}
</style>