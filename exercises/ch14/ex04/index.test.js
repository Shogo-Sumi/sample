import { Hiragana } from './index.js';

describe('Hiraganaクラス', () => {
  const あ = new Hiragana('あ');  // U+3042 → 12354
  const い = new Hiragana('い');  // U+3044 → 12356
  const ゟ = new Hiragana('ゟ');  // U+309F → 12447
  const や　= new Hiragana('や'); // U+3084 →12420
  describe('コンストラクタのバリデーション', () => {
    test('不正な入力', () => {
      expect(() => new Hiragana()).toThrow('Input must be a single hiragana character.');
      expect(() => new Hiragana('')).toThrow();
      expect(() => new Hiragana('あい')).toThrow();
      expect(() => new Hiragana('ア')).toThrow(); 
      expect(() => new Hiragana('a')).toThrow();
    });
  });
   test('hint === "string" のときはひらがなが返る', () => {
      expect(String(あ)).toBe('あ');
      expect(String(ゟ)).toBe('ゟ');
    });
    test('hint === "number" のときは UTF-16 コード単位が返る', () => {
      expect(Number(あ)).toBe(12354);
    });
    test('hint === "default" または不明なときはひらがなが返る', () => {
      expect(あ == 'あ').toBe(true);
      expect(あ == 'い').toBe(false);
    });
  });
  describe('比較演算子によるソート', () => {
    test('<, > 演算子で正しく比較できる（数値として比較される）', () => {
      const あ = new Hiragana('あ');  // U+3042 → 12354
      const い = new Hiragana('い');  // U+3044 → 12356
      const ゟ = new Hiragana('ゟ');  // U+309F → 12447
      const や　= new Hiragana('や'); // U+3084 →12420
      expect(あ < や).toBe(true);
      expect(や < あ).toBe(false);
      expect(い < や).toBe(true);
      expect(や < い).toBe(false);
      expect(ゟ < や).toBe(false);
      expect(や < ゟ).toBe(true);
  });
});