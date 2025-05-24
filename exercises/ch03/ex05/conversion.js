//改行コードを変換する関数を2つ記載。


// LF (\n) を CR+LF (\r\n) に変換
export function lfToCrLf(text) {
    return text.replace(/\n/g, '\r\n');
}

// CR+LF (\r\n) を LF (\n) に変換
export function crLfToLf(text) {
    return text.replace(/\r\n/g, '\n');
}
