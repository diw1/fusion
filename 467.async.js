"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[467],{13013:function(W,w,d){var y=d(65657);w.Z=y.Z},99559:function(W,w,d){d.d(w,{Z:function(){return be}});var y=d(94184),u=d.n(y),o=d(67294),b=d(53124),P=d(98423),O=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:i}=e,r=u()({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),l=u()({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),c=o.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return o.createElement("span",{className:u()(t,r,l,n),style:Object.assign(Object.assign({},c),a)})},X=d(51222),F=d(67968),q=d(45503);const K=new X.E4("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),E=e=>({height:e,lineHeight:`${e}px`}),f=e=>Object.assign({width:e},E(e)),U=e=>({position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:K,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}),N=e=>Object.assign({width:e*5,minWidth:e*5},E(e)),V=e=>{const{skeletonAvatarCls:t,color:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},f(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(s)),[`${t}${t}-sm`]:Object.assign({},f(i))}},J=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:i,color:r}=e;return{[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:r,borderRadius:n},N(t)),[`${a}-lg`]:Object.assign({},N(s)),[`${a}-sm`]:Object.assign({},N(i))}},L=e=>Object.assign({width:e},E(e)),Q=e=>{const{skeletonImageCls:t,imageSizeBase:n,color:a,borderRadiusSM:s}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},L(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},L(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},I=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},B=e=>Object.assign({width:e*2,minWidth:e*2},E(e)),Y=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:i,color:r}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:r,borderRadius:t,width:a*2,minWidth:a*2},B(a))},I(e,a,n)),{[`${n}-lg`]:Object.assign({},B(s))}),I(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},B(i))}),I(e,i,`${n}-sm`))},_=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:i,skeletonInputCls:r,skeletonImageCls:l,controlHeight:c,controlHeightLG:g,controlHeightSM:p,color:m,padding:z,marginSM:h,borderRadius:H,skeletonTitleHeight:A,skeletonBlockRadius:$,skeletonParagraphLineHeight:k,controlHeightXS:S,skeletonParagraphMarginTop:x}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:z,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:m},f(c)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},f(g)),[`${n}-sm`]:Object.assign({},f(p))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${a}`]:{width:"100%",height:A,background:m,borderRadius:$,[`+ ${s}`]:{marginBlockStart:p}},[`${s}`]:{padding:0,"> li":{width:"100%",height:k,listStyle:"none",background:m,borderRadius:$,"+ li":{marginBlockStart:S}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:H}}},[`${t}-with-avatar ${t}-content`]:{[`${a}`]:{marginBlockStart:h,[`+ ${s}`]:{marginBlockStart:x}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},Y(e)),V(e)),J(e)),Q(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${r}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${i},
        ${r},
        ${l}
      `]:Object.assign({},U(e))}}};var v=(0,F.Z)("Skeleton",e=>{const{componentCls:t}=e,n=(0,q.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,skeletonTitleHeight:e.controlHeight/2,skeletonBlockRadius:e.borderRadiusSM,skeletonParagraphLineHeight:e.controlHeight/2,skeletonParagraphMarginTop:e.marginLG+e.marginXXS,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[_(n)]},e=>{const{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n}}),ee=e=>{const{prefixCls:t,className:n,active:a,shape:s="circle",size:i="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),l=r("skeleton",t),[c,g]=v(l),p=(0,P.Z)(e,["prefixCls","className"]),m=u()(l,`${l}-element`,{[`${l}-active`]:a},n,g);return c(o.createElement("div",{className:m},o.createElement(O,Object.assign({prefixCls:`${l}-avatar`,shape:s,size:i},p))))},te=e=>{const{prefixCls:t,className:n,active:a,block:s=!1,size:i="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),l=r("skeleton",t),[c,g]=v(l),p=(0,P.Z)(e,["prefixCls"]),m=u()(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:s},n,g);return c(o.createElement("div",{className:m},o.createElement(O,Object.assign({prefixCls:`${l}-button`,size:i},p))))},T=d(1413),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},se=ne,ae=d(93771),D=function(t,n){return o.createElement(ae.Z,(0,T.Z)((0,T.Z)({},t),{},{ref:n,icon:se}))};D.displayName="DotChartOutlined";var le=o.forwardRef(D),oe=e=>{const{prefixCls:t,className:n,style:a,active:s,children:i}=e,{getPrefixCls:r}=o.useContext(b.E_),l=r("skeleton",t),[c,g]=v(l),p=u()(l,`${l}-element`,{[`${l}-active`]:s},g,n),m=i!=null?i:o.createElement(le,null);return c(o.createElement("div",{className:p},o.createElement("div",{className:u()(`${l}-image`,n),style:a},m)))};const ie="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var re=e=>{const{prefixCls:t,className:n,style:a,active:s}=e,{getPrefixCls:i}=o.useContext(b.E_),r=i("skeleton",t),[l,c]=v(r),g=u()(r,`${r}-element`,{[`${r}-active`]:s},n,c);return l(o.createElement("div",{className:g},o.createElement("div",{className:u()(`${r}-image`,n),style:a},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${r}-image-svg`},o.createElement("path",{d:ie,className:`${r}-image-path`})))))},ce=e=>{const{prefixCls:t,className:n,active:a,block:s,size:i="default"}=e,{getPrefixCls:r}=o.useContext(b.E_),l=r("skeleton",t),[c,g]=v(l),p=(0,P.Z)(e,["prefixCls"]),m=u()(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:s},n,g);return c(o.createElement("div",{className:m},o.createElement(O,Object.assign({prefixCls:`${l}-input`,size:i},p))))},ge=d(74902),de=e=>{const t=l=>{const{width:c,rows:g=2}=e;if(Array.isArray(c))return c[l];if(g-1===l)return c},{prefixCls:n,className:a,style:s,rows:i}=e,r=(0,ge.Z)(Array(i)).map((l,c)=>o.createElement("li",{key:c,style:{width:t(c)}}));return o.createElement("ul",{className:u()(n,a),style:s},r)},ue=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return o.createElement("h3",{className:u()(t,n),style:Object.assign({width:a},s)})};function R(e){return e&&typeof e=="object"?e:{}}function me(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function he(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function pe(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const C=e=>{const{prefixCls:t,loading:n,className:a,style:s,children:i,avatar:r=!1,title:l=!0,paragraph:c=!0,active:g,round:p}=e,{getPrefixCls:m,direction:z}=o.useContext(b.E_),h=m("skeleton",t),[H,A]=v(h);if(n||!("loading"in e)){const $=!!r,k=!!l,S=!!c;let x;if($){const j=Object.assign(Object.assign({prefixCls:`${h}-avatar`},me(k,S)),R(r));x=o.createElement("div",{className:`${h}-header`},o.createElement(O,Object.assign({},j)))}let Z;if(k||S){let j;if(k){const M=Object.assign(Object.assign({prefixCls:`${h}-title`},he($,S)),R(l));j=o.createElement(ue,Object.assign({},M))}let G;if(S){const M=Object.assign(Object.assign({prefixCls:`${h}-paragraph`},pe($,k)),R(c));G=o.createElement(de,Object.assign({},M))}Z=o.createElement("div",{className:`${h}-content`},j,G)}const fe=u()(h,{[`${h}-with-avatar`]:$,[`${h}-active`]:g,[`${h}-rtl`]:z==="rtl",[`${h}-round`]:p},a,A);return H(o.createElement("div",{className:fe,style:s},x,Z))}return typeof i!="undefined"?i:null};C.Button=te,C.Avatar=ee,C.Input=ce,C.Image=re,C.Node=oe;var $e=C,be=$e}}]);