!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e||self).fastestLevenshtein={})}(this,function(e){var r=new Uint32Array(65536),t=function(e,t){if(e.length<t.length){var n=t;t=e,e=n}return 0===t.length?e.length:e.length<=32?function(e,t){for(var n=e.length,o=t.length,a=1<<n-1,f=-1,h=0,i=n,c=n;c--;)r[e.charCodeAt(c)]|=1<<c;for(c=0;c<o;c++){var d=r[t.charCodeAt(c)],l=d|h;(h|=~((d|=(d&f)+f^f)|f))&a&&i++,(f&=d)&a&&i--,f=f<<1|~(l|(h=h<<1|1)),h&=l}for(c=n;c--;)r[e.charCodeAt(c)]=0;return i}(e,t):function(e,t){for(var n=t.length,o=e.length,a=[],f=[],h=Math.ceil(n/32),i=Math.ceil(o/32),c=0;c<h;c++)f[c]=-1,a[c]=0;for(var d=0;d<i-1;d++){for(var l=0,v=-1,u=32*d,s=Math.min(32,o)+u,g=u;g<s;g++)r[e.charCodeAt(g)]|=1<<g;for(var A=0;A<n;A++){var C=r[t.charCodeAt(A)],p=f[A/32|0]>>>A%32&1,y=a[A/32|0]>>>A%32&1,m=C|l,M=((C|y)&v)+v^v|C|y,b=l|~(M|v),x=v&M;b>>>31^p&&(f[A/32|0]^=1<<A%32),x>>>31^y&&(a[A/32|0]^=1<<A%32),v=(x=x<<1|y)|~(m|(b=b<<1|p)),l=b&m}for(var T=u;T<s;T++)r[e.charCodeAt(T)]=0}for(var j=0,w=-1,I=32*d,L=Math.min(32,o-I)+I,U=I;U<L;U++)r[e.charCodeAt(U)]|=1<<U;for(var k=o,q=0;q<n;q++){var z=r[t.charCodeAt(q)],B=f[q/32|0]>>>q%32&1,D=a[q/32|0]>>>q%32&1,E=z|j,F=((z|D)&w)+w^w|z|D,G=j|~(F|w),H=w&F;k+=G>>>o%32-1&1,k-=H>>>o%32-1&1,G>>>31^B&&(f[q/32|0]^=1<<q%32),H>>>31^D&&(a[q/32|0]^=1<<q%32),w=(H=H<<1|D)|~(E|(G=G<<1|B)),j=G&E}for(var J=I;J<L;J++)r[e.charCodeAt(J)]=0;return k}(e,t)};e.closest=function(e,r){for(var n=Infinity,o=0,a=0;a<r.length;a++){var f=t(e,r[a]);f<n&&(n=f,o=a)}return r[o]},e.distance=t});
//# sourceMappingURL=index.umd.js.map