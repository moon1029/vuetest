<template>
  <div>
    <!-- <input type="button" @click="toggle" value="显示/隐藏" />
    <h3 v-if="flag">这是用v-if控制的元素</h3>
    <h3 v-show="flag">这是用v-show控制的元素</h3>-->
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
      <bm-polyline
        :path="polylinePath"
        stroke-color="blue"
        :stroke-opacity="0.5"
        :stroke-weight="2"
        :editing="true"
      ></bm-polyline>
      <bm-marker
        v-for="(item,index) in polylinePath"
        :key="item.lng"
        :position="{lng: item.lng, lat: item.lat}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @click="infoWindowOpen(index)"
      >
        <bm-info-window :show="show" @close="infoWindowClose(index)" @open="infoWindowOpen(index)">{{item.lng}}</bm-info-window>
      </bm-marker>
    </baidu-map>
  </div>
</template>
<style scoped>
.bm-view {
  width: 100%;
  height: 600px;
}
</style>
<script>
// import BaiduMap from "vue-baidu-map";

export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      polylinePath: [
        { lng: 116.404, lat: 39.915 },
        { lng: 116.405, lat: 39.92 },
        { lng: 116.423493, lat: 39.907445 }
      ],
      show: false
    };
  },
  mounted() {
    // this.getWd();
  },
  methods: {
    // toggle() {
    //   this.flag = !this.flag;
    //   // 也可直接在button 中写@click="this.flag=!this.flag"
    // }
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    infoWindowClose(index) {
      this.show = false;
    },
    infoWindowOpen(index) {
      alert(index)
      this.show = true;
    }
  }
};
</script>