(function(){var e={3482:function(e,t,n){"use strict";n.r(t),t["default"]={profile:{title:e=>{const{normalize:t}=e;return t(["Ilya Chichkov"])},desc:e=>{const{normalize:t}=e;return t(["Student, software and games developer"])},city:e=>{const{normalize:t}=e;return t(["City"])},moscow:e=>{const{normalize:t}=e;return t(["Moscow"])},age:e=>{const{normalize:t}=e;return t(["Age"])}},titles:{skills:e=>{const{normalize:t}=e;return t(["Skills & Qualifications"])},tech:e=>{const{normalize:t}=e;return t(["Tools"])},lang:e=>{const{normalize:t}=e;return t(["Languages"])},proj:e=>{const{normalize:t}=e;return t(["Projects & Accomplishments"])},email:e=>{const{normalize:t}=e;return t(["Email"])},programmer:e=>{const{normalize:t}=e;return t(["Programmer"])},designer:e=>{const{normalize:t}=e;return t(["Designer"])},contact:e=>{const{normalize:t}=e;return t(["Contact Me"])}},"tool-data":{info:e=>{const{normalize:t}=e;return t(["I use different tool to achieve fast and efficient workflow. Diversified involvement in processes gave me experience not only as a developer, but also as a designer. Here are some programs I use frequently for my work"])}},projects:{one:e=>{const{normalize:t}=e;return t(['🏆 Mobile arcade game "Space Frontline"'])},two:e=>{const{normalize:t}=e;return t(['🏆 "Dawn of white" strategy for PC'])},three:e=>{const{normalize:t}=e;return t([])}},skills:{one:e=>{const{normalize:t}=e;return t(["✔️ 5 Years experience with software development"])},two:e=>{const{normalize:t}=e;return t(["✔️ Active user of Git version control system"])},three:e=>{const{normalize:t}=e;return t(["✔️ Extensive knowledge in Unity Engine"])}},languages:{ru:e=>{const{normalize:t}=e;return t(["Russian"])},en:e=>{const{normalize:t}=e;return t(["English"])},ge:e=>{const{normalize:t}=e;return t(["German"])}},other:{"return-warning":e=>{const{normalize:t}=e;return t(["Return back"])}},"contact-form":{name:e=>{const{normalize:t}=e;return t(["Name"])},email:e=>{const{normalize:t}=e;return t(["Email"])},message:e=>{const{normalize:t}=e;return t(["Message"])},btn:e=>{const{normalize:t}=e;return t(["Send"])},"btn-s":e=>{const{normalize:t}=e;return t(["Success"])}}}},5521:function(e,t,n){"use strict";n.r(t),t["default"]={profile:{title:e=>{const{normalize:t}=e;return t(["Илья Чичков"])},desc:e=>{const{normalize:t}=e;return t(["Студент, разработчик программного обеспечения и игр"])},city:e=>{const{normalize:t}=e;return t(["Город"])},moscow:e=>{const{normalize:t}=e;return t(["Москва"])},age:e=>{const{normalize:t}=e;return t(["Возраст"])}},titles:{skills:e=>{const{normalize:t}=e;return t(["Навыки и Квалификация"])},tech:e=>{const{normalize:t}=e;return t(["Инструменты"])},lang:e=>{const{normalize:t}=e;return t(["Языки"])},proj:e=>{const{normalize:t}=e;return t(["Проекты"])},email:e=>{const{normalize:t}=e;return t(["Почта"])},programmer:e=>{const{normalize:t}=e;return t(["Программист"])},designer:e=>{const{normalize:t}=e;return t(["Дизайнер"])},contact:e=>{const{normalize:t}=e;return t(["Связаться со мной"])}},"tool-data":{info:e=>{const{normalize:t}=e;return t(["Используя различные приложения я добиваюсь быстрого и эффективного рабочего процесса. Многостороння вовлеченность в процесс создания приложения принесла мне опыт не только в качестве разработчика, но и дизайнера. Вот некоторые часто используемые мной программы"])}},projects:{one:e=>{const{normalize:t}=e;return t(['🏆 Игра жанра аркада на телефон "Space Frontline"'])},two:e=>{const{normalize:t}=e;return t(['🏆 "Dawn of white" стратегия на персональные компьютеры'])},three:e=>{const{normalize:t}=e;return t([])}},skills:{one:e=>{const{normalize:t}=e;return t(["✔️ 5 Лет опыта разработки программного обеспечения"])},two:e=>{const{normalize:t}=e;return t(["✔️ Умение пользоваться системой контроля версий"])},three:e=>{const{normalize:t}=e;return t(["✔️ Широкое познание в движке Unity"])}},languages:{ru:e=>{const{normalize:t}=e;return t(["Русский"])},en:e=>{const{normalize:t}=e;return t(["Английский"])},ge:e=>{const{normalize:t}=e;return t(["Немецкий"])}},other:{"return-warning":e=>{const{normalize:t}=e;return t(["Вы вернетесь на главную страницу через"])}},"contact-form":{name:e=>{const{normalize:t}=e;return t(["Имя"])},email:e=>{const{normalize:t}=e;return t(["Почта"])},message:e=>{const{normalize:t}=e;return t(["Сообщение"])},btn:e=>{const{normalize:t}=e;return t(["Отправить"])},"btn-s":e=>{const{normalize:t}=e;return t(["Отправлено"])}}}},5583:function(e,t,n){"use strict";var r=n(9242),o=n(3396);const s={class:"dark"};function l(e,t,n,r,l,a){const i=(0,o.up)("router-view"),c=(0,o.up)("LanguageSwitch");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(i),(0,o.Wm)(c)])}var a=n(7139);const i={class:"absolute md:fixed l-switch"};function c(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("button",{class:"l-button",onClick:t[0]||(t[0]=(...e)=>l.changeLang&&l.changeLang(...e))},(0,a.zw)(s.lang),1)])}var u={name:"LanguageSwitch",data(){return{lang:"EN"}},methods:{changeLang(){"EN"===this.lang?this.lang="RU":this.lang="EN",localStorage.setItem("lang",this.lang),this.$i18n.locale=this.lang.toLowerCase()}},mounted(){this.lang=localStorage.getItem("lang")||"EN",this.$i18n.locale=this.lang.toLowerCase()}},m=n(89);const d=(0,m.Z)(u,[["render",c],["__scopeId","data-v-9628a61a"]]);var g=d,f={name:"App",components:{LanguageSwitch:g}};const p=(0,m.Z)(f,[["render",l]]);var h=p,w=n(5658);function v(){const e=n(3631),t={};return e.keys().forEach((n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n).default}})),console.log(t),t}var _=(0,w.o)({legacy:!1,locale:"en",fallbackLocale:"en",messages:v()}),z=n(2483);const b={class:"dark"},y={class:"mb-10"},k=(0,o._)("hr",null,null,-1),x={class:""},j={class:"flex-col sm:grid grid-cols-2 gap-6"},C=(0,o._)("hr",null,null,-1),M={class:"flex justify-center sm:justify-start"},$={class:"btn-primary mt-8"},P=(0,o.Uk)("Contact Me"),S=(0,o._)("footer",{class:"block h-20"},null,-1);function D(e,t,n,r,s,l){const i=(0,o.up)("MyProfile"),c=(0,o.up)("MyLinks"),u=(0,o.up)("ProgressBar"),m=(0,o.up)("MyToolsSection"),d=(0,o.up)("ProgressCircle"),g=(0,o.up)("MyProjectsSection"),f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("section",null,[(0,o.Wm)(i)]),(0,o._)("section",null,[(0,o.Wm)(c)]),(0,o._)("section",y,[(0,o._)("h2",null,(0,a.zw)(e.$t("titles.skills")),1),(0,o._)("ul",null,[(0,o._)("li",null,(0,a.zw)(e.$t("skills.one")),1),(0,o._)("li",null,(0,a.zw)(e.$t("skills.two")),1),(0,o._)("li",null,(0,a.zw)(e.$t("skills.three")),1)])]),k,(0,o._)("section",x,[(0,o._)("div",j,[(0,o.Wm)(u,{class:"mb-2 sm:mb-0",title:"C#",percent:90}),(0,o.Wm)(u,{class:"mb-2 sm:mb-0",title:"C++",percent:60}),(0,o.Wm)(u,{class:"mb-2 sm:mb-0",title:"Python",percent:20}),(0,o.Wm)(u,{title:"JS",percent:70})])]),C,(0,o._)("section",null,[(0,o.Wm)(m)]),(0,o._)("section",null,[(0,o._)("h2",null,(0,a.zw)(e.$t("titles.lang")),1),(0,o._)("div",M,[(0,o.Wm)(d,{title:e.$t("languages.ru"),percent:100,size:80},null,8,["title"]),(0,o.Wm)(d,{title:e.$t("languages.en"),percent:70,size:80},null,8,["title"]),(0,o.Wm)(d,{title:e.$t("languages.ge"),percent:10,size:80},null,8,["title"])])]),(0,o._)("section",null,[(0,o.Wm)(g)]),(0,o._)("section",null,[(0,o._)("button",$,[(0,o.Wm)(f,{class:"text-white px-5",to:{name:"contact"}},{default:(0,o.w5)((()=>[P])),_:1})])]),S])}const L={class:"bar-container p-3 border-red/[.6] border-solid border-0.5 rounded-lg"},O={class:"flex flex-row justify-between"},E={class:"text-white mt-0"},W={class:"mt-0"},I={class:"bar"};function T(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("div",O,[(0,o._)("p",E,(0,a.zw)(n.title),1),(0,o._)("p",W,(0,a.zw)(n.percent)+"%",1)]),(0,o._)("div",I,[(0,o._)("div",{class:"fill",style:(0,a.j5)(l.getProgress)},null,4)])])}var U={name:"ProgressBar",props:{title:String,percent:Number},computed:{getProgress(){return"width: "+this.percent+"%;"}}};const Z=(0,m.Z)(U,[["render",T],["__scopeId","data-v-e285268a"]]);var N=Z;const B={class:"flex items-center flex-col justify-center p-4"},q=["width","height"],A={x:"0",y:"11",width:"80",height:"80"},R={class:"text-red font-medium text-center align-baseline"},Y=["stroke-width"],F=["stroke-width","stroke-dasharray","stroke-dashoffset"],G={class:"text-white font-medium text-center my-1"};function H(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)("div",B,[((0,o.wg)(),(0,o.iD)("svg",{width:n.size,height:n.size,viewBox:"0 0 80 80"},[((0,o.wg)(),(0,o.iD)("foreignObject",A,[(0,o._)("p",R,(0,a.zw)(n.percent)+"%",1)])),(0,o._)("circle",{class:"bar","stroke-width":n.border,stroke:"currentColor",fill:"transparent",r:"30",cx:"40",cy:"40"},null,8,Y),(0,o._)("circle",{class:"fill","stroke-width":n.border,"stroke-dasharray":s.circumference,"stroke-dashoffset":s.circumference-n.percent/100*s.circumference,"stroke-linecap":"round",stroke:"red",fill:"transparent",r:"30",cx:"40",cy:"40",transform:"rotate(-90) translate(-80, 0)"},null,8,F)],8,q)),(0,o._)("p",G,(0,a.zw)(n.title),1)])}var V={name:"ProgressCircle",props:{title:String,percent:Number,size:{type:Number,default:42},border:{type:Number,default:8}},data(){return{circumference:60*Math.PI}}};const K=(0,m.Z)(V,[["render",H],["__scopeId","data-v-c57561e0"]]);var J=K,Q=n.p+"img/space-front.f9fd82e0.png",X=n.p+"img/dawn-of-white.228ed33e.jpg";const ee=e=>((0,o.dD)("data-v-60198a97"),e=e(),(0,o.Cn)(),e),te={class:"border-solid border-0 border-l-1 border-l-red pl-0"},ne={class:"border-solid border-0 border-l-4 border-l-red pl-4"},re=ee((()=>(0,o._)("img",{class:"image",src:Q,alt:"space front screenshot"},null,-1))),oe={class:"border-solid border-0 border-l-4 border-l-red pl-4"},se=ee((()=>(0,o._)("img",{class:"image",src:X},null,-1)));function le(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h2",null,(0,a.zw)(e.$t("titles.proj")),1),(0,o._)("div",null,[(0,o._)("ul",te,[(0,o._)("li",ne,[(0,o._)("p",null,(0,a.zw)(e.$t("projects.one")),1),re]),(0,o._)("li",oe,[(0,o._)("p",null,(0,a.zw)(e.$t("projects.two")),1),se])]),(0,o._)("p",null,(0,a.zw)(e.$t("projects.three")),1)])],64)}var ae={name:"MyProjectsSection"};const ie=(0,m.Z)(ae,[["render",le],["__scopeId","data-v-60198a97"]]);var ce=ie,ue=n.p+"img/icon_vs.8684577b.svg",me=n.p+"img/icon_ws.e6d48f1b.svg",de=n.p+"img/icon_git.1105a0e4.svg",ge=n.p+"img/icon_qt.7b5957a8.svg",fe=n.p+"img/icon_unity.82c0943e.svg",pe=n.p+"img/icon_ai.a78f168f.svg",he=n.p+"img/icon_ps.4009bf9a.svg",we=n.p+"img/icon_figma.eb1507ef.svg";const ve=e=>((0,o.dD)("data-v-6dc572a8"),e=e(),(0,o.Cn)(),e),_e=(0,o.uE)('<div class="mb-4" data-v-6dc572a8><img class="tool-icon" src="'+ue+'" data-v-6dc572a8><img class="tool-icon" src="'+me+'" data-v-6dc572a8><img class="tool-icon" src="'+de+'" data-v-6dc572a8><img class="tool-icon" src="'+ge+'" data-v-6dc572a8><img class="tool-icon" src="'+fe+'" data-v-6dc572a8></div>',1),ze=ve((()=>(0,o._)("div",null,[(0,o._)("img",{class:"tool-icon",src:pe}),(0,o._)("img",{class:"tool-icon",src:he}),(0,o._)("img",{class:"tool-icon",src:we})],-1)));function be(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h2",null,(0,a.zw)(e.$t("titles.tech")),1),(0,o._)("p",null,(0,a.zw)(e.$t("tool-data.info"))+":",1),(0,o._)("h3",null,(0,a.zw)(e.$t("titles.programmer")),1),_e,(0,o._)("h3",null,(0,a.zw)(e.$t("titles.designer")),1),ze],64)}var ye={name:"MyToolsSection"};const ke=(0,m.Z)(ye,[["render",be],["__scopeId","data-v-6dc572a8"]]);var xe=ke,je=n.p+"img/avatar.7816967a.png";const Ce=e=>((0,o.dD)("data-v-6beca950"),e=e(),(0,o.Cn)(),e),Me={class:"flex justify-evenly"},$e=Ce((()=>(0,o._)("img",{class:"avatar-icon",src:je},null,-1))),Pe={class:"flex-col justify-between ml-6"},Se={class:"font-bold mt-0"},De={style:{"max-width":"95%"}},Le={class:"flex items-center"},Oe=Ce((()=>(0,o._)("svg",{viewBox:"0 0 24 24",class:"mr-1 stroke-red",width:"16",height:"16",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,o._)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,o._)("circle",{cx:"12",cy:"10",r:"3"})],-1))),Ee={class:"mr-4 my-0"};function We(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)("div",Me,[$e,(0,o._)("div",Pe,[(0,o._)("h1",Se,(0,a.zw)(e.$t("profile.title")),1),(0,o._)("p",De,(0,a.zw)(e.$t("profile.desc")),1),(0,o._)("div",Le,[Oe,(0,o._)("p",Ee,(0,a.zw)(e.$t("profile.moscow")),1)])])])}var Ie={name:"MyProfile"};const Te=(0,m.Z)(Ie,[["render",We],["__scopeId","data-v-6beca950"]]);var Ue=Te;const Ze=e=>((0,o.dD)("data-v-50d2acf6"),e=e(),(0,o.Cn)(),e),Ne={class:"links"},Be=Ze((()=>(0,o._)("li",null,[(0,o._)("a",{href:"https://github.com/IlyaChichkov"},"Github")],-1))),qe=Ze((()=>(0,o._)("li",null,[(0,o._)("a",{href:"https://t.me/Ilya_Chichkov"},"Telegram")],-1))),Ae=Ze((()=>(0,o._)("li",null,[(0,o._)("a",{href:"https://vk.com/chichkov_ilya"},"VK")],-1))),Re=Ze((()=>(0,o._)("li",null,[(0,o._)("a",{href:"https://twitter.com/RedEye_Games"},"Twitter")],-1))),Ye=[Be,qe,Ae,Re];function Fe(e,t,n,r,s,l){return(0,o.wg)(),(0,o.iD)("ul",Ne,Ye)}var Ge={name:"MyLinks"};const He=(0,m.Z)(Ge,[["render",Fe],["__scopeId","data-v-50d2acf6"]]);var Ve=He,Ke={name:"MainPage",components:{MyLinks:Ve,MyProfile:Ue,MyToolsSection:xe,MyProjectsSection:ce,ProgressCircle:J,ProgressBar:N}};const Je=(0,m.Z)(Ke,[["render",D]]);var Qe=Je;const Xe={class:"flex flex-row items-center"},et={class:"btn-empty p-0 m-0 mt-3"},tt=(0,o._)("svg",{class:"stroke-red hover:stroke-white px-2 py-1",width:"12",height:"22",viewBox:"0 0 6 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{d:"M5.41089 0.693329L0.909912 5.19431L5.41089 9.69529","stroke-width":"1.00189","stroke-linecap":"round","stroke-linejoin":"round"})],-1),nt={class:"ml-8"},rt={class:"flex flex-col"},ot=["placeholder"],st={class:"flex flex-col"},lt=["placeholder"],at={type:"submit",value:"Send",class:"btn-primary col-span-2"},it={key:0};function ct(e,t,n,s,l,i){const c=(0,o.up)("MyProfile"),u=(0,o.up)("MyLinks"),m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(u),(0,o._)("div",null,[(0,o._)("div",Xe,[(0,o._)("button",et,[(0,o.Wm)(m,{to:{name:"main"}},{default:(0,o.w5)((()=>[tt])),_:1})]),(0,o._)("h2",nt,(0,a.zw)(e.$t("titles.contact")),1)]),(0,o._)("form",{class:"grid grid-cols-2 gap-2",onSubmit:t[3]||(t[3]=(0,r.iM)(((...e)=>i.sendEmail&&i.sendEmail(...e)),["prevent"]))},[(0,o._)("div",rt,[(0,o._)("label",null,(0,a.zw)(e.$t("contact-form.name")),1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),type:"text",placeholder:e.$t("contact-form.name"),required:""},null,8,ot),[[r.nr,l.name]])]),(0,o._)("div",st,[(0,o._)("label",null,(0,a.zw)(e.$t("contact-form.email")),1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.email=e),type:"email",placeholder:"name@email.com",required:""},null,512),[[r.nr,l.email]])]),(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.message=e),class:"col-span-2 resize-none mb-2 h-28",placeholder:e.$t("contact-form.message"),required:""},null,8,lt),[[r.nr,l.message]]),(0,o._)("button",at,(0,a.zw)(i.submitBtnText),1)],32),l.sent?((0,o.wg)(),(0,o.iD)("p",it,(0,a.zw)(e.$t("other.return-warning"))+"... "+(0,a.zw)(l.returnCooldown),1)):(0,o.kq)("",!0)])],64)}var ut=n(4294),mt={name:"ContactMe",components:{MyLinks:Ve,MyProfile:Ue},data(){return{name:"",email:"",message:"",sent:!1,returnUser:!1,returnCooldown:10}},computed:{submitBtnText(){return!0===this.sent?this.$t("contact-form.btn-s"):this.$t("contact-form.btn")}},methods:{sendEmail(){try{ut.ZP.send("service_aaekk2l","template_vkdg067",{name:this.name,email:this.email,message:this.message},"KLYARxpdpMpP8pTOW")}catch(e){console.log({error:e})}finally{this.sent=!0,this.returnUser=!0}this.name="",this.email="",this.message=""}},watch:{returnUser(e){!0===e&&(this.returnCooldown=7,this.returnCooldown=6,console.log(this.returnCooldown))},returnCooldown(e){e>0&&(console.log(this.returnCooldown),setTimeout((()=>{this.returnCooldown--,this.returnCooldown<1&&(console.log("return"),this.$router.push({name:"main"}))}),1e3))}}};const dt=(0,m.Z)(mt,[["render",ct]]);var gt=dt;const ft=[{path:"/",name:"main",component:Qe},{path:"/contact",name:"contact",component:gt}],pt=(0,z.p7)({history:(0,z.r5)(),routes:ft});var ht=pt;const wt=(0,r.ri)(h).use(ht).use(_).mount("#app");wt.use(w["default"])},3631:function(e,t,n){var r={"./en.json":3482,"./ru.json":5521};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=3631}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],s=e[u][2];for(var a=!0,i=0;i<r.length;i++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,s<l&&(l=s));if(a){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/my-resume/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,l=r[0],a=r[1],i=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var u=i(n)}for(t&&t(r);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkmy_resume"]=self["webpackChunkmy_resume"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5583)}));r=n.O(r)})();
//# sourceMappingURL=app.2c27ebb9.js.map