webpackJsonp([35783957827783],{"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(t,d,u){if("string"!=typeof d){if(c){var f=i(d);f&&f!==c&&e(t,f,u)}var m=s(d);a&&(m=m.concat(a(d)));for(var p=0;p<m.length;++p){var g=m[p];if(!(n[g]||o[g]||u&&u[g])){var h=l(d,g);try{r(t,g,h)}catch(e){}}}return t}return t}},"./src/components/address.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=(r(s),n("./node_modules/glamor/lib/index.js"),function(){return o.createElement("div",null,o.createElement("h2",null,"The Unfound Door"),o.createElement("p",null,"Denver, CO"),o.createElement("a",{href:"mailto:ely@theunfounddoor.com"},"ely@theunfounddoor.com"),o.createElement("a",{href:"tel:6177759911"},"617-775-9911"))});t.default=a,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/contactUs.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n("./node_modules/react/react.js"),l=(r(a),n("./node_modules/glamor/lib/index.js")),i=n("./src/components/socialIcons.js"),c=r(i),d=n("./src/components/address.js"),u=r(d),f=(0,l.css)({textTransform:"uppercase",textAlign:"center"}),m=(0,l.css)({display:"flex",flexDirection:"row",justifyContent:"center"}),p=(0,l.css)({width:"30%"}),g=(0,l.css)({width:"30%"}),h=(0,l.css)({paddingLeft:"5%",paddingRight:"5%"}),j=(0,l.css)({width:"40%"}),y=function(e){return o.createElement("div",null,o.createElement("div",f,o.createElement("h4",null,"Start Your Journey Towards Creative Freedom"),o.createElement("h2",null,"Contact Us"),o.createElement("h4",null,"We want to help you find the right path with the best creatives, begin the conversation today.")),o.createElement("div",m,o.createElement("div",s({},p,h),o.createElement(u.default,null)),o.createElement("div",s({},g,h),o.createElement(c.default,null)),o.createElement("div",s({},j,h),o.createElement("p",null,"contactForm"))))};t.default=y,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/faIcon.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=(r(s),n("./node_modules/prop-types/index.js")),l=r(a),i=function(e){return o.createElement("a",{href:e.link,target:"_blank"},o.createElement("i",{className:"fa "+e.size+" fa-"+e.iconName,"aria-hidden":"true"}))};i.PropTypes={size:l.default.string,iconName:l.default.string.isRequired,link:l.default.string.isRequired},t.default=i,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/footer.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("./node_modules/react/react.js"),c=r(i),d=n("./node_modules/glamor/lib/index.js"),u=(0,d.css)({display:"flex",justifyContent:"center",background:"black",color:"white"}),f=(0,d.css)({padding:"5px"}),m=function(e){function t(){s(this,t);var n=a(this,e.call(this));return n.state={year:(new Date).getFullYear()},n}return l(t,e),t.prototype.render=function(){return o.createElement("div",u,o.createElement("p",f,"Carefully Crafted By The Unfound Door ",this.state.year))},t}(c.default.Component);t.default=m,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/photolink.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=(r(s),n("./node_modules/glamor/lib/index.js")),l=n("./node_modules/gatsby-link/index.js"),i=r(l),c=n("./node_modules/prop-types/index.js"),d=r(c),u=(0,a.css)({position:"relative"}),f=(0,a.css)({position:"absolute",textAlign:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),m=function(e){return o.createElement("div",u,o.createElement(i.default,{to:e.to},o.createElement("img",{src:e.src}),e.text&&o.createElement("div",f,o.createElement("h3",null,e.text),o.createElement("h4",null,e.subText))))};m.PropTypes={to:d.default.string.isRequired,src:d.default.string.isRequired,text:d.default.string,subText:d.default.string},t.default=m,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/socialIcons.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=(r(s),n("./node_modules/glamor/lib/index.js")),l=n("./src/components/faIcon.js"),i=r(l),c=(0,a.css)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}),d=[{link:"http://google.com",iconName:"facebook-official",size:"fa-3x"},{link:"http://google.com",iconName:"instagram",size:"fa-3x"},{link:"http://google.com",iconName:"youtube",size:"fa-3x"},{link:"http://google.com",iconName:"google",size:"fa-3x"},{link:"http://google.com",iconName:"linkedin",size:"fa-3x"},{link:"http://google.com",iconName:"pinterest",size:"fa-3x"}],u=function(){return o.createElement("div",c,d.map(function(e,t){return o.createElement(i.default,{key:t,link:e.link,iconName:e.iconName,size:e.size})}))};t.default=u,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/splash.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n("./node_modules/react/react.js"),l=(r(a),n("./node_modules/prop-types/index.js")),i=r(l),c=n("./node_modules/glamor/lib/index.js"),d=n("./src/styleStandards.js"),u=(r(d),(0,c.css)({width:"100vw",maxHeight:"100vh",overflow:"hidden"})),f=(0,c.css)({width:"100%"}),m=function(e){return o.createElement("div",u,o.createElement("img",s({src:e.src,alt:e.alt},f)))};m.propTypes={src:i.default.string.isRequired,alt:i.default.string},t.default=m,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/components/whatWeDo.js":function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n("./node_modules/react/react.js"),l=(r(a),n("./node_modules/glamor/lib/index.js")),i=n("./node_modules/prop-types/index.js"),c=r(i),d=n("./node_modules/gatsby-link/index.js"),u=(r(d),(0,l.css)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"})),f=(0,l.css)({textTransform:"uppercase"}),m=(0,l.css)({marginLeft:"5%",marginRight:"5%",textOverflow:"wrap",textAlign:"center"}),p=(0,l.css)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),g=(0,l.css)({textDecoration:"none",padding:"15px",border:"1px solid black",color:"black"}),h=function(e){return o.createElement("div",null,o.createElement("div",u,o.createElement("h4",f,"Collaborate with the best, elevate your visuals"),o.createElement("h1",f,"What We Do")),o.createElement("div",m,o.createElement("p",null,"The Unfound Door is a creative consultancy firm specializing in photography, videography, web and graphic design, and creative vision strategy. The firm focuses on bringing customized and comprehensive imagery and branding to small businesses, A/E/C companies, and individuals. We are dedicated to creating the ultimate stress-free experience by offering a diversity of creative services with attention, passion, and technique.")),o.createElement("div",p,o.createElement("a",s({href:"mailto:"+e.email,target:"_blank"},g),"Lets Talk")))};h.PropTypes={email:c.default.string.isRequired},t.default=h,e.exports=t.default}).call(t,n("./node_modules/glamor/react.js"))},"./src/img/PhotographyHeader2-TheUnfoundDoor.jpg":function(e,t,n){e.exports=n.p+"static/PhotographyHeader2-TheUnfoundDoor.8f22c6f5.jpg"},"./src/img/header/MainPageHeader.jpg":function(e,t,n){e.exports=n.p+"static/MainPageHeader.4357f525.jpg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/jonathanhemnes/git/unfound-door/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/jonathanhemnes/git/unfound-door/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/jonathanhemnes/git/unfound-door/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"presets":[["/Users/jonathanhemnes/git/unfound-door/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/jonathanhemnes/git/unfound-door/node_modules/babel-preset-stage-0/lib/index.js","/Users/jonathanhemnes/git/unfound-door/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=n("./node_modules/react/react.js"),s=(o(r),n("./node_modules/gatsby-link/index.js")),a=(o(s),n("./node_modules/glamor/lib/index.js")),l=n("./src/components/splash.js"),i=o(l),c=n("./src/img/header/MainPageHeader.jpg"),d=o(c),u=n("./src/img/PhotographyHeader2-TheUnfoundDoor.jpg"),f=o(u),m=n("./src/components/whatWeDo.js"),p=o(m),g=n("./src/components/photolink.js"),h=o(g),j=n("./src/components/contactUs.js"),y=o(j),x=n("./src/components/footer.js"),b=o(x),_=(0,a.css)({display:"flex",flexDirection:"row"}),v=function(t){var n=t.data;return e.createElement("div",null,e.createElement(i.default,{src:d.default}),e.createElement(p.default,{email:n.site.siteMetadata.mainEmail}),e.createElement("div",_,e.createElement(h.default,{to:"/",src:f.default,text:"Photography"}),e.createElement(h.default,{to:"/",src:f.default,text:"Videography"}),e.createElement(h.default,{to:"/",src:f.default,text:"Design & Strategy"})),e.createElement("div",_,e.createElement(h.default,{to:"/",src:f.default,text:"Who We Are",subText:"Artists, Innovators, Professionals"})),e.createElement(y.default,null),e.createElement(b.default,null))};t.default=v;t.query="** extracted graphql fragment **"}).call(t,n("./node_modules/glamor/react.js"))},"./src/styleStandards.js":function(e,t){"use strict";t.__esModule=!0;var n={colors:{white:"white",red:"red",black:"black"},sizes:{sm:"400px",md:"900px",lg:"1200px"}};t.default=n,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-ae608875301f288ca34e.js.map