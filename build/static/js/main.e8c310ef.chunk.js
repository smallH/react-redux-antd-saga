(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(215)},214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),o=n.n(c),l=n(110),u=n(9),i=n(103),s=n.n(i),p=n(104),h=n.n(p),d=n(40),m={token:"initToken",haveCheckedTime:0},b={name:"huangzp",age:30},v=Object(u.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/check_token":return Object(d.a)({},e,{token:t.payload.token,haveCheckedTime:e.haveCheckedTime+1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return(arguments.length>1?arguments[1]:void 0).type,e}}),f=n(72),E="product/init_products",j="product/saga_products",O=[{id:0,title:"React Book",price:36,inventory:100}],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.error?Object(f.a)(e):Object(f.a)(e).concat(t.payload);default:return e}},y=Object(u.c)({auth:v,products:g}),k=n(111),x=n(25),w=n.n(x),C=n(34),T=n(69),A=n.n(T),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise(function(a,r){("GET"===n.toUpperCase()?A()({method:n,url:e,params:Object(d.a)({},t)}):"POST"===n.toUpperCase()||"DELETE"===n.toUpperCase()||"PUT"===n.toUpperCase()||"PATCH"===n.toUpperCase()?A()({method:n,url:e,headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json; charset=UTF-8"},data:Object(d.a)({},t)}):Promise.reject("\u8bf7\u6c42\u65b9\u6cd5\u5165\u53c2\u9519\u8bef:",n)).then(function(e){e.status>=200&&e.status<300?a(e.data):r(e)}).catch(function(e){r(e)})})},U=w.a.mark(H),S=w.a.mark(P);function H(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(j,w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("/api/data/products.json");case 3:return t=e.sent,e.next=6,Object(C.c)({type:E,payload:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(C.c)({type:E,payload:[]});case 12:case"end":return e.stop()}},e,null,[[0,8]])}));case 2:case"end":return e.stop()}},U)}function P(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.b)(H)]);case 2:case"end":return e.stop()}},S)}var N=Object(k.a)(),L=[h.a,N,s.a],B=Object(u.e)(y,u.a.apply(void 0,L));N.run(P);var D=B,F=n(15),G=n(16),J=n(19),R=n(17),z=n(18),I=n(33),M=n(24),V=n(53),q=n.n(V),K=(n(113),n(80)),Q=n.n(K),W=n(70),X=n.n(W),Y=function(e){function t(){var e,n;Object(F.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(J.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r))))._loginHandle=function(){n.props.history.push({pathname:"/home/"})},n}return Object(z.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Login"),r.a.createElement(Q.a,{onClick:this._loginHandle},"\u767b\u5f55\u5e76\u8fdb\u5165Home\u9875\u9762"),r.a.createElement("div",{className:X.a.container},r.a.createElement("div",{className:X.a.child},"CSS\u6d4b\u8bd5")))}}]),t}(r.a.Component),Z=function(e){function t(){return Object(F.a)(this,t),Object(J.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NoMatch")}}]),t}(r.a.Component),$=function(e){function t(){return Object(F.a)(this,t),Object(J.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(I.b,{to:"".concat(this.props.match.path,"/search/001")},"Search")),r.a.createElement("li",null,r.a.createElement(I.b,{to:"".concat(this.props.match.path,"/hot")},"Hot")),r.a.createElement("li",null,r.a.createElement(I.b,{to:{pathname:this.props.match.path+"/aboutus",search:"?sid=002",state:{searchState:{sid:"002"}}}},"AboutUS")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(M.c,null,this.props.routes.map(function(t,n){return r.a.createElement(M.a,{key:n,exact:!!t.exact&&t.exact,path:"".concat(e.props.match.path)+t.path,render:function(e){return r.a.createElement(t.component,Object.assign({},e,{routes:Array.isArray(t.routes)?t.routes:[]}))}})}),r.a.createElement(M.a,{component:Z}))))}}]),t}(r.a.Component),ee=function(e){var t=e.isLoading,n=e.error;return t?r.a.createElement("div",null,"Loading..."):n?r.a.createElement("div",null,"Sorry, there was a problem loading the page."):null},te=q()({loader:function(){return n.e(6).then(n.bind(null,222))},loading:ee}),ne=[{path:"/",component:Y,exact:!0},{path:"/login",component:Y},{path:"/home",component:$,routes:[{path:"/",component:te,exact:!0},{path:"/search/:sid",component:te},{path:"/hot",component:q()({loader:function(){return n.e(5).then(n.bind(null,223))},loading:ee})},{path:"/aboutus",component:q()({loader:function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,224))},loading:ee})}]}],ae=function(e){function t(){return Object(F.a)(this,t),Object(J.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Hello React!!!",r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement(M.c,null,ne.map(function(e,t){return r.a.createElement(M.a,{key:t,exact:!!e.exact&&e.exact,path:e.path,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:Array.isArray(e.routes)?e.routes:[]}))}})})))))}}]),t}(r.a.Component);n(214);console.log("NODE_ENV","production"),o.a.render(r.a.createElement(l.a,{store:D},r.a.createElement(ae,null)),document.getElementById("root"))},70:function(e,t,n){e.exports={container:"login_container__AscAA",child:"login_child__25AoO"}}},[[114,1,2]]]);
//# sourceMappingURL=main.e8c310ef.chunk.js.map