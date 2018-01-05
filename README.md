# svg
svg &amp; canvas

### 可缩放矢量图形
#### 坐标系
![坐标系](https://developer.mozilla.org/@api/deki/files/78/=Canvas_default_grid.png, '坐标系')
#### 画布、基本图形
``` html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```
#### 路径(path)
  *任何图形均可由path生成*
``` html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
</svg>
```
#### 线性渐变 & 径向渐变
  **线性**
``` html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <linearGradient id="Gradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="50%" stop-color="black" stop-opacity="0"/>
        <stop offset="100%" stop-color="blue"/>
      </linearGradient>
  </defs>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>
</svg>
```
  **径向**
``` html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="RadialGradient1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>
 
  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)"/> 
</svg>
```
#### 文本相关(texts)
``` html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
   <text x="10" y="10">Hello World!</text>
</svg>
```
  *文本style同样只是font-family、font-style、font-weight、font-variant、font-stretch、font-size、*
  *font-size-adjust、kerning、letter-spacing、word-spacing和text-decoration*
 #### 文本路径
 ``` html
<svg width='500' height='500'>
  <path id="my_path" d="M 20,20 C 40,40 80,40 300,20" fill='#fff'/>
  <text>
    <textPath xlink:href="#my_path" fill='blue'>This text follows a curve.</textPath>
  </text>
</svg>
```
#### 动画
##### animate标签
``` html
<svg width="400" height="400">
  <circle cx="200" cy="200" r="50" fill="#29ABe2" >
    <animate attributeName="r" attributeType="XML" from="50" to="80" begin="0s" dur="2s" fill="freeze" repeatCount="indefinite"/>
  </circle>
</svg>
```
``` html
<svg width="400" height="400">
  <circle cx="200" cy="200" r="50" fill="#29ABe2" >
    <animate attributeName="r" attributeType="XML" values="50;80;50" begin="0s" dur="2s" fill="freeze" repeatCount="indefinite"/>
  </circle>
</svg>
```
``` html
<svg width="400" height="400">
  <circle cx="200" cy="200" r="50" fill="#29ABe2" >
    <animate attributeName="r" attributeType="CSS" values="50;80;50" begin="0s" dur="2s" fill="freeze" repeatCount="indefinite"/>
    <animate attributeName="fill-opacity" attributeType="CSS" values="1;0.5;1" begin="0s" dur="2s" fill="freeze" repeatCount="indefinite"/>
  </circle>
</svg>
```
##### animateTransform
``` html
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <g> 
    <text font-family="microsoft yahei" font-size="80" y="100" x="100">马</text>
    <animateTransform attributeName="transform" begin="0s" dur="3s"  type="scale" from="1" to="1.5" repeatCount="indefinite"/>
  </g>
</svg>
```
##### animateMotion
``` html
<svg width="360" height="200" xmlns="http://www.w3.org/2000/svg">
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
  </text>
  <path d="M10,80 q100,120 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
```
