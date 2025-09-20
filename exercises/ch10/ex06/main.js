//main.js
//sub.js エクスポートされていないモジュール

console.log('main.js before import');

import './sub.js'; //一度目のインポート

console.log('main.js 1 import sub.js after');

import './sub.js'; //二度目のインポート

console.log('main.js 2 import sub.js after');

import './connect.js'; //三度目のインポート

console.log('main.js 3 import connect.js after');


