<template>
  <div>
      
  </div>
</template>
<script>
var myMixin = {
  created() {
    document.write("这是一个混入实例");
  }
};
export default {
  mixins: [myMixin],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>