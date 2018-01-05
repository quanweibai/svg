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
