// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_glass_parallax(d,l,m){var f=jQuery;var i=f(this);var j=d.parallax||0.25;var k=f("<div>").css({position:"absolute",display:"none",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_glass_parallax").appendTo(m);var h=!d.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(h){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(q){h=0}}function t(e){return Math.round(e*1000)/1000}var u=f("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)",zIndex:1}).appendTo(k);var s=u.clone().appendTo(k);var r=u.clone().css({width:"20%"}).appendTo(k);var c;var p=u.clone().appendTo(k).css({zIndex:0});this.go=function(C,A,x){var e=f(l.get(A));e={position:"absolute",width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")};x=x?1:-1;var E=f(l.get(A)).clone().css(e).appendTo(u);var z=f(l.get(C)).clone().css(e).appendTo(s);var v=f(l.get(C)).clone().css(e).appendTo(r);if(x==-1){r.css({left:"auto",right:0});v.css({left:"auto",right:0})}else{r.css({left:0,right:"auto"});v.css({left:0,right:"auto"})}var D=(m.width()||d.width)*1.3;var B=m.height()||d.height;var y;if(h){if(!c){c=f("<canvas>").css({position:"absolute",left:0,top:0}).attr({width:e.width,height:e.height}).appendTo(p)}c.css(e).attr({width:e.width,height:e.height});y=o(f(l.get(C)),e,10,c.get(0))}if(!h||!y){h=0}wowAnimate(function(G){G=f.easing.swing(G);var L=t(x*G*D),F=t(x*(-D+G*D-(1-G)*D*0.2)),J=t(x*(-D*1.4+G*(D*1.4+D/1.3))),w=t(-x*D*j*G),H=t(x*D*j*(1-G)),I=t(-x*D*(j+0.2)*G),K=t(x*(-D*0.2+G*D*0.4));if(d.support.transform){u.css("transform","translate3d("+L+"px,0,0)");E.css("transform","translate3d("+w+"px,0,0)");s.css("transform","translate3d("+F+"px,0,0)");z.css("transform","translate3d("+H+"px,0,0)");r.css("transform","translate3d("+J+"px,0,0)");v.css("transform","scale(1.6) translate3d("+I+"px,0,0)");p.css("transform","translate3d("+K+"px,0,0)")}else{u.css("left",L);E.css("margin-left",w);s.css("left",F);z.css("margin-left",H);r.css("left",J);v.css("margin-left",I);p.css("left",K)}},0,1,d.duration,function(){k.hide();E.remove();z.remove();v.remove();i.trigger("effectEnd")})};function o(C,A,B,v){var F=(parseInt(C.parent().css("z-index"))||0)+1;if(h){var I=v.getContext("2d");I.drawImage(C.get(0),0,0,A.width,A.height);if(!a(I,0,0,v.width,v.height,B)){return 0}return f(v)}var J=f("<div></div>").css({position:"absolute","z-index":F,left:0,top:0}).css(A).appendTo(v);var H=(Math.sqrt(5)+1)/2;var w=1-H/2;for(var z=0;w*z<B;z++){var D=Math.PI*H*z;var e=(w*z+1);var G=e*Math.cos(D);var E=e*Math.sin(D);f(document.createElement("img")).attr("src",C.attr("src")).css({opacity:1/(z/1.8+1),position:"absolute","z-index":F,left:Math.round(G)+"px",top:Math.round(E)+"px",width:"100%",height:"100%"}).appendTo(J)}return J}var g=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var n=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function a(am,U,S,v,w,ad){if(isNaN(ad)||ad<1){return}ad|=0;var ah;try{ah=am.getImageData(U,S,v,w)}catch(al){console.log("error:unable to access image data: "+al);return false}var C=ah.data;var ab,aa,aj,ag,J,M,G,A,B,R,H,T,P,X,ac,K,F,L,N,W;var ak=ad+ad+1;var Y=v<<2;var I=v-1;var af=w-1;var E=ad+1;var ae=E*(E+1)/2;var V=new b();var Q=V;for(aj=1;aj<ak;aj++){Q=Q.next=new b();if(aj==E){var D=Q}}Q.next=V;var ai=null;var Z=null;G=M=0;var O=g[ad];var z=n[ad];for(aa=0;aa<w;aa++){X=ac=K=A=B=R=0;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}for(aj=1;aj<E;aj++){ag=M+((I<aj?I:aj)<<2);A+=(Q.r=(F=C[ag]))*(W=E-aj);B+=(Q.g=(L=C[ag+1]))*W;R+=(Q.b=(N=C[ag+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next}ai=V;Z=D;for(ab=0;ab<v;ab++){C[M]=(A*O)>>z;C[M+1]=(B*O)>>z;C[M+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(G+((ag=ab+ad+1)<I?ag:I))<<2;X+=(ai.r=C[ag]);ac+=(ai.g=C[ag+1]);K+=(ai.b=C[ag+2]);A+=X;B+=ac;R+=K;ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=4}G+=v}for(ab=0;ab<v;ab++){ac=K=X=B=R=A=0;M=ab<<2;H=E*(F=C[M]);T=E*(L=C[M+1]);P=E*(N=C[M+2]);A+=ae*F;B+=ae*L;R+=ae*N;Q=V;for(aj=0;aj<E;aj++){Q.r=F;Q.g=L;Q.b=N;Q=Q.next}J=v;for(aj=1;aj<=ad;aj++){M=(J+ab)<<2;A+=(Q.r=(F=C[M]))*(W=E-aj);B+=(Q.g=(L=C[M+1]))*W;R+=(Q.b=(N=C[M+2]))*W;X+=F;ac+=L;K+=N;Q=Q.next;if(aj<af){J+=v}}M=ab;ai=V;Z=D;for(aa=0;aa<w;aa++){ag=M<<2;C[ag]=(A*O)>>z;C[ag+1]=(B*O)>>z;C[ag+2]=(R*O)>>z;A-=H;B-=T;R-=P;H-=ai.r;T-=ai.g;P-=ai.b;ag=(ab+(((ag=aa+E)<af?ag:af)*v))<<2;A+=(X+=(ai.r=C[ag]));B+=(ac+=(ai.g=C[ag+1]));R+=(K+=(ai.b=C[ag+2]));ai=ai.next;H+=(F=Z.r);T+=(L=Z.g);P+=(N=Z.b);X-=F;ac-=L;K-=N;Z=Z.next;M+=v}}am.putImageData(ah,U,S);return true}function b(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(4*f*h-8*h+8*f-3)},easeOutBackQ:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(4*h*f*h-12*h*h+16*h*f-13*h+6*f)},easeInBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*h*(1.5*f*h-2.5*h+5*f-3)},easeOutBackQ2:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(1.5*h*f*h-5*h*h+10*h*f-12*h+6.5*f)}});function ws_brick(f,s,g){var h=jQuery,n=h(this),a=f.cols||4,r=f.rows||3,H=2.5,c=2,v=f.perspective||2000,u=g.find(".ws_list"),G=[],b=30,x={},o=h("<div>").addClass("ws_effect ws_brick").appendTo(g),q=f.support.transform&&f.support.transition&&f.support.perspective,p=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),m=/Firefox/.test(navigator.userAgent);var y=[{zIndex:0,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:0.7,delay:0.36},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0.4,delay:0.81},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0.4,delay:0.45},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:0.7,delay:0.63},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.7,halfTop:0,delay:0.54},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:0.2,halfTop:0,delay:0.38},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.2,halfTop:0,delay:0},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:-0.7,halfTop:0,delay:0.72},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:180,halfScale:0.5,halfLeft:0.7,halfTop:-0.7,delay:1},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:0.5,halfLeft:0.2,halfTop:-0.4,delay:0.7},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:180,halfScale:0.5,halfLeft:-0.2,halfTop:-0.4,delay:0.57},{zIndex:0,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:0.5,halfLeft:-0.7,halfTop:-0.7,delay:0.9},];o.css({position:"absolute",top:0,left:0,width:g.width(),height:g.height(),transform:"translate3d(0,0,0)",transformOrigin:(f.width/2)+"px "+(f.height/2)+"px 0",perspective:v}).hide();for(var l=0;l<a*r;l++){var B=l%a,A=Math.floor(l/a);var E=h("<div>").css({position:"absolute",left:100*B/a+"%",top:100*A/r+"%",outline:"1px solid transparent",transformStyle:(p||m)?"flat":"preserve-3d",zIndex:y[l].zIndex,overflow:q?"visible":"hidden"}).appendTo(o),z=h("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(E),w=h("<div>").addClass("ws_front_image").appendTo(z),D=q?h("<div>").addClass("ws_back_image").appendTo(z):0;w.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}));if(q){D.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+b+"px)"}).append(h("<img>").css({left:-B*100+"%",top:-A*100+"%",position:"absolute",outline:"1px solid transparent"}))}var t={position:"absolute",outline:"1px solid transparent"};G[l]={part:z,front:w,back:D,wrapper:E,leftEdge:q?h("<div>").addClass("ws_left_edge").css(t).appendTo(z):0,rightEdge:q?h("<div>").addClass("ws_right_edge").css(t).appendTo(z):0,topEdge:q?h("<div>").addClass("ws_top_edge").css(t).appendTo(z):0,bottomEdge:q?h("<div>").addClass("ws_bottom_edge").css(t).appendTo(z):0}}function C(N){var J={},L=s.get(N),O=f.width/a,P=f.height/r;for(var K=0;K<a*r;K++){var N=K%a,M=Math.floor(K/a);J[K]=F(L,{x:N*O,y:M*P,w:O,h:P})}return J}function I(J,M,j,K,L){for(var i in M){if(typeof G[i]!=="function"){M[i].topEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+J/2+"px)"});M[i].bottomEdge.css({width:K,height:J,background:j[i],transform:"rotateX(90deg) translate3d(0,-"+J/2+"px,"+(-L+J/2)+"px)"});M[i].leftEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,-"+J/2+"px)"});M[i].rightEdge.css({width:J,height:L,background:j[i],transform:"rotateY(90deg) translate3d("+J/2+"px,0,"+(K-J/2)+"px)"})}}}function e(J,K){var i=0;for(var j in J){if(typeof J[j]!=="function"){(function(L,M){wowAnimate(function(O){var U,S,T,R="",N={};if(O<=0.5){U=h.easing.easeInBack(1,O*2,0,1,1,1).toFixed(3);S=h.easing.easeInBackQ(1,O*2,0,1,1,1).toFixed(3);T=h.easing.easeInBackQ2(1,O*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","hidden")}else{U=h.easing.easeOutBack(1,(O-0.5)*2,0,1,1,1).toFixed(3);S=h.easing.easeOutBackQ(1,(O-0.5)*2,0,1,1,1).toFixed(3);T=h.easing.easeOutBackQ2(1,(O-0.5)*2,0,1,1,1).toFixed(3);M[L].back.css("backfaceVisibility","visible")}for(var P in M[L].animate[O<=0.5?"half":"end"]){var V=M[L].animate[O<=0.5?"begin":"half"][P]||0,Q=M[L].animate[O<=0.5?"half":"end"][P]||0;if(typeof Q!=="object"){if(P==="scale"||P==="rotateX"||P==="rotateY"){Q=V+(Q-V)*S}else{if(P==="left"||P==="top"){Q=V+(Q-V)*T}else{Q=V+(Q-V)*U}}}if(P==="rotateX"||P==="rotateY"||P==="rotateZ"){R+=P+"("+Q+"deg) "}else{if(P==="scale"){R+=P+"("+Q+") "}else{if(P==="translate3d"){R+=P+"("+(V[0]+(Q[0]-V[0])*U).toFixed(3)+"px,"+(V[1]+(Q[1]-V[1])*U).toFixed(3)+"px,"+(V[2]+(Q[2]-V[2])*U).toFixed(3)+"px) "}else{N[P]=Q}}}}M[L].wrapper.css({transform:"translate3d("+(N.left?N.left:0).toFixed(3)+"px,"+(N.top?N.top:0).toFixed(3)+"px,0)"});delete N.left;delete N.top;if(R){N.transform=R}M[L].part.css(N)},0,1,M[L].animate.duration,M[L].animate.delay,function(){i++;if(i==M.length&&K){K()}})}(j,J))}}}function k(aa,M,N,P){var X=g.width(),W=g.height(),V=X/a,U=W/r,L=(f.duration*0.4)>1000?1000:(f.duration*0.4),K=f.duration*0.6,Q=[0,0];I(b,aa,x[M],V,U);o.css({transformOrigin:(X/2)+"px "+(W/2)+"px 0",width:X,height:W});for(var S in aa){if(typeof aa[S]!=="function"){var J=y[S].delay*L;if(Q[1]<=J){Q[0]=S;Q[1]=J}aa[S].part[0].ws_delay=[J,0]}}aa[Q[0]].part[0].ws_delay[1]=1;for(var S in aa){if(typeof aa[S]!=="function"){var R=aa[S],Z=S%a,Y=Math.floor(S/a),T=X*Z/a,O=W*Y/r;R.animate={delay:R.part[0].ws_delay[0],duration:K,begin:{left:0,top:0,width:V,height:U,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,p?b:0]},half:{left:y[S].halfLeft*V,top:y[S].halfTop*U,scale:y[S].halfScale,rotateX:y[S].rotateX/2,rotateY:y[S].rotateY/2,translate3d:[0,0,(p?1:0.5)*b]},end:{left:0,top:0,scale:1,rotateX:y[S].rotateX,rotateY:y[S].rotateY,translate3d:[0,0,b]}};R.front.find("img").css(N);R.back.css("backfaceVisibility","hidden").find("img").css(N);R.part.css({width:R.animate.begin.width,height:R.animate.begin.height,left:R.animate.begin.left,top:R.animate.begin.top})}}e(aa,P)}var d;this.go=function(X,M){if(d){return M}o.show();var K=h(s.get(M));K={width:K.width(),height:K.height(),marginTop:parseFloat(K.css("marginTop")),marginLeft:parseFloat(K.css("marginLeft"))};if(q){G[0].front.find("img").on("load",function(){u.hide()});for(var N in G){if(typeof G[N]!=="function"){G[N].front.find("img").attr("src",s.get(M).src);G[N].back.find("img").attr("src",s.get(X).src)}}if(!x[M]){x[M]=C(M)}d=new k(G,M,K,function(){u.show();n.trigger("effectEnd");o.hide();for(var i in G){if(typeof G[i]!=="function"){G[i].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"})}}d=0})}else{d=true;function Y(j,i){return Math.random()*(i-j+1)+j}var T=g.width(),W=g.height(),S=T/a,V=W/r,L=T-S*(a-1),U=W-V*(r-1);o.css({width:T,height:W});var J=0;for(var N in G){var R=N%a,P=Math.floor(N/a);G[N].front.find("img").attr("src",s.get(X).src).css(K);var Z=f.duration*(1-Math.abs((c*H-R*P)/(2*r*a)));var Q=Y(-1,1)>0?1:-1;var O=Y(-1,1)>0?1:-1;G[N].wrapper.css({width:S,height:V});G[N].part.css({position:"absolute",top:Q*V,left:O*S,opacity:0,width:S,height:V}).animate({top:0,left:0,opacity:1},Z,function(){J++;if(J==r*a){u.stop(1,1);d=false;n.trigger("effectEnd")}})}}};function F(S,J){J=J||{};var U=1,M=J.exclude||[],R;var O=document.createElement("canvas"),L=O.getContext("2d"),K=O.width=S.naturalWidth,Y=O.height=S.naturalHeight;L.drawImage(S,0,0,S.naturalWidth,S.naturalHeight);try{R=L.getImageData(J.x?J.x:0,J.y?J.y:0,J.w?J.w:S.width,J.h?J.h:S.height)["data"]}catch(T){console.log("error:unable to access image data: "+T);return"#ccc"}var N=(J.w?J.w:S.width*J.h?J.h:S.height)||R.length,P={},W="",V=[],j={dominant:{name:"",count:0}};var Q=0;while(Q<N){V[0]=R[Q];V[1]=R[Q+1];V[2]=R[Q+2];W=V.join(",");if(W in P){P[W]=P[W]+1}else{P[W]=1}if(M.indexOf(["rgb(",W,")"].join(""))===-1){var X=P[W];if(X>j.dominant.count){j.dominant.name=W;j.dominant.count=X}}Q+=U*4}return["rgb(",j.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b}});function ws_domino(m,i,k){$=jQuery;var h=$(this);var c=m.columns||5,l=m.rows||2,d=m.centerRow||2,g=m.centerColumn||2;var f=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(k);var b=$("<div>").addClass("ws_zoom").appendTo(f);var j=$("<div>").addClass("ws_parts").appendTo(f);var e=k.find(".ws_list");var a;this.go=function(y,x){function z(){j.find("img").stop(1,1);j.empty();b.empty();a=0}z();var s=$(i.get(x));s={width:s.width(),height:s.height(),marginTop:parseFloat(s.css("marginTop")),marginLeft:parseFloat(s.css("marginLeft"))};var D=$(i.get(x)).clone().appendTo(b).css({position:"absolute",top:0,left:0}).css(s);var p=f.width();var o=f.height();var w=Math.floor(p/c);var v=Math.floor(o/l);var t=p-w*(c-1);var E=o-v*(l-1);function I(L,K){return Math.random()*(K-L+1)+L}e.hide();var u=[];for(var C=0;C<l;C++){u[C]=[];for(var B=0;B<c;B++){var q=m.duration*(1-Math.abs((d*g-C*B)/(2*l*c)));var F=B<c-1?w:t;var n=C<l-1?v:E;u[C][B]=$("<div>").css({width:F,height:n,position:"absolute",top:C*v,left:B*w,overflow:"hidden"});var H=I(C-2,C+2);var G=I(B-2,B+2);u[C][B].appendTo(j);var J=$(i.get(y)).clone().appendTo(u[C][B]).css(s);var A={top:-H*v,left:-G*w,opacity:0};var r={top:-C*v,left:-B*w,opacity:1};if(m.support.transform&&m.support.transition){A.translate=[A.left,A.top,0];r.translate=[r.left,r.top,0];delete A.top;delete A.left;delete r.top;delete r.left}wowAnimate(J.css({position:"absolute"}),A,r,q,"easeInOutSine",function(){a++;if(a==l*c){z();e.stop(1,1);h.trigger("effectEnd")}})}}wowAnimate(D,{scale:1},{scale:1.6},m.duration,m.duration*0.2,"easeInOutSine")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(q,j,m){var e=jQuery;var i=e(this);var f=m.find(".ws_list");var a=q.distance||1;var g=e("<div>").addClass("ws_effect ws_blast");var c=e("<div>").addClass("ws_zoom").appendTo(g);var k=e("<div>").addClass("ws_parts").appendTo(g);m.css({overflow:"visible"}).append(g);g.css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":8});var d=q.cols;var p=q.rows;var l=[];var b=[];function h(u,r,s,t){if(q.support.transform&&q.support.transition){if(typeof r.left==="number"||typeof r.top==="number"){r.transform="translate3d("+(typeof r.left==="number"?r.left:0)+"px,"+(typeof r.top==="number"?r.top:0)+"px,0)"}delete r.left;delete r.top;if(s){r.transition="all "+s+"ms ease-in-out"}else{r.transition=""}u.css(r);if(t){u.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t();u.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")})}}else{delete r.transfrom;delete r.transition;if(s){u.animate(r,{queue:false,duration:q.duration,complete:t?t:0})}else{u.stop(1).css(r)}}}function n(r){var w=Math.max((q.width||g.width())/(q.height||g.height())||3,3);d=d||Math.round(w<1?3:3*w);p=p||Math.round(w<1?3/w:3);for(var u=0;u<d*p;u++){var v=u%d;var t=Math.floor(u/d);e([b[u]=document.createElement("div"),l[u]=document.createElement("div")]).css({position:"absolute",overflow:"hidden"}).appendTo(k).append(e("<img>").css({position:"absolute"}))}l=e(l);b=e(b);o(l,r);o(b,r,true);var s={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};c.css(s).append(e("<img>").css(s))}function o(t,u,s,r,w,z){var v=g.width();var x=g.height();var y={left:e(window).scrollLeft(),top:e(window).scrollTop(),width:e(window).width(),height:e(window).height()};e(t).each(function(F){var E=F%d;var C=Math.floor(F/d);if(s){var I=a*v*(2*Math.random()-1)+v/2;var G=a*x*(2*Math.random()-1)+x/2;var H=g.offset();H.left+=I;H.top+=G;if(H.left<y.left){I-=H.left+y.left}if(H.top<y.top){G-=H.top+y.top}var D=(y.left+y.width)-H.left-v/d;if(0>D){I+=D}var B=(y.top+y.height)-H.top-x/p;if(0>B){G+=B}}else{var I=v*E/d;var G=x*C/p}e(this).find("img").css({left:-(v*E/d)+u.marginLeft,top:-(x*C/p)+u.marginTop,width:u.width,height:u.height});var A={left:I,top:G,width:v/d,height:x/p};if(w){e.extend(A,w)}if(r){h(e(this),A,q.duration,(F===0&&z)?z:0)}else{h(e(this),A)}})}this.go=function(s,u){var v=e(j[u]),r={width:v.width(),height:v.height(),marginTop:parseFloat(v.css("marginTop")),marginLeft:parseFloat(v.css("marginLeft"))};if(!l.length){n(r)}l.find("img").attr("src",j.get(u).src);h(l,{opacity:1,zIndex:3});b.find("img").attr("src",j.get(s).src);h(b,{opacity:0,zIndex:2});c.find("img").attr("src",j.get(u).src);h(c.find("img"),{transform:"scale(1)"});g.show();f.hide();o(b,r,false,true,{opacity:1});o(l,r,true,true,{opacity:0},function(){i.trigger("effectEnd");g.hide()});h(c.find("img"),{transform:"scale(2)"},q.duration,0);var t=b;b=l;l=t}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var e=jQuery;var f=e(this);var h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var d=b.find(".ws_list");var g=e("<div>").addClass("ws_effect ws_fly").css(h).css({overflow:"visible"}).appendTo(b);this.go=function(p,m,l){if(l==undefined){l=!!c.revers}else{l=!l}var k=-(c.distance||g.width()/4),n=Math.min(-k,Math.max(0,e(window).width()-g.offset().left-g.width())),i=(l?n:k),q=(l?k:n);var j=e(a.get(m));j={width:j.width(),height:j.height()};var r=e("<div>").css(h).css({"z-index":1,overflow:"hidden"}).html(e(a.get(m)).clone().css(j)).appendTo(g);var o=e("<div>").css(h).css({"z-index":3,overflow:"hidden"}).html(e(a.get(p)).clone().css(j)).appendTo(g).show();wowAnimate(o,{opacity:0},{opacity:1},c.duration);wowAnimate(o,{left:i},{left:0},2*c.duration/3);d.hide();wowAnimate(r,{left:0,opacity:1},{left:q,opacity:0},2*c.duration/3,c.duration/3,function(){r.remove();f.trigger("effectEnd");o.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutOneBounce:function(e,i,c,a,d,g){var j=0.8;var b=0.2;var f=j*j;if(i<0.0001){return 0}else{if(i<j){return i*i/f}else{return 1-b*b+(i-j-b)*(i-j-b)}}},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}}});function ws_page(c,b,a){var e=jQuery;var h=c.angle||17;var g=e(this);var f=e("<div>").addClass("ws_effect ws_page").css({position:"absolute",width:"100%",height:"100%",top:"0%",overflow:"hidden"});var d=a.find(".ws_list");f.hide().appendTo(a);this.go=function(l,j){function o(){f.find("div").stop(1,1);f.hide();f.empty()}o();d.hide();var k=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":9}).append(e(b.get(l)).clone()).appendTo(f);var i=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",outline:"1px solid transparent","z-index":10,"transform-origin":"top left","backface-visibility":"hidden"}).append(e(b.get(j)).clone()).appendTo(f);f.show();if(c.responsive<3){k.find("img").css("width","100%");i.find("img").css("width","100%")}var q=i;var p=q.width(),m=q.height();var n=!document.addEventListener;wowAnimate(q,{rotate:0},{rotate:h},n?0:2*c.duration/3,"easeOutOneBounce",function(){wowAnimate(q,{top:0},{top:"100%"},(n?2:1)*c.duration/3)});wowAnimate(k,{top:"-100%"},{top:"-30%"},n?0:c.duration/2,function(){wowAnimate(k,{top:"-30%"},{top:0},(n?2:1)*c.duration/2,"easeOutBounce",function(){q.hide();o();g.trigger("effectEnd")})})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack(d,a,b){var e=jQuery;var g=e(this);var c=e("li",b);var f=e("<div>").addClass("ws_effect ws_stack").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);this.go=function(q,j,i){var k=(d.revers?1:-1)*b.width();c.each(function(s){if(i&&s!=j){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var p=e(".ws_list",b);var h=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?q:j)).clone()),r=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?j:q)).clone());if(d.responsive<3){h.find("img").css("width","100%");r.find("img").css("width","100%")}if(i){r.appendTo(f);h.appendTo(f)}else{h.insertAfter(p);r.insertAfter(p)}if(!i){p.stop(true,true).hide().css({left:-q+"00%"});if(d.fadeOut){p.fadeIn(d.duration)}else{p.show()}}else{if(d.fadeOut){p.fadeOut(d.duration)}}var o={left:i?k:0};var m={left:i?0:-k*0.5};var n={left:i?0:k};var l={left:(i?1:0)*b.width()*0.5};if(d.support.transform){o={translate:[o.left,0,0]};m={translate:[m.left,0,0]};n={translate:[n.left,0,0]};l={translate:[l.left,0,0]}}wowAnimate(h,o,n,d.duration,d.duration*(i?0:0.1),"easeInOutExpo",function(){g.trigger("effectEnd");h.remove();r.remove()});wowAnimate(r,m,l,d.duration,d.duration*(i?0.1:0),"easeInOutExpo")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack_vertical(d,a,b){var e=jQuery;var g=e(this);var c=e("li",b);var f=e("<div>").addClass("ws_effect ws_stack_vertical").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);this.go=function(q,j,i){var k=(d.revers?1:-1)*b.height();c.each(function(s){if(i&&s!=j){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var p=e(".ws_list",b);var h=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?q:j)).clone()),r=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?j:q)).clone());if(d.responsive<3){h.find("img").css("width","100%");r.find("img").css("width","100%")}if(i){r.appendTo(f);h.appendTo(f)}else{h.insertAfter(p);r.insertAfter(p)}if(!i){p.stop(true,true).hide().css({left:-q+"00%"});if(d.fadeOut){p.fadeIn(d.duration)}else{p.show()}}else{if(d.fadeOut){p.fadeOut(d.duration)}}var o={top:i?k:0};var m={top:i?0:-k*0.5};var n={top:i?0:k};var l={top:(i?1:0)*b.height()*0.5};if(d.support.transform){o={translate:[0,o.top,0]};m={translate:[0,m.top,0]};n={translate:[0,n.top,0]};l={translate:[0,l.top,0]}}wowAnimate(h,o,n,d.duration,d.duration*(i?0:0.1),"easeInOutExpo",function(){g.trigger("effectEnd");h.remove();r.remove()});wowAnimate(r,m,l,d.duration,d.duration*(i?0.1:0),"easeInOutExpo")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.5
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"glass_parallax,brick,domino,blast,fly,page,stack,stack_vertical",prev:"",next:"",duration:20*100,delay:5*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});