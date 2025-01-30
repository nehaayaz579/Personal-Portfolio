"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>r});var a=n(934980);let i=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,a.Ll)([i]),animation:"pulsing 2s infinite"}},503546:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(616550),i=n(282999),r=n(297728),o=n(730212),l=n(383399),s=n(402189),u=n(984821);function m(){let e=(0,l.Z)(),t=(0,r.F)(),{isRTL:n}=(0,o.B)(),m=(0,a.TH)(),d=(0,u.Z)(m)&&!n&&e.isAuth&&!e.isPartner&&!(0,i.OK)(m);return{enabled:d&&t.checkExperiment("web_vertical_nav").anyEnabled,group:d?t.checkExperiment("web_vertical_nav").group:s.lR.NONE}}},717307:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(297728),i=n(2968),r=n(730212),o=n(410150);function l({dangerouslySkipActivation:e=!1}={}){let t;let{isAuthenticated:n}=(0,r.B)(),s=(0,o.HG)(),{checkExperiment:u}=(0,a.F)();return n&&s&&(t=u("dweb_grid_loading_state",{dangerouslySkipActivation:e}).group),{isInGridLoadingStateExp:(0,i.Z)(t??""),isInGridLoadingStateDefaultExp:"enabled"===t,isInGridInfiniteScrollExp:"enabled_infinite_scroll"===t||"employees"===t,gridLoadingStateGroup:t}}},934980:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>o,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(667294),i=n(883119),r=n(573706),o=n(986782);function l(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class m{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var d=n(587435),p=n(39260),c=n(717307),_=n(876594),h=n(720687),b=n(512541),y=n(785893);let{css:f,animation:g}=h.default,v={backgroundColor:_._VP,animation:g,borderRadius:_.Ev2};function w({data:e}){let{height:t}=e;return/*#__PURE__*/(0,y.jsxs)(a.Fragment,{children:[/*#__PURE__*/(0,y.jsx)(b.Z,{unsafeCSS:f}),/*#__PURE__*/(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:v},"data-test-id":"skeleton-pin",children:/*#__PURE__*/(0,y.jsx)(i.xu,{height:t})})]})}var x=n(679482),E=n(144326),k=n(297728),C=n(730212),M=n(410150),S=n(415787),$=n(855746);function O(e){let{align:t,cacheKey:n,id:l,isFetching:u,isGridCentered:_=!0,items:h,layout:f,loadItems:g,masonryRef:v,optOutFluidGridExperiment:O=!1,renderItem:R,scrollContainerRef:j,virtualize:A=!0,_getColumnSpanConfig:I,_dynamicHeights:N,useLoadingState:G,isLoadingAccessibilityLabel:W,isLoadedAccessibilityLabel:P}=e,T=(0,E.ZP)(),Z=(0,M.ZP)(),{isAuthenticated:B,isRTL:L}=(0,C.B)(),{logContextEvent:F}=(0,r.v)(),H=(0,k.F)(),D="desktop"===Z,V=(0,$.MM)(),{experimentalColumnWidth:z,experimentalGutter:U,anyEnabled:X,group:K}=((0,a.useRef)(h.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),(0,d.Z)("flexible"!==f&&!O)),Y=e.serverRender??!!D,J="flexible"===f||"uniformRowFlexible"===f||"desktop"!==Z||X,q=(J&&f?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(Y?"serverRenderedFlexible":"flexible"),Q=e.columnWidth??z??x.yF;J&&(Q=Math.floor(Q));let ee=e.gutterWidth??U??(D?x.oX:1),et=e.minCols??x.yc,en=((0,a.useRef)(0),Q+ee),ea=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new m),t.measurementCache}(n),ei=(0,a.useCallback)(()=>j?.current||window,[j]),er=(0,a.useRef)(!0),{anyEnabled:eo,group:el}=I?H.checkExperiment("web_masonry_mixed_early_bailout"):{anyEnabled:!1,group:""},es=eo?e=>e<=3?2*ee:3*ee:void 0,{anyEnabled:eu}=N?H.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},em=_&&er.current?"centered":"",{className:ed,styles:ep}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:l,items:s,_getColumnSpanConfig:u}=e,m=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],d=r+a,p=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let s=e===l?0:e*d,u=e===o?null:(e+1)*d-.01,{styles:p,numberOfVisibleItems:c}=m.reduce((i,o)=>{let{columnSpanConfig:l}=o,s=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:l}),e),u=null!=o.index&&i.numberOfVisibleItems>=s+o.index,m=n?100/e*s:r*s+a*(s-1),{numberOfVisibleItems:d}=i;return u?d-=s-1:o.index<d&&(d+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:u,width:m,flexible:n})),numberOfVisibleItems:d}},{styles:"",numberOfVisibleItems:e}),_=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*d}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:s,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${_}

      ${p}
    `}}),c=p.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=p.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${_.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${h}
  `}}({gutterWidth:ee,flexible:J,items:h,isRTL:L,itemWidth:Q,maxColumns:e.maxColumns??Math.max(h.length,x.g5),minColumns:et,_getColumnSpanConfig:I}),ec=`${em} ${ed}`.trim(),{anyEnabled:e_,expName:eh,group:eb,isMeasureAllEnabled:ey}=(0,p.Z)(),ef=((0,a.useRef)(),(0,a.useRef)(h.length)),eg=(0,a.useRef)(0);(0,a.useEffect)(()=>{ef.current=h.length,eg.current+=1},[h]),(0,a.useEffect)(()=>{er.current&&(er.current=!1)},[]),(0,a.useEffect)(()=>()=>{},[]);let ev=(0,a.useCallback)((e,t,n)=>{let a=e.reduce((e,t)=>e+t),i=a/e.length;(0,S.S0)("webapp.masonry.multiColumnWhitespace.average",i,{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eb||"unknown",fluidGridGroup:K||"unknown",handlerId:V,isAuthenticated:B,multiColumnItemSpan:e.length}}),(0,S.S0)("webapp.masonry.twoColWhitespace",i,{sampleRate:1,tags:{columnWidth:Q,minCols:et}}),el&&(0,S.S0)("webapp.masonry.graphIterations",t,{sampleRate:1,tags:{columnSpan:n,exprimentGroup:el}}),F({event_type:15878,component:14468,aux_data:{total_whitespace_px:a}}),F({event_type:16062,component:14468,aux_data:{average_whitespace_px:i}}),F({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eb||"unknown",fluidGridGroup:K||"unknown",handlerId:V,isAuthenticated:B,multiColumnItemSpan:e.length}}),F({event_type:16261,component:14468})),t>=100&&((0,S.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eb||"unknown",fluidGridGroup:K||"unknown",handlerId:V,isAuthenticated:B,multiColumnItemSpan:e.length}}),F({event_type:16262,component:14468}))}),(0,S.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{earlyBailoutExperimentGroup:el||"unknown",experimentalMasonryGroup:eb||"unknown",fluidGridGroup:K||"unknown",handlerId:V,isAuthenticated:B,multiColumnItemSpan:e.length}})},[Q,el,F,et,B,V,K,eb]),{_items:ew,_renderItem:ex}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:r,useLoadingState:o}){let{isInGridInfiniteScrollExp:l}=(0,c.Z)(),s=o&&n&&0===i.length,u=o&&n&&l&&i.length>0,m=(0,a.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,a.useMemo)(()=>s?m:u?[...i,...m]:i,[s,u,i,m]),_renderItem:(0,a.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?/*#__PURE__*/(0,y.jsx)(w,{data:n},n.key):r(e)}:r,[o,r,i.length])}}({useLoadingState:G,items:h,renderItem:(0,a.useCallback)(e=>/*#__PURE__*/(0,y.jsx)(o.Z,{name:"MasonryItem",children:R(e)}),[R]),isFetching:u}),eE=G&&u;return/*#__PURE__*/(0,y.jsxs)(a.Fragment,{children:[G&&!er.current&&/*#__PURE__*/(0,y.jsx)(i.xu,{"aria-live":"polite",display:"visuallyHidden",children:eE?W??T.bt("Pins are loading", "Pins are loading", "Masonry", undefined, true):P??T.bt("Pins have loaded", "Pins are loaded", "Masonry", undefined, true)}),/*#__PURE__*/(0,y.jsx)("div",{"aria-busy":G?!!eE:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:l,style:X?{padding:`0 ${ee/2}px`}:void 0,children:/*#__PURE__*/(0,y.jsxs)("div",{className:ec,children:[Y&&er.current?/*#__PURE__*/(0,y.jsx)(b.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ep}):null,/*#__PURE__*/(0,y.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?en*e.maxColumns:void 0,children:e_?/*#__PURE__*/(0,y.jsx)(i.GX,{ref:e=>{v&&(v.current=e)},_dynamicHeights:N,_dynamicHeightsV2Experiment:eu,_earlyBailout:es,_getColumnSpanConfig:I,_logTwoColWhitespace:ev,_measureAll:ey,align:t,columnWidth:Q,gutterWidth:ee,items:ew,layout:J?q:f??"basic",loadItems:g,measurementStore:ea,minCols:et,renderItem:ex,scrollContainer:ei,virtualBufferFactor:.3,virtualize:A}):/*#__PURE__*/(0,y.jsx)(i.Rk,{ref:e=>{v&&(v.current=e)},_dynamicHeights:N,_dynamicHeightsV2Experiment:eu,_earlyBailout:es,_getColumnSpanConfig:I,_logTwoColWhitespace:ev,align:t,columnWidth:Q,gutterWidth:ee,items:ew,layout:J?q:f??"basic",loadItems:g,measurementStore:ea,minCols:et,renderItem:ex,scrollContainer:ei,virtualBufferFactor:.3,virtualize:A})})]})})]})}},587435:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(503546),i=n(297728),r=n(730212),o=n(410150);let l=({isEligible:e=!0,skipActivation:t,skipVerticalNavCheck:n})=>{let l=(0,o.ZP)(),{isAuthenticated:s}=(0,r.B)(),u=(0,i.F)(),{enabled:m}=(0,a.Z)();return"desktop"===l&&e?m&&!n?{anyEnabled:!0,group:"enabled_221_16"}:u.checkExperiment(s?"web_fluid_grid_desktop_auth":"web_fluid_grid_desktop_unauth",{dangerouslySkipActivation:t||!1}):{group:"",anyEnabled:!1}};function s(e=!0){let{group:t,anyEnabled:n}=l({isEligible:e}),a=t.match(/enabled_([\d]+)_([\d]+)/),i=a?parseInt(a[1],10):void 0,r=a?parseInt(a[2],10):void 0,o=r?Math.floor(r/4):void 0;return{anyEnabled:n,group:t,experimentalColumnWidth:i,experimentalGutter:r,experimentalGutterBoints:o}}},39260:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(297728),i=n(730212),r=n(855746);function o(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:o,group:l}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:l,isMeasureAllEnabled:"enabled_measure_all"===l||"enabled_measure_all_impression_fix"===l,isImpressionFixEnabled:"control_impression_fix"===l||"enabled_impression_fix"===l||"enabled_measure_all_impression_fix"===l}}},2968:(e,t,n)=>{n.d(t,{Z:()=>a});let a=e=>e.startsWith("enabled")||e.startsWith("employee")},402189:(e,t,n)=>{n.d(t,{BO:()=>x,GC:()=>S,GJ:()=>b,L7:()=>_,Lc:()=>d,Mh:()=>u,Qf:()=>m,Qq:()=>M,Un:()=>O,X$:()=>C,Z7:()=>c,ZG:()=>$,bT:()=>g,bd:()=>f,df:()=>p,iz:()=>j,kl:()=>y,lR:()=>R,m6:()=>E,mT:()=>w,pS:()=>v,uW:()=>k,zz:()=>h});var a,i,r=n(883119),o=n(876594),l=n(65967),s=n(241716);let u="right",m=72,d="VerticalNavContent",p=24,c="lg",_=16,h=16,b=392,y=12,f=o.mJW,g=o.Kuk,v=new r.H3([s.NW]),w=new r.Ry(s.fe-3),x=new r.H3([v,l.kl]),E=new r.H3([x]),k=2,C=8,M=3,S=12,$=20,O=((a={}).PINTEREST_LOGO="web.vertical_nav.pinterest_logo.click",a.HOME="web.vertical_nav.home.click",a.TODAY="web.vertical_nav.today.click",a.CREATE="web.vertical_nav.create.click",a.NEWS="web.vertical_nav.news.click",a.CONVERSATIONS="web.vertical_nav.conversations.click",a.AVATAR="web.vertical_nav.avatar.click",a.ACCOUNT_SWITCHER="web.vertical_nav.account_switcher.click",a.MORE_OPTIONS_OPT_OUT="web.vertical_nav.more_options.opt_out",a.MORE_OPTIONS="web.vertical_nav.more_options.click",a),R=((i={}).CONTROL="control",i.EMPLOYEES="employees",i.ENABLED="enabled",i.ENABLED_HOME_BUTTON="enabled_home_button",i.ENABLED_HOME_AND_LOGO="enabled_home_and_logo",i.NONE="",i),j=e=>({tags:{experimentGroup:e}})},984821:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(282999);function i(e){return!((0,a.Gl)(e)||(0,a.PY)(e)||(0,a.jC)(e)||(0,a.Xn)(e)||(0,a.b_)(e)||(0,a.oF)(e)||(0,a.dt)(e)||(0,a.x7)(e)||(0,a.cY)(e)||(0,a.bb)(e))}},65967:(e,t,n)=>{n.d(t,{CZ:()=>o,Db:()=>s,Lu:()=>r,kl:()=>a,sb:()=>l,t3:()=>i,to:()=>u});let a=new(n(883119)).Ry(700),i="defaultInboxView",r="newMessageView",o="newMessageSelectRecipientsView",l="invitesRequestsView",s="followInviteEducationView",u=64}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168.en_GB-05ca005d779efbbc.mjs.map