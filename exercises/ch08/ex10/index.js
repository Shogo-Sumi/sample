//関数を引数に受け取り、 call 相当の動きをするプロパティ myCall を追加する関数 addMyCall(f)を実装しなさい
//call()について
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//call()を使った場合

/*
export function addMyCall(f){
    //引き渡された関数にcall()相当の動きをするプロパティmyCallを追加
    f.myCall = function (thisStr,...Str){//関数fにmyCallプロパティを追加。値は第一引数に関数fが実行される際のthisの値、第二引数以降はfに引き渡される引数。
        console.log("関数f:",f);
        console.log("結果:",f.call(thisStr,...Str));
        return f.call(thisStr,...Str)//第一引数にthisの値を指定する。最初のテストではf.call({ a: 1 })となり、thisの参照先がオブジェクト{a: 1}となる。
        //つまり、f関数が持つreturn this.a;のthis.aの値は1となる。
    };
    return f;
}
*/

//f.myCall = function ({ a: 1 }){
//return f.call({ a: 1 })
//}

//bind()を使った場合


export function addMyCall(f){
    //引き渡された関数にcall()相当の動きをするプロパティmyCallを追加
    f.myCall = function (thisStr,...Str){//関数fにmyCallプロパティを追加。値は第一引数に関数fが実行される際のthisの値、第二引数以降はfに引き渡される引数。
        const fBind = f.bind(thisStr);//fBind定数を定義。関数fを第一引数thisStrへバインド。
        return fBind(...Str);//fBindに第二引数以降の値を引き渡す。
    };
    return f;
}


