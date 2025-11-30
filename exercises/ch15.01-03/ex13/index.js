//問題で指定された要素をCSSセレクタで指定してconsole.logで表示する。
//https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector
//https://developer.mozilla.org/ja/docs/Web/API/Document/querySelectorAll

console.log( document.querySelectorAll("nav a"));
console.log( document.querySelector(".product-item"));//最初のアイテム
console.log( document.querySelector(".cart img"));//カートのイメージ
console.log( document.querySelectorAll(".product-list .price"));//商品リストのすべての価格
console.log( document.querySelectorAll(".product-list .product-item img"));//商品リストのすべての画像
console.log( document.querySelector(".search-bar button"));//検索バー内のボタン
console.log( document.querySelector("footer p"));//フッター内のパラグラフ
console.log( document.querySelectorAll(".product-list .product-item:nth-child(even)"));//商品リストの偶数番目の商品
console.log( document.querySelector(".account img"));//ヘッダー内のアカウントリンク画像
console.log(Array.from(document.querySelectorAll("nav a"))//ナビゲーションの一覧を配列の要素として
       .find(a => a.textContent.trim() === "会社情報"));//会社情報の文字
