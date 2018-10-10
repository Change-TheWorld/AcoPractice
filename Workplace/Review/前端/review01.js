if(typeof Array.isArray === 'undefined'){
    Arrar.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
}

// 
while(len--) {
    if(domList[len].type == 'checkbox') {
        checkBoxList.push(domList[list]);
    }
}

// 考察基础API
/**
 * 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。
 */

function comno(msg) {
    var arr = msg.split('-');
    for(var i = 1,len = arr.length; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase + arr[i].substr(1, arr[i].length - 1);
    }
    msg = arr.join('');
    return msg;
}


/**
 * 
 * 
 */

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;


// 定义创建HTML列表的方法
function list(type) {
    var result = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join('</li><li>');
    result += '</li></' + type + 'l>';

    return result;
}

// 判断一个单词是否是回文？

// 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如 mamam redivider .

function checkPalinDrom(str) {
    return str == str.split('').reverse().join();
}

// 去掉一组整型数组重复的值
let unique = function(arr) {
    let hashTable = {};
    let data = [];
    for(let i = 0,len = arr.length; i < len; i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}

module.exports = unique;

// 统计一个字符串出现最多的字母
function findMaxDuplicateChar(str) {
    if(str.length == 1) {
        return str;
    }
    let charObj = {};
    for(let i = 0; i < str.length; i++) {
        if(!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        }else {
            charObj[str.charAt(i)] += 1;
        }
    }
    let maxChar = '',
        maxVlaue = 1;
    for(var k in charObj) {
        if(charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;
}

module.expert = findMaxDuplicateChar;

// js 快排
function quickSort(arr) {
    var len =  arr.length;
    if(len <= 1)
        return arr;
    var pivotIndex = Math.floor(len / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right)); 
}

var a = [1,2,342,536,74,74,346,2,4,7,8865,3,0];
console.log(quickSort(a));


// 不借助临时变量，进行两个整数的交换
function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

module.exports = swap;

// 生成斐波那契数组的方法
function getFibonacci(n) {
    var fibArr = [];
    var i = 0;
    while(i < n) {
        if(i <= 1) {
            fibArr.push(i);
        }else{
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        }
        i++;
    }
    return fibArr;
}

// 随机生成指定长度的字符串
function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let temp = '',
        i = 0,
        len = str.length;
    for(i = 0; i < n; i++) {
        temp += str.charAt(Math.floor(Math.random() *len ));
    }
    return temp;
}

// git 常用命令







































