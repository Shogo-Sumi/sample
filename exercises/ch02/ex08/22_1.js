// Acornをインポート
const acorn = require('acorn');

// 解析対象のJavaScriptコード
const code = `
let a
 a
 =
 3
 console.log(a)
 `;

// Acornでコードを解析し、ASTを生成
const ast = acorn.parse(code, {
  ecmaVersion: 'latest', // 使用するECMAScriptのバージョン（例: 'latest'で最新）
  sourceType: 'script'   // 'script'（通常のスクリプト）または'module'（ESモジュール）
});

// 生成されたASTをコンソールに出力
console.log(JSON.stringify(ast, null, 2));
