import{a as S,t as M}from"../chunks/disclose-version.Bw3cJ2gi.js";import"../chunks/legacy.Dp59fmBS.js";import{w,O as F,a4 as de,L as he,m as ge,I as me,a5 as ie,M as ye,N as Q,P as G,x as L,a6 as B,J as oe,o as le,K as xe,F as W,a7 as be,a8 as Te,a9 as Ee,aa as Ae,v as Pe,ab as Ne,ac as we,ad as Oe,a3 as ke,A as Z,ae as Ie,af as Se,ag as Me,ah as Ce,ai as Re,H as j,aj as Le,p as He,ak as ee,al as De,s as E,i as ae,t as J,j as $e,g as u,k as N,l as A,am as $,C as H,e as re}from"../chunks/runtime.Bn5xaFD8.js";import{e as U,a as I}from"../chunks/store.CxfXDy-N.js";import{p as Be,i as X}from"../chunks/props.CDu4TMGv.js";import{i as Ye}from"../chunks/lifecycle.DOmiCkZt.js";function Ke(r,e){return e}function Ve(r,e,a,o){for(var f=[],v=e.length,s=0;s<v;s++)Te(e[s].e,f,!0);var c=v>0&&f.length===0&&a!==null;if(c){var g=a.parentNode;Ee(g),g.append(a),o.clear(),O(r,e[0].prev,e[v-1].next)}Ae(f,()=>{for(var h=0;h<v;h++){var t=e[h];c||(o.delete(t.k),O(r,t.prev,t.next)),Pe(t.e,!c)}})}function ze(r,e,a,o,f,v=null){var s=r,c={flags:e,items:new Map,first:null};{var g=r;s=w?F(Ne(g)):g.appendChild(de())}w&&he();var h=null,t=!1;ge(()=>{var _=a(),i=me(_)?_:_==null?[]:ie(_),n=i.length;if(t&&n===0)return;t=n===0;let m=!1;if(w){var T=s.data===ye;T!==(n===0)&&(s=Q(),F(s),G(!1),m=!0)}if(w){for(var y=null,l,p=0;p<n;p++){if(L.nodeType===8&&L.data===we){s=L,m=!0,G(!1);break}var k=i[p],b=o(k,p);l=fe(L,c,y,null,k,b,p,f,e),c.items.set(b,l),y=l}n>0&&F(Q())}if(!w){var x=Oe;Fe(i,c,s,f,e,(x.f&B)!==0,o)}v!==null&&(n===0?h?oe(h):h=le(()=>v(s)):h!==null&&xe(h,()=>{h=null})),m&&G(!0),a()}),w&&(s=L)}function Fe(r,e,a,o,f,v,s){var c=r.length,g=e.items,h=e.first,t=h,_,i=null,n=[],m=[],T,y,l,p;for(p=0;p<c;p+=1){if(T=r[p],y=s(T,p),l=g.get(y),l===void 0){var k=t?t.e.nodes_start:a;i=fe(k,e,i,i===null?e.first:i.next,T,y,p,o,f),g.set(y,i),n=[],m=[],t=i.next;continue}if(Ge(l,T,p),l.e.f&B&&oe(l.e),l!==t){if(_!==void 0&&_.has(l)){if(n.length<m.length){var b=m[0],x;i=b.prev;var D=n[0],P=n[n.length-1];for(x=0;x<n.length;x+=1)te(n[x],b,a);for(x=0;x<m.length;x+=1)_.delete(m[x]);O(e,D.prev,P.next),O(e,i,D),O(e,P,b),t=b,i=P,p-=1,n=[],m=[]}else _.delete(l),te(l,t,a),O(e,l.prev,l.next),O(e,l,i===null?e.first:i.next),O(e,i,l),i=l;continue}for(n=[],m=[];t!==null&&t.k!==y;)(v||!(t.e.f&B))&&(_??(_=new Set)).add(t),m.push(t),t=t.next;if(t===null)continue;l=t}n.push(l),i=l,t=l.next}if(t!==null||_!==void 0){for(var d=_===void 0?[]:ie(_);t!==null;)(v||!(t.e.f&B))&&d.push(t),t=t.next;var C=d.length;if(C>0){var R=c===0?a:null;Ve(e,d,R,g)}}W.first=e.first&&e.first.e,W.last=i&&i.e}function Ge(r,e,a,o){be(r.v,e),r.i=a}function fe(r,e,a,o,f,v,s,c,g){var h=(g&Se)!==0,t=(g&Me)===0,_=h?t?ke(f):Z(f):f,i=g&Ie?Z(s):s,n={i,v:_,k:v,a:null,e:null,prev:a,next:o};try{return n.e=le(()=>c(r,_,i),w),n.e.prev=a&&a.e,n.e.next=o&&o.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),o!==null&&(o.prev=n,o.e.prev=n.e),n}finally{}}function te(r,e,a){for(var o=r.next?r.next.e.nodes_start:a,f=e?e.e.nodes_start:a,v=r.e.nodes_start;v!==o;){var s=Ce(v);f.before(v),v=s}}function O(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function se(r,e,a,o){var f=r.__attributes??(r.__attributes={});w&&(f[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||f[e]!==(f[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[Re]=a),a==null?r.removeAttribute(e):typeof a!="string"&&Je(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var ne=new Map;function Je(r){var e=ne.get(r.nodeName);if(e)return e;ne.set(r.nodeName,e=[]);for(var a,o=j(r),f=Element.prototype;f!==o;){a=Le(o);for(var v in a)a[v].set&&e.push(v);o=j(o)}return e}const Ue=!0;async function Xe(){return{products:(await(await fetch("https://dummyjson.com/products")).json()).products}}const oa=Object.freeze(Object.defineProperty({__proto__:null,load:Xe,prerender:Ue},Symbol.toStringTag,{value:"Module"}));var qe=M('<li><h2> </h2> <p> </p> <p> </p> <p> </p> <p> </p> <img width="100"></li>'),Qe=M("<button>Previous</button>"),We=M("<button>Next</button>"),Ze=M("<ul></ul> <div><!> <span> </span> <!></div>",1),je=M("<p>The shop is currently closed. Please come back later.</p>"),ea=M("<h1>Product List</h1> <button> </button> <!>",1);function la(r,e){He(e,!1);const a=$(),o=$();let f=Be(e,"data",8),v=5,s=$(1),c=$("Open");function g(){H(c,u(c)==="Open"?"Closed":"Open")}function h(){u(s)<u(a)&&H(s,u(s)+1)}function t(){u(s)>1&&H(s,u(s)-1)}ee(()=>re(f()),()=>{H(a,Math.ceil(f().products.length/v))}),ee(()=>(re(f()),u(s)),()=>{H(o,f().products.slice((u(s)-1)*v,u(s)*v))}),De(),Ye();var _=ea(),i=E(ae(_),2),n=N(i,!0);A(i);var m=E(i,2);X(m,()=>u(c)==="Open",T=>{var y=Ze(),l=ae(y);ze(l,5,()=>u(o),Ke,(P,d)=>{var C=qe(),R=N(C),ve=N(R,!0);A(R);var Y=E(R,2),ue=N(Y,!0);A(Y);var K=E(Y,2),_e=N(K);A(K);var V=E(K,2),ce=N(V);A(V);var z=E(V,2),pe=N(z);A(z);var q=E(z,2);A(C),J(()=>{I(ve,u(d).title),I(ue,u(d).description),I(_e,`Price: $${u(d).price??""}`),I(ce,`Rating: ${u(d).rating??""} ⭐`),I(pe,`Brand: ${u(d).brand??""}`),se(q,"src",u(d).thumbnail),se(q,"alt",u(d).title)}),S(P,C)}),A(l);var p=E(l,2),k=N(p);X(k,()=>u(s)>1,P=>{var d=Qe();U("click",d,t),S(P,d)});var b=E(k,2),x=N(b);A(b);var D=E(b,2);X(D,()=>u(s)<u(a),P=>{var d=We();U("click",d,h),S(P,d)}),A(p),J(()=>I(x,`Page ${u(s)??""} of ${u(a)??""}`)),S(T,y)},T=>{var y=je();S(T,y)}),J(()=>I(n,u(c)==="Open"?"Close Shop":"Open Shop")),U("click",i,g),S(r,_),$e()}export{la as component,oa as universal};