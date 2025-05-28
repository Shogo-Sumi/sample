
let x=Symbol("a");
let y=Symbol("a");

console.log(x===y);

const z={
	[x]:"1",
	[y]:"2"
}

console.log(z);
console.log(z[x]);
console.log(z[y]);

let x2=Symbol.for("b");
let y2=Symbol.for("b");

console.log(x2===y2);

const z2={
        [x2]:"3",
        [y2]:"4"
}

console.log(z2);
console.log(z2[x2]);
console.log(z2[y2]);

