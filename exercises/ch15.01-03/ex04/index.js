//グローバルオブジェクトにundefinedが設定されていることの確認

console.log(globalThis.hasOwnProperty('undefined'));
console.log(globalThis.undefined === undefined); 