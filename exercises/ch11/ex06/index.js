//正規表現チェッカー
//https://weblabo.oscasierra.net/tools/regex/

export function isEmailAddress(input) {
  // 最初に確認するべきは、2のnull,udefinedのパターン
  if (input === null || input === undefined) {
    return false;
  }

  // 次に確認するべきは文字列以外の入力があった場合のパターン
  if (typeof input !== "string") {
    return false;
  }

  // メールアドレスに使用してよい文字列かを判定
　// 基本的にメールアドレスは[メールアカウント@ドメイン部]の形となっている。
  // 今回のテストでは、使用してよい文字列は明示的に指定されている。コメント8,19の場合の記号＋半角英数字
  // 1.メールアドレスの先頭は使用が許可された記号または半角英数字でなくてはならない。
  // 2.@マークは必ず含まれている必要があり、メールアカウントは許可された文字列1文字以上の繰り返し。
  // 3.@マーク以降のドメイン部は、@の直後は半角英数字とする。コメント16
  // 4.ドメイン部は-ハイフン、ドット.を含んだ半角英数の繰り返しから成り立つ
  const emailRegex = /^([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+)@([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~][a-zA-Z0-9\-!#$%&'*+\-/=?^_`{|}~\.]*[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~])$/;
  if (!emailRegex.test(input)) {
    return false;
  }

  // メールアカウントとドメイン部で適用される条件が異なるため、@前後で分割。
  const [localPart, domain] = input.split("@");

  // コメント5,6の条件、64文字よりも大きなメールアカウントはfalse
  if (localPart.length > 64) {
    return false;
  }

  // コメント9の条件、255文字よりも大きなドメインはfalse
  if (domain.length > 252) {
    return false;
  }

  // コメント4の条件、ドット.の位置がメールアカウントの最初、末尾、連続する場合はfalse
  if (localPart.startsWith(".") || localPart.endsWith(".") || localPart.includes("..")) {
    return false;
  }

  // コメント13,14,15の条件、ドット.の位置がドメイン部の最初、末尾、連続する場合はfalse
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) {
    return false;
  }

  // コメント16の条件、許可されない文字列がドメイン部にある場合false
  const invalidLocalPartChars = /[ (),:<>\[\];\\"]/;
  if (invalidLocalPartChars.test(localPart)) {
    return false;
  }

  // コメント19の条件、許可される文字列以外がドメイン部にある場合false
  const invalidDomainChars = /[^a-zA-Z0-9\-\.!#$%&'*+\-/=?^_`{|}~]/;
  if (invalidDomainChars.test(domain)) {
    return false;
  }

  return true;
}