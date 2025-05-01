const a = "パン";

//NFC
//「パ」を表す30D1と「ン」を表す30F3を結合
const b = "\u30D1"+"\u30F3"

//NFD
//「ハ」を表す30CFと「゜」を表す309Aと「ン」を表す30F3を結合
const c = "\u30CF"+"\u309A"+"\u30F3"


console.log(a);
console.log(b);
console.log(c);

console.log("a===b",a===b);
console.log("b===c",b===c);
console.log("a===c",a===c);
console.log("a:"+a.codePointAt(0).toString(16),"b:"+b.codePointAt(0).toString(16),"c:"+c.codePointAt(0).toString(16));

