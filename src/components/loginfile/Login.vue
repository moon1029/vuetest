<template>
  <div class="login">
    <!-- 验证码 -->
    <el-form ref="form" :model="form" :rules="rules" class="form">
      <el-form-item prop="username">
        <el-input
          class="log-input"
          v-model="form.username"
          placeholder="用户名"
          prefix-icon="icon-login_user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="log-input"
          v-model="form.password"
          placeholder="密码"
          type="password"
          prefix-icon="icon-login_pwd"
        ></el-input>
      </el-form-item>
      <el-form-item prop="seccode" class="inputbar">
        <el-input
          class="log-input"
          v-model="form.seccode"
          placeholder="验证码"
          prefix-icon="icon-login_auth"
          @keydown.enter.native="login('form')"
        >
          <template slot="append">
            <span class="checkCode" @click="createCode">{{ checkCode}}</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="login('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.el-input {
  width: 18%;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        seccode: ""
      },
      checkCode: "",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        seccode: [{ required: true, message: "请输验证码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.createCode();
  },
  methods: {
    createCode() {
      let code = "";
      const codeLength = 4; //验证码的长度
      const random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (let i = 0; i < codeLength; i++) {
        //循环操作
        let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
      this.checkCode = code; //把code值赋给验证码
    },
    login() {
      if (this.form.seccode != this.checkCode) {
        this.$message({
          message: "验证码错误，注意大写字母",
          type: "warning"  
        });
        this.createCode();
        return false;
      }
    }
  }
};
</script>