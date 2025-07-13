//P417,P418を参照

//3つのプロパティを定義
let p = Object.defineProperties({}, {
x: { value: 1, writable: true, enumerable: true, configurable: true },
y: { value: 2, writable: false, enumerable: false, configurable: false },
z: { value: 3 },
});

//プロパティ変更前の値の確認
console.log("変更前のpの確認:",p.x,p.y,p.z);

//プロパティの変更
p.x=10;p.y=20;p.z=30;

console.log("プロパティ変更後の値");
console.log(p.x,p.y,p.z);

//hasOwnProperty
console.log("hasOwnPropertyの実行結果");
console.log("x:",p.hasOwnProperty("x"),"y:",p.hasOwnProperty("y"),"z:",p.hasOwnProperty("z"));

//propertyIsEnumerable
console.log("propertyIsEnumerableの実行結果");
console.log("x:",p.propertyIsEnumerable("x"),"y:",p.propertyIsEnumerable("y"),"z:",p.propertyIsEnumerable("z"));



//プロパティの削除
console.log("プロパティ削除の実行結果");
delete p.x;delete p.y;delete p.z
console.log("x:",p.x,"y:",p.y,"z:",p.z);



