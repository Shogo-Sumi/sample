//Dateオブジェクトについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date

export function daysMonth(year,month){
  let days = new Date(year,month,0);
  return days.getDate();
}

let year = 2025,month = 8;

console.log(daysMonth(year,month));

export function weekDays(start,end){
  const startday = new Date(start);
  const endday = new Date(end);
  let count = 0;

    //開始日から終了日までの間を1日ごとに確認する。日曜日と土曜日以外の場合countを増加させる。
    for (let d = new Date(startday); d <= endday; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    //0は日曜日、6は土曜日
    if (day !== 0 && day !== 6) {
      count++;
    }
  }
  return count;
}

const start = '2025-09-01',end ='2025-09-30';

console.log(weekDays(start,end));

export function dayOfWeek(day,locale){
  const date = new Date(day);
  //toLocaleDateString
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

const locale = 'ja-JP'
const locale2 = 'ja-fr'

console.log(dayOfWeek(start,locale));
console.log(dayOfWeek(start,locale2));

const now = new Date();
console.log(now.getDate());

//実行時の日付から1か月前の1日0時0分0秒の値を返す
export function lastMonth(){
  //実行時の日付を作成
  const now = new Date();

  //年を取得
  const year = now.getFullYear();

  //日付を取得
  const day = now.getDate();

  //日付と年から、対象の月を特定する方法が不明・・・



}
