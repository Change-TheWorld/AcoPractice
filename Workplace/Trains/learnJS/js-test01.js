//var a = [1,2,3,4];

/*
var b = a.shift();
console.log(b);
console.log(a);*/
/*
var b = a.pop();
console.log(b);
console.log(a);*/
/*
var b = a.shift();
console.log(b);
console.log(a);

var b = a.shift();
console.log(b);*/
//console.log(parseInt(0.0000008)) // >> 8

/*
console.log(a);
var a = 1;
*/

/*
function upperJSONKey(jsonObj){  
    for (var key in jsonObj){
        jsonObj["\""+ key[0].toUpperCase()+ key.substring(1, (key.length)) +"\""] = jsonObj[key];  
        delete(jsonObj[key]);  
    }  
    return jsonObj;  
}  

var obj = {'key':'value'};  
var newObj = upperJSONKey(obj);  
console.log(newObj);  
*/

/**哈希表去重 */
/*
function fun(arr){
    var array=[];
    var hash={};
    arr.forEach(function(value,index) {
        if(!hash[value]){
            hash[value]=true;
            array.push(value);
        }
    }, this);
    return array;
}
*/

/**利用set去重 */
/*
function fun(arr){
    var set=new Set(arr);
    var array=Array.from(set);
    console.log(array instanceof Array);
    return array;
}
*/

/**indexOf去重 */
/*
function fun(arr){
    var array=[];
    arr.forEach(function(value,index) {
        if(array.indexOf(value)<0){
            array.push(value);
        }
    }, this);
    return array;
}
*/
