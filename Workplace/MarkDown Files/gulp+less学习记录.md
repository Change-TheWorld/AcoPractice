# gulp 学习记录

　　一些最基本的，必要的安装 nodeJS ，配置环境我就不赘述了，详情可以看一下这两篇博客
[菜鸟教程Node.js 安装配置](http://www.runoob.com/nodejs/nodejs-install-setup.html)
[CSDN博客NodeJS、NPM安装配置步骤(windows版本)](http://blog.csdn.net/xxmeng2012/article/details/51492149)

## 前语(为什么选择 gulp 而不是 grunt)

### Grunt.js和Gulp.js工作方式的区别。
#### Grunt主要是以 `文件` 为媒介来运行它的工作流

Grunt执行完一项任务之后，分为四步
1. 第一步会把结果写入到一个 `临时文件` 中
2. 之后再在这个 `临时文件` 内容的基础上执行其它任务
3. 执行完成后再把结果写入到 `临时文件` 中
4. 然后又以这个为基础继续执行其它任务...就这样反复下去
#### Gulp中，使用的是Nodejs中的stream(流)
首先获取到需要的 stream ，然后可以通过 `stream` 的 `pipe() 方法把流导入到你想要的地方，比如 Gulp 的插件中，经过插件处理后的流又可以继续导入到其他插件中，当然也可以把流写入到文件中。

所以Gulp是以stream为媒介的，它不需要频繁的生成 `临时文件`，这也是Gulp的速度比Grunt快的一个原因。
<!--more  -->
## 基础步骤
### 全局安装 gulp 

在 git 命令行下输入
```bash
npm install gulp -g
```
> tips: 如果网速比较慢，可以采用cnpm 
```
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

### 项目安装 gulp 以及 gulp 插件

```bash
cnpm install gulp gulp-uglify gulp-imagemin gulp-cssnano gulp-autoprefixer gulp-rename jshint gulp-jshint gulp-concat gulp-less browser-sync gulp-babel --save-dev
```

这些插件的用处后面会简要介绍，一般常用的就这些，细心的朋友可能会发现，全局安装了 gulp ，为什么项目根目录下还要再装一次呢？有兴趣的可以看下 stackoverflow 上有人做出的回答：[why-do-we-need-to-install-gulp-globally-and-locally](https://stackoverflow.com/questions/22115400/why-do-we-need-to-install-gulp-globally-and-locally)、[what-is-the-point-of-double-install-in-gulp](https://stackoverflow.com/questions/25713618/what-is-the-point-of-double-install-in-gulp)。就是为了版本的灵活性以及可部署性，引用官方的一段描述
> "The reason this works is because gulp tries to run your gulpfile.js using your locally installed version of gulp, see here. Hence the reason for a global and local install of gulp."

意思就是 gulp 运行 `gulpfile.js` 调用的是项目本地的某一个 gulp 版本。其实很好理解，因为可能你和别人全局装的 gulp 版本是不一样的，但是，如果项目里也装了 gulp ，一致用项目中的 gulp, 就不会出现版本冲突的问题了。同时，由于是直接访问，不用向外层去寻找 gulp ，效率得以提升。

> "When used in a script field of your package.json, npm searches node_modules for the tool as well as globally installed modules, so the local install is sufficient."

### 配置gulpfile.js

就像gruntjs需要一个Gruntfile.js文件一样，gulp也需要一个文件作为它的主文件。 首先，在命令行下，`npm init` ，就会出现输入配置信息的选项（也可以直接自己建），然后，新建 `gulpfile.js` (命名也可以改成 `index.js`,这里提供一个较为完整的模板)
```js
var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();

```
### 项目的目录结构

我使用的项目结构(我自己也一直在找一个好的项目目录结构，这个借鉴于[Angular系列学习笔记（二）—— 基于gulp构建Angular单页面应用](http://www.jianshu.com/p/a7eec27403cb), 很不错的一个目录结构)

        ├── node_modules // 打包过程中依赖的包
        ├── package.json // 包含各种所需模块以及项目的配置信息
        ├── gulpfile.js // 打包配置文件
        ├── app // 打包之后最终部署到服务器上的文件（名称自定义）
        ├── src  // 资源文件（名称自定义）
            ├── components // 自定义全局组件
                ├── pageloading （如：页面切换loading）
                ...
            ├── pages // 页面路由组件
                ├── index
                    ├── index.jade 默认路由视图
                    ├── index.controller.js 默认路由控制器
                    └── index.config.js 默认视图路由配置
                ├── etc
                ···
            ├── assets // 静态资源
                ├── images // 图片资源
            ├── app.module.js // 全局模块
            ├── index.jade // 入口视图模板
            └── index.less // 入口视图样式
        └── vendor.config.js // 依赖的库配置文件（自定义）

另一个简单清爽的页面结构
    - project
    |- build
    |- dist // 打包文件夹
    |- src  // 源文件夹
    | |- assets // 放置一些第三方文件，如bootstrap
    | |- css
    | | `- index.css
    | |- images
    | |- js
    | | `- index.js
    | |- sass
    | | `- index.scss
    |- gulpfile.js
    `- package.json

### 运行 gulp 任务
要运行 gulp 任务，只需切换到存放 `gulpfile.js` 文件的目录( windows 平台请使用 `cmd` 或者 `Power Shell` 等工具)，然后在命令行中执行 gulp 命令就行了，gulp 后面可以加上要执行的任务名，例如 `gulp task1`，如果没有指定任务名，则会执行任务名为 `default` 的默认任务。

## gulp里的几个API
其实，只需要知道4个就OK, `gulp.task()`, `gulp.src()`, `gulp.dest()`, `gulp.watch()` ,基本上最常用的就是这四个

### gulp.src()
gulp.src()方法正是用来获取流的，但是
> 注意: 这个流里的内容不是原始的文件流，而是一个虚拟文件对象流(Vinyl files)，这个虚拟文件对象中存储着原始文件的路径、文件名、内容等信息.

我们只需简单的理解可以用这个方法来读取需要操作的文件就行了, 函数需要的参数如下
```
gulp.src(globs[, options])
```
globs参数是文件匹配模式(类似 `正则表达式` )，用来匹配文件路径(包括文件名)，当然这里也可以直接指定某个具体的文件路径.

    * 匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾
    ** 匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。
    ? 匹配文件路径中的一个字符(不会匹配路径分隔符)
    [...] 匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为^或!时，则表示不匹配方括号中出现的其他字符中的任意一个，类似js正则表达式中的用法
    !(pattern|pattern|pattern) 匹配任何与括号中给定的任一模式都不匹配的
    ?(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或1次，类似于js正则中的(pattern|pattern|pattern)?
    +(pattern|pattern|pattern) 匹配括号中给定的任一模式至少1次，类似于js正则中的(pattern|pattern|pattern)+
    *(pattern|pattern|pattern) 匹配括号中给定的任一模式0次或多次，类似于js正则中的(pattern|pattern|pattern)*
    @(pattern|pattern|pattern) 匹配括号中给定的任一模式1次，类似于js正则中的(pattern|pattern|pattern)

举些例子就好理解了

    * 能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js
    *.* 能匹配 a.js,style.css,a.b,x.y
    */*/*.js 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js
    ** 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件
    **/*.js 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js
    a/**/z 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z
    a/**b/z 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单**单独出现才能匹配多级目录
    ?.js 能匹配 a.js,b.js,c.js
    a?? 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符
    [xyz].js 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符
    [^xyz].js 能匹配 a.js,b.js,c.js等,不能匹配x.js,y.js,z.js

当有多种匹配模式时可以使用数组
```js
//使用数组的方式来匹配多种文件
gulp.src(['js/*.js','css/*.css','*.html'])
```

使用数组的方式还有一个好处就是可以很方便的使用排除模式，在数组中的单个匹配模式前加上!即是排除模式，它会在匹配的结果中排除这个匹配，要注意一点的是不能在数组中的第一个元素中使用排除模式

```js
gulp.src([*.js,'!b*.js']) //匹配所有js文件，但排除掉以b开头的js文件
gulp.src(['!b*.js',*.js]) //不会排除任何文件，因为排除模式不能出现在数组的第一个元素中
```
此外，还可以使用展开模式。展开模式以花括号作为定界符，根据它里面的内容，会展开为多个模式，最后匹配的结果为所有展开的模式相加起来得到的结果。展开的例子如下：

    a{b,c}d 会展开为 abd,acd
    a{b,}c 会展开为 abc,ac
    a{0..3}d 会展开为 a0d,a1d,a2d,a3d
    a{b,c{d,e}f}g 会展开为 abg,acdfg,acefg
    a{b,c}d{e,f}g 会展开为 abdeg,acdeg,abdeg,abdfg

小例子
```js
var gulp = reruire('gulp');
//有通配符开始出现的那部分路径为 **/*.js
gulp.src('script/**/*.js')
    .pipe(gulp.dest('dist'));
```
### gulp.dest()

#### 含义解释
gulp.dest()方法是用来写文件的，其语法为：
```js
gulp.dest(path[,options])
```
path 为写入文件的路径, options 为一个可选的参数对象，通常我们不需要用到。

`gulp.dest()` 给它传入的路径参数与最终生成的文件的关系。
1. 通过 `gulp.src()` 方法获取到我们想要处理的文件流
2. 把文件流通过 `pipe` 方法导入到 `gulp` 的插件中
3. 把经过插件处理后的流再通过 pipe 方法导入到 `gulp.dest()` 中
4. `gulp.dest() `方法则把流中的内容写入到文件中

注意: 我们给gulp.dest()传入的路径参数，只能用来指定要 `生成的文件的目录` ，而不能指定生成文件的文件名，它生成文件的文件名使用的是 `导入到它的文件流自身的文件名`，所以

> gulp.dest()传入的路径参数，只能用来指定要 `生成的文件的目录`,生成的文件名是由导入到它的文件流决定的

要想改变文件名，可以使用插件 `gulp-rename`.

#### 路径名称的生成

`gulp.dest(path)` 生成的文件路径是我们传入的 path 参数后面再加上 `gulp.src()` 中有通配符开始出现的那部分路径。看完下面几个例子就知道了~

```js
var gulp = reruire('gulp');
//有通配符开始出现的那部分路径为 **/*.js
gulp.src('script/**/*.js')
    .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/*.js
//如果 **/*.js 匹配到的文件为 jquery/jquery.js ,则生成的文件路径为 dist/jquery/jquery.js

gulp.src('script/avalon/avalon.js') //没有通配符出现的情况
    .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/avalon.js

//有通配符开始出现的那部分路径为 **/underscore.js
gulp.src('script/**/underscore.js')
    //假设匹配到的文件为script/util/underscore.js
    .pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/util/underscore.js

gulp.src('script/*') //有通配符出现的那部分路径为 *
    //假设匹配到的文件为script/zepto.js    
    .pipe(gulp.dest('dist')); //则最后生成的文件路径为 dist/zepto.js
```

### gulp.task()
#### 含义解释
gulp.task方法用来定义任务，内部使用的是 `Orchestrator`，其语法为：
```
gulp.task(name[, deps], fn)
```

1. `name` 为任务名
2. `deps` 是当前定义的任务需要依赖的其他任务，为一个数组。当前定义的任务会在所有依赖的任务执行完毕后才开始执行。如果没有依赖，则可省略这个参数
3. `fn` 为任务函数，我们把任务要执行的代码都写在里面。该参数也是可选的。
如下
```js
gulp.task('mytask', ['one', 'two', 'three', 'four'], function() { //定义一个有依赖的任务
  // Do something
});
```

#### **重点： 任务执行的顺序问题**
gulp中执行多个任务，可以通过任务依赖来实现。例如我想要执行one,two,three这三个任务，那我们就可以定义一个空的任务，然后把那三个任务当做这个空的任务的依赖就行了：
```js
//只要执行default任务，就相当于把one,two,three这三个任务执行了
gulp.task('default',['one','two','three']);
```
> 如果任务相互之间没有依赖，任务会按你书写的顺序来执行，如果有依赖的话则会先执行依赖的任务。

但是如果某个任务所依赖的任务是异步的，gulp并不会等待那个所依赖的异步任务完成，而是会接着执行后续的任务
```js
gulp.task('one',function(){
  //one是一个异步执行的任务
  setTimeout(function(){
    console.log('one is done')
  },5000);
});

//two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
  console.log('two is done');
});
// 会先输出 two is done
```
#### 有三种方法可以实现：
##### 执行一个回调函数
在异步操作完成后执行一个回调函数来通知gulp这个异步任务已经完成,这个回调函数就是任务函数的第一个参数。
```js
gulp.task('one',function(cb){ //cb为任务函数提供的回调，用来通知任务已经完成
  //one是一个异步执行的任务
  setTimeout(function(){
    console.log('one is done');
    cb();  //执行回调，表示这个异步任务已经完成
  },5000);
});

//这时two任务会在one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
  console.log('two is done');
});
```

##### 定义任务时返回一个流对象。

适用于任务就是操作gulp.src获取到的流的情况。
```js
gulp.task('one',function(cb){
  var stream = gulp.src('client/**/*.js')
      .pipe(dosomething()) //dosomething()中有某些异步操作
      .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});
```
##### 返回一个promise对象

```js
var Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/q
gulp.task('one',function(cb){
  var deferred = Q.defer();
  // 做一些异步操作
  setTimeout(function() {
     deferred.resolve();
  }, 5000);
  return deferred.promise;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});
```

gulp.task()就这些了，主要是要知道当依赖是 `异步任务` 时的处理。

### gulp.watch()

`gulp.watch()` 用来监视文件的变化，当文件发生变化后，我们可以利用它来执行相应的任务，例如文件压缩等。其语法为
```js
gulp.watch(glob[, opts], tasks)
```
1. `glob` 为要监视的文件匹配模式，规则和用法与 `gulp.src() `方法中的 glob 相同。
2. `opts` 为一个可选的配置对象，通常不需要用到
3. `tasks` 为文件变化后要执行的任务，为一个数组

```js
gulp.task('uglify',function(){
  //do something
});
gulp.task('reload',function(){
  //do something
});
gulp.watch('js/**/*.js', ['uglify','reload']);
```

gulp.watch()还有另外一种使用方式：
```js
gulp.watch(glob[, opts, cb])
```

1. glob 和 opts 参数与第一种用法相同
2. `cb` 参数为一个函数。每当监视的文件发生变化时，就会调用这个函数,并且会给它传入一个对象，该对象包含了文件变化的一些信息，type属性为变化的类型，可以是added,changed,deleted；path属性为发生变化的文件的路径

```js
gulp.watch('js/**/*.js', function(event){
    console.log(event.type); // 变化类型 added 为新增, deleted 为删除，changed 为改变 
    console.log(event.path); // 变化的文件的路径
}); 
```

## 几个比较好的 gulp 插件

### 自动加载插件
使用 `gulp-load-plugins`
```
npm install --save-dev gulp-load-plugins
```
要使用gulp的插件，首先得用require来把插件加载进来，如果我们要使用的插件非常多，那我们的gulpfile.js文件开头可能就会是这个样子的：
```js
var gulp = require('gulp'),
    //一些gulp插件,abcd这些命名只是用来举个例子
    a = require('gulp-a'), 
    b = require('gulp-b'),
    c = require('gulp-c'),
    d = require('gulp-d'),
    e = require('gulp-e'),
    f = require('gulp-f'),
    g = require('gulp-g'),
    //更多的插件...
    z = require('gulp-z');  
```
当我们需要加载的插件很多时，我们的 `gulpfile.js` 里的开头会很长很长，看起来不舒服。 建议使用 `gulp-load-plugins`, 它并不会一开始就加载所有package.json里的gulp插件，而是在我们需要用到某个插件的时候，才去加载那个插件。

```js
var gulp = require('gulp');
//加载gulp-load-plugins插件，并马上运行它
var plugins = require('gulp-load-plugins')();
```

假如要使用gulp-rename和gulp-ruby-sass这两个插件的时候，就可以使用 `plugins.rename` 和`plugins.rubySass` 来代替了,也就是原始插件名去掉 `gulp-前缀` ，之后再转换为 `驼峰命名`。
实质上 gulp-load-plugins 是为我们做了如下的转换
```js
plugins.rename = require('gulp-rename');
plugins.rubySass = require('gulp-ruby-sass');
```
### 重命名
使用 gulp-rename
```js
npm install --save-dev gulp-rename
```
用来重命名文件流中的文件。之前有提到，用 `gulp.dest()` 方法写入文件时，文件名使用的是文件流中的文件名，如果要想改变文件名，那可以在之前用gulp-rename插件来改变文件流中的文件名。
```js
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify");
 
gulp.task('rename', function () {
    gulp.src('js/jquery.js')
    .pipe(uglify())  //压缩
    .pipe(rename('jquery.min.js')) //会将jquery.js重命名为jquery.min.js
    .pipe(gulp.dest('js'));
});
```
### 文件合并
使用gulp-concat
```js
npm install --save-dev gulp-concat
```
用来把多个文件合并为一个文件,我们可以用它来合并 js 或 css 文件等，这样就能`减少页面的 http请求数`了, 是一个提高页面加载效率的很不错的办法
```js
var gulp = require('gulp'),
    concat = require("gulp-concat");
 
gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});
```
### 自动刷新


> 本篇博客参考了[前端构建工具gulpjs的使用介绍及技巧](http://www.cnblogs.com/2050/p/4198792.html#part4), 以及我自己的理解，下一步学习 WebPack~ ٩(๑❛ᴗ❛๑)۶
















