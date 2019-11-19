<template>
  <div>
    <p>{{counter}}</p>
    <strong>Error!</strong>
    <!-- 插槽，在父组件里面的内容渲染到子组件里面来 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["counter"],
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>