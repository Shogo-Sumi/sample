import { AlarmClock } from "./index.js";

//testcase
//State 1.normal,2.alarmSet,3.alarmSounding,4.snoozing 時計の状態
//Action 1.none,2.soundAlarm,3.stopAlarm　時計が実行する動作
//Event 1.setAlarm,2.canelAlarm,3.reachedToAlarmTime,4.snooze,5.elapseSnoozeTime

//StateとActionが変更されるのは、Event1-5の場合のイベントによるもの
//State(状態)をテストケース4パターンとして、それぞの初期状態に任意のEvent(イベント)を実行した場合のAction(動作)をテストする。

const clock = new AlarmClock();

describe("AlarmClock Test", () => {
  it("Event 1.setAlarm", () => {
    clock.setState("normal")
    expect(clock.setAlarm()).toStrictEqual("none");
    expect(clock.getState()).toStrictEqual("alarmSet");
    clock.setState("alarmSet")
    expect(clock.setAlarm()).toStrictEqual("none");
    expect(clock.getState()).toStrictEqual("alarmSet");
    clock.setState("alarmSounding")
    expect(clock.setAlarm()).toStrictEqual("none");
    expect(clock.getState()).toStrictEqual("alarmSounding");
    clock.setState("snoozing")
    expect(clock.setAlarm()).toStrictEqual("none");
    expect(clock.getState()).toStrictEqual("snoozing");
  });
});
