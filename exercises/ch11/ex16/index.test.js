import { retryWithExponentialBackoff } from "./index.js";

function returnTrue(){
  return true;
}

function returnFalse(){
  return false;
}

async function returnRandom(){
  return Math.random() > 0.5;
}

function logResult(message){
  console.log(message);
}

describe("Test function", () => {
it("テストが正しく動作すること", async () => {
    const outcome = await retryWithExponentialBackoff(returnTrue, 3, logResult);
    expect(outcome).toStrictEqual("true");
  });
});
