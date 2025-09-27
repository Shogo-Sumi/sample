//JSON.stringify()について
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

export function stringifyJSON(json) {
  //throw new Error("Not implemented yet");

  //配列の場合

  if(Array.isArray(json)){
    console.log(json);
    return `${json}`;
  }


}
