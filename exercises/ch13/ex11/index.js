//awaitについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await
//参考：https://zenn.dev/singularity/articles/360d69fde8322d

//func:trueかfalseを返す関数式、maxRetry:リトライの上限,callback:funcが返すtrueもしくはfalseに応じて呼び出される関数。
export function retryWithExponentialBackoff(func, maxRetry, base = 100) {
   return new Promise((resolve, reject) => {//Promiseを返すように,新しいPromiseオブジェクトを作成
    let attempts = 0;//合計値の初期値を設定

    const attempt = () => {
      attempts++;

      //Promiseは成功の場合と失敗の場合で挙動が異なる。
      //成功の場合はそのまま解決し、失敗の場合はリトライの処理が入る。
      Promise.resolve(func())
        .then((value) => {
          //成功の場合は即座に解決
          resolve(value);
        })
        .catch((err) => {
          //失敗の場合は、maxRetryで設定された失敗が許容される回数まで、続行する。
          if (attempts >= maxRetry) {
            //失敗が許容される回数を超えた場合、reject
            reject(new Error(`Retry failed after ${attempts} attempts: ${err.message}`));
            return;
          }

          //失敗が許容される回数の場合、前回の失敗時間の2倍の時間までは待つ
          const delay = base * Math.pow(2, attempts - 1);
          console.log(`Attempt ${attempts} failed. Retry in ${delay}ms...`);
          setTimeout(attempt, delay);
        });
    };

    // 初回は即実行
    attempt();
  });
}

//50%の確率で失敗する非同期関数
const flaky = () => new Promise((res, rej) => {
  setTimeout(() => {
    Math.random() < 0.5 ? res("OK!") : rej(new Error("Network error"));
  }, 200);
});

//5回までの失敗は許容する
retryWithExponentialBackoff(flaky, 5)
  .then(v => console.log("最終結果:", v))
  .catch(e => console.error("失敗:", e.message));



/*
function returnTrue(){
  return true;
}

function returnFalse(){
  return false;
}

async function returnRandom(){
  return Math.random() > 0.5;
}

function logResult(message){
  console.log("実行結果:",message);
}

retryWithExponentialBackoff(returnTrue, 3, logResult);
retryWithExponentialBackoff(returnFalse, 3, logResult);
retryWithExponentialBackoff(returnRandom, 3, logResult);
*/