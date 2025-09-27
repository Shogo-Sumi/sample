import { daysMonth,weekDays,dayOfWeek } from "./index.js";

const year = 2025,year2 = 2024,month = 8,month2=9,month3=2;

const start = '2025-09-01',start1 = '2025-08-01',end ='2025-09-30';

const locale = 'ja-JP',locale2 = 'ja-fr'

describe("Test littleTobig", () => {
  it("set関数が正しく動作すること", () => {
    expect(daysMonth(year,month)).toStrictEqual(31);
    expect(daysMonth(year,month2)).toStrictEqual(30);
    expect(daysMonth(year,month3)).toStrictEqual(28);
    expect(daysMonth(year2,month3)).toStrictEqual(29);
    expect(weekDays(start,end)).toStrictEqual(22);
    expect(weekDays(start1,end)).toStrictEqual(43);
    expect(dayOfWeek(start,locale)).toStrictEqual("月曜日");
    expect(dayOfWeek(start1,locale2)).toStrictEqual("金曜日");
  });
});
