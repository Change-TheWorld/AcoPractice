# React学习记录

> 简介：React 是一个用于构建用户界面的 JAVASCRIPT 库。
React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

## 特点

1. 声明式设计 - React采用声明范式，可以轻松描述应用。
2. 高效 - React通过对DOM的模拟，最大限度地与DOM的交互(传统的直接操作效率很低)。
3. 灵活 - React可以与已知的库或者框架进行很好的配合。
4. JSX - JSX是js的语法拓展，React开发不一定使用JSX，但我们建议使用它。
5. 组件 - 通过React构建组件，使得代码更容易得到复用，能够很好的应用在大项目的开发中。
6. 单向响应的数据流 - React实现单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单

## 开发

我们引入了三个库： `react.min.js` 、`react-dom.min.js` 和 `babel.min.js`：

    react.min.js - React 的核心库
    react-dom.min.js - 提供与 DOM 相关的功能
    babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。
    

> 注意： 如果我们需要使用 JSX，则 `<script>` 标签的 `type` 属性需要设置为 `text/babel`。

## React JSX

### 简介
React 使用JSX来代替常规的js，它看起来像是XML的js语法拓展，有如下优点：
1. JSX执行更快，因为它在编译为js代码之后进行了优化。
2. 它是类型安全的，在编译过程中就能发现错误
3. 使用JSX编写模板要更为简单快捷

for example
```html
<div id="example"></div>
<script type="text/babel">
ReactDOM.render(
    <div>
        <h1>Aco</h1>
        <p data-myattribute="somevalue">嘿嘿</p>
    </div>,
    document.getElementById('example')
);

</script>

```
> 添加自定义属性需要使用 data- 前缀。

也可以把JSX写进一个js文件里，然后
```html
    <body>
        <div id="example"></div>
        <script type="text/babel" src="helloworld_react.js"></script>
    </body>
```

### js表达式

在JSX可以使用js表达式，写在{}里，eg
```js
    ReactDOM.render(
        <div>
          <h1>{1+1}</h1>
        </div>
        ,
        document.getElementById('example')
    );

```

> 代码中嵌套多个 HTML 标签，需要使用一个标签元素包裹它

```
ReactDOM.render(
  <section>
    <h1>这是正确的例子</h1>
    <span>假设这里是标题下面的内容</span>
  </section>,
  document.getElementById("example")
);
```


> 在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代,eg:

```js
    var i = 1;
    ReactDOM.render(
        <div>
      	  <h1>{i == 1 ? 'True!' : 'False'}</h1>
        </div>
      	,
      	document.getElementById('example')
      );
```

### 样式

React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。

```js
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
    };
    ReactDOM.render(
        <h1 style = {myStyle}>菜鸟教程</h1>,
        document.getElementById('example')
    );

```

### 注释

> 注释需要写在花括号中,eg: `{/*注释...*/}`
1. 在标签内部的注释需要花括号
2. 在标签外的的注释不能使用花括号,直接`/**/`

### JSX数组

JSX 允许在模板中插入数组，数组会自动展开所有成员：
```
    var arr = [
      <h1>菜鸟教程</h1>,
      <h2>学的不仅是技术，更是梦想！</h2>,
    ];
    ReactDOM.render(
      <div>{arr}</div>,
      document.getElementById('example')
    );
```

### HTML 标签 vs. React 组件

React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。
要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。
```
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```
要渲染 React 组件，只需创建一个大写字母开头的本地变量。
```
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```
> 还有一个注意点：组件类只能包含一个顶层标签，否则会报错。
```
//var myDivElement =<h1>你好</h1><h1>hello</h1>;
//上述写法是会报错的，要写成只有一个顶层标签：
var myDivElement =<div><h1>你好</h1><h1>hello</h1></div>;
```

React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。

> 注意: 由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 `className` 和 `htmlFor` 来做对应的属性。

### 复合组件

我们可以通过创建多个组件来合成一个组件，即把组件的不同功能点进行分离。


附上更为详细的JSX语法解释 [React基础——JSX语法](http://www.jianshu.com/p/7e872afeae42)

### React State(状态)

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

> 关于状态state：

1. 组件免不了要与用户互动，React 将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI。
2. getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。

> 由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，**this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。**

### React Props

state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
两种方法：
1. 如下
```
    var HelloMessage = React.createClass({
      render: function() {
        return <h1>Hello {this.props.name}</h1>;
      }
    });

    ReactDOM.render(
      <HelloMessage name="Runoob" />,
      document.getElementById('example')
      );
```
2. 默认 Props ，可以通过 getDefaultProps() 方法为 props 设置默认值，

### Props 验证

Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
以下实例创建一个 Mytitle 组件，属性 title 是必须的且是字符串，非字符串类型会自动转换为字符串 ：

```
    var title = "你好";
    //var title = "123";
    // var title = 123;
    var MyTitle = React.createClass({
      propTypes: {
        title: React.PropTypes.string.isRequired,
      },

      render: function() {
         return <h1> {this.props.title} </h1>;
       }
    });
    ReactDOM.render(
        <MyTitle title={title} />,
        document.getElementById('example')
    );
```

> 更多验证器说明如下：

```js
    React.createClass({
      propTypes: {
        // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
       optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,

        // 可以被渲染的对象 numbers, strings, elements 或 array
        optionalNode: React.PropTypes.node,

        //  React 元素
        optionalElement: React.PropTypes.element,

        // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
        optionalMessage: React.PropTypes.instanceOf(Message),

        // 用 enum 来限制 prop 只接受指定的值。
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

        // 可以是多个对象类型中的一个
        optionalUnion: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
          React.PropTypes.instanceOf(Message)
        ]),

        // 指定类型组成的数组
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

        // 指定类型的属性构成的对象
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

        // 特定 shape 参数的对象
        optionalObjectWithShape: React.PropTypes.shape({
          color: React.PropTypes.string,
          fontSize: React.PropTypes.number
        }),

        // 任意类型加上 `isRequired` 来使 prop 不可空。
        requiredFunc: React.PropTypes.func.isRequired,

        // 不可空的任意类型
        requiredAny: React.PropTypes.any.isRequired,

        // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
        customProp: function(props, propName, componentName) {
          if (!/matchme/.test(props[propName])) {
            return new Error('Validation failed!');
          }
        }
      },
      /* ... */
    });
```

### React 组件 API

1. 设置状态： setState
2. 替换状态： replaceState
3. 设置属性： setProps
4. 替换属性： replaceProps
5. 强制更新： forceUpdate
6. 获取DOM节点： findDOMNode
7. 判断组件挂载状态： isMounted

#### 1. setState: 设置状态
> setState(object nextState[, function callback])

参数说明
    nextState，将要设置的新状态，该状态会和当前的state合并
    callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。


#### 2. replaceState: 替换状态

>replaceState(object nextState[, function callback])

参数说明
    nextState，将要设置的新状态，该状态会替换当前的state。
    callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。

#### 3. setProps: 设置属性

> setProps(object nextProps[, function callback])

参数说明
    nextProps，将要设置的新属性，该状态会和当前的props合并
    callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
设置组件属性，并重新渲染组件。
props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。

#### 4. replaceProps: 替换属性

> replaceProps(object nextProps[, function callback])

参数说明
    nextProps，将要设置的新属性，该属性会替换当前的props。
    callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
replaceProps()方法与setProps类似，但它会删除原有

#### 5. forceUpdate: 强制更新

> forceUpdate([function callback])

参数说明
    callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()

> 一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。

#### 6. findDOMNode: 获取DOM节点

>DOMElement findDOMNode()

返回值：DOM元素DOMElement
如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

#### 7. isMounted: 判断组件挂载状态
bool isMounted()
返回值：true或false，表示组件是否已挂载到DOM中
isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。


### React 组件生命周期

组件的生命周期可分成三个状态：
    Mounting：已插入真实 DOM
    Updating：正在被重新渲染
    Unmounting：已移出真实 DOM
    
生命周期的方法有： componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount

    componentWillMount： 组件将要渲染
        在渲染前调用,在客户端也在服务端。
    componentDidMount: 组件渲染完成
        在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    componentWillReceiveProps： 组件将接受参数
        在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    shouldComponentUpdate： 是否要更新组件
        返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
    可以在你确认不需要更新组件时使用。
    componentWillUpdate： 组件即将更新
        在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentDidUpdate: 组件更新完成
        在组件完成更新后立即调用。在初始化时不会被调用。
    componentWillUnmount: 组件将会被移除
        在组件从 DOM 中移除的时候立刻被调用。

> 小Demo: Hello 组件加载以后，通过 componentDidMount 方法设置一个定时器，每隔100毫秒重新设置组件的透明度，并重新渲染：

```
    var Hello = React.createClass({
      getInitialState: function () {
        return {
          opacity: 1.0
        };
      },

      componentDidMount: function () {
        this.timer = setInterval(function () {
          var opacity = this.state.opacity;
          opacity -= .05;
          if (opacity < 0.1) {
            opacity = 1.0;
          }
          this.setState({
            opacity: opacity
          });
        }.bind(this), 100);
      },

      render: function () {
        return (
          <div style={{opacity: this.state.opacity}}>
            Hello {this.props.name}
          </div>
        );
      }
    });

    ReactDOM.render(
      <Hello name="world"/>,
      document.body
    );
```

### React 表单与事件

```
    var ShowInputMessage = React.createClass({
        getInitialState: function() {
          return {value: 'Hello World'};  
        },
        
        handleChange: function(event) {
          this.setState({value: event.target.value});  
        },
        
        render: function() {
            var value = this.state.value;
            return (
                <div>
                    <input type="text" value={value} onChange={this.handleChange} />
                    <h4>{value}</h4>
                </div>
            );
        }
    });

    ReactDOM.render(
//      <HelloMessage name="xiaowang" />, document.body
        <ShowInputMessage />,
        document.getElementById('example')
    );
```

> 采用父组件，子组件

```
    var Content = React.createClass({
      render: function() {
        return  (
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
      }
    });
    var ShowInputMessage = React.createClass({
      getInitialState: function() {
        return {value: 'Hello Runoob!'};
      },
      handleChange: function(event) {
        this.setState({value: event.target.value});
      },
      render: function() {
        var value = this.state.value;
        return (
            <div>
                <Content myDataProp = {value} 
                  updateStateProp = {this.handleChange}></Content>
            </div>
        );
      }
    });
    ReactDOM.render(
      <ShowInputMessage />,
      document.getElementById('example')
    );
```





































