// 目覚まし時計クラス
var AlarmClock = /** @class */ (function () {
    function AlarmClock() {
        this.state = "normal";
    }
    // アラーム設定イベント
    AlarmClock.prototype.setAlarm = function () {
        switch (this.state) {
            case "normal":
                this.state = "alarmSet";
                return "none";
            default:
                return "none";
        }
    };
    // アラーム解除イベント
    AlarmClock.prototype.cancelAlarm = function () {
        switch (this.state) {
            case "alarmSet":
                this.state = "normal";
                return "none";
            case "alarmSounding":
                this.state = "normal";
                return "stopAlarm";
            case "snoozing":
                this.state = "normal";
                return "none";
            default:
                return "none";
        }
    };
    // アラーム設定時刻到達イベント
    AlarmClock.prototype.reachedToAlarmTime = function () {
        switch (this.state) {
            case "alarmSet":
                this.state = "alarmSounding";
                return "soundAlarm";
            default:
                return "none";
        }
    };
    // スヌーズイベント
    AlarmClock.prototype.snooze = function () {
        switch (this.state) {
            case "alarmSounding":
                this.state = "snoozing";
                return "stopAlarm";
            default:
                return "none";
        }
    };
    // スヌーズ設定時間経過イベント
    AlarmClock.prototype.elapseSnoozeTime = function () {
        switch (this.state) {
            case "snoozing":
                this.state = "alarmSounding";
                return "soundAlarm";
            default:
                return "none";
        }
    };

    //状態を取得するgetterを追加。
    AlarmClock.prototype.getState = function () {
        return this.state;
    };

    //状態をセットするsetterを追加。
    AlarmClock.prototype.setState = function (state) {
        this.state = state;
    };

    return AlarmClock;
}());

export {AlarmClock};

const clock = new AlarmClock();
clock.setAlarm();
console.log(clock.getState());

 clock.setState("soundAlarm");
 clock.setAlarm();
console.log(clock.getState());
