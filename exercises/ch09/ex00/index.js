const PROPERTY_NAME = "p1";
 function computePropertyName() { return "p" + 2; }
 let p = {
 [PROPERTY_NAME]: 1,
 [computePropertyName()]: 2
 };
 p.p1 + p.p2 // => 3

 console.log(p);
 console.log(p.p1);
 console.log(p.p2);