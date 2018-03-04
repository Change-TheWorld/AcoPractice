const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];

var numDecodings = function (s) {
    var len = s.length;
    if (s == null || len == 0)
    {
        return 0;
    }
    var dp = new Array(len+1);
    dp[0] = 1;
    for (var i = 1; i < dp.length; ++i) 
    {
        dp[i] = (s.charAt(i - 1) == '0') ? 0 : dp[i - 1];
        if (i > 1 && (s.charAt(i - 2) == '1' || (s.charAt(i - 2) == '2' && s.charAt(i - 1) <= '6'))) 
        {
            dp[i] += dp[i - 2];
        }
    }
    return dp[len];
}

rl.on('line', function (input) {
    inputArr.push(input);
    var str = inputArr[0];
    var result = numDecodings(str);
    console.log(result);

    inputArr = [];// 清空数组
    rl.close();
});
 
rl.on('close', function() {
    process.exit(0);
});