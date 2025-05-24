//この値を比較し、誤差が10^(-10)の範囲ならTrueを返す。

export function code(a,b,c) {
    console.log("a:",a,"b:",b,"c:",c);
    console.log("a.length",a.length);
    return a===b,a===c;
}
