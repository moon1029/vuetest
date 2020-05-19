<template>
  <div class="test">
    <input type="text" v-model="name">
    <button @click="websocketsend(name)">发送</button>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      websock: null,
      name:""
    };
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://139.9.209.245:8888/connect";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = { test: "12345" };
      this.websocketsend(JSON.stringify(actions));
      console.log("连接成功");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      // 数据接收
        // const redata = JSON.parse(e.data);
      //     let actions = { test: "12345" };
      //   this.websocketsend(JSON.stringify(actions));
      console.log("111111111111",e.data)
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
      console.log(Data)
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    }
  }
};
</script>
<style lang='less'>
</style>
