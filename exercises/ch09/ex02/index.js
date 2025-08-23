//問題は値を呼び出すたびに、その値が1増えること
//呼び出しもフィールドの値xで呼び出している。
//ゲッターを作成して、フィールドの値が呼び出された処理を関数として記載。

class C{
    constructor(){
        this.total = 0;
    }

    get x(){
        return this.total++;
    }

}

const a = new C();
console.log(a.x);
console.log(a.x);
console.log(a.x);

export {C};