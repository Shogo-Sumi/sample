import { isEmailAddress } from "./index.js";

// local-partおよびdomainのdot-atomのみ考慮する
// またCWFSを含むdot-atomは受け付けないものとする
describe("isEmailAddress", () => {
    it("checks if given string is e-mail address or not", () => {
        expect(isEmailAddress("foo@example.com")).toBe(true);//1.trueを返す汎用パターン
        expect(isEmailAddress(null)).toBe(false);//2.メールアドレスがnullまたundefinedの場合、false
        expect(isEmailAddress(undefined)).toBe(false);//2.
        expect(isEmailAddress("foo.bar@example.com")).toBe(true);//3.@前の文字列の途中に.が含まれている場合true
        expect(isEmailAddress("foo..bar@example.com")).toBe(false);//4.ドットが連続..または、@の直前、文字列の最初にある場合はfalse
        expect(isEmailAddress("foo.@example.com")).toBe(false);//4.
        expect(isEmailAddress(".foo@example.com")).toBe(false);//4.
        expect(isEmailAddress("0123456789012345678901234567890123456789012345678901234567890123@example.com")).toBe(true);//5.@前の文字列は64文字までならばtrue
        expect(isEmailAddress("01234567890123456789012345678901234567890123456789012345678901234@example.com")).toBe(false);//6.65文字以上ならばfalse
        expect(isEmailAddress("(@example.com")).toBe(false);//7.@の直前の文字列に以下の文字が含まれる場合false,(),<>,[],:,;,@,,,\\,\,文字の間の空白,日本語
        expect(isEmailAddress(")@example.com")).toBe(false);
        expect(isEmailAddress("<@example.com")).toBe(false);
        expect(isEmailAddress(">@example.com")).toBe(false);
        expect(isEmailAddress("[@example.com")).toBe(false);
        expect(isEmailAddress("]@example.com")).toBe(false);
        expect(isEmailAddress(":@example.com")).toBe(false);
        expect(isEmailAddress(";@example.com")).toBe(false);
        expect(isEmailAddress("@@example.com")).toBe(false);
        expect(isEmailAddress(",@example.com")).toBe(false);
        expect(isEmailAddress("\\@example.com")).toBe(false);
        expect(isEmailAddress("\"@example.com")).toBe(false);
        expect(isEmailAddress("f o o@example.com")).toBe(false);
        expect(isEmailAddress("あいうえお@example.com")).toBe(false);
        expect(isEmailAddress("!#$%&'*+-/=?^_`{|}~@example.com")).toBe(true);//8.先の記号ならば@前の文字列に使用してもよい。
        //9.@以降の文字列は252文字まで
        expect(isEmailAddress("a@012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901")).toBe(true);
        expect(isEmailAddress("a@0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012")).toBe(false);
        expect(isEmailAddress("foo@")).toBe(false);//10.@以降に文字列がない場合false
        expect(isEmailAddress("foo")).toBe(false);//11.@が存在しない場合false
        expect(isEmailAddress("@example.com")).toBe(false);//12.@前に文字列が存在しない場合false
        expect(isEmailAddress("foo@.example.com")).toBe(false);//13.@とドメインの間に.がある場合false
        expect(isEmailAddress("foo@example..com")).toBe(false);//14.@以降に.が連続する場合false
        expect(isEmailAddress("foo@example.com.")).toBe(false);//15.ドメイン部の末尾に.がある場合false
        expect(isEmailAddress("foo@(")).toBe(false);//16.@の直後に特定の記号がある場合false。7と同じ
        expect(isEmailAddress("foo@)")).toBe(false);
        expect(isEmailAddress("foo@<")).toBe(false);
        expect(isEmailAddress("foo@>")).toBe(false);
        expect(isEmailAddress("foo@[")).toBe(false);
        expect(isEmailAddress("foo@]")).toBe(false);
        expect(isEmailAddress("foo@:")).toBe(false);
        expect(isEmailAddress("foo@;")).toBe(false);
        expect(isEmailAddress("foo@@")).toBe(false);
        expect(isEmailAddress("foo@,")).toBe(false);
        expect(isEmailAddress("foo@\\")).toBe(false);
        expect(isEmailAddress("foo@\"")).toBe(false);
        expect(isEmailAddress("foo@exmaple . com")).toBe(false);//17.ドメイン部にスペースがある場合false
        expect(isEmailAddress("foo@あいうえお.com")).toBe(false);//18.ドメイン部に日本語ががある場合false
        expect(isEmailAddress("foo@!#$%&'*+-/=?^_`.{|}~")).toBe(true);//19.ドメイン部に特定の文字列だけが存在する場合true

        // 本来の仕様はもっと複雑で例えば以下のようなテストも必要
        // expect(isEmailAddress(`")( <>[];:@,.."@example.com`)).toBe(true);
        // expect(isEmailAddress(`"\\"@example.com`)).toBe(true);
        // expect(isEmailAddress("foo@[127.0.0.1]")).toBe(true);
        // expect(isEmailAddress("foo(this is (nested)comment) @example.com")).toBe(true);
    }
)
}
)


