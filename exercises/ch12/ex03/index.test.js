import { counter } from "./index.js";

 const test1 = counter();

describe("counter", () => {
    it("checks 3 step counter", () => {
        expect(test1.next()).toStrictEqual({ value: 1, done: false });
        expect(test1.next()).toStrictEqual({ value: 2, done: false });
        expect(test1.next()).toStrictEqual({ value: 3, done: false });
    }
  )
    it("checks reset step", () => {
        try {
            test1.throw(new Error("reset"));
            console.log("Counter reset");
        } catch (e) {
            if (e.message !== "reset") {
                console.error("Unexpected error:", e.message); //リセット以外のエラー発生
                }
            }
    }
)
    it("checks 3 step counter", () => {
        expect(test1.next()).toStrictEqual({ value: 1, done: false });
        expect(test1.next()).toStrictEqual({ value: 2, done: false });
        expect(test1.next()).toStrictEqual({ value: 3, done: false });
    }
)
    it("checks not reset step", () => {
        try {
            test1.throw(new Error("not reset"));
            console.log("Counter not reset");
        } catch (e) {
            if (e.message !== "reset") {
                console.error("Unexpected error:", e.message); //リセット以外のエラー発生
                }
            }
    }
)
    it("checks 3 step counter", () => {
        expect(test1.next()).toStrictEqual({ value: 4, done: false });
        expect(test1.next()).toStrictEqual({ value: 5, done: false });
        expect(test1.next()).toStrictEqual({ value: 6, done: false });
    }
)
}
)
