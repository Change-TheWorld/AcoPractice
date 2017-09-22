文件下载 与 上传，都是项目开发中很常见的需求，这次来说说 `文件下载` 遇到的 `bug` 吧。

一般来说，在项目的服务器上，都会有一些文件夹，下面用来存放具体业务需要 `上传/下载` 需要的文件，举个栗子： `用户的头像，某些专家的认证材料，重要文件的线上存储` 等等。

一般来说，都是获取服务器上的文件路径，然后下载到本地。那么，首先可以想到的一个办法：

## 利用 a 标签的 href 属性
我们都知道 `a` 标签的超链接作用
> `<a>` 标签定义超链接，用于从一张页面链接到另一张页面。`<a>` 元素最重要的属性是 `href` 属性，它指示链接的目标。

eg: 当链接的是一张 `图片/exe/rar/zip` 的时候 
```html
<a href="http://wx4.sinaimg.cn/mw690/006xRFa6gy1fh1eh6mcg6j31kw110wnp.jpg" target="_blank"></a>
```
浏览器链接到具体的文件，因此，会自动弹出下载框，让用户选择是否下载到本地。这个时候，就出现了第一个问题
### 浏览器的区别
当链接到的文件为一些浏览器能直接打开的文件，比如 `txt/js/pdf` 等，如果这样设置一个超链接，点击会直接打开文件，遇到这种情况，使用直接链接到文件地址的方法是不行的。

以 `pdf` 为例，`firefox` 、`chrome` 和 `Edge` 浏览器可以直接预览是因为自身带了` pdf 阅读器插件`，而 ie 和 safari 浏览器默认下载，需安装插件才能在浏览器中预览。

为了兼容，我们需要做一些处理，在后端写一个接口，例如
```js
var url = 'http://主机名:端口名/具体路径/downLoadmaterial?mid=' + id + '&contentType=download';
```
后端接口只需要材料的 `ID` 即可，然后会返回一个文件流，这个时候，再将 url 的值赋给 href 属性即可。简要解释如下：
```html
<a href="" target="_self" id="downFile"></a>

<script> 
    var url = 'http://主机名:端口名/具体路径/downLoadmaterial?mid=' + id + '&contentType=download';
    var a = document.getElementById("downFile");
    a.href = url;
    a.click();
</script>
```

## 利用 a 标签的 download 属性
这个是 `H5` 新增的属性，添加download属性后，无论a标签的href属性链接到一个网页、图片、文本等，download属性都会强制触发下载操作，且自动命名文件为download属性。

download属性能让我们指定浏览器下载时采用新的文件名称，也就是在客户端重命名下载文件。而不是链接上原始的文件名称。

```
var url = 'http://192.168.1.113:8081/daprest/szzj/expert/v1/previewMaterial?fullpath=' + fullPath;
```


### 是否支持download属性的监测
要监测当前浏览器是否支持download属性，一行JS代码就可以了，如下：
可以在控制
```
var isSupportDownload = 'download' in document.createElement('a');
```
























