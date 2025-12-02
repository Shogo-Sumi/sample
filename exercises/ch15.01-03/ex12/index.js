(function() {
    //sqlテキストを取得
    const sql = window.getSelection().toString() || prompt('SQLを入力:');
    
    //SQLが入力されていない場合は終了
    if (!sql) {
        return;
    }
    
    //フォーマット
    const formatted = sql
        //改行を半角スペースに置換
        .replace(/\n/g, ' ')
        
        //連続する空白を1つにまとめる
        .replace(/\s+/g, ' ')
        
        //パスタSQL分をキーワードで改行
        .replace(/SELECT/gi, '\nSELECT')
        .replace(/FROM/gi, '\nFROM')
        .replace(/WHERE/gi, '\nWHERE')
        .replace(/JOIN/gi, '\nJOIN')
        .replace(/ORDER BY/gi, '\nORDER BY')
        .replace(/GROUP BY/gi, '\nGROUP BY')
        .replace(/HAVING/gi, '\nHAVING')
        
        //空白を削除
        .trim();
    
    // 結果を出力
    navigator.clipboard.writeText(formatted);
    
    // 完了メッセージ
    alert('フォーマット済みSQLをコピーしました！\n\n' + formatted);
})();