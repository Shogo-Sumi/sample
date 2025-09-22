//エンディアンについて
// https://github.com/Shogo-Sumi/sample/tree/master/exercises-public/exercises/ch11
//32bit
//|00001111|00000111|00000011|00000001|
// Uint32Array
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Typed_arrays
//DataView.prototype.setUint32()
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32

//事前テスト
/*
let unit32 = new Uint32Array(1);
unit32[0] = 1;
console.log(unit32[0]);
console.log(unit32.length);
*/

export function littleTobig(input){
  const output = new Uint32Array(input.length);
  const buffer = new ArrayBuffer(4);//32bit用のバッファを作成
  const view = new DataView(buffer);//DataView のアクセサーは、プラットフォームアーキテクチャのエンディアンに関係なくデータにアクセスする方法を明確に制御する手段を提供

  for (let i = 0; i < input.length; i++){
    view.setUint32(0,input[i],true);//リトルエンディアンでセット。ビューの先頭から、設定する値を、littleEndianでセット
    output[i] = view.getUint32(0, false);//ビューの先頭から、littleEndian=falseで(bigEndian)データを読み取る。
  }

  return output;
}

export function bigToLittle(input) {
  const output = new Uint32Array(input.length);
  const buffer = new ArrayBuffer(4); //32bit用の//DataView のアクセサーは、プラットフォームアーキテクチャのエンディアンに関係なくデータにアクセスする方法を明確に制御する手段を提供バッファを作成
  const view = new DataView(buffer);

  for (let i = 0; i < input.length; i++) {
    view.setUint32(0, input[i], false); //ビッグエンディアンでセット。
    output[i] = view.getUint32(0, true); //ビューの先頭から、littleEndianでデータを読み取る
  }
  return output;
}

const input = new Uint32Array([0x99887766,0x11223344]);
const littleEndian = littleTobig(input);
console.log(input);
console.log(littleEndian);