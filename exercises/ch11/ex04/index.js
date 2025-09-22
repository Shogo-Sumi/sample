// これから (N, K) と (K, M) の行列の乗算を行う (この値は色々変更して試すこと)
//(100,200)と(200,300)の行列の乗算
//(100,200)*(200,300)は(100,300)の行列となる(N,M)
const [N, K, M] = [300, 600, 900];

// 配列版: (N, K) の行列を要素数 N * K の1次元配列で表現する ((i, j) は array[K * i + j] で参照)
//例えば(2,2)の行列の要素を1次元配列で表現すると
//array[K*i+j]=array[2*0+0]=array[0];i=0,j=0
//array[2*0+1]=array[1];i=0,j=1
//array[2*1+0]=array[2];i=1,j=0
//array[2*1+1]=array[3];i=1,j=1;
// [0,0](array[0]) [0,1](array[1])
// [1,0](array[2]) [1,1](array[3])

//例えば(3,3)の行列の要素を1次元配列で表現すると
//array[K*i+j]=array[3*0+0]=array[0];i=0,j=0
//array[3*0+1]=array[1];i=0,j=1
//array[3*0+2]=array[2];i=0,j=2
//array[3*1+0]=array[3];i=1,j=0;
//array[3*1+1]=array[4];i=1,j=1
//array[3*1+2]=array[5];i=1,j=2
//array[3*2+0]=array[6];i=2,j=0
//array[3*2+1]=array[7];i=2,j=1;
//array[3*2+2]=array[8];i=2,j=2

// [0,0](array[0]) [0,1](array[1]) [0,2](array[2])
// [1,0](array[3]) [1,1](array[4]) [1,2](array[5]) 
// [2,0](array[6]) [2,1](array[7]) [2,2](array[8]) 

//lhsA = Array(100 * 200) = Array(20000)
const lhsA = Array(N * K)
  .fill(0.0)
  .map(() => Math.random());
const rhsA = Array(K * M)//rhsA = Array(200*300) = Array(60000)
  .fill(0.0)
  .map(() => Math.random());
const resultA = Array(N * M).fill(0.0); //resultA = Array(100 * 300) = Array(30000)

function arrayMultiply() {
  resultA.fill(0.0);
  // 問題: ここで resultA に lhsA と rhsA の乗算結果を格納してね
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let sum = 0.0;
      for (let k = 0; k < K; k++) {
        sum += lhsA[K * i + k] * rhsA[M * k + j];//lhsA[0]*rhsA[0];i=j=k=0;
      }
      resultA[M * i + j] = sum;
    }
  }
}

// 型付き配列版 (Float64Array 以外の型も試してみると良い)
const lhsB = new Float64Array(N * K).fill(0.0).map((_, i) => lhsA[i]);
const rhsB = new Float64Array(K * M).fill(0.0).map((_, i) => rhsA[i]);
const resultB = new Float64Array(N * M).fill(0.0);

function typedArrayMultiply() {
  resultB.fill(0.0);
  // 問題: ここで resultB に lhsB と rhsB の乗算結果を格納してね
   for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let sum = 0.0;
      for (let k = 0; k < K; k++) {
        sum += lhsB[K * i + k] * rhsB[M * k + j];
      }
      resultB[M * i + j] = sum;
    }
  }
}

const TEST_TIMES = 100;
const TESTS = [arrayMultiply, typedArrayMultiply];
function test(fn) {
  let result;
  for (let i = 0; i < TEST_TIMES; ++i) {
    result = fn();
  }
  return result;
}

// warmup
for (let i = 0; i < TESTS.length; ++i) {
  test(TESTS[i]);
}

// 測定開始
for (let i = 0; i < TESTS.length; ++i) {
  const start = performance.now();
  test(TESTS[i]);
  const end = performance.now();
  console.log(`${TESTS[i].name}: ${end - start}`);
}
