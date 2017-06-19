/*
mrakyun.Event = {
    //页面加载完成之后
    readyEvent: function (fn) {
        if (fn == null) {
            fn = document;
        }
        var oldonload = window.onload;
        fi(typeof window.onload != 'function') {
            window.onload = fn;
        } else {
            window.onload = function () {
                oldonload();
                fn();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent: function (element, type, handler) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function () {
                handler.call(element);
            });
        } else {
            element['on' + type] = handler;
        }
    },
    // 移除事件
    removeEvent: function (element, type, handler) {
        if (element.removeEnentListener) {
            element.removeEnentListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropagation: function (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        } else {
            ev.cancelBubble = true;
        }
    },
    // 取消事件的默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent: function (e) {
        var ev = e || window.event;
        if (!ev) {
            var c = this.getEvent.caller;
            while (c) {
                ev = c.arguments[0];
                if (ev && Event == ev.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return ev;
    }
};
*/

/*

function clone(obj) {    
    if (!obj || typeof (obj) != 'object')     //boolean, number, string, undefined, function, null  
        return obj;    
    var r = Array.prototype.splice === obj.splice ? [] : {};    
    for (var i in obj) {        
        if (obj.hasOwnProperty(i)) {            
            r[i] = clone(obj[i]);        
        }    
    }    
    return r;
} 
//数组、对象都可以for in,同时针对对象必须需要判断hasOwnProperty属性，以防克隆原型链上的属性


function copy(obj) {  
    if (typeof obj !== 'object') { 
        return obj;
    }
    var result = {};
    // var result = Object.create(Object.getPrototypeOf(obj)); 
    
    // 当需要复制原型链上的属性，可用上一条
    // 请注意：当原型链上的属性被修改时，源对象和目标对象都会发生变化！
    var props = Object.getOwnPropertyNames(obj);        // 获取源对象的属性，包括不可枚举的属性
    props.forEach(function (prop) {  
        var dec = Object.getOwnPropertyDescriptor(obj, prop);  // 获取源对象属性的属性描述值
        Object.defineProperty(result, prop, dec);    // 复制属性
    });  
    return result;
}


function deepCopy(obj) {        
    var type = Object.prototype.toString.call(obj);        
    if (typeof obj !== "object" || obj === null)  //boolean, number, string, undefined, function, null            
        return obj;                  
    
    //object(Date, Boolean, Number, String, RegExp, Array, Object)        
    if (type === "[object Date]")            //object Date            
        return new Date(obj.valueOf());        
    if (type === "[object Boolean]")         //object Boolean            
        return new Boolean(obj.valueOf());        
    if (type === "[object Number]")          //object Number            
        return new Number(obj.valueOf());        
    if (type === "[object String]")          //object String            
        return new String(obj.valueOf());        
    if (type === "[object RegExp]")          //object RegExp            
        return new RegExp(obj.valueOf());
        
    if (type === "[object Object]" || type === "[object Array]")  {            
        var newObj = (type === "[object Object]") ? Object.create(Object.getPrototypeOf(obj)) : [];            
        var props = Object.getOwnPropertyNames(obj);            
        for (var item in props) {                
            var des = Object.getOwnPropertyDescriptor(obj, props[item]);                
            if (des.hasOwnProperty("value"))                    
                des.value = arguments.callee(des.value);                       
            Object.defineProperty(newObj, props[item], des);            
        }            
        return newObj;        
    }        
    return obj;
}

// 
function clone(Obj) {
    var buf;   
    if (Obj instanceof Array) {
        buf = [];  // 创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object){
        buf = {};  // 创建一个空对象
        for (var k in Obj) {  // 为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    }else{
        return Obj;
    }
}

*/

/*
function strLenght(s,bUnicode255For1) {
    if(bUnicode255For1 === true){
        return s.length;
    }else{
        var result = 0;
        for(var i = 0; i < s.length; i++){
            result += s.charCodeAt(i) > 255 ? 2 : 1;
        }
        return result;
    }
}
*/
/*
('' + num).indexOf(2);

// 阻止事件冒泡
function stopBubble(e) {
    if(e && e.stopPropagation) {
        e.stopPropagation();
    }else{
        windows.event.cancelBubble = true;
    }
};

function stopBubble(e){
    if(e && e.stopPropagation){
        e.stopPropagation();
    }else{
        windows.event.cancelBubble = true;
    }
}

// 阻止浏览器的默认事件
function stopDefault(e) {
    if(e && e.preventDefault) {
        e.preventDefault();
    }else{
        windows.event.returnValue=false;
    }
}

function stopDefault(e){
    if(e && e.preventDefault){
        e.preventDefault();
    }else{
        windows.event.returnValue = false;
    }
}

*/

var arr = [1, 3, 4, 52, 4, 5, 4, 8, 7, 6, '12', '12', '哈哈', '哈哈'];

// 判断值是否在数组的方法“indexOf”是ECMAScript5方法，IE8以下不支持，需多写兼容低版本浏览器代码。 

//判断浏览器是否支持indexOf方法
if (!Array.prototype.indexOf) {
    //新增indexOf方法
    Array.prototype.indexOf = function (item) {
        var result = -1,
            arr_item = null;
        if (this.length == 0) {
            return result;
        }
        for (var i = 0, len = this.length; i < len; i++) {
            arr_item = this[i];
            if (arr_item === item) {
                result = i;
                break;
            }
        }
        return result;
    };
};

if(!Array.prototype.indexOf){
    Array.prototype.indexOf = function(item) {
        var result = -1,arr_item = null;
        if(this.length == 0){
            return result;
        }
        for(var i =0,len = this.length;i < len; i++){
            arr_item = this[i];
            if(arr_item === item){
                result = i;
                break;
            }
        }
        return result;
    };
};


// js数组去重
Array.prototype.unque1 = function () {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i]) == -1) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

Array.protype.test1 = function (){
    var newArr = [];
    for(var i = 0,len = this.length;i < len; i++){
        if(newArr.indexOf(this[i]) == -1){
            newArr.push(this[i]);
        }
    }
    return newArr;
}



console.log(arr.unque1());

Array.prototype.unque2 = function () {
    var result = {},
        newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (!result[this[i]]) {
            result[this[i]] = true;
            newArr.push(this[i]);
        }
    }
    return newArr;
};

Array.prototype.test2 = function() {
    var result = {},newArr = [];
    for(var i = 0,len = this.length;i < len; i++){
        if(!result[this[i]]){
            result[this[i]] = true;
            newArr.push(this[i]);
        }
    }
    return newArr;
}


console.log(arr.unque2());

Array.prototype.unque3 = function () {
    var newArr = [this[0]];
    for (var i = 1; i < this.length; i++) { // 从第二项开始遍历
        if (this.indexOf(this[i]) == i) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

Array.prototype.test3 = function(){
    var newArr = this[0];
    for(var i = 1,len = this.length;i < len;i++){
        if(this.indexOf(this[i]) == i){
            newArray.push(this[i]);
        }
    }
    return newArr;
}


console.log(arr.unque3());

Array.prototype.unque4 = function () {
    this.sort();
    var newArr = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== newArr[newArr.length - 1]) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}


console.log(arr.unque4());

/*
引申：合并数组并去重
一、concat()方法
思路：concat() 方法将传入的数组或非数组值与原数组合并,组成一个新的数组并返回。该方法会产生一个新的数组。
*/
function concatArr(arr1, arr2) {
    var arr = arr1.concat(arr2);
    arr = unique1(arr); //再引用上面的任意一个去重方法
    return arr;
}

//二、Array.prototype.push.apply()
//思路：该方法优点是不会产生一个新的数组。

var a = [1, 2, 3];
var b = [4, 5, 6];

Array.prototype.push.apply(a, b); //a=[1,2,3,4,5,6]
console.log(a);

//等效于:a.push.apply(a, b);
//也等效于[].push.apply(a, b); 
function concatArray(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
    arr1 = unique1(arr1);
    return arr1;
}

var foo="get-element-by-id";

function combo(msg){
    var arr = msg.split("-");
    var len = arr.length;    //将arr.length存储在一个局部变量可以提高for循环效率
    for(var i=1;i<len;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    msg=arr.join("");
    return msg;
}

console.log(combo(foo));



Array.prototype.uniq = function () {    
    var hasNaN = false;    
    for (var i = 0; i < this.length; i++) {        
        if (this[i] !== this[i]) hasNaN = true;        
        for (var j = i + 1; j < this.length;) {            
            if (this[i] === this[j] || (hasNaN && this[j] !== this[j])) {                
                this.splice(j, 1);            
            } else {                
                j++;            
            }        
        }    
    }    
    return this;
}














/*
var days = ['日','一','二','三','四','五','六']; var date = new Date();
console.log('今天是星期' + days[date.getDay()]);
console.log(date.getDay());
*/

//var s = "Hello2016".replace(/\d+/g,'');
//var s = "Hello2016".replace(/\d*/,'');
/*
console.log(s);
console.log(Math.round(0.5));
*/

/*
var _ = {}; // 假设这就是underscore哈
 
// 一个最简单的_.each方法的实现
_.each = function(arr, fn) {
　　for(var i = 0,len = arr.length; i < len; i++) {
　　　　fn(arr[i], i, arr);
　　}
　　return arr; // 把原数组返回
}


var arr = [1, 2, 3, 4, 5];
_.each(arr, function(el) {
    console.log(el);
});
*/

//数组排序
/*
var arr = new Array(6);
    arr[0] = 10;
    arr[1] = 5;
    arr[2] = 40;
    arr[3] = 25;
    arr[4] = 1000;
    arr[5] = 1;
    console.log(arr.sort());
    console.log(arr.sort(function (a, b) {return a - b;}));// 从小到大
    console.log(arr.sort(function (a, b) {return b - a;}));// 从大到小
*/

/*
var arr = ['item 1', 'item 2', 'item 3'];
var list = '<ul><li>' + arr.join('</li><li>') + '</li></ul>';
console.log(list);
*/

/*
var arr = new Array(6);
    arr[0] = "George";
    arr[1] = "John";
    arr[2] = "Thomas";
    arr[3] = "James";
    arr[4] = "Adrew";
    arr[5] = "Martin";
    console.log(arr);
    arr.splice(2,3,"William","JACK"); // 删除第三个元素以后的三个数组元素(包含第三个元素(重点！))，并用"William","JACK"进行替换
    console.log(arr);
*/
