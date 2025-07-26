export function add(matrix1,matrix2){
	//nullかundefinedの場合。
	if(　!matrix1 || !matrix2 ){
		return "行列が定義されていません";
	}
	//行列の足し算は、2つの行列の長さが等しくなければ計算できない。
	if(matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length){
		return "行と列の数が一致しません。";
	}

	let table = new Array(matrix1.length);
	
	for ( let i = 0 ; i < matrix1.length ; i++){
		table[i] = new Array(matrix1[0].length);
		for (let j = 0 ; j < matrix2[0].length ; j++){
			table[i][j] = matrix1[i][j] + matrix2[i][j];
		}
	}

	return table;
}


export function multi(matrix1,matrix2){
	//nullかundefinedの場合。
        if(　!matrix1 || !matrix2 ){
                return "行列が定義されていません";
        }
	//行列の乗算は、行列1の列数と行列2の行数が等しくなければ計算できない。
        if( matrix1[0].length !== matrix2.length){
                return "行と列の数が一致しません。";
        }
        
	//配列1、2の行を格納
	const row1 = matrix1.length;
	const row2 = matrix2.length;
	//配列1、2の列を格納
	const col1 = matrix1[0].length;
	const col2 = matrix2[0].length;
	//配列の乗算は配列1の列と配列2の行をかけた行列となる
        let table = new Array(row1);
        
	//結果を格納する配列の作成
        for ( let i = 0 ; i < row1 ; i++){
                table[i] = new Array(col2).fill(0);
	}

	//乗算を実施
	for (let j = 0 ; j < row1 ; j++){
		for (let k = 0; k < col2 ; k++){
			for (let l = 0 ; l < col1; l++){
				table[j][k] += matrix1[j][l] * matrix2[l][k];
	}
		}
	}

	return table;
}
       



/*

// 2次元配列を生成する。
let table = new Array(5);
 for(let i = 0; i < table.length; i++) {
 table[i] = new Array(5);
 }
 // 乗算テーブルの10行分の配列。
// 各行には列が10個存在する。
// 配列を初期化する。
for(let row = 0; row < table.length; row++) {
 for(let col = 0; col < table[row].length; col++) {
 table[row][col] = row + col;
 }
 }

    const matrix1 = [
        [1, 2],
        [3, 4]
    ];
    
    const matrix2 = [
        [5, 6],
        [7, 8]
    ];

//console.log(table); // => 35
console.log(add(matrix1,matrix2));
console.log(multi(matrix1,matrix2));

*/
