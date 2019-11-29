<template>
  <div class="container">
    <div class="inner_box">
      <div class="left_flex">
        <ul class="left_ul">
          <li v-for="(item,index) in models" :key="index">{{item.title}}</li>
        </ul>
      </div>
      <div class="right_flex">
        <div class="drag_one">
          <p>这是一个拖拽框</p>
          <div class="inner_drag">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      models: [
        { id: 1, title: "模块1" },
        { id: 2, title: "模块2" },
        { id: 3, title: "模块3" }
      ]
    };
  },
  methods:{
    creatDrag(){
      var drag={
        //定义属性
        class_name:null, //这里的是我拖拽的终点，也就是这些class_name允许拖拽放置，是容器
        permitDrag:false, //拖拽对象是否可移动

        _x:0, //我理解的是拖拽对象初始化的时候所在的x坐标
        _y:0, //我y理解的是拖拽对象初始化的时候所在的y坐标
        _left:0, //我y理解的是完成拖拽动作后，拖拽终点和一开始的拖拽对象水平距离
        _top:0, //我y理解的是完成拖拽动作后，拖拽终点和一开始的拖拽对象垂直距离

        old_elm:null, //拖拽对象
        new_elm:null, //拖拽终点
        rou_elm:null, //起点到终点的路径

        //初始化
        init(className){
          //定义容器
          drag.class_name=className;

          //弄一个监听事件，当鼠标按下时获取克隆当前拖拽对象的节点
          mousedown=(event)=>{
            drag.rou_elm = $(drag.old_elm).clone();
            drag._x = $(drag.old_elm).offset().left;
            drag._y = $(drag.old_elm).offset().top;

            //计算移动距离
            var e = event || window.event;
            drag._left = e.pageX - drag._x;
            drag._top = e.pageY - drag._Y;

            //克隆时的效果
            $(drag.rou_elm).css({
              'position' : 'absolute',
              'left' : drag._x,
              'top' : drag._y,
            })

            //添加临时的节点
            tmp = $(drag.old_elm).parent().append(drag.rou_elm);
            drag.rou_elm=$(tmp).find(drag.rou_elm);
            $(drag.rou_elm).css('cursor','move')
          },

          //鼠标点击后移动
          mousemove=(event)=>{
            //计算坐标
            var e = event||window.event;
            var x = e.pageX - drag._left;
            var y = e.pageY - drag._top;

          }


        }



      }
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
.inner_box {
  width: 90%;
  display: flex;
  overflow: auto;
  height: 98vh;
  margin: 0 auto;
}
.left_flex {
  flex: 3;
  border: 1px solid #000000;
  border-radius: 15px;
}
.left_ul {
  width: 200px;
  margin-top: 20px;
}
.left_ul li {
  width: 100%;
  line-height: 40px;
  list-style: none;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: #d8d2d2;
}
.right_flex {
  flex: 9;
  border: 1px solid #000000;
  border-radius: 15px;
  margin-left: 120px;
  display: table-cell;
  padding-top: 50px
}
.drag_one {
  width: 90%;
  height: 300px;
  border-radius: 13px;
  margin: 0 auto;
  border: 1px solid #000;
  box-shadow: 0 0 5px 5px #000;
}
.inner_drag{
  width: 90%;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
}
</style>