<!-- 阮一峰JS教程阅读札记之JS语法篇 -->

这些JS系列博客是记录我阅读 阮一峰老师的 [`《JavaScript 标准参考教程（alpha）》`](http://javascript.ruanyifeng.com/)的札记，受益良多，所以就把我学到的，感悟到的一些东西记录下来，不会复制粘贴，只记录`重点`和`感悟`。

书里有句话，我非常喜欢，`“我想写这本书，主要原因是自己需要。遇到问题，我首先查自己的笔记，如果笔记里没有，再到网上查，最后回过头把笔记补全。终于有一天，我意识到可以把笔记做成书，这就是这本书的由来。”`

# 前言
1995年5月，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源：

> 基本语法：借鉴C语言和Java语言。(JavaScript这个名字的原意是“很像Java的脚本语言”。)
> 数据结构：借鉴Java语言，包括将值分成原始值和对象两大类。
> 函数的用法：借鉴Scheme语言和Awk语言，将函数当作第一等公民，并引入闭包。
> 原型继承模型：借鉴Self语言（Smalltalk的一种变种）。
> 正则表达式：借鉴Perl语言。
> 字符串和数组处理：借鉴Python语言。

JavaScript 是一种轻量级的，嵌入式（embedded）的脚本语言。它本身不提供任何与 I/O（输入/输出）相关的 API，都要靠宿主环境（host）提供。它是目前唯一一种通用的浏览器脚本语言，所有浏览器都支持。

宿主环境有两种： `浏览器`和 `Node 项目(服务器环境)`。

JS 的灵活性体现在： **JavaScript 并不是纯粹的“面向对象语言”，还支持其他编程范式（比如函数式编程）**, 既能面向对象编程，比如es6里引入的经典的 `class`等标志性的语法，也支持类似 C 语言清晰的过程式编程，也支持灵活的函数式编程。

JavaScript 语言本身，虽然是一种`解释型语言`，但是在现代浏览器中，JavaScript 都是`编译后运行`。程序会被高度优化，`运行效率接近二进制程序`。而且，JavaScript 引擎正在快速发展，性能将越来越好。（ JS v8 引擎，有兴趣的可以去知乎上看一下 justjavac 的相关回答）

# 语法

JavaScript 的所有值都是对象。

这里只记录比较重要的语法点，想看详细的可以去看[阮老师的教程](http://javascript.ruanyifeng.com/)。

## 标识符命名规则 

很多人的 JS 里变量名随便起，其实是有问题的，我的导师教过我一句话： `“一个好的命名效果是，即使一个完全不懂程序的人去看你的代码，也知道那个变量指的是什么意思。”`

基本规则： 
1. 第一个字符，可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。不能是数字！
2. 第二个字符及后面的字符，除了Unicode字母、美元符号和下划线，还可以用数字0-9。
3. 标识符里不能有 `* + / - ^ % # & @ `等等特殊字符。
4. `**要有意义！**`.
5. 中文也可以做为标识符（我不建议使用，最好使用英文，与国际接轨嘛~）
6. 这三个词虽然不是保留字，但是因为具有特别含义，也不应该用作标识符：`Infinity`、`NaN`、`undefined`。
7. 一些保留字不能用作标识符，如下：

> JavaScript保留字：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

建议总是使用 var/let 命令声明变量。如果不声明却直接赋值，不仅不利于表达意图，而且不知不觉就会创建一个全局变量。

> 严格地说，var a = 1 与 a = 1，这两条语句的效果不完全一样，主要体现在delete命令无法删除前者。不过，绝大多数情况下，这种差异是可以忽略的。

## 变量提升

JavaScript引擎的工作方式是，`先解析代码，获取所有被声明的变量`，然后再`一行一行地运行`。于是所有的变量的声明语句，都会被提升到代码的头部。

`注意：变量提升只对 var 命令声明的变量有效，如果一个变量不是用var命令声明的，就不会发生变量提升。`

## js 里的作用域

这里有一个很重要的概念——`区块`，JavaScript使用`大括号，将多个相关的语句组合在一起`，称为“区块”（block）。

`区块中的变量与区块外的变量，属于同一个作用域`。这说明区块不构成单独的作用域，与不使用区块的情况没有任何区别。区块往往用来构成其他更复杂的语法结构，比如`for、if、while、function`等。

建议总是在 if 语句中使用大括号，因为这样方便插入语句。

## 标签（label）

JavaScript语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，
```js
top1:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) 
        break top1;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

top2:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) 
        continue top2;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```

## 其他

`**注意**`: 优先采用 “严格相等运算符”（`===`），而不是“相等运算符”（`==`）。

`switch` 语句后面的表达式与 `case1` 语句后面的表示式，在比较运行结果时，采用的是严格相等运算符（`===`），而不是相等运算符（`==`），这意味着比较时不会发生类型转换。

不管条件是否为真，do..while 循环至少运行一次，这是这种结构最大的特点。另外，while 语句后面的分号不能省略。



<!-- 阮一峰JS教程阅读札记之JS数据类型篇 -->
著名程序员 Jeff Atwood 提出了一条 “Atwood 定律”：

“所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。”(Any application that can be written in JavaScript will eventually be written in JavaScript.)

# 数据类型
1. 数值（number）：整数和小数（比如1和3.14）
2. 字符串（string）：字符组成的文本（比如”Hello World”）
3. 布尔值（boolean）：true（真）和false（假）两个特定值
4. undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
5. null：表示无值，即此处的值就是“无”的状态。
6. 对象（object）：各种值组成的集合。
7. Symbol： 原始数据类型，表示独一无二的值。

`1，2，3，7`都是原始类型（原子性，不能再分）， `6` 成为合成类型（由多页元原子类型组合而成），`4，5` 是 `6` 的特殊值.

## 如何判断呢？

1. typeof运算符
2. instanceof运算符
3. Object.prototype.toString方法

### typeof运算符

1. 原始类型： 数值、字符串、布尔值分别返回`number、string、boolean`。
2. 函数： 函数返回 `function`。
3. undefined： `undefined` 返回 `undefined`。
4. 除此以外，其他情况都返回 `object`。
```js
typeof window // "object"
typeof {} // "object"
typeof [] // "object", 说明数组本质上只是一种特殊的对象。
typeof null // "object"

```
`null` 为什么也是 `object` 呢？（看了教程才知道，原来是这样）

`null` 的类型也是 `object` ，这是由于历史原因造成的。1995年 JavaScript语言的第一版，所有值都设计成 32位，其中最低的3位用来表述数据类型，`object` 对应的值是 `000` 。当时，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），完全没考虑 `null`，只把它当作 `object` 的一种特殊值，32位 全部为 0。这是 `typeof null` 返回 `object` 的根本原因。

并不是说 `null` 就属于对象，本质上`null` 是一个类似于 `undefined` 的特殊值。区分`null` 和 `object`? 使用 `instanceof`

```js
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```

```js
// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

## null 和 undefined

`null` 与 `undefined` 都可以表示“没有”，含义非常相似。
```js
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```
目前 `null` 和 `undefined` 基本是同义的，只有一些细微的差别。区别：
```js
typeof null // "object"
typeof undefined // "undefined"
```
1. `null` 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 `null`。书中有个例子举得特别好，

比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

2. `undefined`表示 `“未定义”`
```js
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回undefined
function f() {}
f() // undefined
```
# 数据类型的转换
JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。但是数据本身和各种运算符是有类型的。如果运算符发现，数据的类型与预期不符，就会自动转换类型。

## 布尔值的转换

1. 两元逻辑运算符： `&& (And)，|| (Or)`
2. 前置逻辑运算符： `! (Not)`
3. 相等运算符：`===，!==，==，!=`
4. 比较运算符：`>，>=，<，<=`

转换规则是除了下面六个值被转为false，其他值都视为true。

  undefined
  null
  false
  0
  NaN
  ""或''（空字符串）

## Number()
将任意类型的值转化成数值。
### 原始类型值的转换规则

```js
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成1，false 转成0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

```

Number函数将字符串转为数值，要比parseInt函数严格很多。基本上，只要有一个字符无法转成数值，整个字符串就会被转为NaN。
```js
parseInt('42 cats') // 42
Number('42 cats') // NaN
```

Number函数会自动过滤一个字符串前导和后缀的空格。
```js
Number('\t\v\r12.34\n') // 12.34
```

### 对象的转换规则
`Number` 方法的参数是对象时，将返回 `NaN` ，除非是包含单个数值的数组。
```js
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```
`Number` 背后的转换规则比较复杂
1. 调用对象自身的 `valueOf` 方法。如果返回原始类型的值，则直接对该值使用`Number` 函数，不再进行后续步骤。
2. 如果 `valueOf` 方法返回的还是对象，则改为调用对象自身的 `toString` 方法。如果 `toString` 方法返回原始类型的值，则对该值使用 `Number` 函数，不再进行后续步骤。
3. 如果 `toString` 方法返回的是对象，就报错。

```js
var obj = {x: 1};
Number(obj) // NaN

// 等同于
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}
```

## String()

将任意类型的值转化成字符串。

### 原始类型值的转换规则
1. 数值：转为相应的字符串。
2. 字符串：转换后还是原来的值。
3. 布尔值：`true` 转为 `"true"`，`false` 转为 `"false"`。
4. `undefined`：转为 `"undefined"`。
5. `null`：转为 `"null"`。
```js
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
```

### 对象的转换规则
String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。

```js
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

1. String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序。
先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
2. 如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
3. 如果valueOf方法返回的是对象，就报错。

## Boolean()
将任意类型的变量转为布尔值。
除了以下六个值的转换结果为false，其他的值全部为true。

  undefined
  null
  -0
  0或+0
  NaN
  ''（空字符串）

```js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
```

所有对象的布尔值都是true

注意，所有对象（包括空对象）的转换结果都是 `true` ，甚至连 `false` 对应的布尔对象 `new Boolean(false)` 也是 `true` 。
```js
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```

## 自动转换类型

规则: 预期什么类型的值，就调用该类型的转换函数。自动转换具有不确定性，而且不易除错，建议在预期为 `布尔值、数值、字符串` 的地方，全部使用 `Boolean、Number和String` 函数进行显式转换。

我挑选了一些比较常见的例子，一看就懂
```js
// 1. 不同类型的数据互相运算
123 + 'abc' // "123abc"
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"

// 这一种很容易出错
var obj = {
  width: '100'
};
// 开发者可能期望返回120，但是由于自动转换，实际上返回了一个字符10020。
obj.width + 20 // "10020"

'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN


// 2. 对非布尔值类型的数据求布尔值
if ('abc') {
  console.log('hello')
}  // "hello"

// 3. 对非数值类型的数据使用一元运算符（即“+”和“-”）
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0

// 4. 将一个表达式转为布尔值
// 写法一
expression ? true : false

// 写法二
!! expression

```






















<!-- 阮一峰JS教程阅读札记之JS对象篇 -->
## 对象

JavaScript 的所有值都是对象。

又可以分为
1. 狭义的对象（object）
2. 数组（array）
3. 函数（function）：处理数据的方法。









JavaScript 程序可以采用事件驱动（event-driven）和非阻塞式（non-blocking）设计，在服务器端适合高并发环境，普通的硬件就可以承受很大的访问量。


<!-- 阮一峰JS教程阅读札记之JS语法篇 -->

JS的用途也越来越广泛(节选)：
1. 调用更多系统功能： 随着 HTML5 的出现，浏览器本身的功能越来越强，js 可以操作本地文件、操作图片、调用摄像头和麦克风等等，功能越来越丰富。
2. Node： Node 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。甚至可以为嵌入式平台开发应用程序（Raspberry Pi）。
3. 数据库操作： NoSQL 数据库这个概念，本身就是在 JSON 格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。（JavaScript Object Notation，JavaScript 对象表示法，第一次知道 JSON 原来是这个意思。。。以前一直以为只是键值对，一种格式而已）
4. 跨移动平台： `PhoneGap` 项目就是将 JavaScript 和 HTML5 打包在一个容器之中，使得它能同时在 iOS 和安卓上运行。Facebook 公司的 `React Native` 项目则是将 JavaScript 写的组件，编译成原生组件，从而使它们具备优秀的性能。Mozilla 基金会的手机操作系统` Firefox OS`，更是直接将 JavaScript 作为操作系统的平台语言。
5. 内嵌脚本语言： 越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。
6. 跨平台的桌面应用程序： Chromium OS、Windows 8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 Chrome App 项目、Github 的 Electron 项目、以及 TideSDK 项目，都可以用来编写运行于 Windows、Mac OS 和 Android 等多个桌面平台的程序，不依赖浏览器。











 




