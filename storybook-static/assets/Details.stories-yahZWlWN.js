import{i as a,c as n,m as l,t as A}from"./web-Db2XvEIl.js";import{D as r,E as s}from"./Details-CBJxLnol.js";var N=A("<div>");const b={title:"Components/Details",component:r,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},summary:{type:{name:"string",required:!1},control:{type:"text"},description:"The summary of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:s.MEDIUM}},options:[s.SMALL,s.MEDIUM,s.LARGE]},isAutoOpened:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the details should be initially opened",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{children:"Details content",summary:"Details summary",size:s.MEDIUM,class:"",isAutoOpened:!1}},i={argTypes:{children:{table:{disable:!1}}}},o={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var e=N();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),a(e,n(r,l(t,{get size(){return s.SMALL},summary:"SMALL",children:"SMALL CONTENT"})),null),a(e,n(r,l(t,{get size(){return s.MEDIUM},summary:"MEDIUM",children:"MEDIUM CONTENT"})),null),a(e,n(r,l(t,{get size(){return s.LARGE},summary:"LARGE",children:"LARGE CONTENT"})),null),e})()},p={argTypes:{isAutoOpened:{table:{disable:!0}}},render:t=>(()=>{var e=N();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),a(e,n(r,l(t,{summary:"AUTO OPENED",isAutoOpened:!0,children:"AUTO OPENED CONTENT"})),null),a(e,n(r,l(t,{summary:"NOT AUTO OPENED",children:"NOT AUTO OPENED CONTENT"})),null),e})()};var m,d,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,y,E;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var D,O,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const M=["DetailsComponent","DetailsSizes","DetailsOpenState"];export{i as DetailsComponent,p as DetailsOpenState,o as DetailsSizes,M as __namedExportsOrder,b as default};
