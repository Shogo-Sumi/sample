import { integer,filter,primes } from "./index.js";

const test1 = primes();

describe("primes", () => {
  it("checks primes", () => {
    expect(test1.next().value).toStrictEqual(2);
    expect(test1.next().value).toStrictEqual(3);
    expect(test1.next().value).toStrictEqual(5);
    expect(test1.next().value).toStrictEqual(7);
    expect(test1.next().value).toStrictEqual(11);
    expect(test1.next().value).toStrictEqual(13);
  });
});
