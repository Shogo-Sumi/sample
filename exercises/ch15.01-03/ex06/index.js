//  navigatorについて
//https://developer.mozilla.org/ja/docs/Web/API/Navigator

//navigatorを使用してデータを取得
const data = [
  ["ユーザーエージェント", navigator.userAgent],
  ["使用言語", navigator.language || navigator.userLanguage || "不明"],
  ["CPUコア数", navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency}コア` : "不明"],
  ["メモリ容量", navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "不明"],
  ["タッチ対応", navigator.maxTouchPoints > 0 ? "対応（スマホ/タブレット）" : "非対応（PC）"],
  ["Cookie有効", navigator.cookieEnabled ? "有効" : "無効"],
  ["オンライン状態", navigator.onLine ? "オンライン" : "オフライン"],
  ["ブラウザの指紋ID", crypto.randomUUID ? crypto.randomUUID() : "取得済み"],
  ["現在時刻（日本時間）", new Date().toLocaleString("ja-JP")],
];

const tbody = document.querySelector("tbody");//tbodyにテーブルを追加
data.forEach(([key, value]) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${key}</th>
    <td style="color:red; font-weight:bold;">${value}</td>
  `;
  tbody.appendChild(tr);
});