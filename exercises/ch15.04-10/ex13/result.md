参考URL:https://neos21.net/blog/2016/06/14-01.html

〇Hashbang(ハッシュバング)について
略してShebang(シバン/シェバン)と呼ぶ。
機能としてはURLに付けるハッシュのイメージ。
Ajaxで操作するときには!は必要ないが、Javascriptで制御されるページをGoogle Botが
うまくコントロールできなかったため、Googleが特別措置で、Hashbang#!という仕様を作ったらしい。

AJAZについて:https://developer.mozilla.org/ja/docs/Glossary/AJAX

〇最近使用されなくなった理由
HTML5にて、pushStateという機能ができ、こちらに移行した。
pushStateはブラウザの履歴を走査できるHistory APIの1つで、今まではハッシュ
を置き換えることで、各サイトがJavaScriptを使って疑似的に管理してきたものが、
標準APIでできるようになった。