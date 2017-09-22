# Html5 札记

WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。
HTML5 中的一些有趣的新特性：

1. 用于绘画的 canvas 元素
2. 用于媒介回放的 video 和 audio 元素
3. 对本地离线存储的更好的支持
4. 新的特殊内容元素，比如 article、footer、header、nav、section
5. 新的表单控件，比如 calendar、date、time、email、url、search

# 要点

> `<!doctype>` 声明必须位于 HTML5 文档中的第一行,使用非常简单: `<!DOCTYPE html>` (虽然没有特殊规定，但是！DOCTYPE 一般大写)

注： IE9 以下版本浏览器兼容 HTML5 的方法，使用本站的静态资源的 `html5shiv` 包：
```js
<!--[if lt IE9]> 
<script src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```
> html5shiv.js 引用代码必须放在 `<head>` 元素中，因为 IE 浏览器在解析 HTML5 新元素时需要先加载该文件。
载入后，初始化新标签的CSS：
```css
/*html5*/
article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block}
```
## H5有哪些改进呢？

### 新元素

    <article>	定义页面独立的内容区域。
    <aside>	定义页面的侧边栏内容。
    <bdi>	允许您设置一段文本，使其脱离其父元素的文本方向设置。
    <command>	定义命令按钮，比如单选按钮、复选框或按钮
    <details>	用于描述文档或文档某个部分的细节
    <dialog>	定义对话框，比如提示框
    <summary>	标签包含 details 元素的标题
    <figure>	规定独立的流内容（图像、图表、照片、代码等等）。
    <figcaption>	定义 <figure> 元素的标题
    <footer>	定义 section 或 document 的页脚。
    <header>	定义了文档的头部区域
    <mark>	定义带有记号的文本。
    <meter>	定义度量衡。仅用于已知最大和最小值的度量。
    <nav>	定义导航链接的部分。
    <progress>	定义任何类型的任务的进度。
    <ruby>	定义 ruby 注释（中文注音或字符）。
    <rt>	定义字符（中文注音或字符）的解释或发音。
    <rp>	在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
    <section>	定义文档中的节（section、区段）。
    <time>	定义日期或时间。
    <wbr>	规定在文本中的何处适合添加换行符。

注：`已移除元素`
以下的 HTML 4.01 元素在HTML5中已经被删除:`<acronym>`，`<applet>`，`<basefont>`，`<big>`，`<center>`，`<dir>`，`<font>`，`<frame>`，`<frameset>`，`<noframes>`，`<strike>`，`<tt>`
### 新属性
#### H5表单
input 的type： button ,checkbox ,color ,date ,datetime ,datetime-local ,email ,file ,hidden ,image ,month ,number ,password ,radio ,range ,reset ,search ,submit ,tel ,text ,time ,url ,week

新表单元素, 新属性，新输入类型，自动验证。
### 完全支持 CSS3
#### 新选择器
#### 新属性
##### HTML5 MathML
HTML5 可以在文档中使用 MathML 元素，对应的标签是 `<math>...</math>` 。
MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

##### 获取地理位置
```js
var x=document.getElementById("demo"); 
function getLocation() { 
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(showPosition); 
    } 
    else { 
        x.innerHTML="该浏览器不支持获取地理位置。"; 
    } 
} 

function showPosition(position) { 
    x.innerHTML="纬度: " + position.coords.latitude + "<br>经度: " + position.coords.longitude;     
}
```

### Video 和 Audio

#### 使用 `<canvas>` 元素。
height 属性规定 `<canvas>` 元素的高度, 以像素为单位。
> 小技巧：每当`画布的高度或宽度被重设时，画布内容就会被清空`.

```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#92B901";
ctx.fillRect(50,50,100,100);    //在画布上绘制 100x100 的矩形，从左上角开始 (50,50)。
```

`getContext("2d")` 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：

#### 使用内联 SVG。

1. SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
2. SVG 用于定义用于网络的基于矢量的图形
3. SVG 使用 XML 格式定义图形
4. SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失
5. SVG 是万维网联盟的标准
那么，它与普通的jpeg和gif相比有哪些好处呢？
1. SVG 图像可通过文本编辑器来创建和修改
2. SVG 图像可被搜索、索引、脚本化或压缩
3. SVG 是可伸缩的
4. SVG 图像可在任何的分辨率下被高质量地打印
5. SVG 可在图像质量不下降的情况下被放大

##### SVG 与 Canvas两者间的区别
SVG 是一种使用 XML 描述 2D 图形的语言。
Canvas 通过 JavaScript 来绘制 2D 图形。
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

Canvas | SVG
--- | ---
依赖分辨率 | 不依赖分辨率
不支持事件处理器 | 支持事件处理器
弱的文本渲染能力 | 最适合带有大型渲染区域的应用程序（比如谷歌地图）
能够以 .png 或 .jpg 格式保存结果图像 | 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用


#### 使用 CSS3 2D 转换、CSS3 3D 转换。
### 本地存储

### 本地 SQL 数据

### Web 应用

#### 本地数据存储

#### 访问本地文件

#### 本地 SQL 数据

#### 缓存引用
#### Javascript 工作者

#### XHTMLHttpRequest 2


# 结语
本篇文章属于学习记录类型的文章，
































