# CSS学习记录

### 1. 什么是 CSS?

    CSS 指层叠样式表 (Cascading Style Sheets)
    样式定义`如何显示` HTML 元素
    样式通常存储在`样式表`中
    把样式添加到 HTML 4.0 中，是为了`解决内容与表现分离的问题`
    `外部样式表`可以极大提高工作效率
    外部样式表通常存储在 `CSS 文件`中
    多个样式定义可`层叠为一`

### 2.  不要在属性值与单位之间留有空格
>（如：`margin-left: 20 px` ），正确的写法是 `margin-left: 20px` 。

### 3. 多重样式将层叠为一个

样式表允许以多种方式规定样式信息。样式可以规定在单个的 HTML 元素中，在 HTML 页的头元素中，或在一个外部的 CSS 文件中。甚至可以在同一个 HTML 文档内部引用多个外部样式表。
层叠次序
当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？
一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。

    1 浏览器缺省设置
    2 外部样式表
    3 内部样式表（位于 `<head>` 标签内部）
    4 内联样式（在 HTML 元素内部）

> 因此，内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明： 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。
Remark提示:如果你使用的外部文件样式在 `<head>`中也定义了该样式，则内部样式表会取代外部文件的样式。

### 4. CSS 背景属性用于定义HTML元素的背景
CSS 属性定义背景效果:

    background-color
    background-image： 可以加载多幅图片，属性设置用逗号隔开
        #example1 {
        background-image: url(img_flwr.gif), url(paper.gif);
        background-position: right bottom, left top;
        background-repeat: no-repeat, repeat;
        padding: 15px;
    }
    background-repeat： 
        repeat	背景图像将向垂直和水平方向重复。这是默认
        repeat-x	只有水平位置会重复背景图像
        repeat-y	只有垂直位置会重复背景图像
        no-repeat	background-image不会重复
        inherit	指定background-repeat属性设置应该从父元素继承
    background-attachment： 
        scroll	背景图片随页面的其余部分滚动。这是默认
        fixed	背景图像是固定的
        inherit	指定background-attachment的设置应该从父元素继承
    background-position: 取值如下，如果仅指定一个关键字，其他值将会是"center"
        left top
        left center
        left bottom
        right top
        right center
        right bottom
        center top
        center center
        center bottom
        x% y%	第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％
        xpos ypos	第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions
        inherit	指定background-position属性设置应该从父元素继承

简写的顺序也是如此, eg : `body {background:#ffffff url('img_tree.png') no-repeat right top;}`   以上属性无需全部使用

### 5. 大多数浏览器的默认行高约为110%至120%

### 6. vertical-align属性设置一个元素的垂直对齐

    baseline	默认。元素放置在父元素的基线上。
    sub	垂直对齐文本的下标。
    super	垂直对齐文本的上标
    top	把元素的顶端与行中最高元素的顶端对齐
    text-top	把元素的顶端与父元素字体的顶端对齐
    middle	把此元素放置在父元素的中部。
    bottom	把元素的顶端与行中最低的元素的顶端对齐。
    text-bottom	把元素的底端与父元素字体的底端对齐。
    length	 
    %	使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。
    inherit	规定应该从父元素继承 vertical-align 属性的值。

###  7. 在计算机屏幕上，sans-serif字体被认为是比serif字体容易阅读
在CSS中，有两种类型的字体系列名称：
通用字体系列 - 拥有相似外观的字体系统组合（如 "Serif" 或 "Monospace"）
特定字体系列 - 一个特定的字体系列（如 "Times" 或 "Courier"）

### 8. font-family 属性设置文本的字体系列
font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。
注意: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。
多个字体系列是用一个逗号分隔指明：

### 9. 请务必使用正确的HTML标签
> eg：`<h1>` - `<h6>`表示标题和`<p>`表示段落：
字体大小的值可以是绝对或相对的大小。

    绝对大小：
        设置一个指定大小的文本
        不允许用户在所有浏览器中改变文本大小
        确定了输出的物理尺寸时绝对大小很有用
    相对大小：
        相对于周围的元素来设置大小
        允许用户在浏览器中改变文字大小
Remark: 如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em）。

### 10. 用em来设置字体大小
为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。
em的尺寸单位由W3C建议。
> 1em和当前字体大小相等。在浏览器中默认的文字大小是16px。

因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px/16=em

    body {font-size:100%;}
    h1 {font-size:2.5em;}
    h2 {font-size:1.875em;}
    p {font-size:0.875em;}


### 11. font-weight 设置文本的粗细

    normal	默认值。定义标准的字符。
    bold	定义粗体字符。
    bolder	定义更粗的字符。
    lighter	定义更细的字符。
    100
    200
    300
    400 == normal
    500
    600
    700 == bold
    800
    900
        定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。
    inherit	规定应该从父元素继承字体的粗细。

### 12. CSS盒子模型

    Margin(外边距) - 清除边框外的区域，外边距是透明的。
    Border(边框) - 围绕在内边距和内容外的边框。
    Padding(内边距) - 清除内容周围的区域，内边距是透明的。
    Content(内容) - 盒子的内容，显示文本和图像。
<font color="orange">  当你指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，你还必须添加填充，边框和边距。</font>

    最终元素的总宽度计算公式是这样的：
        总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
    元素的总高度最终计算公式是这样的：
        总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

### 13. 盒子模型
标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。

    网页中的盒子模型；我们常常要控制盒子模型的宽度width:   
    w3c中的盒子模型的宽:包括margin+border+padding+width;
        width:margin*2+border*2+padding*2+width;
        height:margin*2+border*2+padding*2+height;
    iE中的盒子模型的width:也包括margin+border+padding+width;
    上面的两个宽度相加的属性是一样的。不过在ie中content的宽度包括padding和border这两个属性；
    例如一个盒子模型如下：margin:20px,border:10px,padding:10px;width:200px;height:50px;
    如果用w3c盒子模型解释，那么这个盒子模型占用的
    宽度为：20*2+10*2+10*2+200=280px; 
    高度：20*2+10*2+10*2+50=130px;
    盒子的实际宽度大小为:10*2+10*2+200=240px;
    实际高度：10*2+10*2+50=90px;
    用ie的盒子模型解释 ：盒子在网页中占据的大小为20*2+200=240px; 高：20*2+50=90px;
    盒子的实际大小为：宽度:200px, 高度:50px;
    我们常常理解的盒子模型是w3c这样的盒子模型

###  14. border-style
> 属性可以有1-4个值：上 右 下 左；上 左右 下； 上下 左右 ；

    border-style: dotted solid double dashed;
        上边框是 dotted
        右边框是 solid
        底边框是 double
        左边框是 dashed

    border-style: dotted solid double;
        上边框是 dotted
        左、右边框是 solid
        底边框是 double

    border-style: dotted solid;
        上、底边框是 dotted
        右、左边框是 solid

    border-style: dotted;
        四面边框是 dotted
上面的例子用了border-style。然而，它也可以和border-width 、 border-color一起使用。


### 15. "border-width" 属性 
如果单独使用则不起作用。要先使用 "border-style" 属性来设置边框。

### 16. CSS 轮廓（outline）
轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
CSS outline 属性规定元素轮廓的样式、颜色和宽度。

### 17. 分组和嵌套 ： 
分组：样式表中有很多具有相同样式的元素。每个选择器用逗号分隔.
嵌套：适用于选择器内部的选择器的样式。

### 18. visibility
> visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间。也就是说，该元素虽然被隐藏了，但仍然会影响布局。

> display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间。也就是说，该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失。

### 19. CSS Positioning(定位)

    Static 定位
        HTML元素的默认值，即没有定位，元素出现在正常的流中。
        静态定位的元素不会受到 top, bottom, left, right影响。
    Fixed 定位
        元素的位置相对于浏览器窗口是固定位置。
        即使窗口是滚动的它也不会移动：
        注意： Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持.
        Fixed定位使元素的位置与文档流无关，因此不占据空间。
        Fixed定位的元素和其他元素重叠。
    Relative 定位
        相对定位元素的定位是相对其正常位置。可以移动的相对定位元素的内容和相互重叠的元素，它原本所占的空间不会改变。
        相对定位元素经常被用来作为绝对定位元素的容器块。
        即使相对定位元素的内容是移动,预留空间的元素仍保存在正常流动。
    Absolute 定位
        绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>; solutely定位使元素的位置与文档流无关，因此不占据空间。
Absolutely定位的元素和其他元素重叠。
    重叠的元素
        元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素
        z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）
        一个元素可以有正数或负数的堆叠顺序：

### 20. 即使相对定位元素的内容是移动,预留空间的元素仍保存在正常流动。

### 21. CSS 的 Float（浮动）
会使元素向左或向右移动，其周围的元素也会重新排列。

    一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
    浮动元素之后的元素将围绕它。
    浮动元素之前的元素将不会受到影响。


### 22. 水平对齐

    中心对齐,使用margin属性
        块元素可以把左，右页边距设置为"自动"对齐。 	margin: auto;  width: 70%; 如果宽度是100％，对齐是没有效果的。
        Note: 1. 在IE8中使用margin:auto属性无法正常工作，除非声明 !DOCTYPE, 
              2. IE5中块元素有一个margin处理BUG。需要加上text-align: left;

    使用position属性设置左，右对齐
        元素对齐的方法之一是使用绝对定位：  position:absolute;  right:0px;  width:300px;
        
    使用float属性设置左，右对齐
        使用float属性是对齐元素的方法之一：  float:right;  width:300px;

### 23. Crossbrowser 兼容性问题
类似这样的元素对齐时，预先确定margin和元素的填充，始终是一个好主意。这是为了避免在不同的浏览器中的可视化差异。
IE8和早期有一个问题，当使用position属性时。如果一个容器元素（在本例中`<div class="container">`）指定的宽度，!DOCTYPE声明是缺失，IE8和早期版本会在右边增添17px的margin。这似乎是一个滚动的预留空间。使用position属性时始终设置在DOCTYPE声明中！


### 24. CSS vertical-align
CSS中的确是有vertical-align属性，但是它只对(X)HTML元素中拥有valign特性的元素才生效，例如表格元素中的`<td>、<th>、<caption>`等，而像`<div>`、`<span>`这样的元素是没有valign特性的 !!!

### 25. CSS组合选择符包括各种简单选择符的组合方式。

    在 CSS3 中包含了四种组合方式:
        1 后代选取器(以空格分隔)：后代选取器匹配所有值的元素的后代元素。
        2 子元素选择器(以大于号分隔）：只能选择作为某元素子元素的元素。
        3 相邻兄弟选择器（以加号分隔）：可选择紧接在另一元素后的元素，且二者有相同父元素。
        4 后续兄弟选择器（以波浪线分隔）：后续兄弟选择器选取所有指定元素之后的相邻兄弟元素。

### 26. font-size 的取值
    xx-small
    x-small
    small
    medium
    large
    x-large
    xx-large
        把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large。
        默认值：medium。
    smaller	把 font-size 设置为比父元素更小的尺寸。
    larger	把 font-size 设置为比父元素更大的尺寸。
    length	把 font-size 设置为一个固定的值。
    %	    把 font-size 设置为基于父元素的一个百分比值。
    inherit	规定应该从父元素继承字体尺寸。

### 27.  制作导航栏的时候
 请务必指定 `<a>`元素在垂直导航栏的的宽度。如果省略宽度，IE6可能产生意想不到的效果。

### 28. CSS 伪类和伪元素：
    伪元素
        :checked	input:checked	选择所有选中的表单元素
        :disabled	input:disabled	选择所有禁用的表单元素
        :empty	p:empty	选择所有没有子元素的p元素
        :enabled	input:enabled	选择所有启用的表单元素
        :first-of-type	p:first-of-type	选择每个父元素是p元素的第一个p子元素
        :in-range	input:in-range	选择元素指定范围内的值
        :invalid	input:invalid	选择所有无效的元素
        :last-child	p:last-child	选择所有p元素的最后一个子元素
        :last-of-type	p:last-of-type	选择每个p元素是其母元素的最后一个p元素
        :not(selector)	:not(p)	选择所有p以外的元素
        :nth-child(n)	p:nth-child(2)	选择所有p元素的第二个子元素
        :nth-last-child(n)	p:nth-last-child(2)	选择所有p元素倒数的第二个子元素
        :nth-last-of-type(n)	p:nth-last-of-type(2)	选择所有p元素倒数的第二个为p的子元素
        :nth-of-type(n)	p:nth-of-type(2)	选择所有p元素第二个为p的子元素
        :only-of-type	p:only-of-type	选择所有仅有一个子元素为p的元素
        :only-child	p:only-child	选择所有仅有一个子元素的p元素
        :optional	input:optional	选择没有"required"的元素属性
        :out-of-range	input:out-of-range	选择指定范围以外的值的元素属性
        :read-only	input:read-only	选择只读属性的元素属性
        :read-write	input:read-write	选择没有只读属性的元素属性
        :required	input:required	选择有"required"属性指定的元素属性
        :root	root	选择文档的根元素
        :target	#news:target	选择当前活动#news元素(点击URL包含锚的名字)
        :valid	input:valid	选择所有有效值的属性

        :link	a:link	选择所有未访问链接
        :visited	a:visited	选择所有访问过的链接
        :active	a:active	选择正在活动链接
        :hover	a:hover	把鼠标放在链接上的状态

        :lang(language)	p:lang(it)	为<p>元素的lang属性选择一个开始值
        :focus	input:focus	选择元素输入后具有焦点
        :first-child	p:first-child	选择器匹配属于任意元素的第一个子元素的 <p> 元素

    伪元素，建议用::
        ::first-letter	p::first-letter	选择每个<p> 元素的第一个字母
        ::first-line	p::first-line	选择每个<p> 元素的第一行
    
        ::before	p::before	在每个<p>元素之前插入内容
        ::after	p::after	在每个<p>元素之后插入内容
  

    伪类可以与 CSS 类配合使用：
    a.red:visited {color:#FF0000;}


但实际上 css3 为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示。
```
    :hover
    ::first-child
```

### 29. 注意：变更元素的显示类型
> 看该元素是如何显示，它是什么样的元素。例如：一个内联元素设置为display:block是不允许有它内部的嵌套块元素。

### 30. 剪切元素的外形
> clip ： 剪辑一个绝对定位的元素，唯一合法的形状值是：rect (top, right, bottom, left)
```
<style>
img {
	position:absolute;
	clip:rect(0px,60px,200px,0px);
}
</style>

<img src="w3css.gif" width="100" height="140" />
```

### 31. 水平居中在IE5中的特殊处理
```
.container
{
    text-align:center;
}
.center
{
    margin-left:auto;
    margin-right:auto;
    width:70%;
    background-color:#b0e0e6;
    text-align:left;
}
```

### 32. 鼠标移上链接，出现方括号：
```
a {
	position: relative;
	display: inline-block;
	outline: none;
	text-decoration: none;
	color: #000;
	font-size: 32px;
	padding: 5px 10px;
}

a:hover::before, a:hover::after { position: absolute; }
a:hover::before { content: "\5B"; left: -20px; }
a:hover::after { content: "\5D"; right:  -20px; }
```
> 注意：在::before, ::after添加元素前，有一点需要注意的是，如果不需要内容仅配合样式属性做出效果，内容属性也不能为空，即 content:" " 。否则，其他的样式属性一概不会生效。

### 33. 空元素内部使用伪元素生成的内容,是真实的吗？
> 不真实，content属性动态生成的内容是纯粹的装饰而已，虚假的表象。是不被:empty伪类认可的，选择器依然认为这是个空元素。（所以才被称为伪元素...）[链接：CSS之before, after伪元素特性表现两则](http://www.zhangxinxu.com/wordpress/2015/04/before-after-pseudo-elements-special-features/)


### CSS content
> [链接： CSS content内容生成技术以及应用](http://www.zhangxinxu.com/wordpress/2010/04/css-content%E5%86%85%E5%AE%B9%E7%94%9F%E6%88%90%E6%8A%80%E6%9C%AF%E4%BB%A5%E5%8F%8A%E5%BA%94%E7%94%A8/)















