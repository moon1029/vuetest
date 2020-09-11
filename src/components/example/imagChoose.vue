<template>
<!--elementUI带选中框 -->
  <div>
    <el-checkbox-group v-model="userList" @change="groupChange">
      <el-checkbox
        v-for="(item, index) in user"
        :key="item"
        :label="index"
        class="checkbox-div"
      >{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: "firstcomponent",
  data() {
    return {
      userList: [],
      user: [{name:"User 1"},{name:"User 2"} ]
    };
  },
  methods: {
    groupChange() {
      console.log("变化", this.userList);
      if (this.userList.length > 1) {
        this.userList.shift();
      }
    }
  }
};
</script>
<style scoped>
</style>