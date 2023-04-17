(this.webpackJsonpfront_ldce=this.webpackJsonpfront_ldce||[]).push([[13],{181:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return j}));var n=a(20),r=a.n(n),l=a(5),o=a(38),c=a(184),s=a(185),u=a(187),m=a(186),i=a(27),p=a(0),d=a.n(p),f=function(e){var t=e.input,a=e.meta,n=Object(i.a)(e,["input","meta"]),r=b(a,n.className);return d.a.createElement(d.a.Fragment,null,h(n.label,t.name,n),d.a.createElement("input",Object.assign({className:r},t,{id:t.name},n)),N(a))},b=function(e){var t=e.touched,a=e.error,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"form-control",r=t&&a;return r&&(n+=" error"),n},g=function(e){var t=e.input,a=e.meta,n=e.options,r=Object(i.a)(e,["input","meta","options"]),l=b(a,r.className);return d.a.createElement(d.a.Fragment,null,h(r.label,t.name,r),d.a.createElement("select",Object.assign({className:l},t,{id:t.name},r),d.a.createElement("option",{value:"",disabled:!0,hidden:!0},r.placeholder),y(n)),N(a))},E=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).state={error:"",lableImg:null},e.onFileChange=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.input,o=a.target.files[0],c="",!o){t.next=22;break}if(/^image/.test(o.type)){t.next=10;break}return c="Only jpg,jpeg,png file type allow.",e.setState({error:c}),t.abrupt("return",!1);case 10:if(!(o.size>512e3)){t.next=14;break}return c="File size must not exceed 500 KB.",e.setState({error:c}),t.abrupt("return",!1);case 14:return e.setState({error:c}),t.next=17,E(o);case 17:s=t.sent,e.setState(Object(l.a)(Object(l.a)({},e.state),{},{lableImg:s})),n.onChange(o),t.next=23;break;case 22:n.onChange(null);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.input,a=e.meta,n=Object(i.a)(e,["input","meta"]),r=this.state.error;return d.a.createElement(d.a.Fragment,null,d.a.createElement("label",null,d.a.createElement("img",{src:this.state.lableImg||n.default,className:n.className||"upload-".concat(t.name),alt:"Student Img"}),d.a.createElement("span",{className:"btn btn-primary btn-lg btn-block mx-auto"},n.placeholder),d.a.createElement("input",{type:"file",accept:"image/*",className:"form-control invisible position-absolute",style:{left:"0"},id:t.name,onChange:this.onFileChange}),N(a),r&&d.a.createElement("label",{className:"error"},r)),d.a.createElement("p",null,n.message))}}]),a}(d.a.Component),h=function(e,t,a){var n=a.require,r=a.required;return e&&d.a.createElement("label",{htmlFor:t},e," ",(r||n)&&d.a.createElement("font",{color:"red"},"*"))},N=function(e){var t=e.touched,a=e.error;return t&&a&&d.a.createElement("label",{className:"error",dangerouslySetInnerHTML:{__html:a}})},y=function(e){return Object.keys(e).map((function(t){return d.a.createElement("option",{key:e[t],value:e[t]},t)}))},j=function(){var e=document.querySelector("input.error");if(e){e.focus();var t=e.getBoundingClientRect().top+document.documentElement.scrollTop;window.scrollTo({top:t-50,behavior:"smooth"})}}},309:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(182),r=a(0),l=a.n(r),o=a(4),c=(a(309),a(48)),s=a(14),u=a(21),m=a(203),i=a(204),p=a(181);var d=Object(i.a)({form:"loginForm",initialValues:{type:"STUDENT"},validate:function(e){var t={};return e.type||(t.type="Please Select Role"),e.username||(t.username="Please Enter Username"),e.password||(t.password="Please Enter Password"),t}})((function(e){var t=e.loginUser,a=e.history,s=e.UI,u=s.loading,i=s.errors,d=Object(r.useState)("Enrollment No:"),f=Object(n.a)(d,2),b=f[0],g=f[1],E=Object(r.useState)("Enter Your Enrollment No..."),v=Object(n.a)(E,2),h=v[0],N=v[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-lg-4 mx-auto mx-auto"},l.a.createElement("form",{id:"loginForm",className:"regForm",onSubmit:e.handleSubmit((function(e){t(e,a)}))},l.a.createElement("h2",{className:"form-title text-center"},"Login"),(i.error||i.string)&&l.a.createElement("div",{className:"comment alert alert-danger",style:{textAlign:"center"},id:"error_message"},l.a.createElement("strong",null,"Invalid Credentials")),l.a.createElement("div",{className:"form-group"},l.a.createElement(m.a,{name:"type",label:"Role:",placeholder:"Select Role",component:p.c,options:{Student:"STUDENT",Admin:"ADMIN"},onChange:function(e){"ADMIN"===e.target.value?(N("Enter Your Id..."),g("Department Id:")):(N("Enter Your Enrollment No..."),g("Enrollment No:")),console.log(e)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement(m.a,{type:"text",name:"username",label:b,placeholder:h,component:p.d,require:"true"})),l.a.createElement("div",{className:"form-group"},l.a.createElement(m.a,{type:"password",name:"password",label:"Password:",placeholder:"Enter Password.",component:p.d,require:"true"})),l.a.createElement("div",{className:"form-group"},l.a.createElement(o.b,{to:"forgotPassword"},"Forgot Password?")),l.a.createElement("div",{className:"form-group text-center"},u?l.a.createElement(c.a,null):l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Login"))))))}));t.default=Object(s.b)((function(e){return{UI:e.UI}}),{loginUser:u.f})(d)}}]);
//# sourceMappingURL=13.e9b047f1.chunk.js.map