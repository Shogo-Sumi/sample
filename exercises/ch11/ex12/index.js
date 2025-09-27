//passwordが7文字以下の場合の独自エラー
class PasswordError extends Error {
 constructor(id,password) {
 super(`Id '${id}' And Password (${password}) must be 8 characters or more`);
 this.id = id;
 this.password = password;
 }
 }

function checkPassword(id,password){
    try{
        //id,passwordがない場合
        if (id === undefined || id === null || password === undefined || password === null){
            return "id or password is not udefined or null"
        }

        //passwordは文字列であること
        if (typeof password !== 'string'){
            return "password must be String"
        }

        //id,passwordが7文字以下の場合
        if (password.length <= 7){
            throw new PasswordError(id,password);
        }

        return `Id '${id}' and Password ${password} is Succeed `
    } catch (error) {
    
    throw error;
  }
}

//テスト
try {
  console.log(checkPassword(1, 'testtest')); // 8文字: 成功
  console.log(checkPassword()); // undefined: エラー
  console.log(checkPassword(1, 'test')); // 4文字: エラー
} catch (error) {
  console.error(`Error: ${error.message}`);
}