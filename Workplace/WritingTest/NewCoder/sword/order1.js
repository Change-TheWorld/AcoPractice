/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
     inputArr.push(input);
    console.log(inputArr[0]);
    
    inputArr = input.split(" ");
    inputArr.forEach(function(item,index){
        inputArr[index] = +item;// 转化为数字
    });
    // 下面就可以对数据进行处理......

    console.log(inputArr);
    inputArr = [];// 清空数组
    rl.close();
});
 
rl.on('close', function() {
    console.log('程序结束');
    process.exit(0);
});
*/

var readline=require("readline");
var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var is_first=true;
rl.on("line",function(line){
    var  num,arr=[],num1;
    if(is_first){
         num=line;
        is_first=false;
        return false;
    }
 
    arr=line.split("\n").join(" ").split(" ");
    for(var k=0;k<arr.length;k++){
        if(arr[k]===""){
            arr.splice(k,1);
        }
    }
 
    num1=arr.length;
 
   var sum=0,sum1=0;
    for(var i=0;i<num1;i++){
        sum=sum+parseInt(arr[i]);
    }
    var aver=sum/num1;
    var opt=true;
    if(sum%num1!=0){
        console.log(-1);
    }else{
        for(var j=0;j<num1;j++){
            if((arr[j]-aver)%2!=0){
                opt=false;
            }
            if(arr[j]>=aver){
                sum1=arr[j]-aver+sum1;
            }
 
        }
        if(sum1%2!=0||opt==false){
            console.log(-1);
        }else{
            console.log(sum1/2);
        }
    }
});



