//月の日数が31の場合、tureを返し、それ以外の場合はfalseを返す。

const MonthDays = {
  // if-elseの場合
  days_if(str) {
      if (str === 'Jan') {
        return true;
      } else if (str === 'Feb') {
        return false;
      } else if (str === 'Mar') {
        return true;
      } else if (str === 'Apr') {
        return false;
      } else if (str === 'May') {
        return true;
      } else if (str === 'Jun') {
        return false;
      } else if (str === 'Jul') {
        return true;
      } else if (str === 'Aug') {
        return true;
      } else if (str === 'Sep') {
        return false;
      } else if (str === 'Oct') {
        return true;
      } else if (str === 'Nov') {
        return false;
      } else if (str === 'Dec') {
        return true;
      } else {
        return "Please input Month";
      }
    },

  // switchの場合
  days_switch(str) {
      switch (str) {
        case 'Jan':
          return true;
          break;
        case 'Feb':
          return false;
          break;
        case 'Mar':
          return true;
          break;
        case 'Apr':
          return false;
          break;
        case 'May':
          return true;
          break;
        case 'Jun':
          return false;
          break;
        case 'Jul':
          return true;
          break;
        case 'Aug':
          return true;
          break;
        case "Sep":
          return false;
          break;
        case 'Oct':
          return true;
          break;
        case 'Nov':
          return false;
          break;
        case 'Dec':
          return true;
          break;
        default:
          return "Please input Month";
          break;
      }
  }
};

// テスト

const a = "Jan";

// if-else メソッドのテスト
console.log(MonthDays.days_if(a));
console.log(MonthDays.days_if("Feb"));
console.log(MonthDays.days_if("Mar"));
console.log(MonthDays.days_if("Apr"));
console.log(MonthDays.days_if("May"));
console.log(MonthDays.days_if("Jun"));
console.log(MonthDays.days_if("Jul"));
console.log(MonthDays.days_if("Aug"));
console.log(MonthDays.days_if("Sep"));
console.log(MonthDays.days_if("Oct"));
console.log(MonthDays.days_if("Nov"));
console.log(MonthDays.days_if("Dec"));


// switch メソッドのテスト
console.log(MonthDays.days_switch("Jan"));
console.log(MonthDays.days_switch("Feb"));
console.log(MonthDays.days_switch("Mar"));
console.log(MonthDays.days_switch("Apr"));
console.log(MonthDays.days_switch("May"));
console.log(MonthDays.days_switch("Jun"));
console.log(MonthDays.days_switch("Jul"));
console.log(MonthDays.days_switch("Aug"));
console.log(MonthDays.days_switch("Sep"));
console.log(MonthDays.days_switch("Oct"));
console.log(MonthDays.days_switch("Nov"));
console.log(MonthDays.days_switch("Dec"));


//オブジェクトのエクスポート
//module.exports = Escape; 
