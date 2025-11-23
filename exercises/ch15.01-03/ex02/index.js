const { $ } = await import(
  "https://releases.jquery.com/git/jquery-git.module.min.js"
);
$("*").css("color", "red");//ページ内のすべての要素を赤くする。