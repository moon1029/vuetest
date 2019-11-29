<template>
  <div class="hello">
    <button v-on:click="addCount">add+1</button>
    <h1>{{ counter }}</h1>

    <!--Something bad happened.必须在子组件里加入插槽才能显示-->
    <PropsTest :counter="counter">Something bad happened.</PropsTest>
  </div>
</template>

<script>
import PropsTest from './PropsTest'
export default {
  name: "HelloWorld",
  components:{
    PropsTest
  },
  data() {
    return {
      counter: 0
    };
  },
  methods:{
    addCount(){
      this.counter+=1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
