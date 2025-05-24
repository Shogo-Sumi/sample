//この値を比較し、誤差が10^(-10)の範囲ならTrueを返す。

export function diff(a, b) {
    const c = 1e-10;
    console.log(a);
    return Math.abs(a - b) < c;
}
