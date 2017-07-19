/**
 * @Author: TaoXiaoLin(Aco)
 * @Date: Create/Modified on date: 2017 /7 /17  time: 16: 48
 * @Description: gulpfile.js
 */
var prod = require('./build/gulpfile.prod.js');
var dev = require('./build/gulpfile.dev.js');
prod();
dev();