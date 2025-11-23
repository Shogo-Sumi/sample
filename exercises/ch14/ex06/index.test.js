import { makeProxyAndLogs } from './index.js';

const a = {
  p: 1,
  f: (x, y) => x + y,
};

const [proxy, logs] = makeProxyAndLogs(a);

describe('makeProxyAndLogs関数', () => {
  describe('console.logの結果を比較', () => {
    test('結果を比較', () => {
      expect(logs).toEqual([]);
      expect(proxy.p).toBe(1);
      expect(proxy.f(10, 20)).toBe(30);
      expect(logs).toStrictEqual([{ name: 'f', args: [ 10, 20 ], timestamp: new Date() }]);
    });
  });
});