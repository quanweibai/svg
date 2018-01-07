
# canvas
svg & canvas

*坐标系同svg, canvas只提供一块空白的画布，如果要创建并绘制内容，需要通过脚本(javascript)获得该canvas的绘制上下文（context），然后才能绘制，也就是说，canvas展示的内容，全部由js创建并绘制*

### 简单的例子
``` html
<html>
 <head>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```
### 绘制矩形
*canvas原生只提供矩形这一种图形，其余图形均要通过‘路径’（path）生成*

  fillRect(x, y, width, height)  绘制一个填充的矩形
  
  strokeRect(x, y, width, height)  绘制一个矩形的边框
  
  clearRect(x, y, width, height)  清除指定矩形区域，让清除部分完全透明。
  
### 绘制路径
+ 创建路径起始点
+ 使用绘图命令画出路径
+ 封闭路径
+ 通过描边或填充路径来渲染
#### 绘图命令
+ moveTo(x, y)
+ lineTo(x, y)
+ arc(x, y, radius, startAngle, endAngle, anticlockwise)
+ rect(x, y, width, height)
``` html
 <html>
 <head>
  <script type="application/javascript">
    function draw() {
     var canvas = document.getElementById('canvas');
     if (canvas.getContext){
     var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,75);
        ctx.lineTo(100,25);
        ctx.fill();
     }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```
### 填充 & 描边
* fillStyle = color 设置图形的填充颜色。
* strokeStyle = color 设置图形轮廓的颜色。
### 绘制文本
fillText(text, x, y [, maxWidth]) 填充文本
strokeText(text, x, y [, maxWidth]) 绘制文本边框
``` html
<html>
 <head>
  <script type="application/javascript">
    function draw() {
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.font = "48px serif";
      ctx.fillText("Hello world", 10, 50);
       ctx.strokeText("Hello world", 10, 100);
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```
### 动画
#### 动画原理
#### requestAnimationFrame
``` html
<html>
 <head>
  <script type="application/javascript">
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();
    function init(){
      sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
      moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
      earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
      //draw();
      setInterval(draw, 10)
    }

    function draw() {
      var ctx = document.getElementById('canvas').getContext('2d');

      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0,0,300,300); // clear canvas

      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.strokeStyle = 'rgba(0,153,255,0.4)';
      ctx.save();
      ctx.translate(150,150);

      // Earth
      var time = new Date();
      ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
      ctx.translate(105,0);
      ctx.fillRect(0,-12,50,24); // Shadow
      ctx.drawImage(earth,-12,-12);

      // Moon
      ctx.save();
      ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
      ctx.translate(0,28.5);
      ctx.drawImage(moon,-3.5,-3.5);
      ctx.restore();

      ctx.restore();

      ctx.beginPath();
      ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
      ctx.stroke();

      ctx.drawImage(sun,0,0,300,300);

      //window.requestAnimationFrame(draw);
    }

    init();
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="500" height="500"></canvas>
 </body>
</html>
```

  
