import { littleTobig,bigToLittle} from "./index.js";

const input1 = new Uint32Array([0x99887766, 0x11223344]);
const input2 = new Uint32Array([0x66778899, 0x44332211]);


describe("Test littleTobig", () => {
  it("set関数が正しく動作すること", () => {
    expect(littleTobig(input1)).toStrictEqual(input2);
    expect(bigToLittle(input2)).toStrictEqual(input1);
  });
});
