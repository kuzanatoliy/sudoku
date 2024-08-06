import{t as E,m as n,c as I,o as C,i as r,d as l,f as R,h as y,s as G}from"./web-NTZ-uKjN.js";var w=E('<svg aria-hidden viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707"fill=currentColor>');const $=()=>w();var a=(s=>(s.LARGE="large",s.MEDIUM="medium",s.SMALL="small",s))(a||{});const q="_details_ysax7_1",V="_details_summary_ysax7_19",B="_details_content_ysax7_33",m={details:q,details_summary:V,details_content:B};var F=E("<details><summary></summary><div>");const j={summary:"",size:a.MEDIUM,isAutoOpened:!1},i=s=>{const e=n(j,s),[U,z]=I(!1);return C(()=>{z(e.isAutoOpened)}),(()=>{var o=F(),d=o.firstChild,O=d.nextSibling;return r(d,l($,{}),null),r(d,()=>e.summary,null),r(O,()=>e.children),R(t=>{var D=e.class?`${e.class} ${m.details}`:m.details,T=U(),A=e.size,f=m.details_summary,g=m.details_content;return D!==t.e&&y(o,t.e=D),T!==t.t&&(o.open=t.t=T),A!==t.a&&G(o,"data-size",t.a=A),f!==t.o&&y(d,t.o=f),g!==t.i&&y(O,t.i=g),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o})()};var S=E("<div>");const H={title:"Components/Details",component:i,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},summary:{type:{name:"string",required:!1},control:{type:"text"},description:"The summary of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:a.MEDIUM}},options:[a.SMALL,a.MEDIUM,a.LARGE]},isAutoOpened:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the details should be initially opened",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{children:"Details content",summary:"Details summary",size:a.MEDIUM,class:"",isAutoOpened:!1}},p={argTypes:{children:{table:{disable:!1}}}},u={argTypes:{size:{table:{disable:!0}}},render:s=>(()=>{var e=S();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),r(e,l(i,n(s,{get size(){return a.SMALL},summary:"SMALL",children:"SMALL CONTENT"})),null),r(e,l(i,n(s,{get size(){return a.MEDIUM},summary:"MEDIUM",children:"MEDIUM CONTENT"})),null),r(e,l(i,n(s,{get size(){return a.LARGE},summary:"LARGE",children:"LARGE CONTENT"})),null),e})()},c={argTypes:{isAutoOpened:{table:{disable:!0}}},render:s=>(()=>{var e=S();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),r(e,l(i,n(s,{summary:"AUTO OPENED",isAutoOpened:!0,children:"AUTO OPENED CONTENT"})),null),r(e,l(i,n(s,{summary:"NOT AUTO OPENED",children:"NOT AUTO OPENED CONTENT"})),null),e})()};var N,M,b;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(b=(M=p.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var v,L,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IDetailsProps, 'summary' | 'children' | 'size'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Details {...props} size={EDetailsSize.SMALL} summary='SMALL'>
        SMALL CONTENT
      </Details>
      <Details {...props} size={EDetailsSize.MEDIUM} summary='MEDIUM'>
        MEDIUM CONTENT
      </Details>
      <Details {...props} size={EDetailsSize.LARGE} summary='LARGE'>
        LARGE CONTENT
      </Details>
    </div>
}`,...(h=(L=u.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var _,x,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    isAutoOpened: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IDetailsProps, 'summary' | 'children' | 'isAutoOpened'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Details {...props} summary='AUTO OPENED' isAutoOpened>
        AUTO OPENED CONTENT
      </Details>
      <Details {...props} summary='NOT AUTO OPENED'>
        NOT AUTO OPENED CONTENT
      </Details>
    </div>
}`,...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const J=["DetailsComponent","DetailsSizes","DetailsOpenState"];export{p as DetailsComponent,c as DetailsOpenState,u as DetailsSizes,J as __namedExportsOrder,H as default};
