(this["webpackJsonpmovie-awards"]=this["webpackJsonpmovie-awards"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n(0),a=n.n(i),c=n(34),r=n.n(c),o=(n(86),n(77)),h=n(54),l=n(55),d=n(35),u=n(80),m=n(78),j=(n(87),n(135)),v=n(76),b=n(136),O=n(137),p=n(138),x=n(139),g=n(140);n(88);function f(e,t){var n;void 0!==e&&null!==e&&(null===(n=window.localStorage)||void 0===n||n.setItem(e,JSON.stringify(t)))}var N={MAX_NOMINATIONS:5,OMDBAPI_KEY:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_OMDBAPI_KEY||"bca002b0"};function y(e,t){return fetch("http://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&type=movie&r=json&apikey=").concat(N.OMDBAPI_KEY),{method:"GET",headers:{Accept:"application/json",Host:"www.omdbapi.com"}}).then((function(e){return e.json()}))}var S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={nominees:[],searchedMovies:[],page:1,maxPages:0,query:"",queryToUse:"",searching:!1},s.onSearch=s.onSearch.bind(Object(d.a)(s)),s}return Object(l.a)(n,[{key:"onSearch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=t?n:1,i=t?this.state.queryToUse:this.state.query;this.setState({searching:!0}),t||this.setState({queryToUse:i}),y(i,s).then((function(t){e.setState({searchedMovies:t.Search||[],searching:!1,maxPages:"True"===t.Response?Math.ceil(t.totalResults/10):0,page:s})})).catch((function(t){e.setState({searching:!1})}))}},{key:"componentDidMount",value:function(){var e=function(e,t){if(e){var n,s=null===(n=window.localStorage)||void 0===n?void 0:n.getItem(e);if(s)return JSON.parse(s)}return t}("config#nominations",[]);this.setState({nominees:e})}},{key:"renderSearchBar",value:function(){var e=this;return Object(s.jsxs)("div",{className:"search-bar",children:[Object(s.jsx)("div",{className:"search-bar-title",children:"Movie Title"}),Object(s.jsx)(j.a,{placeholder:"search movies",prefix:Object(s.jsx)(O.a,{}),value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},onPressEnter:function(t){return e.onSearch()}})]})}},{key:"renderMovie",value:function(e,t,n){var i=t.Title,a=t.Year,c=t.Poster;return Object(s.jsxs)("div",{className:"movie",children:[((null===c||void 0===c?void 0:c.startsWith("http://"))||(null===c||void 0===c?void 0:c.startsWith("https://")))&&Object(s.jsx)("img",{className:"movie-img",src:c,alt:i}),Object(s.jsxs)("div",{className:"movie-content",children:[Object(s.jsx)("div",{className:"movie-title",children:"".concat(i," (").concat(a,")")}),n||""]})]},e)}},{key:"canNotNominate",value:function(e){return this.state.nominees.length>=N.MAX_NOMINATIONS||-1!==this.state.nominees.findIndex((function(t){return t.imdbID===e.imdbID}))}},{key:"renderNominateButton",value:function(e){var t=this;return Object(s.jsx)(v.a,{className:"clickable action-button",type:"primary",disabled:this.canNotNominate(e),onClick:function(n){var s=[].concat(Object(o.a)(t.state.nominees),[e]);t.setState({nominees:s}),f("config#nominations",s)},children:"Nominate"})}},{key:"renderPageSwitch",value:function(){var e=this;return Object(s.jsxs)("div",{className:"switch-page",children:[Object(s.jsx)("span",{style:{flex:"auto"}}),Object(s.jsx)(v.a,{disabled:this.state.page-1<1,onClick:function(t){return e.onSearch(!0,e.state.page-1)},children:Object(s.jsx)(p.a,{})}),Object(s.jsx)("h3",{style:{margin:"0 10px 0 10px"},children:"".concat(this.state.page,"/").concat(this.state.maxPages)}),Object(s.jsx)(v.a,{disabled:this.state.page+1>this.state.maxPages,onClick:function(t){return e.onSearch(!0,e.state.page+1)},children:Object(s.jsx)(x.a,{})})]})}},{key:"renderMovieList",value:function(){var e=this,t="";return t=this.state.searching?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{children:"Searching ".concat(this.state.queryToUse)}),Object(s.jsx)(g.a,{})]}):""===this.state.queryToUse?""===this.state.query?Object(s.jsx)("span",{children:"Nothing searched yet."}):Object(s.jsx)("span",{children:'Press ENTER to search "'.concat(this.state.query,'"')}):this.state.maxPages<=0?Object(s.jsx)("span",{children:'Nothing matches "'.concat(this.state.queryToUse,'".')}):Object(s.jsx)("span",{children:"Results for ".concat(this.state.queryToUse)}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"section-title",children:t}),this.state.maxPages>1&&Object(s.jsx)("div",{children:this.renderPageSwitch()}),this.state.searchedMovies.map((function(t){return e.renderMovie("search#".concat(t.imdbID),t,e.renderNominateButton(t))}))]})}},{key:"renderRemoveButton",value:function(e){var t=this;return Object(s.jsx)(v.a,{className:"clickable action-button",type:"primary",onClick:function(n){var s=t.state.nominees.filter((function(t){return t.imdbID!==e.imdbID}));t.setState({nominees:s}),f("config#nominations",s)},children:"Remove"})}},{key:"renderNomineeList",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"section-title",children:"Nominations (".concat(this.state.nominees.length,"/").concat(N.MAX_NOMINATIONS,")")}),this.state.nominees.map((function(t){return e.renderMovie("nominee#".concat(t.imdbID),t,e.renderRemoveButton(t))}))]})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[this.state.nominees.length===N.MAX_NOMINATIONS&&Object(s.jsx)(b.a,{message:"You have now selected all 5 nominees.",type:"success",banner:!0}),Object(s.jsx)("div",{className:"App-title",children:"The Shoppies"}),Object(s.jsx)("div",{className:"section",style:{margin:"8px 0 8px 0"},children:this.renderSearchBar()}),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("div",{className:"section",style:{width:"50%",margin:"32px 16px 32px 0"},children:this.renderMovieList()}),Object(s.jsx)("div",{className:"section",style:{width:"50%",margin:"32px 0 32px 16px"},children:this.renderNomineeList()})]})]})}}]),n}(a.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),T()},86:function(e,t,n){},88:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.b7c6bc76.chunk.js.map