<template>
  <div id="app" @mousedown="move">
    <!--绑定按下事件-->
    {{positionX}}
    {{positionY}}
  </div>
</template>
<style scoped>
#app {
  position: relative; /*定位*/
  top: 10px;
  left: 10px;
  width: 200px;
  height: 200px;
  background: #666; /*设置一下背景*/
}
</style>
<script>
export default {
  data() {
    return {
      positionX: 0,
      positionY: 0
    };
  },
   methods:{
        move(e){
            let odiv = e.target;        //获取目标元素
            
            //算出鼠标相对元素的位置
            //offsetLeft是页面到元素左边的距离，offsetTop是页面到元素上边的距离
            //client是鼠标到页面的距离
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            // console.log('client',e.clientX,e.clientY)
            // console.log('odiv',odiv.offsetLeft,odiv.offsetTop)
            // console.log('dis',disX,disY)
            document.onmousemove = (e)=>{       //这个是鼠标按下之后拖动元素事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置 
                let left = e.clientX - disX;    
                let top = e.clientY - disY;
                //一开始我以为这个用odiv获取也可以，然后试了一下，发现元素拖拽走了，鼠标无法移动，此方法不可行
                //  let left = odiv.offsetLeft;    
                // let top = e.clientY - disY;
                // console.log('元素的位置',left,top)
                //绑定元素位置到positionX和positionY上面
                this.positionX = top;
                this.positionY = left;
                
                //移动当前元素
                odiv.style.left = left + 'px';
                odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }    
    
    }
};
</script>