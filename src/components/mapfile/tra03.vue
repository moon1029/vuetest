<template>
  <div>
    <div id="container"></div>
    <div class="input-card">
      <h4>轨迹回放控制</h4>
      <div class="input-item">
        <input type="button" class="btn" value="开始动画" id="start" @click="startAnimation" />
        <input type="button" class="btn" value="暂停动画" id="pause" @click="pauseAnimation" />
      </div>
      <div class="input-item">
        <input type="button" class="btn" value="继续动画" id="resume" @click="resumeAnimation" />
        <input type="button" class="btn" value="停止动画" id="stop" @click="stopAnimation" />
      </div>
    </div>
    <div class="startAnimation" @click="startAnimation">
      <i class="el-icon-video-play"></i>
    </div>
    <div class="resumeAnimation" @click="segmentationAnimation">
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      marker: {},
      map: {},
      //   firstArr: [116.478935, 39.997761],
      polyline: {}, //最原始
      passedPolyline: {}, //最原始
      newPolyline: {}, //速度改变后新轨迹
      newPassedPolyline: {}, //速度改变后的新轨迹
      markerSpeed: 200, //运动速度
      speedCount: 1, //速度计数
      havePassedLine: [], //已经运动的点
      NoPassedLine: [], //未运动的点
      step: 0,
      lineArr: [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528],
        [116.480151, 39.998453],
        [116.480784, 39.998302],
        [116.481149, 39.998184],
        [116.481573, 39.997997],
        [116.481863, 39.997846],
        [116.482072, 39.997718],
        [116.482362, 39.997718],
        [116.483633, 39.998935],
        [116.48367, 39.998968],
        [116.484648, 39.999861]
      ],
      lineArr1: [
        [116.478935, 39.997761],
        [116.478939, 39.997825],
        [116.478912, 39.998549],
        [116.478998, 39.998555],
        [116.479282, 39.99856],
        [116.479658, 39.998528]
      ]
    };
  },
  created() {},
  methods: {
    //初始化地图
    initMap() {
      this.map = new AMap.Map("container", {
        resizeEnable: true, //窗口大小调整
        center: this.firstArr, //中心 firstArr: [116.478935, 39.997761],
        zoom: 17
      });
      this.map.plugin(["AMap.ToolBar"], () => {
        this.map.addControl(new AMap.ToolBar());
      });
      this.marker = new AMap.Marker({
        map: this.map,
        position: this.lineArr[0],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13), //调整图片偏移
        autoRotation: true, //自动旋转
        angle: -90 //图片旋转角度
      });

      // 以 icon URL 的形式创建一个途经点
      //这边循环创建途径点,去除头和尾
      if (this.lineArr.length > 2) {
        for (let i = 1; i < this.lineArr.length - 1; i++) {
          //   console.log(i)
          var viaMarker = new AMap.Marker({
            position: new AMap.LngLat(this.lineArr[i][0], this.lineArr[i][1]),
            // 将一张图片的地址设置为 icon
            icon:
              "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
            // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
            offset: new AMap.Pixel(-13, -30)
          });
          this.map.add([viaMarker]);
        }
      }

      // 创建一个 Icon
      let startIcon = new AMap.Icon({
        // 图标尺寸
        size: new AMap.Size(25, 34),
        // 图标的取图地址
        image:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png",
        // 图标所用图片大小
        imageSize: new AMap.Size(135, 40),
        // 图标取图偏移量
        imageOffset: new AMap.Pixel(-9, -3)
      });

      // 将 icon 传入 marker
      let startMarker = new AMap.Marker({
        position: new AMap.LngLat(this.lineArr[0][0], this.lineArr[0][1]),
        icon: startIcon,
        offset: new AMap.Pixel(-13, -30)
      });

      // 创建一个 icon
      let endIcon = new AMap.Icon({
        size: new AMap.Size(25, 34),
        image:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png",
        imageSize: new AMap.Size(135, 40),
        imageOffset: new AMap.Pixel(-95, -3)
      });
      let lastIndex = this.lineArr.length - 1;
      // 将 icon 传入 marker
      let endMarker = new AMap.Marker({
        position: new AMap.LngLat(
          this.lineArr[lastIndex][0],
          this.lineArr[lastIndex][1]
        ),
        icon: endIcon,
        offset: new AMap.Pixel(-13, -30)
      });

      // 将 markers 添加到地图
      this.map.add([startMarker, endMarker]);

      //窗体创建
      //构建自定义信息窗体
      let infoWindow = new AMap.InfoWindow({
        anchor: "bottom-center",
        content: "这是起点！"
      });

      infoWindow.open(this.map, this.lineArr[0]);
    },
    //初始化轨迹
    initroad() {
      //绘制还未经过的路线
      this.polyline = new AMap.Polyline({
        map: this.map,
        path: this.lineArr,
        showDir: true,
        strokeColor: "#28F", //线颜色--蓝色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      //绘制路过了的轨迹
      let passedPolyline = new AMap.Polyline({
        map: this.map,
        strokeColor: "#AF5", //线颜色-绿色
        //path: this.lineArr,
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6 //线宽
        // strokeStyle: "solid"  //线样式
      });
      this.marker.on("moving", e => {
        passedPolyline.setPath(e.passedPath);
        //已经经过的点
        this.havePassedLine = e.passedPath;
        passedPolyline.setPath(e.passedPath);
      });
      this.map.setFitView(); //合适的视口
    },

    startAnimation() {
      this.marker.moveAlong(this.lineArr, this.markerSpeed);
    },
    pauseAnimation() {
      this.marker.pauseMove();
    },
    resumeAnimation() {
      this.marker.resumeMove();
    },
    stopAnimation() {
      this.marker.stopMove();
    },

    //从起点——途径点——终点的路线段
    segmentationAnimation() {
      this.step++;
      console.log(this.havePassedLine.length);
      //如果没有已经经过的点，说明未开始轨迹回放
      let segmentationRoad = new Array();
      if (this.step < this.lineArr.length-1) {
        if (this.havePassedLine.length == 0) {
          console.log("111");
          segmentationRoad.push(this.lineArr[0]);
          segmentationRoad.push(this.lineArr[1]);
        } else {
          console.log("222");
          segmentationRoad.push(this.lineArr[this.step]);
          segmentationRoad.push(this.lineArr[this.step + 1]);
        }
        console.log("333", segmentationRoad);
        //这边就要开始绘制轨迹了

        //绘制还未经过的路线
        this.polyline = new AMap.Polyline({
          map: this.map,
          path: segmentationRoad,
          showDir: true,
          strokeColor: "#28F", //线颜色--蓝色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6 //线宽
          // strokeStyle: "solid"  //线样式
        });
        //绘制路过了的轨迹
        let passedPolyline = new AMap.Polyline({
          map: this.map,
          strokeColor: "#AF5", //线颜色-绿色
          strokeWeight: 6 //线宽
        });
        this.marker.on("moving", e => {
          passedPolyline.setPath(e.passedPath);
          passedPolyline.setPath(e.passedPath);
          this.havePassedLine = e.passedPath;
          console.log(this.havePassedLine.length);
        });
        this.map.setFitView(); //合适的视口
        this.marker.moveAlong(segmentationRoad, this.markerSpeed);
        this.havePassedLine.length++;
      }else {
          alert("我已经走到了尽头")
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.initMap();
      this.initroad();
    }, 1000);
  }
};
</script>
<style lang="less" scoped>
@import "https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css";
#container {
  width: 100%;
  height: 969px;
  position: relative;
}
.startAnimation {
  position: fixed;
  bottom: 2%;
  left: 1%;
  cursor: pointer;
}
.resumeAnimation {
  position: fixed;
  bottom: 2%;
  right: 1%;
  cursor: pointer;
}
i {
  font-size: 50px;
}
.input-card .btn {
  margin-right: 1.2rem;
  width: 9rem;
}

.input-card .btn:last-child {
  margin-right: 0;
}
/deep/ .amap-icon img {
  // width: 25px;
  height: 34px;
}
</style>