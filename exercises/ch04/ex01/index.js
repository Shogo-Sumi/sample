//方針　引数は実数と虚数を受け取る
//実数と虚数について、それぞれ、加算、減算、乗算、除算を行う。
//複素数の四則演算について
//https://w3e.kanazawa-it.ac.jp/math/category/fukusosuu/henkan-tex.cgi?target=/math/category/fukusosuu/fukusosuu-no-sisokuenzan.html&pcview=2
//(a+bi)*(c+di)=ac+adi+bci-cd
//(a+bi)/(C+di)=(ac+bd)+(bc-ad)i/(c^2+d^2)
// 加算を行う関数
export function add(a1, a2) {
  return {
    real: a1.real + a2.real,
    imag: a1.imag + a2.imag,
  };
}

// 減算を行う関数
export function sub(a1, a2) {
  return {
    real: a1.real - a2.real,
    imag: a1.imag - a2.imag,
  };
}

// 乗算を行う関数
export function mul(a1, a2) {
  return {
    real: a1.real * a2.real - a1.imag * a2.imag,
    imag: a1.real * a2.imag + a1.imag * a2.real,
  };
}

// 除算を行う関数
export function div(a1, a2) {
  //割る数[c^2+d^2]の計算
  const b = a2.real * a2.real + a2.imag * a2.imag;
  return {
    real: (a1.real * a2.real + a1.imag * a2.imag) / b,
    imag: (a1.imag * a2.real - a1.real * a2.imag) / b,
  };
}

// 検算
//const a1 = { real: 1, imag: 2 }; // 1 + 2i
//const a2 = { real: 3, imag: 4 }; // 3 + 4i

//const a3 = { real: -1, imag: -2 }; // 5 + (-2i)
//const a4 = { real: 1, imag: 0 }; // 0 + i

//console.log(add(a1, a2));
//console.log(sub(a1, a2));
//console.log(mul(a1, a2));
//console.log(div(a1, a2));

//console.log(add(a3, a4));
//console.log(sub(a3, a4));
//console.log(mul(a3, a4));
//console.log(div(a3, a4));
