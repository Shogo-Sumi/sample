
//任意のオブジェクトを引数に取る
//そのオブジェクトの任意のメソッド呼び出しに対して、以下を持つオブジェクトを配列に追加して保存する Proxy を作成する。言い換えると Proxy 経由のオブジェクトのメソッド呼び出し履歴を配列に記録する
//呼び出された時刻:timestamp
//メソッド名:name
//パラメータ(引数):args
//Proxy と 配列 双方への参照を返却する

export function makeProxyAndLogs(target) {
  const logs = []; //呼び出し履歴用の配列を定義


  //new Proxyについて：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy
  //target:プロキシーを設定する元のオブジェクトです。
  //handler:どの操作に介入するか、また介入された操作をどのように再定義するかを定義するオブジェクトです。

  const proxy = new Proxy(target, {
    get(target, prop, receiver) {
      //Reflectについて：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect
      //Reflect.getを使用して、ターゲットからプロパティを関数として取得
      //target:プロパティを取得する対象のオブジェクト。
      //prop:設定するプロパティ名。
      //receiver:ゲッターがあった場合、 target への呼び出しで使用する this の値を提供します。
      const value = Reflect.get(target, prop, receiver);

      // プロパティが関数の場合、履歴を残す
      if (typeof value === 'function') {
        return function (...args) {
          //履歴を記録する
          logs.push({
            name: prop.toString(),        //メソッド名
            args: [...args],              //引数
            timestamp: new Date(),        //呼び出し時刻。現在の時刻を取得。
          });

          //元のメソッドを実行して結果を返す
          return value.apply(this, args);
        };
      }

      // 関数じゃない場合、そのまま返す
      return value;
    },
  });

  //Proxy と logs 配列の参照を返す。
  return [proxy, logs];
}

const a = {
  p: 1,
  f: (x, y) => x + y,
};

const [proxy, logs] = makeProxyAndLogs(a);

console.log(logs);
console.log(proxy.p);
console.log(proxy.f(10, 20))
console.log(logs);