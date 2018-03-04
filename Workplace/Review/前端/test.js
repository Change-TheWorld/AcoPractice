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
