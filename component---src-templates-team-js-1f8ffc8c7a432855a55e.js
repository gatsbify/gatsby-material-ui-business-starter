(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var n=a(0),r=a.n(n),i=a(146),l=a(174),o=a(171),c=a(173),u=a.n(c),s=a(179),m=a.n(s),d=a(156),p=a.n(d),f="2412733283";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,c=a.image,s=a.jobtitle,d=t.markdownRemark.html;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:n}),r.a.createElement(m.a,{style:{padding:"25px"}},r.a.createElement(u.a,{spacing:24,container:!0,direction:"row",alignItems:"flex-start",justify:"center"},r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement("img",{style:{width:"100%"},src:Object(i.withPrefix)(c),alt:""})),r.a.createElement(u.a,{item:!0,xs:12,md:8},r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h5"},s),r.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:d}})))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(147),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(159),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-555-1111"}}}}}},166:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},169:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return d});a(74),a(53),a(75),a(194);var r=a(177),i=a(161),l=a(195),o=a.n(l),c=a(196),u=a.n(c),s=Object(i.createMuiTheme)({palette:{primary:{light:o.a[300],main:o.a[500],dark:o.a[700]},secondary:{light:u.a[300],main:u.a[500],dark:u.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function d(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=m()),n.__INIT_MATERIAL_UI__):m()}}).call(this,a(193),a(73))},170:function(e,t,a){},171:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(160),c=a(146),u=(a(164),a(165),a(167)),s=a(176),m=a.n(s),d=a(162),p=a.n(d),f=a(158),h=function(e){var t=e.data.site.siteMetadata.menuLinks;return l.a.createElement(l.a.Fragment,null,t.map(function(e){return l.a.createElement(c.Link,{key:e.name,to:e.link},l.a.createElement(m.a,{style:{color:"#fff"}},e.name))}),l.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,{style:{color:"#fff"}},l.a.createElement(f.c,null))))},E=function(e){return l.a.createElement(c.StaticQuery,{query:"240237662",render:function(e){return l.a.createElement(h,{data:e})},data:u})},g=a(168),y=a(186),v=a.n(y),b=a(187),k=a.n(b),w=a(185),x=a.n(w),C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null},t.handleOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(){t.setState({anchorEl:null})},t}return r()(t,e),t.prototype.render=function(){var e=this.state.anchorEl,t=this.props.data.site.siteMetadata.menuLinks;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{onClick:this.handleOpen},l.a.createElement(f.a,{style:{color:"#efefef"}})),l.a.createElement(x.a,{onClickAway:this.handleClose},l.a.createElement(v.a,{anchorEl:e,open:Boolean(e),onClose:this.handleClose},t.map(function(e){return l.a.createElement(c.Link,{key:e.name,to:e.link},l.a.createElement(k.a,null,e.name))}),l.a.createElement("a",{href:"https://github.com/bluepeter/gatsby-material-ui-business-starter",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(k.a,null,"Fork me on Github")))))},t}(l.a.Component),M=function(e){return l.a.createElement(c.StaticQuery,{query:"709782962",render:function(t){return l.a.createElement(C,{active:e.active,data:t})},data:g})},_=a(163),I=a.n(_),T=a(173),q=a.n(T),S=a(189),P=a.n(S),R=a(188),L=a.n(R),j=a(156),A=a.n(j),N=a(181),B=a.n(N),G=a(180),U=a.n(G),Q=function(e){return l.a.createElement(L.a,{id:"appBar"},l.a.createElement(P.a,null,l.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},l.a.createElement(q.a,{item:!0},l.a.createElement(B.a,{id:"logo",variant:"outlined",avatar:l.a.createElement(U.a,{id:"logoIcon"},l.a.createElement(f.d,null)),label:l.a.createElement(c.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),l.a.createElement(q.a,{item:!0},l.a.createElement(I.a,{smDown:!0},l.a.createElement(A.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},l.a.createElement(E,null))),l.a.createElement(I.a,{mdUp:!0},l.a.createElement(M,null)))),l.a.createElement(q.a,{item:!0})))},F=function(e){return l.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return l.a.createElement(Q,{data:e})},data:o})},O=a(190),D=a.n(O),J=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,r=n.email,i=n.phone;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{style:{marginTop:"48px",marginBottom:"24px"}}),l.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},l.a.createElement("span",null,l.a.createElement(A.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," ",l.a.createElement(I.a,{only:["xs","sm"]},"–"),l.a.createElement(I.a,{only:["xl","lg","md"]},l.a.createElement("br",null))," ",r," – ",i))))},H=function(e){return l.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return l.a.createElement(J,{data:e})},data:o})},V=a(191),Y=a(161),z=a(197),K=a.n(z),W=a(192),X=a.n(W),Z=a(169);var $=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(Z.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return l.a.createElement(X.a,{generateClassName:this.muiPageContext.generateClassName},l.a.createElement(Y.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},l.a.createElement(K.a,null),l.a.createElement(e,this.props)))},a}(l.a.Component)},ee=(a(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(V.Grid,{style:{marginTop:"94px"}},l.a.createElement(V.Row,null,l.a.createElement(V.Col,{xs:12},t?l.a.createElement(A.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},t):null,a,l.a.createElement(H,null)))))},t}(l.a.Component));t.a=$(ee)},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),l=a(200),o=a.n(l),c=a(146),u=function(e){return i.a.createElement(c.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}}}]);
//# sourceMappingURL=component---src-templates-team-js-1f8ffc8c7a432855a55e.js.map