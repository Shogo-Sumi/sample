//Javascriptでのファイル操作。13.1.4 Nodeのコールバックとイベント
//openSync()について
//https://www.geeksforgeeks.org/node-js/node-js-fs-opensync-method/
//https://qiita.com/pyon_kiti_jp/items/a9ebf78ca2ef053c8748
//readFileについて
//https://note.affi-sapo-sv.com/nodejs-file-read.php
//node.jsドキュメント
//https://nodejs.org/api/fs.html

import { openSync, readSync, closeSync } from 'fs'

//ファイルシステム関連のAPIをインポート。

function* readLines(filePath) {//ファイルパスを引数に取る。
    const BUFFER_SIZE = 1024; //ファイルのサイズは一定のサイズごと
    let fd;
    try {
        //openSyncは(path,flag,mode)
        fd = openSync(filePath, 'r');//読み取りモードでファイルを開く
        let buffer = Buffer.alloc(BUFFER_SIZE);
        let leftover = ''; //前回の残りデータ
        let position = 0;//ファイル内の読み込み開始位置

        while (true) {
            // バッファにデータを読み込む
            const bytesRead = readSync(fd, buffer, 0, BUFFER_SIZE, position);//(ファイルディスクリプタ,データ格納用バッファー,オフセット(バッファ内の書き込み開始位置),length読み込むバイト数,ファイル内の読み込み開始位置)
            if (bytesRead === 0) {//読み込んだバッファが0＝ファイルの末端に到達
                if (leftover) {
                    yield leftover; //前回の残りデータを出力
                }
                break;
            }

            //読み込んだデータはバイナリデータなので、文字列に変換する。
            const data = leftover + buffer.toString('utf8', 0, bytesRead);
            //const lines = data.split('\n');//改行を削除した文字列を代入
            const lines = data.split(/\r?\n/).filter(line => line !== '');//windows環境のため、改行コードの取り扱いが異なる
            
            //最後の要素をポップで取り出す
            leftover = lines.pop();

            //各行をyield
            for (const line of lines) {
                yield line;
            }

            position += bytesRead;//次回の読み込み開始位置を移動
        }
    } finally {
        //必ずファイルを閉じる
        if (fd !== undefined) {
            closeSync(fd);
        }
    }
}

//テスト
try {
    for (const line of readLines('example.txt')) {
        process.stdout.write(line + ' ');//console.logだと改行されて表示されるため
    }
} catch (e) {
    console.error('Error:', e.message);
}