(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{82:function(e,a,t){Promise.resolve().then(t.bind(t,7730))},7730:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Page}});var r=t(7437),n=t(3470),c=t(2735),s=t(4033),i=t(2265),l=t(746),d=t(5347);let Live=()=>{let e=(0,s.useSearchParams)(),a=e.get("ch");if(a){let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{c.V.get("/lives.json").then(e=>{t(e.data.contents.filter(e=>!0==e.enable).find(e=>e.id==a))})},[]),(0,r.jsx)(r.Fragment,{children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:"Ver ".concat(e.title," online en HD | GH D\xdaO 2")}),(0,r.jsx)("meta",{name:"description",content:"Ver ".concat(e.title," en directo dentro y fuera de Espa\xf1a en HD | GH D\xdaO en directo")}),(0,r.jsx)(d.I,{content:e,is_live:!0})]}):(0,r.jsx)(l.a,{})})}{let[e,a]=(0,i.useState)();return(0,i.useEffect)(()=>{c.V.get("/lives.json").then(e=>{a(e.data.contents.filter(e=>!0==e.enable))})},[]),(0,r.jsx)("div",{children:e?(0,r.jsx)(n.nq,{title:"En directo",data:e}):(0,r.jsx)(l.a,{})})}};function Page(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Suspense,{children:(0,r.jsx)(Live,{})})})}},3470:function(e,a,t){"use strict";t.d(a,{DR:function(){return CardSeasons},YG:function(){return CardCategories},aY:function(){return CardContent},nq:function(){return CardLive}});var r=t(7437),n=t(1976),c=t.n(n);let CardCategories=e=>{let{title:a,data:t}=e;return(0,r.jsxs)("div",{className:c().card_container,children:[(0,r.jsx)("h1",{className:c().card_title,children:a}),(0,r.jsx)("div",{className:c().card_content,children:t.tabs.map((e,a)=>e.enable&&(0,r.jsx)("div",{className:c().card_item,children:(0,r.jsxs)("a",{href:"/contenidos?programa=".concat(t.parent,"&temporada=").concat(t.season,"&ver=").concat(e.id),children:[(0,r.jsx)("div",{className:c().card_info,children:(0,r.jsx)("h2",{className:c().card_content_title,children:e.title})}),(0,r.jsx)("img",{className:c().card_img,src:e.cover,alt:e.title})]})},a))})]})},CardSeasons=e=>{let{title:a,data:t}=e;return(0,r.jsxs)("div",{className:c().card_container,children:[(0,r.jsx)("h1",{className:c().card_title,children:a}),(0,r.jsx)("div",{className:c().card_content,children:t.map((e,a)=>(0,r.jsx)("div",{className:c().card_item,children:(0,r.jsxs)("a",{href:"/contenidos?programa=".concat(e.parent,"&temporada=").concat(e.season),children:[(0,r.jsx)("div",{className:c().card_info,children:(0,r.jsx)("h2",{className:c().card_content_title,children:e.title})}),(0,r.jsx)("img",{className:c().card_img,src:e.image,alt:e.title})]})},a))})]})},CardContent=e=>{let{title:a,data:t}=e;return(0,r.jsxs)("div",{className:c().card_container,children:[(0,r.jsx)("h1",{className:c().card_title,children:a}),(0,r.jsx)("div",{className:c().card_content,children:t.map((e,a)=>(0,r.jsx)("div",{className:c().card_item,children:(0,r.jsxs)("a",{href:"/ver?programa=".concat(e.parent,"&temporada=").concat(e.season,"&ver=").concat(e.category,"&id=").concat(e.contentId),children:[(0,r.jsx)("div",{className:c().card_info,children:(0,r.jsx)("h2",{className:c().card_content_title,children:e.title})}),(0,r.jsx)("img",{className:c().card_img,src:e.image||e.cover.programas,alt:e.title})]})},a))})]})},CardLive=e=>{let{title:a,data:t}=e;return(0,r.jsxs)("div",{className:c().card_container,children:[(0,r.jsx)("h1",{className:c().card_title,children:a}),(0,r.jsx)("div",{className:c().card_content_live,children:t.map((e,a)=>(0,r.jsx)("div",{className:c().card_item_live,children:(0,r.jsxs)("a",{href:"/en-directo?ch=".concat(e.id),children:[(0,r.jsx)("div",{className:c().card_info,children:(0,r.jsx)("h2",{className:c().card_content_title,children:e.title})}),(0,r.jsx)("img",{className:c().card_img,src:e.cover,alt:e.title})]})},a))})]})}},746:function(e,a,t){"use strict";t.d(a,{a:function(){return Loader}});var r=t(7437),n=t(7919),c=t.n(n);let Loader=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:c().loader,children:" "})})},5347:function(e,a,t){"use strict";t.d(a,{I:function(){return PrePlayer}});var r=t(7437),n=t(2265),c=t(3956),s=t.n(c),i=t(2173);t(8475);var l=t(9075),d=t.n(l);let Player=e=>{let{url:a,setVideoUrl:t,chat:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("head",{children:(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"})}),(0,r.jsx)("iframe",{id:"player",className:d().videoplayer,src:n?"/embed/chat.html?u=".concat(a,"&chat=").concat(n):a,frameBorder:"0",allowFullScreen:!0}),(0,r.jsx)("div",{className:"close_player",children:(0,r.jsx)("img",{className:d().close_icon,src:"/static/icons/close.svg",onClick:()=>t(!1)})})]})},PrePlayer=e=>{let{content:a,is_live:t,adblocker:c}=e,[l,d]=(0,n.useState)(!1),[o,_]=(0,n.useState)(!1),[p,m]=(0,n.useState)(!1),[h,u]=(0,n.useState)(),getToken=async()=>{let e=await i.Z.get("https://back.laisla.pm/api/key").then(e=>e.data);return e.secret1},playVideo=async()=>{let e;d(!0);try{await fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")).catch(a=>e=!0)}catch(a){e=!0}if(e)m(!0),d(!1);else{let get_hls=async()=>{let e=await getToken();u("/embed/index.html?u=".concat(a.video.normal+"?"+await e,"&i=").concat(a.image||a.cover)),d(!1)},get_external=async()=>{for(let e of a.video.backup.filter(e=>!0===e.enable)){let a=await i.Z.get("https://back.laisla.pm/api/health?i=".concat(e.url)).then(e=>e.data);if(2===a.result);else if(1===a.result){d(!1),_(!0);break}else{u(e.url),d(!1);break}}};a.app?(d(!1),_(!0)):a.twitch?u(a.twitch):a.video.dash&&!navigator.vendor.match(/apple/i)?(u("/embed/index.html?u=".concat(a.video.dash,"&i=").concat(a.image||a.cover).concat(a.drm?"&drm=".concat(btoa(JSON.stringify(a.drm))):"")),d(!1)):a.video.normal?get_hls():get_external()}};return h?(0,r.jsx)(Player,{url:h,setVideoUrl:u,chat:a.chat}):(0,r.jsxs)("section",{className:s().play,children:[(0,r.jsx)("div",{className:s().image,children:(0,r.jsx)("img",{src:a.image||a.cover,className:s().backgroundImage})}),(0,r.jsxs)("div",{className:s().video_info,children:[!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s().play_btn,onClick:playVideo,children:(0,r.jsx)("object",{className:l?s().spinner:s().play_icon,type:"image/svg+xml",data:"/static/icons/".concat(l?"spinner":"play",".svg")})}),(0,r.jsx)("h1",{className:s().video_title,children:a.title})]}),o&&(0,r.jsx)("div",{className:s().download_app,children:(0,r.jsx)("p",{className:s().warning_app_title,children:a.custom_error?a.custom_error:"Actualmente este contenido no se encuentra disponible"})}),p&&(0,r.jsx)("div",{className:s().download_app,children:(0,r.jsx)("p",{className:s().warning_app_title,children:"Para ver este contenido primero debes desactivar tu adblocker"})})]})]})}},2735:function(e,a,t){"use strict";t.d(a,{V:function(){return n}});var r=t(2173);let n=r.Z.create({baseURL:"https://api.granhermano.cc/1.0"})},1976:function(e){e.exports={card_container:"carousel_card_container__Aaw_A",card_title:"carousel_card_title__drZzy",card_content:"carousel_card_content__0_XmK",card_content_live:"carousel_card_content_live__NXjPB",card_content_skeleton:"carousel_card_content_skeleton__yYYiZ",card_item:"carousel_card_item__IORK3",card_item_live:"carousel_card_item_live__nWeB0",card_info:"carousel_card_info__697dK",card_content_title:"carousel_card_content_title__coIzu",card_img:"carousel_card_img__NF2_G",card_item_skeleton:"carousel_card_item_skeleton__9U7kV","skeleton-loading":"carousel_skeleton-loading__cH9pv"}},7919:function(e){e.exports={loader:"loader_loader__F_hDg",spinner:"loader_spinner__qosHm"}},9075:function(e){e.exports={videoplayer:"player_videoplayer__i_D7i",close_icon:"player_close_icon__bugWk"}},3956:function(e){e.exports={play:"pre-player_play__ma4kl",image:"pre-player_image__0PawT",backgroundImage:"pre-player_backgroundImage__PyD7i",video_info:"pre-player_video_info__xCOys",video_title:"pre-player_video_title__g7mRr",video_season:"pre-player_video_season__KX27m",play_btn:"pre-player_play_btn__Z2sb5",play_icon:"pre-player_play_icon__ez6V1",spinner:"pre-player_spinner___p4em",videoplayer:"pre-player_videoplayer__ORuwS",download_app:"pre-player_download_app__yfV9n",warning_app_title:"pre-player_warning_app_title__qZg88",app_btn:"pre-player_app_btn__F3dKs",cta_app:"pre-player_cta_app__n_9i3",mac_app_btn:"pre-player_mac_app_btn__eBFQd",win_app_btn:"pre-player_win_app_btn__Ugibe"}}},function(e){e.O(0,[580,124,971,472,744],function(){return e(e.s=82)}),_N_E=e.O()}]);