function html(strings, ...values) {
 // それぞれの値を文字列に変換し、エスケープする。
let escaped = values.map(v => String(v)
 .replace("&", "&amp;")
 .replace("<", "&lt;")
 .replace(">", "&gt;")
 .replace('"', "&quot;")
 .replace("'","&#39;"));
 
 //文字列とエスケープした値を結合して返す。
 let result = strings[0];
 for(let i = 0; i < escaped.length; i++){
    result+= escaped[i]+strings[i+1];
}
return result;
}

 let operator = "<";
 html`<b>x${operator} y</b>` //=>"<b>x&lt;y</b>"
 let kind ="game",name= "D&D";
 html`<divclass="${kind}">${name}</div>` //=>'<divclass = "game">D&amp;D</div>'

 console.log(html`<b>x${operator} y</b>`);
 console.log(html`<divclass="${kind}">${name}</div>`)