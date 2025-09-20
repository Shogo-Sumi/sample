//main.js
//sub.js defaultのエクスポート
//sub2.js 名前変換を伴うエクスポート
//sub3.js 再エクスポート用
//connect.js 再エクスポートとりまとめ用

import resumnum from './sub.js'; //☆追随して変更された箇所
import { subtraction2 as sub } from './sub2.js'; //☆追随して変更された箇所
import { multi } from './connect.js';//再エクスポートを伴うインポート

console.log(resumnum(1,5));//6//☆追随して変更された箇所
console.log(sub(10,8)); //2
console.log(multi(2,6));//12


