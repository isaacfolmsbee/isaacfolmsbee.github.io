(function(e){function t(t){for(var r,a,i=t[0],s=t[1],l=t[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0b73":function(e,t,n){},"14f6":function(e,t,n){e.exports=n.p+"img/github.50a180fa.svg"},2916:function(e,t,n){"use strict";n("638c")},"2d30":function(e,t,n){e.exports=n.p+"img/test-image.e223e30f.jpg"},"2e6f":function(e,t,n){"use strict";n("0b73")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("TheNavbar",{on:{openModal:function(t){return e.openModal()}}}),e.isModalActive?r("TheModal",{on:{closeModal:function(t){return e.closeModal()}}}):e._e(),r("div",{attrs:{id:"intro"}},[r("h1",[e._v("Isaac Folmsbee")]),r("h2",[e._v(" I’m a Full-Stack web developer who loves using new technologies to create clean and efficient websites! ")]),r("div",{attrs:{id:"projects-arrow"},on:{click:function(t){return e.scrollTo("projects")}}},[r("h2",[e._v("Projects")]),r("img",{attrs:{src:n("fcc4"),alt:"downward arrow"}})])]),r("div",{staticClass:"projects"},[r("ElderonProject"),r("BugTrackerProject")],1)],1)},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-wrapper"},[e._m(0),e._m(1),e._m(2),n("h2",{staticClass:"contact",on:{click:function(t){return e.$emit("openModal")}}},[e._v("Contact")])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-container"},[r("a",{attrs:{href:"https://github.com/isaacfolmsbee",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:n("14f6"),alt:"Github icon"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-container"},[r("a",{attrs:{href:"https://www.linkedin.com/in/isaacfolmsbee/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:n("9ed9"),alt:"Linkedin icon"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"img-container"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("b15f"),alt:"resume icon"}})])])}],s={name:"TheNavbar"},l=s,u=(n("2916"),n("2877")),f=Object(u["a"])(l,a,i,!1,null,"b9c24e64",null),d=f.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-bg"},[r("div",{staticClass:"modal-wrapper"},[r("img",{attrs:{src:n("8b1b"),alt:"close button"},on:{click:function(t){return e.$emit("closeModal")}}}),r("h1",[e._v("Want to contact me?")]),r("h2",[e._v("Shoot me an email with your inquiry and I'll get back to you soon!")]),r("h3",[e._v("if@sent.com")])])])},v=[],m={Name:"TheModal"},h=m,b=(n("86bc"),Object(u["a"])(h,p,v,!1,null,"89527502",null)),g=b.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"project-wrapper"},[r("img",{attrs:{src:n("2d30"),alt:"project cover photo"}}),r("h2",[e._v("Elderon")]),r("p",[e._v("Elderon is a minecraft datapack project I am currently working on. Once finished this card will give more details and a link to its website.")]),r("div",{staticClass:"buttons"},[r("h3",[e._v("< Code />")]),r("h3",[e._v("Live Demo")])])])}],j={name:"ElderonProject"},y=j,k=(n("2e6f"),Object(u["a"])(y,_,w,!1,null,"cf8d79e0",null)),M=k.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"project-wrapper"},[r("img",{attrs:{src:n("2d30"),alt:"project cover photo"}}),r("h2",[e._v("Bug Tracker")]),r("p",[e._v("The Bug Tracker project is a web based application that is scheduled to be worked on over the next couple months. Once done this card will be updated.")]),r("div",{staticClass:"buttons"},[r("h3",[e._v("< Code />")]),r("h3",[e._v("Live Demo")])])])}],T={name:"BugTrackerProject"},C=T,E=(n("825d"),Object(u["a"])(C,x,O,!1,null,"88be84ae",null)),P=E.exports,$={name:"App",components:{TheNavbar:d,TheModal:g,ElderonProject:M,BugTrackerProject:P},data:function(){return{isModalActive:!1}},methods:{scrollTo:function(e){var t=this.$el.getElementsByClassName(e)[0];t.scrollIntoView({behavior:"smooth"})},openModal:function(){this.isModalActive=!0,document.body.classList.add("disable-scroll")},closeModal:function(){this.isModalActive=!1,document.body.classList.remove("disable-scroll")}}},S=$,B=(n("034f"),Object(u["a"])(S,o,c,!1,null,null,null)),A=B.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"638c":function(e,t,n){},"825d":function(e,t,n){"use strict";n("e0a7")},"85ec":function(e,t,n){},"86bc":function(e,t,n){"use strict";n("8acb")},"8acb":function(e,t,n){},"8b1b":function(e,t,n){e.exports=n.p+"img/close.3ffff5c0.svg"},"9ed9":function(e,t,n){e.exports=n.p+"img/linkedin.41b71df8.svg"},b15f:function(e,t,n){e.exports=n.p+"img/resume.7204e541.svg"},e0a7:function(e,t,n){},fcc4:function(e,t,n){e.exports=n.p+"img/down-arrow.d0f43e89.svg"}});
//# sourceMappingURL=app.f8856c3f.js.map