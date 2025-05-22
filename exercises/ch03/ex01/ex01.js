//InfinityとNaNの計算結果を出力する。

let a = Infinity;
let b = -Infinity;
let c = NaN;

console.log('a='+a,'b='+b,'c='+c);



//a and a
console.log('a and a');
let aa1 = a+a,aa2 = a-a,aa3 = a*a,aa4 = a/a;
console.log(aa1,aa2,aa3,aa4);

//a and b
console.log('a and b');
let ab1 = a+b,ab2 = a-b,ab3 = a*b,ab4 = a/b;
console.log(ab1,ab2,ab3,ab4);

//a and c
console.log('a and c');
let ac1 = a+c,ac2 = a-c,ac3 = a*c,ac4 = a/c;
console.log(ac1,ac2,ac3,ac4);

//b and b
console.log('b and b');
let bb1 = b+b,bb2 = b-b,bb3 = b*b,bb4 = b/b;
console.log(bb1,bb2,bb3,bb4);

//b and c
console.log('b and c');
let bc1 = b+c,bc2 = b-c,bc3 = b*c,bc4 = b/c;
console.log(bc1,bc2,bc3,bc4);

//c and c
console.log('c and c');
let cc1 = c+c,cc2 = c-c,cc3 = c*c,cc4 = c/c;
console.log(cc1,cc2,cc3,cc4);




