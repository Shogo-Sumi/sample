import { template } from './index.js';

describe('template関数', () => {
  describe('console.logの結果を比較', () => {
    test('結果を比較', () => {
      expect(template``).toBe('');
      expect(template`test`).toBe("test");
      expect(template`Hello, ${"A"}`).toBe("Hello, string");
      expect(template`${1} ${null} ${() => {}}`).toBe("number object function");
      expect(template`type of 'A' is ${"A"}`).toBe("type of 'A' is string");
    });
  });
});