<template>
  <div>
    <button @click="func2">arguments</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //arguments的使用
    func1(a, b, c) {
      console.log(arguments[0]);
      console.log(arguments[1]);
      console.log(arguments[2]);
    },
    func2(){
      this.func1(1, 2, 3);
    }
  },
};
</script>