1.Tailwind CSS がどういったフレームワークか調べなさい。

参考：https://skillhub.jp/blogs/367

素のCSSを書かずにTailwind CSSが提供しているクラスのみを使用してスタイリングしていくという方法になります。

CSSフレームワークを使わない場合
CSSフレームワークを使わない場合、自分で素のCSSを書きますよね。 大抵の場合は、CSSクラスを作成して、そのクラスをセレクタにスタイル指定を書いていくでしょう。例の青いボタンなら、以下のようなコーディングになるかと思います。

css


コードをコピーする

.mybtn{
    display: inline-block;
    color: #FFFFFF;
    vertical-align: middle;
    background-color: #007bff;
    padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 0.25rem;
}

html


コードをコピーする

<button class="mybtn" type="button">
    ボタン
</button>


Bootstrapの場合
Bootstrapを使う場合は、ボタンデザイン共通の基本的なスタイルを設定するベースとなる“btn”クラスを使います。それに加え、配色を決める“btn-primary”クラスなどを追加することで、ボタンデザインのバリエーションを作っていく考え方です。

html


コードをコピーする

<button class="btn btn-primary" type="button">
    ボタン
</button>


Tailwind CSSの場合
Tailwindでは、BootstrapなどのCSS フレームワークとは異なり、UIコンポーネントのベースとなるクラスは提供されていません。

スタイリングには背景色やpaddingなど、それぞれCSSのプロパティ単位で定義されたクラス（ユーティリティクラス）を使います。インラインCSSを書くような感覚で、class属性にユーティリティクラスを書いていくイメージです。

html


コードをコピーする

<button class="bg-blue-500 text-white align-middle px-3 py-1.5 rounded" type="button">
    ボタン
</button>

自分でCSSを書かなくても良いというフレームワークのメリットと、イチから自分でCSSを書く柔軟性・自由度、両方の良いところを取り入れたような形です。

いやいや、毎回これは長いし面倒！と思うかもしれません。 Tailwindにコンポーネント系のクラスは存在しませんが、自分で@applyという機能を使ってクラスを作ることは出来ます。まずはユーティリティクラスを使ってコーディングを進め、必要に応じて自分でクラスを作る、という事もできます。