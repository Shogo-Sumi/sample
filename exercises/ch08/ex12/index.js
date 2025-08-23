//無名関数の引数名を省略して記載する。
//Swift iOS等で使用
//elixir並行性とスケーラビリティに優れる。
//(a, b) => a + b 相当の無名関数を、 Swift では { $0 + $1 } 、 Elixir では &(&1 + &2) のように書ける。
//console.log(arr.reduce(f("$1 + $2"), 0));
//console.log(arr.reduce(f(a,b) => a+b))
//functionコンストラクタ
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
//console.log(arr.reduce((a, b) => a + b, 0));
//console.log(arr.reduce({$0+$1}, 0));

/*
const f = new Function ( 
    "COUNT",
    function process(count){
        if (count <0){
            return;
        }
        console.log(count);
        process(count - 1);
    }
)

console.log(f("42"));
*/

export function f(body){//fは引数として、関数の本体を受け取る
    console.log(body);
    return new Function('$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10', `return ${body}`);
    //new Function('$1','$2',...,'$10','<関数式>')であるため、関数式に引数10個が引き渡される。
    // function('$1',...$10){
    // return $bodyに記載された処理
    //}
}

console.log(f("42")());
console.log(f("$1 + 1")(1));
console.log(f("$1 + $2 + $3 + $4 + $5 + $6 + $7 + $8 + $9 + $10")(
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz"
      ));
/*
console.log(
    f("{ const result = $1 + $2;\n return result; }")(1, 2)
);

数式にの中にreturnが記載されているため構文エラーとなる。

*/

