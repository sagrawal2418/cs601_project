(function(e){function t(t){for(var n,c,r=t[0],s=t[1],d=t[2],l=0,u=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);v&&v(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},i={app:0},o=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4fc1e4f9"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={about:1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"0adc9679"}[e]+".css",i=s.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===i))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],l=d.getAttribute("data-href");if(l===n||l===i)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],v.parentNode.removeChild(v),a(o)},v.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){c[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(v);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,a[1](u)}i[e]=void 0}};var v=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cs601_project/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2df6":function(e,t,a){"use strict";a("8908")},"3c80":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=Object(n["i"])("footer",null,[Object(n["i"])("div",{class:"text"},[Object(n["i"])("span",null,[Object(n["h"])(" Created By "),Object(n["i"])("a",{href:"#"},"Sandeep Agrawal"),Object(n["h"])(" | © 2021 All Rights Reserved ")])])],-1);function i(e,t,a,i,o,r){var s=Object(n["z"])("Sidebar"),d=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s),Object(n["i"])("div",{style:{"margin-left":i.sidebarWidth}},[Object(n["i"])(d)],4),c],64)}var o=Object(n["E"])("data-v-2b0a6cb8");Object(n["u"])("data-v-2b0a6cb8");var r={key:0},s=Object(n["i"])("div",null,"S",-1),d=Object(n["i"])("div",null,"A",-1),l=Object(n["h"])("Home"),u=Object(n["h"])("Projects"),v=Object(n["h"])(" Experience "),p=Object(n["h"])("Contact"),f=Object(n["i"])("i",{class:"fas fa-angle-double-left"},null,-1);Object(n["s"])();var b=o((function(e,t,a,c,i,b){var h=Object(n["z"])("SidebarLink");return Object(n["r"])(),Object(n["e"])("aside",{class:"sidebar",style:{width:c.sidebarWidth}},[Object(n["i"])("h1",{class:"sidebar_name",onClick:t[1]||(t[1]=function(e){return b.goToHome()})},[c.collapsed?(Object(n["r"])(),Object(n["e"])("span",r,[s,d])):Object(n["f"])("",!0)]),Object(n["i"])(h,{to:"/",icon:"fas fa-home"},{default:o((function(){return[l]})),_:1}),Object(n["i"])(h,{to:"/projects",icon:"fas fa-project-diagram"},{default:o((function(){return[u]})),_:1}),Object(n["i"])(h,{to:"/experience",icon:"fas fa-briefcase"},{default:o((function(){return[v]})),_:1}),Object(n["i"])(h,{to:"/contact",icon:"fas fa-id-card"},{default:o((function(){return[p]})),_:1}),Object(n["i"])("span",{class:["collapse-icon",{"rotate-180":c.collapsed}],onClick:t[2]||(t[2]=function(){return c.toggleSidebar&&c.toggleSidebar.apply(c,arguments)})},[f],2)],4)})),h=Object(n["E"])("data-v-a8244708");Object(n["u"])("data-v-a8244708");var m={key:0};Object(n["s"])();var g=h((function(e,t,a,c,i,o){var r=Object(n["z"])("router-link");return Object(n["r"])(),Object(n["e"])(r,{to:a.to,class:["link",{active:c.isActive}]},{default:h((function(){return[Object(n["i"])("i",{class:["icon",a.icon]},null,2),Object(n["i"])(n["b"],{name:"fade"},{default:h((function(){return[c.collapsed?Object(n["f"])("",!0):(Object(n["r"])(),Object(n["e"])("span",m,[Object(n["y"])(e.$slots,"default",{},void 0,!0)]))]})),_:3})]})),_:1},8,["to","class"])})),j=a("6c02"),O=Object(n["w"])(!1),y=function(){return O.value=!O.value},w=180,x=38,k=Object(n["c"])((function(){return"".concat(O.value?x:w,"px")})),S={props:{to:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(e){var t=Object(j["c"])(),a=Object(n["c"])((function(){return t.path===e.to}));return{isActive:a,collapsed:O}}};a("be3c");S.render=g,S.__scopeId="data-v-a8244708";var _=S,A={props:{},components:{SidebarLink:_},setup:function(){return{collapsed:O,toggleSidebar:y,sidebarWidth:k}},watch:{$route:function(){this.collapsed=!0}},methods:{goToHome:function(){this.$router.push("/")}}};a("2df6"),a("b6c9");A.render=b,A.__scopeId="data-v-2b0a6cb8";var C=A,E={components:{Sidebar:C},setup:function(){return{sidebarWidth:k}}};a("98b6");E.render=i;var P=E,I=(a("d3b7"),a("3ca3"),a("ddb0"),Object(n["E"])("data-v-382a197c"));Object(n["u"])("data-v-382a197c");var T=Object(n["g"])('<section class="home" id="home" data-v-382a197c><div class="home-content" data-v-382a197c><div class="text" data-v-382a197c><div class="text-one" data-v-382a197c>Hello,</div><div class="text-two" data-v-382a197c>I&#39;m Sandeep</div><div class="text-three" data-v-382a197c>Android Developer</div></div></div></section><section class="about" id="about" data-v-382a197c><div class="content" data-v-382a197c><div class="title" data-v-382a197c><span data-v-382a197c>About Me</span></div><div class="about-details" data-v-382a197c><div class="left" data-v-382a197c><img src="images/profile-pic.png" alt="Sandeep Agrawal" data-v-382a197c></div><div class="right" data-v-382a197c><div class="topic" data-v-382a197c>Mobile apps is my passion</div><p data-v-382a197c> Over 7 years of experience in Android application development and Digital Strategies. Vast experience partnering with internal and external stakeholders to discover, build, improve and expand the user experience. Consistently recognized for outstanding contributions and solid reputation for resolving complex issues. Years of successful experience consulting on multifaceted projects and facilitating positive relationships with a wide range of clients, colleagues and key business partners.Commended for organization, efficiency, priority management and communication skills. Proven history of creating cutting edge interface designs and information for websites and mobile applications through a user-centered design process by constructing screen flows, prototypes and wireframes. </p></div></div></div></section><section class="services" id="services" data-v-382a197c><div class="content" data-v-382a197c><div class="title" data-v-382a197c><span data-v-382a197c>My Services</span></div><div class="boxes" data-v-382a197c><div class="box" data-v-382a197c><div class="icon" data-v-382a197c><i class="fab fa-android" data-v-382a197c></i></div><div class="topic" data-v-382a197c>Android Development</div><p data-v-382a197c> I know every corner of the Android platform, down to its core. I have the experience of working with every Android device type, brand, and custom ecosystem. I will give you a reliable product that appeals to the platform’s users. </p></div><div class="box" data-v-382a197c><div class="icon" data-v-382a197c><i class="fab fa-chrome" data-v-382a197c></i></div><div class="topic" data-v-382a197c>Web Development</div><p data-v-382a197c> Client-focused, customer-centric, creating website solutions that deliver tangible business results, I help brands the ever-changing digital landscape. </p></div><div class="box" data-v-382a197c><div class="icon" data-v-382a197c><i class="fas fa-tablet-alt" data-v-382a197c></i></div><div class="topic" data-v-382a197c>Apps Development</div><p data-v-382a197c> I have very high reputation on working on native mobile apps. I have Worked on several mobile apps like Audiobooks Now, Redbox, Bofa App, Chick-Fil-A. Most of the clients come back to add more functionality or with new projects. </p></div></div></div></section>',3);Object(n["s"])();var M=I((function(e,t){return T}));a("d7f5");const D={};D.render=M,D.__scopeId="data-v-382a197c";var H=D,L=[{path:"/",name:"Home",component:H,meta:{title:"Home"}},{path:"/experience",name:"Experience",meta:{title:"Experience"},component:function(){return a.e("about").then(a.bind(null,"459e"))}},{path:"/contact",name:"Contact",meta:{title:"Contact"},component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/projects",name:"Projects",meta:{title:"Projects"},component:function(){return a.e("about").then(a.bind(null,"acca"))}}],z=Object(j["a"])({history:Object(j["b"])("/cs601_project/"),routes:L});z.beforeEach((function(e,t,a){document.title="".concat(e.meta.title),a()}));var N=z;a("7051");Object(n["d"])(P).use(N).mount("#app")},"58a8":function(e,t,a){},"72c4":function(e,t,a){},8318:function(e,t,a){},8908:function(e,t,a){},"98b6":function(e,t,a){"use strict";a("58a8")},b6c9:function(e,t,a){"use strict";a("72c4")},be3c:function(e,t,a){"use strict";a("3c80")},d7f5:function(e,t,a){"use strict";a("8318")}});
//# sourceMappingURL=app.f7c4b463.js.map