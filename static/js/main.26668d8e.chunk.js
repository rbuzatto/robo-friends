(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),i=n.n(o),c=n(8),s=n(7),l=(n(26),n(28),n(2)),u=n(3),h=n(5),f=n(4),d=n(6),p=function(e){var t=e.name,n=e.email,r=e.username;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(p,{key:e.id,name:e.name,email:e.email,username:e.username})}))},m=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(r.Component),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.Component),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={input:""},n.onChange=function(e){e.persist(),n.setState(function(){return{input:e.target.value}}),n.props.search(e)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search robot",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",value:this.state.input,onChange:this.onChange}))}}]),t}(r.Component),w=(n(30),function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},t)}),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={data:[]},n.filterRobots=function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){if(200===e.status)return e.json();throw e.status}).then(function(t){return e.setState(function(){return{data:t}})}).catch(console.log)}},{key:"render",value:function(){var e=this.state.data,t=this.props.filter;return 0===e.length?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(m,null),a.a.createElement(g,{search:this.props.searchRobots}),a.a.createElement(w,null,a.a.createElement(v,null,a.a.createElement(b,{robots:this.filterRobots(e,t)}))))}}]),t}(r.Component),y=Object(c.b)(function(e){return{filter:e.filter}},function(e){return{searchRobots:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})}}})(E),O={filter:""},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=Object(s.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload;switch(n){case"CHANGE_SEARCH_FIELD":return{filter:r};default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(a.a.createElement(c.a,{store:C},a.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robo-friends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robo-friends","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.26668d8e.chunk.js.map