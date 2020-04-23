<template>
  <div id="container"></div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    getMap() {
      // AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点
      let mapObj = new AMap.Map("container", {
        //'container'是对应页面盒子的id
        resizeEnable: true, //自适应大小
        zoom: 17, //初始视窗
        center: [114.308075, 30.950187] //中心点
      });
      // let config = {
      //   url: "/api/map",
      //   method: "get"
      // };
      // axios(config)
      //   .then(function(response) {
      //     let marker = new AMap.Marker({
      //       position: [response.data[0].x, response.data[0].y]
      //     });
      //     marker.setMap(mapObj);
      //   })
      //   .catch(function(e) {
      //     console.log(e);
      //   });
    }
  },
  mounted() {
    setTimeout(() => {
      this.getMap();
    }, 500);
  }
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 600px;
}

.container {
  width: 700px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 1px solid #999;
}
</style>