(function(){"use strict";var e={517:function(e,t,n){var a=n(963),o=n(252);const s={id:"wrapper"};function r(e,t,n,r,i,l){const u=(0,o.up)("AppHeader"),c=(0,o.up)("router-view"),h=(0,o.up)("AppNav");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o._)("div",s,[(0,o.Wm)(c,null,{default:(0,o.w5)((({Component:e,route:t})=>[(0,o.Wm)(a.uT,{name:"slide-"+i.slideDirection},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e),{key:t.path}))])),_:2},1032,["name"])])),_:1})]),(0,o.Wm)(h)],64)}var i=n(577);const l=e=>((0,o.dD)("data-v-3803689c"),e=e(),(0,o.Cn)(),e),u=l((()=>(0,o._)("h2",null,"fluffy",-1)));function c(e,t,n,s,r,l){const c=(0,o.up)("mdicon");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",{class:(0,i.C_)([l.hungerClass,"stat"]),onMouseleave:t[0]||(t[0]=e=>l.showTip(null)),onMouseover:t[1]||(t[1]=e=>l.showTip("hunger"))},[(0,o.Wm)(c,{name:"food",size:"25"}),(0,o._)("div",{style:(0,i.j5)({height:this.$store.state.hunger/100*40+"px"}),class:"progress"},null,4),(0,o.Wm)(a.uT,{name:"tooltip"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("span",{class:"stat-caption"},(0,i.zw)(this.$store.state.hunger),513),[[a.F8,"hunger"===r.tooltip]])])),_:1})],34),(0,o._)("div",{class:(0,i.C_)([l.cleanlinessClass,"stat"]),onMouseleave:t[2]||(t[2]=e=>l.showTip(null)),onMouseover:t[3]||(t[3]=e=>l.showTip("cleanliness"))},[(0,o.Wm)(c,{name:"shower",size:"25"}),(0,o._)("div",{style:(0,i.j5)({height:this.$store.state.cleanliness/100*40+"px"}),class:"progress"},null,4),(0,o.Wm)(a.uT,{name:"tooltip"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("span",{class:"stat-caption"},(0,i.zw)(this.$store.state.cleanliness),513),[[a.F8,"cleanliness"===r.tooltip]])])),_:1})],34),u,(0,o._)("div",{class:(0,i.C_)([l.happinessClass,"stat"]),onMouseleave:t[4]||(t[4]=e=>l.showTip(null)),onMouseover:t[5]||(t[5]=e=>l.showTip("happiness"))},[(0,o.Wm)(c,{name:"emoticon-happy",size:"25"}),(0,o._)("div",{style:(0,i.j5)({height:this.$store.state.happiness/100*40+"px"}),class:"progress"},null,4),(0,o.Wm)(a.uT,{name:"tooltip"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("span",{class:"stat-caption"},(0,i.zw)(this.$store.state.happiness),513),[[a.F8,"happiness"===r.tooltip]])])),_:1})],34),(0,o._)("div",{class:(0,i.C_)([l.energyClass,"stat"]),onMouseleave:t[6]||(t[6]=e=>l.showTip(null)),onMouseover:t[7]||(t[7]=e=>l.showTip("energy"))},[(0,o.Wm)(c,{name:"sleep",size:"25"}),(0,o._)("div",{style:(0,i.j5)({height:this.$store.state.energy/100*40+"px"}),class:"progress"},null,4),(0,o.Wm)(a.uT,{name:"tooltip"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("span",{class:"stat-caption"},(0,i.zw)(this.$store.state.energy),513),[[a.F8,"energy"===r.tooltip]])])),_:1})],34)])}var h={data(){return{interval:35e4,tooltip:null}},methods:{showTip(e){this.tooltip=e}},mounted(){var e=this;setInterval((()=>{this.$store.commit("changeHunger",-3),this.$store.commit("changeCleanliness",-4),this.$store.commit("changeHappiness",-5),this.$store.commit("changeEnergy",-4),e.interval=Math.floor(330001*Math.random())+33e4}),this.interval)},computed:{hungerClass(){return this.$store.state.hunger>=75?"green":this.$store.state.hunger>=40?"yellow":"red"},cleanlinessClass(){return this.$store.state.cleanliness>=75?"green":this.$store.state.cleanliness>=40?"yellow":"red"},happinessClass(){return this.$store.state.happiness>=75?"green":this.$store.state.happiness>=40?"yellow":"red"},energyClass(){return this.$store.state.energy>=75?"green":this.$store.state.energy>=40?"yellow":"red"}},watch:{hunger:{handler(e){this.hungerClass=e>=75?"green":e>=40?"yellow":"red"},immediate:!0},cleanliness:{handler(e){this.cleanlinessClass=e>=75?"green":e>=40?"yellow":"red"},immediate:!0},happiness:{handler(e){this.happinessClass=e>=75?"green":e>=40?"yellow":"red"},immediate:!0},energy:{handler(e){this.energyClass=e>=75?"green":e>=40?"yellow":"red"},immediate:!0}}},p=n(744);const g=(0,p.Z)(h,[["render",c],["__scopeId","data-v-3803689c"]]);var m=g;const d={class:"link-tag"};function f(e,t,n,a,s,r){const l=(0,o.up)("mdicon"),u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.nav,(e=>((0,o.wg)(),(0,o.j4)(u,{onClick:t=>r.iconType(e.title),key:e,to:e.path},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{name:e.icon+r.iconType(e.title),size:"30"},null,8,["name"]),(0,o._)("span",d,(0,i.zw)(e.title),1)])),_:2},1032,["onClick","to"])))),128))])}var v={methods:{iconType(e){return this.$route.path==="/"+e.toLowerCase()?"":"-outline"}},data(){return{nav:[{title:"Kitchen",path:"/kitchen",icon:"fridge"},{title:"Bathroom",path:"/bathroom",icon:"paper-roll"},{title:"Playroom",path:"/playroom",icon:"gamepad-variant"},{title:"Bedroom",path:"/bedroom",icon:"bed"}]}}};const y=(0,p.Z)(v,[["render",f],["__scopeId","data-v-59fe3a20"]]);var w=y,b=n(907),C={name:"App",data(){return{slideDirection:"right",routesArray:["/kitchen","/bathroom","/playroom","/bedroom"]}},components:{AppHeader:m,AppNav:w},computed:{...(0,b.rn)(["hunger","cleanliness","happiness","energy","foodList"])},mounted(){setInterval((()=>{localStorage.setItem("timestamp",Date.now()),localStorage.setItem("hunger",this.hunger),localStorage.setItem("cleanliness",this.cleanliness),localStorage.setItem("happiness",this.happiness),localStorage.setItem("energy",this.energy),localStorage.setItem("foodList",JSON.stringify(this.foodList))}),2e3)},created(){const e=JSON.parse(localStorage.getItem("foodList"));if(e&&this.$store.dispatch("loadFoodList",e),localStorage.getItem("timestamp")){const e=Number(localStorage.getItem("timestamp")),t=Date.now(),n=t-e;console.log(`Time saved was ${new Date(Number(e)).toString()} and current time is ${new Date(t).toString()}, time elapsed ${n}`),console.log("expected to subtract the next amount of points from each stat:");const a=n/5e3;console.log(`hunger value is ${this.$store.state.hunger}`),this.updateHunger(this.calculateHunger(a)),console.log(`cleanliness value is ${this.$store.state.cleanliness}`),this.updateCleanliness(this.calculateCleanliness(a)),console.log(`happiness value is ${this.$store.state.happiness}`),this.updateHappiness(this.calculateHappiness(a)),console.log(`energy value is ${this.$store.state.energy}`),this.updateEnergy(this.calculateEnergy(a))}},watch:{$route(e,t){this.slideDirection=this.getRouteDirection(t.path,e.path)}},methods:{updateHunger(e){console.log(`hunger value became ${e}`),e<0&&(e=0),this.$store.commit("setHunger",e)},updateCleanliness(e){console.log(`cleanliness value became ${e}`),e<0&&(e=0),this.$store.commit("setCleanliness",e)},updateHappiness(e){console.log(`happiness value became ${e}`),e<0&&(e=0),this.$store.commit("setHappiness",e)},updateEnergy(e){console.log(`energy value became ${e}`),e<0&&(e=0),this.$store.commit("setEnergy",e)},calculateHunger(e){return console.log(`hunger was ${Number(localStorage.getItem("hunger"))} and it's a ${typeof Number(localStorage.getItem("hunger"))}`),console.log(`no when we calculate and subtract 3 for every 330000 ticks, we get ${Math.max(0,Number(localStorage.getItem("hunger"))-3*Math.floor(e/33e4))}`),Math.max(0,Number(localStorage.getItem("hunger"))-3*Math.floor(e/33e4))},calculateCleanliness(e){return Math.max(0,localStorage.getItem("cleanliness")-4*Math.floor(e/33e4))},calculateHappiness(e){return Math.max(0,localStorage.getItem("happiness")-5*Math.floor(e/33e4))},calculateEnergy(e){return Math.max(0,localStorage.getItem("energy")-4*Math.floor(e/33e4))},getRouteDirection(e,t){const n=this.routesArray.indexOf(e),a=this.routesArray.indexOf(t);return a>n?"right":a<n?"left":null}}};const $=(0,p.Z)(C,[["render",r]]);var _=$,k=n(18),S=n(317),T=n(201);const M=(0,b.MT)({state(){return{hunger:80,cleanliness:70,happiness:100,energy:15,foodList:[{name:"Apple",icon:"food-apple",value:10},{name:"Quaso",icon:"food-croissant",value:25},{name:"Coffee",icon:"coffee",value:10},{name:"Noodles",icon:"noodles",value:55},{name:"Baguette",icon:"baguette",value:35},{name:"Cake",icon:"cake-variant",value:65},{name:"Candy",icon:"candy",value:5},{name:"Coffee",icon:"coffee",value:10},{name:"Hamburger",icon:"hamburger",value:40},{name:"Turkey",icon:"food-turkey",value:70},{name:"Tea",icon:"tea",value:10},{name:"Tea",icon:"tea",value:10},{name:"Sugar",icon:"cube-outline",value:40},{name:"Sugar",icon:"cube-outline",value:40},{name:"Chili",icon:"chili-mild",value:-15},{name:"Chili",icon:"chili-mild",value:-15},{name:"Chili",icon:"chili-mild",value:-15},{name:"Cupcake",icon:"cupcake",value:25},{name:"Beer",icon:"glass-mug",value:5},{name:"Beer",icon:"glass-mug",value:5},{name:"Wine",icon:"glass-wine",value:10},{name:"Cupcake",icon:"cupcake",value:25},{name:"Wine",icon:"glass-wine",value:10}]}},actions:{loadFoodList(e,t){e.commit("setFoodList",t)}},mutations:{setFoodList(e,t){e.foodList=t},changeHunger(e,t){e.hunger+t>=100?e.hunger=100:e.hunger<0?e.hunger=0:e.hunger+=t},changeCleanliness(e,t){e.cleanliness+t>=100?e.cleanliness=100:e.cleanliness<0?e.cleanliness=0:e.cleanliness+=t},changeHappiness(e,t){e.happiness+t>=100?e.happiness=100:e.happiness<0?e.happiness=0:e.happiness+=t},changeEnergy(e,t){e.energy+t>=100?e.energy=100:e.energy<0?e.energy=0:e.energy+=t},setHunger(e,t){e.hunger=t},setCleanliness(e,t){e.cleanliness=t},setHappiness(e,t){e.happiness=t},setEnergy(e,t){e.energy=t},removeFood(e,t){e.foodList.splice(t,1)}}}),H=()=>n.e(514).then(n.bind(n,514)),I=()=>n.e(66).then(n.bind(n,66)),O=()=>n.e(834).then(n.bind(n,834)),x=()=>n.e(746).then(n.bind(n,746)),E=[{path:"/",redirect:"/kitchen"},{path:"/kitchen",component:H},{path:"/bathroom",component:I},{path:"/playroom",component:O},{path:"/bedroom",component:x}],L=(0,T.p7)({history:(0,T.PO)(),routes:E}),N=(0,a.ri)(_);N.use(M),N.use(L),N.use(k.Z,{icons:S}),N.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{66:"bf44ad06",514:"0fcff08f",746:"d7ea2b5b",834:"f07ede1c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{66:"39341f09",514:"60e4d302",746:"d0b82a61",834:"295bf40d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fluffy:";n.l=function(a,o,s,r){if(e[a])e[a].push(o);else{var i,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var h=u[c];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==t+s){i=h;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[o];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(g);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/fluffy/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(n){if(s.onerror=s.onload=null,"load"===n.type)a();else{var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=r,s.href=t,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],s=o.getAttribute("data-href");if(s===e||s===t)return o}},a=function(a){return new Promise((function(o,s){var r=n.miniCssF(a),i=n.p+r;if(t(r,i))return o();e(a,i,null,o,s)}))},o={143:0};n.f.miniCss=function(e,t){var n={66:1,514:1,746:1,834:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=s);var r=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,o[1](i)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,r=a[0],i=a[1],l=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(a);u<r.length;u++)s=r[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunkfluffy"]=self["webpackChunkfluffy"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(517)}));a=n.O(a)})();
//# sourceMappingURL=app.cc725311.js.map