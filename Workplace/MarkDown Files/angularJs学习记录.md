# AnjularJS 学习记录

> AngularJS 通过新的属性和表达式扩展了 HTML。
AngularJS 可以构建一个单一页面应用程序（SPAs：Single Page Applications）。

## 基础

1. ng-app=" "  定义angularJS的使用范围；指令告诉 AngularJS，`<div>` 元素是 AngularJS 应用程序 的 **"所有者"**。一个网页可以包含多个运行在不同元素中的 AngularJS 应用程序。
2. ng-init="变量=值;变量='值'"  初始化变量的值，有多个变量时，中间用分号隔开；
3. ng-model="变量"  定义变量名；
4. ng-bind="变量"  绑定变量名，获取该变量的数据。这里的变量就是第3条的变量名。但是一般都用双重花括号来获取变量的值，比如：{{变量}}。
5. AngularJS 表达式写在双大括号内：{{ expression }}。AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。

> AngularJS 是一个 JavaScript 框架。它可通过 `<script>` 标签添加到 HTML 页面。
AngularJS 通过 **`指令`** 扩展了 HTML，且通过 **`表达式`** 绑定数据到 HTML。

AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。
1. AngularJS 把应用程序数据绑定到 HTML 元素。
2. AngularJS 可以克隆和重复 HTML 元素。
3. AngularJS 可以隐藏和显示 HTML 元素。
4. AngularJS 可以在 HTML 元素"背后"添加代码。
5. AngularJS 支持输入验证。

## AngularJS 应用

1. AngularJS 模块（Module） 定义了 AngularJS 应用。
2. AngularJS 控制器（Controller） 用于控制 AngularJS 应用。
3. `ng-app`指令定义了应用, `ng-controller` 定义了控制器。

> 提示：使用 `ng-init` 不是很常见

### AngularJS 表达式 与 JavaScript 表达式

类似于 JavaScript 表达式，AngularJS 表达式可以包含字母，操作符，变量。
1. 与 JavaScript 表达式不同，AngularJS 表达式可以写在 HTML 中。
2. 与 JavaScript 表达式不同，AngularJS 表达式不支持条件判断，循环及异常。
3. 与 JavaScript 表达式不同，AngularJS 表达式支持过滤器。

> AngularJS 完美支持数据库的 CRUD（**增加Create、读取Read、更新Update、删除Delete**）应用程序。**把实例中的对象想象成数据库中的记录。**

### ng-model 指令

    ng-model 指令 绑定 HTML 元素 到应用程序数据。
    ng-model 指令也可以：
    为应用程序数据提供类型验证（number、email、required）。
    为应用程序数据提供状态（invalid、dirty、touched、error）。
    为 HTML 元素提供 CSS 类。
    绑定 HTML 元素到 HTML 表单。

> 1. ng-model是用于表单元素的，支持**双向绑定**。对普通元素无效；
> 2. ng-bind用于普通元素，不能用于表单元素，应用程序单向地渲染数据到元素；
> 3. 当ng-bind和{{}}同时使用时，ng-bind绑定的值覆盖该元素的内容。
> 4. 验证用户输入, 提示信息会在 ng-show 属性返回 true 的情况下显示。
> 5. 应用状态
ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error):

    $valid: true (如果输入的值是合法的则为 true)。
    $invalid: true (如果输入的值是合法的则为 true)。
    $pristine: 	表单没有填写记录
    $dirty: false (如果值改变则为 true)。myForm.user.$dirty
    $touched: true (如果通过触屏点击则为 true)。
    $error: js对象，有如下几个值，使用方法：`<span ng-show="myForm.email.$error.email">非法的邮箱。</span>`
        email
        max
        maxlength
        min
        minlength
        number
        pattern
        required
        url

ng-model 指令根据表单域的状态添加/移除以下类：

    ng-empty
    ng-not-empty
    ng-touched
    ng-untouched
    ng-valid
    ng-invalid
    ng-dirty
    ng-pending
    ng-pristine


### 自定义指令

```js
// 自定义指令
app.directive("aco", function() {
    return {
        template: "<h1>Hello ,我是Aco~</h1>"
    };
});
```
加restrict值 以来打到不同的要求
restrict 值可以是以下几种:

    E 作为元素名使用
    A 作为属性使用
    C 作为类名使用 
    M 作为注释使用(注意加上`replace : true,`)
restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。

### AngularJS Scope(作用域)(模型层)

当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。

#### Scope 概述

AngularJS 应用组成如下：

    View(视图), 即 HTML。
    Model(模型), 当前视图中可用的数据。如果你修改了视图，模型和控制器也会相应更新
    Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。

scope 是模型。
scope 是一个 JavaScript 对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用。

> 根作用域

所有的应用都有一个 `$rootScope`，它可以作用在 `ng-app` 指令包含的所有 HTML 元素中。
`$rootScope 可作用于整个应用中`。是各个 `controller` 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。

创建控制器时，将 `$rootScope` 作为参数传递，可在应用中使用：

### AngularJS 控制器（控制层）

ng-controller 指令定义了应用程序控制器。
控制器是 **JavaScript 对象**，由标准的 JavaScript **对象的构造函数** 创建。

控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
ng-model 指令绑定输入域到控制器的属性（firstName 和 lastName）。

```js
var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});
```

### AngularJS 过滤器

> 过滤器可以使用一个管道字符（|）添加到表达式和指令中。

AngularJS 过滤器可用于转换数据：

    过滤器	               描述
    currency	格式化数字为货币格式。
    filter	      从数组项中选择一个子集。
    lowercase	格式化字符串为小写。
    orderBy	      根据某个表达式排列数组。
    uppercase	格式化字符串为大写。

#### 向指令添加过滤器

过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中。
orderBy 过滤器根据表达式排列数组：

#### 过滤输入

输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
filter 过滤器从数组中选择一个子集：

```html
<div ng-app="myApp" ng-controller="namesCtrl">
    <p><input type="text" ng-model="test"></p>
    <ul>
        <li ng-repeat="x in names | filter:test | orderBy:'country'">
        {{ (x.name | uppercase) + ', ' + x.country }}</li>
    </ul>
</div>
```

1. uppercase，lowercase 大小写转换
```js
{{ "lower cap string" | uppercase }}   // 结果：LOWER CAP STRING
{{ "TANK is GOOD" | lowercase }}      // 结果：tank is good
```

2. date 格式化
```js
{{1490161945000 | date:"yyyy-MM-dd HH:mm:ss"}} // 2017-03-22 13:52:25
```

3. number 格式化（保留小数）
```js
{{149016.1945000 | number:2}}
```

4. currency货币格式化
```js
{{ 250 | currency }}            // 结果：$250.00
{{ 250 | currency:"RMB ￥ " }}  // 结果：RMB ￥ 250.00
```

5. filter查找
输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
filter 过滤器从数组中选择一个子集

```js
// 查找name为iphone的行
{{ [{"age": 20,"id": 10,"name": "iphone"},
    {"age": 12,"id": 11,"name": "sunm xing"},
    {"age": 44,"id": 12,"name": "test abc"}
    ] | filter:{'name':'iphone'} }}        
```

6. limitTo 截取
```js
{{"1234567890" | limitTo: 6}} // 从前面开始截取6位
{{"1234567890" | limitTo: -4}} // 从后面开始截取4位
```

7. orderBy 排序 默认正序asc,倒序添加-负号
```js
    // 根id降序排
{{ [{"age": 20,"id": 10,"name": "iphone"},
    {"age": 12,"id": 11,"name": "sunm xing"},
    {"age": 44,"id": 12,"name": "test abc"}
    ] | orderBy:'-id' }}

    // 根据id升序排
{{ [{"age": 20,"id": 10,"name": "iphone"},
    {"age": 12,"id": 11,"name": "sunm xing"},
    {"age": 44,"id": 12,"name": "test abc"}
    ] | orderBy:'id' }}
```

8.自定义过滤器
```js
app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});
```

### AngularJS 服务(Service)

1. $location 服务，它可以返回当前页面的 URL 地址。`$scope.myUrl = $location.absUrl();`,**$location 服务是作为一个参数传递到 controller 中。如果要使用它，需要在 controller 中定义。**

为什么使用服务?<br>
> 在很多服务中，比如 $location 服务，它可以使用 DOM 中存在的对象，类似 window.location 对象，但 window.location 对象在 AngularJS 应用中有一定的局限性。
AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好。因为这些服务可以获取到Angular应用声明周期的每一个阶段，并且和$watch整合，让Angular可以监控应用，处理事件变化。普通的DOM对象则不能在Angular应用声明周期中和应用整合。

目录 | window.location | $location.service
---|---|---
目的 | 允许对当前浏览器位置进行读写操作 | 允许对当前浏览器位置进行读写操作
API | 暴露一个能被读写的对象 | 暴露jquery风格的读写器
是否在AngularJS应用生命周期中和应用整合 | 否 | 可获取到应用声明周期内的每一个阶段，并且和$watch整合
是否和HTML5 API的无缝整合 | 否 | 是（对低级浏览器优雅降级）
和应用的上下文是否相关 | 否，window.location.path返回"/docroot/actual/path" | 是，$location.path()返回"/actual/path"

2. $http服务(重点) : 是 AngularJS 中的一个核心服务，用于读取远程服务器的数据。
```js
var app = angular.module('myApp', []);
        
app.controller('siteCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://139.199.7.254:8080/AcoTest/person.php'
    }).then(function successCallback(response) {
            $scope.names = response.data.person;
        }, function errorCallback(response) {
        // 请求失败执行代码
    });
});
```

2. 自定义服务
```js
var app = angular.module('myApp', []);
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

app.controller('myCtrl', function($scope) {
    $scope.counts = [255, 251, 200];
});
```

### AngularJS Select(选择框)

在 AngularJS 中我们可以使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出。
```html
<select ng-init="selectedName = names[0]" ng-model="selectedName" ng-options="x for x in names"></select>

<!--使用对象型的数据源-->
<select ng-model="selectedCar" ng-options="y.brand for (x,y) in cars"></select>
```

也可以使用ng-repeat : 

```html
<select>
    <option ng-repeat="x in names">{{x}}</option>
</select>
```
但是，使用ng-options时选项是一个对象，而使用ng-repeat 时选项是一个字符串，因此，使用ng-options更好，也会更灵活。

### AngularJS 表格

ng-repeat 无敌

###  AngularJS SQL

> 需要连接数据库，服务器，之后再测试

### AngularJS HTML DOM

1. ng-disabled 指令绑定应用程序数据 "mySwitch" 到 HTML 的 disabled 属性。
2. ng-show 指令隐藏或显示一个 HTML 元素。true为显示，false为隐藏。ng-show 指令也可以根据 value 的值来显示（隐藏）HTML 元素。eg:
```html
<div ng-app="" ng-init="hour=13">
    <p ng-show="hour > 12">我是可见的。</p>
</div>
```
3. ng-hide 指令用于隐藏或显示 HTML 元素。true为隐藏，false为显示。反过来就行

### AngularJS 事件

1. ng-click 指令: 定义了 AngularJS 点击事件。
 
### AngularJS 模块

1. 创建模块 `var app = angular.module("myApp", []); `
> 在模块定义中 [] 参数用于定义模块的依赖关系。中括号[]表示该模块没有依赖，如果有依赖的话会在中括号写上依赖的模块名字。

2. 添加控制器
```html
<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>
    var app = angular.module("myApp", []);

    app.controller("myCtrl", function($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
</script>
```

3. 添加指令：可以使用内置的指令，也可以自己创建指令，上面有提到过
4. 模块和控制器包含在 JS 文件中，eg :  "myApp.js" 包含了应用模块的定义程序， "myCtrl.js" 文件包含了控制器：
5. 函数会影响到全局命名空间

> JavaScript 中应避免使用全局函数。因为他们很容易被其他脚本文件覆盖。

AngularJS 模块让所有函数的作用域在该模块下，避免了该问题。

6.对于 HTML 应用程序，通常建议把所有的脚本都放置在 `<body>` 元素的最底部。 在我们的实例中，AngularJS 在 `<head>` 元素中被加载，因为对 angular.module 的调用只能在库加载完成后才能进行。(不理解，我试过，放在页面底部也可以)

### AngularJS 表单

见例子
1. AngularJS 表单是输入控件的集合。
2. ng-switch, ng-switch-when 指令根据单选按钮的选择结果显示或隐藏 HTML 区域。

### AngularJS 输入验证

AngularJS 表单和控件可以提供验证功能，并对用户输入的非法数据进行警告。
> Note	客户端的验证不能确保用户输入数据的安全，所以服务端的数据验证也是必须的。

### AngularJS API
API 意为 Application Programming Interface（应用程序编程接口）。

AngularJS 全局 API
AngularJS 全局 API 用于执行常见任务的 JavaScript 函数集合，如：比较对象, 迭代对象, 转换对象
全局 API 函数使用 angular 对象进行访问。

    angular.lowercase()	转换字符串为小写
    angular.uppercase()	转换字符串为大写
    angular.isString()	判断给定的对象是否为字符串，如果是返回 true。
    angular.isNumber()	判断给定的对象是否为数字，如果是返回 true。

### AngularJS 包含

在 AngularJS 中，你可以在 HTML 中包含 HTML 文件。`<div ng-include="'runoob.htm'"></div>`

#### 跨域包含

默认情况下， ng-include 指令不允许包含其他域名的文件。如果你需要包含其他域名的文件，你需要设置域名访问白名单：
```html
<div ng-include="'http://c.runoob.com/runoobtest/angular_include.php'"></div>
 
<script>
var app = angular.module('myApp', [])
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://c.runoob.com/runoobtest/**'
    ]);
});
</script>
```
此外，还需要设置服务端允许跨域访问，`Access-Control-Allow-Origin: *` 设置方法可参考：[PHP Ajax 跨域问题最佳解决方案。](http://www.runoob.com/w3cnote/php-ajax-cross-border.html)

### AngularJS 动画
AngularJS 提供了动画效果，可以配合 CSS 使用。AngularJS 使用动画需要引入 angular-animate.min.js 库。
`<script src="http://cdn.static.runoob.com/libs/angular.js/1.4.6/angular-animate.min.js"></script>`
还需在应用中使用模型 ngAnimate：(如果应用已经设置了应用名，可以把 ngAnimate 直接添加在模型中：)
`<body ng-app="ngAnimate">`
`var app = angular.module('myApp', ['ngAnimate']);`

> 应用中动画不宜太多，但合适的使用动画可以增加页面的丰富性，也可以更易让用户理解。

ngAnimate 模型可以添加或移除 class 。
ngAnimate 模型并不能使 HTML 元素产生动画，但是 ngAnimate 会监测事件，类似隐藏显示 HTML 元素 ，如果事件发生 ngAnimate 就会使用预定义的 class 来设置 HTML 元素的动画。
AngularJS 添加/移除 class 的指令:

    ng-show
    ng-hide
    ng-class
    ng-view
    ng-include
    ng-repeat
    ng-if
    ng-switch

ng-show 和 ng-hide 指令用于添加或移除 ng-hide class 的值。
其他指令会在进入 DOM 会添加 ng-enter 类，移除 DOM 会添加 ng-leave 属性。
当 HTML 元素位置改变时，ng-repeat 指令同样可以添加 ng-move 类 。
此外， 在动画完成后，HTML 元素的类集合将被移除。例如： ng-hide 指令会添加一下类：

    ng-animate
    ng-hide-animate
    ng-hide-add (如果元素将被隐藏)
    ng-hide-remove (如果元素将显示)
    ng-hide-add-active (如果元素将隐藏)
    ng-hide-remove-active (如果元素将显示)

### AngularJS 依赖注入

wiki 上的解释是：
> 依赖注入（Dependency Injection，简称DI）是一种软件设计模式，在这种模式下，一个或更多的依赖（或服务）被注入（或者通过引用传递）到一个独立的对象（或客户端）中，然后成为了该客户端状态的一部分。

该模式分离了客户端依赖本身行为的创建，这使得程序设计变得松耦合，并遵循了依赖反转和单一职责原则。与服务定位器模式形成直接对比的是，它允许客户端了解客户端如何使用该系统找到依赖

> 一句话 --- 没事你不要来找我，有事我会去找你。

AngularJS 提供很好的依赖注入机制。以下5个核心组件用来作为依赖注入：

1. value
2. factory
3. service
4. provider
5. constant

#### value
Value 是一个简单的 javascript 对象，用于向控制器传递值（配置阶段）：
```js
// 创建 value 对象 "defaultInput" 并传递数据
mainApp.value("defaultInput", 5);
```

#### factory
factory 是一个函数用于返回值。在 service 和 controller 需要时创建。
通常我们使用 factory 函数来计算或返回值。
```js
// 创建 factory "MathService" 用于两数的乘积 provides a method multiply to return multiplication of two numbers
mainApp.factory('MathService', function() {
   var factory = {};
   
   factory.multiply = function(a, b) {
      return a * b
   }
   return factory;
}); 

// 在 service 中注入 factory "MathService"
mainApp.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});
```

#### provider
AngularJS 中通过 provider 创建一个 service、factory等(配置阶段)。
Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory。
```js
// 使用 provider 创建 service 定义一个方法用于计算两数乘积
mainApp.config(function($provide) {
   $provide.provider('MathService', function() {
      this.$get = function() {
         var factory = {};  
         
         factory.multiply = function(a, b) {
            return a * b; 
         }
         return factory;
      };
   });
});

mainApp.service('CalcService', function(MathService){
    this.square = function(a) {
        return MathService.multiply(a,a);
    }
});
         
mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    }
});
```

#### constant
constant(常量)用来在配置阶段传递数值，注意这个常量在配置阶段是不可用的。
```js
mainApp.constant("configParam", "constant value");
```

1. 一个对别人有依赖的东西，它想要单独测试，就需要在依赖项齐备的情况下进行。如果我们在运行时注入，就可以减少这种依赖
2. 参数由定义方决定
3. 与import还不完全一样

### AngularJS 路由
AngularJS 路由允许我们通过不同的 URL 访问不同的内容。
通过 AngularJS 可以实现多视图的单页Web应用（single page web application，SPA）。
通常我们的URL形式为 `http://runoob.com/first/page`，但在单页Web应用中 AngularJS 通过 **# +** 标记 实现，例如：

    http://runoob.com/#/first
    http://runoob.com/#/second
    http://runoob.com/#/third

> 需要载入 `<script src="http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route.js"></script>`