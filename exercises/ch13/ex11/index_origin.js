//awaitについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await
//参考：https://zenn.dev/singularity/articles/360d69fde8322d

//func:trueかfalseを返す関数式、maxRetry:リトライの上限,callback:funcが返すtrueもしくはfalseに応じて呼び出される関数。
export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let attempts = 0;//func関数への試行回数

  async function attempt() {
    attempts++;
    const result = await func();//非同期でfunc関数を呼び出す。呼び出した結果は、trueまたはfalse。
    console.log(func,result);

    if (result) {
      //resultの結果trueならば、コールバック関数を呼び出し終了。
      callback(true);
      return;
    }

    if (attempts > maxRetry) {
      //試行回数atemptsが最大試行回数maxRetryを超えたら、コールバックにfalseを渡し終了。
      callback(false);
      return;
    }

    //setTimeoutの待機時間はミリ秒単位
    //https://developer.mozilla.org/ja/docs/Web/API/Window/setTimeout
    const waitTime = 1000 * Math.pow(2, attempts - 1);
    setTimeout(attempt, waitTime);
  }

  // 初回の試行を即座に開始
  setTimeout(attempt, 0);
}

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