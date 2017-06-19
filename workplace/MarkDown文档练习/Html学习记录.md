# HTML学习记录

### 小知识点
> 1. 关于 `UTF-8`<br>
>  `UTF-8` 是标准写法，php 在 Windows 下边英文不区分大小写，所以也可以写成 `utf-8`。`UTF-8` 也可以把中间的"-"省略，写成 `UTF8`。一般程序都能识别，但也有例外（如下文），为了严格一点，最好用标准的大写"UTF-8"。

>  在数据库中只能使用`utf8`(MySQL) 在MySQL的命令模式中只能使用`utf8`，不能使用`utf-8`，也就是说在 PHP 程序中只能使用 `set names utf8`(不加小横杠)，如果你加了"-"此行命令将不会生效，但是在 PHP 中 header 时却要加上"-"，因为 IE 不认识没杠的`utf8`，原因见下文。
PHP 中的 header：

``` php
<?php header('Content-Type: text/html; charset=UTF-8'); ?>
```

> **总结**： 除了在MySQL命令 `mysql_query(set names utf8)` 外一律用大写`UTF-8`。

> 2. 后缀名选择：用 `htm` 还是用 `html`？
　　推荐使用长后缀名 `html` 

> 3. 一些标签的使用，切记所有标签都需要闭合，不管是单体标签还是成对标签。（尽管目前浏览器是识别有些标签不闭合的情况，但是取的最好的保证兼容性，使用闭合）

> 4. 标签写法要用小写字母（有些版本对大小写可认为相同，而xhtml中强制使用小写）

> 5. HTML 属性常用引用属性值,属性值应该始终被包括在引号内。
双引号是最常用的，不过使用单引号也没有问题。
Remark提示: 在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：name='John "ShotGun" Nelson'

> 6. 通常标签 `<strong>` 替换加粗标签 `<b>` 来使用, `<em>` 替换 `<i>`标签使用。
然而，这些标签的含义是不同的：<br>
`<b>` 与`<i>` 定义粗体或斜体文本。
`<strong>` 或者 `<em>`意味着你要呈现的文本是重要的，所以要突出显示。现今所有主要浏览器都能渲染各种效果的字体。不过，未来浏览器可能会支持更好的渲染效果。

> 7. 对于非pre标签，浏览器会忽略源代码中的排版（省略了多余的空格和换行）以空格代替，段落的行数依赖于浏览器窗口的大小。如果调节浏览器窗口的大小，将改变段落中的行数。

> 8. 在标签`<a>` 中使用了`href`属性来描述链接的地址。
默认情况下，链接将以以下形式出现在浏览器中：

    一个未访问过的链接显示为蓝色字体并带有下划线。
    访问过的链接显示为紫色并带有下划线。
    点击链接时，链接显示为红色并带有下划线。
> 注意：如果为这些超链接设置了 CSS 样式，展示样式会根据 CSS 的设定而显示。

> 9. 锚点：在HTML文档中插入ID:
```
<a id="tips">有用的提示部分</a>
在HTML文档中创建一个链接到"有用的提示部分(id="tips"）"：
<a href="#tips">访问有用的提示部分</a>
或者，从另一个页面创建一个链接到"有用的提示部分(id="tips"）"：
<a href="http://www.runoob.com/html/html-links.html#tips">
访问有用的提示部分</a>
```

> 10. 养成好习惯，链接后面始终带上/，假如这样书写链接：href="http://www.runoob.com/html"，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：href="http://www.runoob.com/html/"。

> 11. html头部

    `<base>` - 定义了所有链接的URL
    使用 `<base>` 定义页面中所有链接默认的链接目标地址。
    <meta> - 提供了HTML文档的meta标记
    使用 <meta> 元素来描述HTML文档的描述，关键词，作者，字符集等。

> 12. `<head>` 元素包含了所有的头部标签元素。在 `<head>`元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。
可以添加在头部区域的元素标签为: `<title>, <style>, <meta>, <link>, <script>, <noscript>, and <base>.`

> 13. HTML `<title>` 元素
`<title>` 标签定义了不同文档的标题。
`<title>` 在 HTML/XHTML 文档中是必须的。

    `<title>` 元素:
        定义了浏览器工具栏的标题
        当网页添加到收藏夹时，显示在收藏夹中的标题
        显示在搜索引擎结果页面的标题

> 14. 每30秒中刷新当前页面:
```
<meta http-equiv="refresh" content="30">
```

> 15. 现在通常使用font-family(字体),color(颜色),font-size(字体大小) 属性来定义文本样式，代替font标签

> 16. 加载图像时， 假如某个 HTML 文件包含十个图像，那么为了正确显示这个页面，需要加载 11 个文件。加载图片是需要时间的，所以我们的建议是：慎用图片。

    注意: 加载页面时，要注意插入页面图像的路径，如果不能正确设置图像的位置，浏览器无法加载图片，图像标签就会显示一个破碎的图片。这样的用户体验非常不好，因此，图片必须加上`alt`属性 - 在图片加载不出来时，显示图片的提示信息，告诉用户这是什么。

> 17. 单元格边距(Cell padding)
本例演示如何使用 Cell padding 来创建单元格内容与其边框之间的空白。
单元格间距(Cell spacing)增加单元格之间的距离。

> 18. `<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。

> 19. `<span>` 用于对文档中的行内元素进行组合。
`<span>` 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。如果不对 `<span>` 应用样式，那么 `<span>` 元素中的文本与其他文本不会任何视觉上的差异。<br>
`<span>` 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。

> 20. 虽然我们可以使用HTML table标签来设计出漂亮的布局，但是table标签是不建议作为布局工具使用的 - 表格不是布局工具。

> 21. HTML 布局 - 有用的提示<br>
<font color="red">Tip: </font>　 使用 CSS 最大的好处是，如果把 CSS 代码存放到外部样式表中，那么站点会更易于维护。通过编辑单一的文件，就可以改变所有页面的布局。如需学习更多有关 CSS 的知识，请访问我们的CSS 教程。<br>
<font color="red">Tip:</font>　 由于创建高级的布局非常耗时，使用模板是一个快速的选项。通过搜索引擎可以找到很多免费的网站模板（您可以使用这些预先构建好的网站布局，并优化它们）。

> 22. 表单本身是不可见的。并且注意一个文本字段的默认宽度是20个字符。

> 23. Internet Explorer 10、Firefox、Chrome 和 Safari 支持 maxlength 属性。Opera 或者 Internet Explorer 9 及之前的版本不支持 textarea 标签的 maxlength 属性。

> 24. 1600万种不同颜色
三种颜色 红，绿，蓝的组合从0到255，一共有1600万种不同颜色(256 x 256 x 256)。
在下面的颜色表中你会看到不同的结果，从0到255的红色，同时设置绿色和蓝色的值为0,随着红色的值变化，不同的值都显示了不同的颜色。

> 25. Web安全色?<br>
数年以前，当大多数计算机仅支持 256 种颜色的时候，一系列 216 种 Web 安全色作为 Web 标准被建议使用。其中的原因是，微软和 Mac 操作系统使用了 40 种不同的保留的固定系统颜色（双方大约各使用 20 种）。
我们不确定如今这么做的意义有多大，因为越来越多的计算机有能力处理数百万种颜色，不过做选择还是你自己。
最初，216 跨平台 web 安全色被用来确保：当计算机使用 256 色调色板时，所有的计算机能够正确地显示所有的颜色。

> 26. 141个颜色名称是在HTML和CSS颜色规范定义的（17标准颜色，再加124）。下表列出了所有颜色的值，包括十六进制值。<br>
 提示: `17标准颜色`：黑色，蓝色，水，紫红色，灰色，绿色，石灰，栗色，海军，橄榄，橙，紫，红，白，银，蓝绿色，黄色。点击其中一个颜色名称（或一个十六进制值）就可以查看与不同文字颜色搭配的背景颜色。：

> 27. HTML 字符实体<br>
HTML 中的预留字符必须被替换为字符实体。一些在键盘上找不到的字符也可以使用字符实体来替换。<font color="orange">实体名称对大小写敏感！</font>

> 28. HTML 统一资源定位器(Uniform Resource Locators)<br>
URL 是一个网页地址。
URL可以由字母组成，如"runoob.com"，或互联网协议（IP）地址： 192.68.20.50。大多数人进入网站使用网站域名来访问，因为 名字比数字更容易记住。Web浏览器通过URL从Web服务器请求页面。

    语法规则:
    scheme://host.domain:port/path/filename
    说明:
        scheme - 定义因特网服务的类型。最常见的类型是 http
        host - 定义域主机（http 的默认主机是 www）
        domain - 定义因特网域名，比如 runoob.com
        :port - 定义主机上的端口号（http 的默认端口号是 80）
        path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
        filename - 定义文档/资源的名称

        Scheme	访问	                    用于...
        http    超文本传输协议	   以http:// 开头的普通网页不加密。
        https	安全超文本传输协议   安全网页，加密所有信息交换。
        ftp	文件传输协议   	   用于将文件下载或上传至网站。
        file	    您计算机上的文件。

> 29. 通用声明
    HTML5<br>
    `<!DOCTYPE html>`<br>
>   HTML 4.01<br>
    `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">`<br>
>    XHTML 1.0<br>
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

> 30. 一些简单的术语
    * 网页 ：由各种标记组成的一个页面就叫网页 .
    * 主页(首页) : 一个网站的起始页面或者导航页面 .
    * 标记: `<p>`称为开始标记  `</p>`称为结束标记. 也叫标签.每个标签都规定好了特殊的含义。
    * 元素：`<p>` 内容 `</p>` 称为元素.
    * 属性： 给每一个标签所做的辅助信息。
    * `xhtml`： 符合 `XML` 语法标准的 `HTML` 。
    * `dhtml`：dynamic ,动态的。`javascript + css + html` 合起来的页面就是一个 `dhtml` 
    * `http`：协议标准。用来规定客户端浏览器和服务端交互时数据的一个格式。
    * SMTP: 邮件传输协议
    * ftp: 文件传输协议.

> 31. 如何将 HTML 转换为 XHTML<br>
添加一个 `XHTML <!DOCTYPE>` 到你的网页中
添加 `xmlns` 属性添加到每个页面的html元素中。
改变所有的元素为小写
关闭所有的空元素
修改所有的属性名称为小写
所有属性值添加引号

# Html标签练习记录

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Html全标签练习">
    <meta name="keywords" contents="HTML">
    <meta name="author" content="Aco">
    <title>HTML标签全练习</title>
    
    <link ref="stylesheet" type="text/css" href="../../resources/css/1.css">
</head>

<style>
    .mytitle{
        color:chocolate;
    }
</style>

<body>
    <p class="mytitle">* 标题</p>
    <h1>这是1号标题</h1>
    <font size="6"><strong>这是6号字体文本</strong></font>

    <h2>这是2号标题</h2>
    <font size="5"><strong>这是5号字体文本</strong></font>

    <h3>这是3号标题</h3>
    <font size="4"><strong>这是4号字体文本</strong></font>

    <h4>这是4号标题</h4>
    <font size="3"><strong>这是3号字体文本</strong></font>

    <h5>这是5号标题</h5>
    <font size="2"><strong>这是2号字体文本</strong></font>

    <h6>这是6号标题</h6>
    <font size="1"><strong>这是1号字体文本</strong></font>

    <hr>
    <p class="mytitle">* 显示唐诗</p>
    <h1>春晓</h1>
    <p>
    春眠不觉晓，
      处处闻啼鸟。
        夜来风雨声，
          花落知多少。
    </p>
    <p>注意，浏览器忽略了源代码中的排版（省略了多余的空格和换行）。用 pre 标签就 OK </p>
    <pre>
        春眠不觉晓，
            处处闻啼鸟。
                夜来风雨声，
                    花落知多少。
    </pre>

    <hr>
    <p class="mytitle">* 显示地址</p>
    <address>
    Create By <a href="http://www.erictxl.cn/">Aco</a>.<br>
    Example.com <br>
    </address>

    <hr>
    <p class="mytitle">* HTML 文本格式化</p>

    <p class="mytitle">* 小号字体</p>
    <small>哈哈哈</small>

    <p class="mytitle">* 粗体，strong 标签(推荐)或者 b 标签</p>
    <strong>Aco</strong>

    <p class="mytitle">* code 标签</p>
    <code>电脑自动输出</code>

    <p class="mytitle">* 斜体，em 标签(推荐)或者 i 标签</p>
    <em>Aco</em>
    
    <p class="mytitle">* 改变文字显示方向</p>
    <p><bdo dir="rtl">你好我是 Aco</bdo></p>
    
    <p class="mytitle">* 下标 (sub) 和上标 (sup) </p>
    这是 <sub>下标</sub>和 <sup>上标</sup> 例如：log<sub>2</sub>n  ; a<sup>2</sup>

    <p class="mytitle">* 缩写abbr(对于 Netscape 6.2中的 abbr 和 acronym 有效，IE：仅对 IE5 的 acronym 元素有效)</p>
    <abbr title="World Wide Web">WWW</abbr><br>
    <acronym title="World Wide Web">WWW</acronym>

    <p class="mytitle">* 删除字 (del) </p>
    <del>放弃</del>是不可原谅的！

    <p class="mytitle">* 引用，长引用 (blockquote) , 短引用 (q) , 定义引用(cite(标签定义作品（比如书籍、歌曲、电影、电视节目、绘画、雕塑等等）的标题。注释：人名不属于作品的标题。)), blockquote 标签定义摘自另一个源的块引用。浏览器通常会对 
blockquote 元素进行缩进。</p>
    <blockquote>我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用
        我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是引用我是</blockquote>
        <q>我是短引用</q>
    <p><cite>The Photo</cite> is Created By Aco</p>

    <p class="mytitle">* 链接，图片链接，邮件链接，锚点</p>
    <a href="http://www.bilibili.com/">bilibili</a><br>
    <a href="http://www.bilibili.com/"><img src="../../resources/images/03.png" alt="图片链接" width="50" height="50"></a><br>
    <a href="mailto:2362131690@qq.com?Subject=Hello%20Worldbody=hello%20Aco">发邮件给QQ小号</a><br>

    <a id="tip">顶部</a>
    <pre>
    























    </pre>
    <a href="#tip">回到顶部</a>


    <br>
    <hr>
    <p class="mytitle">* Html 设置样式(功能有限，更多的还是要靠css)</p>
    <div style="padding: 20px;border: 10px solid yellow; border-radius: 10px;width: 150px;">
        <div style="color: aqua;">
            Hello <span style="background-color: blueviolet; color: #ffffff; letter-spacing: 12px;">Aco</span>
        </div>
    </div>
    <div style="position: absolute;margin-top: -100px; background-color: aqua;width: 200px;height: 100px;opacity: 0.5;"></div>
    <hr style="color: red; size: 5px;"> 
    <p class="mytitle">* 字体标签</p>
    <p style="font-family: Arial, Helvetica, sans-serif; color: red; font-size: 30px;">你好</p>
    <p class="mytitle">* 文本对齐，text-align</p>
    <p style="text-align: center;">嘿嘿</p>
    <hr>
    <p class="mytitle">* 图像,热点问题(img属性里的usemap)</p>
    <img src="../../resources/images/04.jpg" alt="图片" width="100" height="100">

    <img src="../../resources/images/02.jpg" alt="热点问题" width="200" height="200" usemap="#mymap">

    <map name="mymap">
        <area shape="rect" coords="0,0,50,50" href="http://www.baidu.com/" target="_blank" alt="baidu">
        <area shape="circle" coords="100,100,10" href="http://www.bilibili.com/" alt="bilibili" target="_blank">
    </map>
    <hr>
    <p class="mytitle">* 表格,默认无边框</p>
    <table border="1" cellspacing="5" cellpadding="10">
        <caption>表格测试(ง•_•)ง</caption>
        <colgroup>
            <col style="background-color:red;">
            <col style="background-color: yellow;">
            <col style="background-color: aqua;">
        </colgroup>
        <thead>
            <tr>
                <th>第一列</th>
                <th colspan="2">第二列</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td rowspan="2">4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td>
                    <ul>
                        <li>apples</li>
                        <li>bananas</li>
                        <li>pineapples</li>
                    </ul>
                </td>
                <td>9</td>
            </tr>
        </tbody>
    </table>

    <hr>
    <p class="mytitle">* 制作一张课程表吧</p>
    <table border="1" style="border: 1px solid aqua;" cellspacing="2" cellpadding="15">
        <caption>课程表</caption>
        <thead>
            <th>时间\日期</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
        </thead>
        <tr>
            <td rowspan="2">上午</td>
            <td>语</td>
            <td>数</td>
            <td></td>
            <td>理</td>
            <td>化</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>数</td>
            <td>外</td>
            <td>语</td>
            <td>数</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="8"></td>
            
        </tr>
        <tr>
            <td rowspan="2">下午</td>
            <td>数</td>
            <td>语</td>
            <td>物</td>
            <td></td>
            <td>语</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>理</td>
            <td>数</td>
            <td>化</td>
            <td>数</td>
            <td>化</td>
            <td></td>
            <td></td>
        </tr>
    </table>

    <hr>
    <p class="mytitle">* 列表(有序和无序)每个例子都要换行...所以我加了style="display: inline-block;"</p>
    <div>
    <ul style="display: inline-block; list-style-type: disc;">
        <li>哈</li>
        <li>哈哈</li>
        <li>哈哈哈</li>
    </ul>
    <ul style="display: inline-block; list-style-type: circle;">
        <li>哈</li>
        <li>哈哈</li>
        <li>哈哈哈</li>
    </ul>
    <ul style="display: inline-block; list-style-type: square;">
        <li>哈</li>
        <li>哈哈</li>
        <li>哈哈哈</li>
    </ul>
    </div>
    <div style="display: inline-block;">
        <ol start="10" style="display: inline-block;">
            <li>哈</li>
            <li>哈哈</li>
            <li>哈哈哈</li>
        </ol>
        <ol type="A" style="display: inline-block;">
            <li>哈</li>
            <li>哈哈</li>
            <li>哈哈哈</li>
        </ol>
        <ol type="a" style="display: inline-block;">
            <li>哈</li>
            <li>哈哈</li>
            <li>哈哈哈</li>
        </ol>
        <ol type="I" style="display: inline-block;">
            <li>哈</li>
            <li>哈哈</li>
            <li>哈哈哈</li>
        </ol>
    </div>

    <p class="mytitle">* 嵌套列表</p>
    <ul>
        <li>Coffee</li>
        <li>Tea
            <ul>
                <li>Black tea</li>
                <li>Green tea
                    <ul>
                        <li>China</li>
                        <li>Africa</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Milk</li>
    </ul>

    <p class="mytitle">* 自定义列表</p>
    <dl>
        <dt>Aco</dt>
            <dd>- me</dd>
        <dt>Eric</dt>
            <dd>- old me</dd>
    </dl>

    <hr>
    <p class="mytitle">* 网页的布局一：使用div</p>
    <div id="container" style="width: 500px;">
        <div id="header" style="background-color: darkorange;">
            <h1 style="text-align: center; margin-bottom: 0px;">网站标题</h1>
        </div>
        <div id="menu" style="background-color: yellow; height: 200px; width: 120px; float: left;">
            <strong>菜单</strong>
            <ul style="list-style-type: none; margin-top: 0px;">
                <li>子菜单1</li>
                <li>子菜单2</li>
                <li>子菜单3</li>
                <li>子菜单4</li>
            </ul>
        </div>
        <div id="content" style="background-color: antiquewhite; height: 200px; width: 380px; float: left;">
            <h1 style="text-align: center; vertical-align: middle;">内容</h1>
        </div>
        <div id="footer" style="background-color: blueviolet; clear: both; text-align: center;">
            Author: Aco
        </div>
    </div>

    <hr>
    <p class="mytitle">* 网页布局二： 使用table</p>
    <table width="500" border="0">
        <tr>
            <td colspan="2" style="background-color: darkorange">
                <h2 style="text-align: center;">网站标题</h2>
            </td>
        </tr>
        <tr>
            <td style="background-color: yellow; height: 200px; width: 120px; vertical-align: top;">
                <strong>菜单</strong>
                <ul style="list-style-type: none; margin-top: 0px;">
                    <li>子菜单1</li>
                    <li>子菜单2</li>
                    <li>子菜单3</li>
                    <li>子菜单4</li>
                </ul>
            </td>
            <td style="background-color: antiquewhite; height: 200px; width: 380px; vertical-align: top;">
                <h1 style="text-align: center; vertical-align: middle;">内容</h1>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: blueviolet; text-align: center;">Author: Aco</td>
        </tr>
    </table>
    
    <hr>
    <p class="mytitle">* 表单</p>
    <form action="" >
        Username: <input type="text" name="username" value=""><br>
        Password: <input type="password" name="password"><br>
        性别： 
        <input type="radio" name="sex" value="Male">
        <input type="radio" name="sex" value="FeMale"><br>
        爱好：
        <input type="checkbox" name="hobby" value="Bracket">I like Bracket!
        <input type="checkbox" name="hobby" value="Run">I like Run! <br>
        下拉框选择： 
        <select name="cars" id="">
            <optgroup label="Big Cars" disabled>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </optgroup>
            <optgroup label="Small Cars">
                <option value="fiat">Fiat</option>
                <option value="audi" selected>Audi</option>
            </optgroup>
        </select><br>

        <textarea rows="6" cols="80" placeholder="请输入您的个人简介吧,限50个字符哦 " maxlength="50"></textarea>
        <input type="button" value="hello">
        <p class="mytitle">* fieldset的应用</p>
        <fieldset>
            <legend>个人信息</legend>
            Name: <input type="text" size="30">
            E-mail: <input type="text" size="30">
            Date of birth: <input type="text" size="10">
        </fieldset>
        <p class="mytitle">* datalist的应用</p>

        <input type="text" list="mydata">
        <datalist id="mydata">
            <option value="haha"></option>
            <option value="huohuo"></option>
            <option value="heihei"></option>
            <option value="enen"></option>
            <option value="hehe"></option>
        </datalist>

        <br> <input type="submit" value="Submit">
    </form>

    <hr>
    <p class="mytitle">* iframe的应用</p>
    <iframe src="http://www.bilibili.com/" width="600" height="200" frameborder="0"></iframe>
    <p  class="mytitle">* 使用iframe来显示目标链接页面</p>
    <p><a href="http://www.bilibili.com/" target="iframe-a">链接到哔哩哔哩</a></p>
    <iframe name="iframe-a" width="600" height="200">将会显示哔哩哔哩</iframe>

    <p class="mytitle">* html颜色测试</p>
    <p> 
        <span style="color: crimson;">C</span>
        <span style="color: green;">h</span>
        <span style="color: rgb(0,0,255);">a</span>
        <span style="color: #FF00FF;">n</span>
        <span style="color: #888888;">g</span>
        <span style="color: aqua;">e</span>&nbsp;&nbsp;
        <span style="color: brown;">T</span>
        <span style="color: darkviolet;">h</span>
        <span style="color: #D2691E;">e</span>&nbsp;&nbsp;
        <span style="color: red;">W</span>
        <span style="color: orange;">o</span>
        <span style="color: yellow;">r</span>
        <span style="color: green;">l</span>
        <span style="color: blue;">d</span>
        <span style="color: purple;">!</span>
    </p>

    <hr>
    <p class="mytitle">* html脚本简单测试</p>
    <p id="script-test01">Hello</p>
    <script>
        // alert("haha");
        var test01 = document.getElementById("script-test01");
        test01.innerHTML = "Hello ,I'm Aco~";
        test01.style.color = "red";
    </script>
    <noscript>
        很抱歉，您的浏览器不支持JavaScript，请及时升级您的浏览器哦~
    </noscript>

    <hr>
    <p class="mytitle">* html字符实体</p>

    <xmp>
              实体名称   	
        空格：    &nbsp;    
        小于号<： &lt;
        大于号>： &gt;
        和号&：   &amp;
        引号：    &quot;
        撇号：    &apos;
        人民币：  &yen;
        欧元：    &euro;
        小节：    &sect;
        版权：    &copy;
        注册商标：&reg;
        注册：    &trade;
        乘号：    &times;
        除号：    &divide;
    </xmp>
    <p>以上符号显示效果如下 <br>
        空格：    &nbsp;<br>
        小于号<： &lt;<br>
        大于号>： &gt;<br>
        和号&：   &amp;<br>
        引号：    &quot;<br>
        撇号：    &apos;<br>
        人民币：  &yen;<br>
        欧元：    &euro;<br>
        小节：    &sect;<br>
        版权：    &copy;<br>
        注册商标：&reg;<br>
        注册：    &trade;<br>
        乘号：    &times; <br>
        除号：    &divide;<br>
    </p>
    <hr>
    <p>* END,下一步学习CSS</p>
</body>
</html>
```