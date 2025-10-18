import { fibonacciSequence } from "./index.js";

 const fib = fibonacciSequence();
 const fib2 = fibonacciSequence();

describe("fibonacciSequence", () => {
    it("checks 1 step calculation", () => {
        expect(fib.next()).toStrictEqual({ value: 1, done: false });
    }
  )
    it("checks 5 step calculation", () => {
        expect(fib2.next()).toStrictEqual({ value: 1, done: false });
        expect(fib2.next()).toStrictEqual({ value: 1, done: false });
        expect(fib2.next()).toStrictEqual({ value: 2, done: false });
        expect(fib2.next()).toStrictEqual({ value: 3, done: false });
        expect(fib2.next()).toStrictEqual({ value: 5, done: false } );
    }
)
}
)
