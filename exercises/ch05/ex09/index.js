//任意の文字列を引数に取り、JSON.parseを実施する関数を記載する。できない場合、エラー内容を返す、catch処理を記載する。

export function parseJson(str) {
    try {
        const data = JSON.parse(str);//引数をJSONパースにかける
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: error.message };//失敗の場合、エラーメッセージを返す。
    }
}
