exports.id=370,exports.ids=[370],exports.modules={6041:(t,i)=>{!function(t){function i(){this.months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],this.notKey=[",","{","}"," ","="],this.pos=0,this.input="",this.entries=[],this.currentEntry="",this.setInput=function(t){this.input=t},this.getEntries=function(){return this.entries},this.isWhitespace=function(t){return" "==t||"\r"==t||"	"==t||"\n"==t},this.match=function(t,i){if((void 0==i||null==i)&&(i=!0),this.skipWhitespace(i),this.input.substring(this.pos,this.pos+t.length)==t)this.pos+=t.length;else throw"Token mismatch, expected "+t+", found "+this.input.substring(this.pos);this.skipWhitespace(i)},this.tryMatch=function(t,i){return(void 0==i||null==i)&&(i=!0),this.skipWhitespace(i),this.input.substring(this.pos,this.pos+t.length)==t},this.matchAt=function(){for(;this.input.length>this.pos&&"@"!=this.input[this.pos];)this.pos++;return"@"==this.input[this.pos]},this.skipWhitespace=function(t){for(;this.isWhitespace(this.input[this.pos]);)this.pos++;if("%"==this.input[this.pos]&&!0==t){for(;"\n"!=this.input[this.pos];)this.pos++;this.skipWhitespace(t)}},this.value_braces=function(){var t=0;this.match("{",!1);for(var i=this.pos,n=!1;;){if(!n){if("}"==this.input[this.pos]){if(t>0)t--;else{var e=this.pos;return this.match("}",!1),this.input.substring(i,e)}}else if("{"==this.input[this.pos])t++;else if(this.pos>=this.input.length-1)throw"Unterminated value"}n="\\"==this.input[this.pos]&&!1==n,this.pos++}},this.value_comment=function(){for(var t="",i=0;!(this.tryMatch("}",!1)&&0==i);){if(t+=this.input[this.pos],"{"==this.input[this.pos]&&i++,"}"==this.input[this.pos]&&i--,this.pos>=this.input.length-1)throw"Unterminated value:"+this.input.substring(start);this.pos++}return t},this.value_quotes=function(){this.match('"',!1);for(var t=this.pos,i=!1;;){if(!i){if('"'==this.input[this.pos]){var n=this.pos;return this.match('"',!1),this.input.substring(t,n)}if(this.pos>=this.input.length-1)throw"Unterminated value:"+this.input.substring(t)}i="\\"==this.input[this.pos]&&!1==i,this.pos++}},this.single_value=function(){var t=this.pos;if(this.tryMatch("{"))return this.value_braces();if(this.tryMatch('"'))return this.value_quotes();var i=this.key();if(i.match("^[0-9]+$"))return i;if(this.months.indexOf(i.toLowerCase())>=0)return i.toLowerCase();throw"Value expected:"+this.input.substring(t)+" for key: "+i},this.value=function(){var t=[];for(t.push(this.single_value());this.tryMatch("#");)this.match("#"),t.push(this.single_value());return t.join("")},this.key=function(t){for(var i=this.pos;;){if(this.pos>=this.input.length)throw"Runaway key";if(this.notKey.indexOf(this.input[this.pos])>=0){if(t&&","!=this.input[this.pos])return this.pos=i,null;return this.input.substring(i,this.pos)}this.pos++}},this.key_equals_value=function(){var t=this.key();if(this.tryMatch("=")){this.match("=");var i=this.value();return[t=t.trim(),i]}throw"... = value expected, equals sign missing:"+this.input.substring(this.pos)},this.key_value_list=function(){var t=this.key_equals_value();for(this.currentEntry.entryTags={},this.currentEntry.entryTags[t[0]]=t[1];this.tryMatch(",")&&(this.match(","),!this.tryMatch("}"));)t=this.key_equals_value(),this.currentEntry.entryTags[t[0]]=t[1]},this.entry_body=function(t){this.currentEntry={},this.currentEntry.citationKey=this.key(!0),this.currentEntry.entryType=t.substring(1),null!=this.currentEntry.citationKey&&this.match(","),this.key_value_list(),this.entries.push(this.currentEntry)},this.directive=function(){return this.match("@"),"@"+this.key()},this.preamble=function(){this.currentEntry={},this.currentEntry.entryType="PREAMBLE",this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.comment=function(){this.currentEntry={},this.currentEntry.entryType="COMMENT",this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.entry=function(t){this.entry_body(t)},this.alernativeCitationKey=function(){this.entries.forEach(function(t){!t.citationKey&&t.entryTags&&(t.citationKey="",t.entryTags.author&&(t.citationKey+=t.entryTags.author.split(",")[0]+=", "),t.citationKey+=t.entryTags.year)})},this.bibtex=function(){for(;this.matchAt();){var t=this.directive();this.match("{"),"@STRING"==t.toUpperCase()?this.string():"@PREAMBLE"==t.toUpperCase()?this.preamble():"@COMMENT"==t.toUpperCase()?this.comment():this.entry(t),this.match("}")}this.alernativeCitationKey()}}t.toJSON=function(t){var n=new i;return n.setInput(t),n.bibtex(),n.entries},t.toBibtex=function(t){var i="";for(var n in t){if(i+="@"+t[n].entryType+"{",t[n].citationKey&&(i+=t[n].citationKey+", "),t[n].entry&&(i+=t[n].entry),t[n].entryTags){var e="";for(var s in t[n].entryTags)0!=e.length&&(e+=", "),e+=s+"= {"+t[n].entryTags[s]+"}";i+=e}i+="}\n\n"}return i}}(i)},99:(t,i,n)=>{"use strict";n.d(i,{CH:()=>M});let e=new Set(["<",">","{","}","[","]"]),s=new Set(["for","do","while","if","else","return","function","var","let","const","true","false","undefined","this","new","delete","typeof","in","instanceof","void","break","continue","switch","case","default","throw","try","catch","finally","debugger","with","yield","async","await","class","extends","super","import","export","from","static"]),r=new Set(["+","-","*","/","%","=","!","&","|","^","~","!","?",":",".",",",";","'",'"',".","(",")","[","]","#","@","\\",...e]),h=["identifier","keyword","string","class","property","entity","jsxliterals","sign","comment","break","space"],[u,o,a,c,p,l,f,y,g,v,m]=h.map((t,i)=>i);function d(t){return/^[^\S\r\n]+$/g.test(t)}function b(t){return r.has(t)}function _(t){return/^[\w_]+$/.test(t)||E(t)}function E(t){return/[^\u0000-\u007f]/.test(t)}function k(t){return/^[a-zA-Z]$/.test(t)}function w(t){var i;return(k(i=t[0])||E(i))&&(1===t.length||_(t.slice(1)))}function T(t){return'"'===t||"'"===t}function x(t){return"//"===(t=t.slice(0,2))||"/*"===t}function M(t){return(function(t){let i=[],n=t=>`<span class="sh__line">${t}</span>`;function e(t){i.push(n(t.map(([t,i])=>`<span class="sh__token--${h[t]}" style="color: var(--sh-${h[t]})">${i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</span>`).join("")))}let s=[];for(let i=0;i<t.length;i++){let n=t[i],[r,h]=n;if(r!==v){if(h.includes("\n")){let t=h.split("\n");for(let i=0;i<t.length;i++)s.push([r,t[i]]),i<t.length-1&&(e(s),s.length=0)}else s.push(n)}else s.push([r,""]),e(s),s.length=0}return s.length&&e(s),i})(function(t){let i="",n=-1,h=[-1,""],M=[-2,""],K=[],C=!1,$=0,j=!1,q=0,U=()=>C&&!j&&!$,W=()=>$&&!U(),S=()=>!$&&U()&&!j&&q>0,A=null,O=0,L=0,N=()=>null!==A,R=()=>L>O,B=()=>L>0&&L===O,I=()=>N()||R(),z=(t,e)=>{if(e&&(i=e),i){let e=[n=t||function(t){let i="\n"===t;if(W()){if(N())return a;let[,i]=h;if(w(t)&&("<"===i||"</"===i))return l}if(S())return f;if(N())return a;if(s.has(t))return"."===h[1]?u:o;if(i)return v;if(d(t))return m;if(t.split("").every(b))return y;if(function(t){let i=t[0];return _(i)&&i===i.toUpperCase()||"null"===t}(t))return W()?u:c;if(w(t)){let t="."===h[1]&&w(M[1]);if(!I()&&!t)return u;if(t)return p}return a}(i),i];n!==m&&n!==v&&(M=h,h=e),K.push(e)}i=""};for(let n=0;n<t.length;n++){var P;let s=t[n],u=t[n-1],o=t[n+1],c=u+s,l=s+o;if(T(s)&&!S()){z(),"\\"===u||(A&&s===A?A=null:A||(A=s)),z(a,s);continue}if(!R()&&"\\n"!==u&&"`"===s){z(),z(a,s),L++;continue}if(R()){if("\\n"!==u&&"`"===s&&L>0){z(),L--,z(a,s);continue}if("${"===l){O++,z(a),z(y,l),n++;continue}}if(B()&&"}"===s){z(),O--,z(y,s);continue}if(U()&&"{"===s){z(),z(y,s),j=!0;continue}if(C){if(!$&&"<"===s){z(),"/"===o?($=2,i=l,n++):($=1,i=s),z(y);continue}if($){if(">"===s&&!"/=".includes(u)){z(),1===$?($=0,q++):($=0,C=!1),z(y,s);continue}if("/>"===l||"</"===l){"<"!==i&&"/"!==i&&z(),"/>"===l?$=0:q--,q||(C=!1),i=l,n++,z(y);continue}if("<"===s){z(),i=s,z(y);continue}if("-"===o&&!I()&&!S()&&i){z(p,i+s+o),n+=1;continue}if("="===o&&!I()){let t=i?i+s:s;w(t)&&(i=t,z(p));continue}}}!$&&("<"===s&&(k(o)||E(o))||"</"===l)&&($="/"===o?2:1,"<"===s&&("/"===o||k(o))&&(C=!0));let f=T(s)||"`"===s,v=R(),m=!C&&"/"===(P=l)[0]&&!x(P[0]+P[1]),b=S();if(f||v||T(A))i+=s;else if(m){z();let[e,r]=h;if(m&&-1!==e&&!(e===y&&")"!==r||e===g)){i=s,z();continue}let u=n++,o=()=>n>=t.length,c=()=>o()||"\n"===t[n],p=!1;for(;!c();n++)if("/"===t[n]&&"\\"!==t[n-1]){for(p=!0;u!==n&&/^[a-z]$/.test(t[n+1])&&!c();)n++;break}u!==n&&p?(i=t.slice(u,n+1),z(a)):(i=s,z(),n=u)}else if(x(l)){z();let e=n;if("/"===o)for(;n<t.length&&"\n"!==t[n];n++);else for(;n<t.length&&t[n-1]+t[n]!=="*/";n++);i=t.slice(e,n+1),z(g)}else" "===s||"\n"===s?" "===s&&(d(i)||!i||b)?(i+=s,"<"===o&&z()):(z(),i=s,z()):j&&"}"===s?(z(),i=s,z(),j=!1):b&&!e.has(s)||(_(s)===_(i[i.length-1])||U())&&!r.has(s)?i+=s:("</"===c&&(i=c),z(),"</"!==c&&(i=s),"</"===l||"/>"===l?(i=l,z(),n++):e.has(s)&&z())}return z(),K}(t)).join("\n")}}};