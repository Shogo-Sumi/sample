//main.js
//sub.js defaultのエクスポート
//sub2.js 名前変換を伴うエクスポート
//sub3.js 再エクスポート用
//connect.js 再エクスポートとりまとめ用

import sumnum2 from './sub.js'; //defaultのインポート
import { subtraction as sub } from './sub2.js'; //名前変換を伴うインポート
import { multi } from './connect.js';//再エクスポートを伴うインポート

console.log(sumnum2(1,5));//6
console.log(sub(10,8)); //2
console.log(multi(2,6));//12


