import{h as P,m as q,i as n,c as f,s as l,S as c,a as u,t as _,j as o}from"./web-CzENEfEG.js";import{v as A}from"./v4-DvF23Exx.js";var C=(r=>(r.LARGE="large",r.MEDIUM="medium",r.SMALL="small",r))(C||{}),I=(r=>(r.TEXT="text",r.PASSWORD="password",r))(I||{});const y="_textfield_root_ndfdi_1",S="_textfield_input_container_ndfdi_43",U="_textfield_label_ndfdi_50",X="_textfield_helper_message_ndfdi_57",B="_textfield_input_ndfdi_43",s={textfield_root:y,textfield_input_container:S,textfield_label:U,textfield_helper_message:X,textfield_input:B};var F=_("<span> *"),O=_("<label>"),$=_("<p>"),j=_("<div role=group><div><input>");const z={onChange:()=>{},onFocus:()=>{},onBlur:()=>{},value:"",type:I.TEXT,size:C.MEDIUM,isError:!1,isDisabled:!1,isRequired:!1},W=r=>{const t=q(z,r),h=A(),x=A();return(()=>{var a=j(),v=a.firstChild,i=v.firstChild;return n(a,f(c,{get when(){return t.label},get children(){var e=O();return l(e,"for",h),n(e,()=>t.label,null),n(e,f(c,{get when(){return t.isRequired},get children(){var d=F();return l(d,"aria-hidden",!0),d}}),null),u(()=>o(e,s.textfield_label)),e}}),v),i.addEventListener("blur",()=>t.onBlur()),i.addEventListener("focus",()=>t.onFocus()),i.$$input=e=>t.onChange(e.target.value),l(i,"id",h),n(a,f(c,{get when(){return t.helperMessage},get children(){var e=$();return l(e,"id",x),n(e,()=>t.helperMessage),u(()=>o(e,s.textfield_helper_message)),e}}),null),u(e=>{var d=t.class?` ${s.textfield_root} ${t.class}`:s.textfield_root,g=t.isDisabled,m=t.size,b=s.textfield_input_container,p=s.textfield_input,E=t.type,D=t.placeholder,M=t.isDisabled,L=t["aria-label"],R=t.isRequired,T=t.isError,w=t.helperMessage&&x;return d!==e.e&&o(a,e.e=d),g!==e.t&&l(a,"aria-disabled",e.t=g),m!==e.a&&l(a,"data-size",e.a=m),b!==e.o&&o(v,e.o=b),p!==e.i&&o(i,e.i=p),E!==e.n&&l(i,"type",e.n=E),D!==e.s&&l(i,"placeholder",e.s=D),M!==e.h&&(i.disabled=e.h=M),L!==e.r&&l(i,"aria-label",e.r=L),R!==e.d&&l(i,"aria-required",e.d=R),T!==e.l&&l(i,"aria-invalid",e.l=T),w!==e.u&&l(i,"aria-describedby",e.u=w),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),u(()=>i.value=t.value),a})()};P(["input"]);export{I as E,W as T,C as a};