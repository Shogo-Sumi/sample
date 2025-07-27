//文字列の書記素を反転する関数を作成する。
//intl.Segmenterについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
//ロケールに応じたテキストのセグメンテーションを可能にし、文字列から意味のある項目（書記素、単語、文）を取得することができます。
//与えられた文字列を適切に分割して、反転して返す関数を実装すればよい。
//絵文字をIntl.Segmenterで書基礎単位に分解する場合、granularityをgraphemeに指定する。
//https://qiita.com/suin/items/3da4fb016728c024eaca

export function reverse(str){
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const segments = Array.from(segmenter.segment(str)).map(segment => segment.segment);//各要素をセグメントとして分割し、セグメントを要素として持つ配列をmapで作成。

    // 書記素の配列を反転して結合
    return segments.reverse().join('');
}
