import{i as n,c as s,m as i,t as D}from"./web-Db2XvEIl.js";import{P as a,E as r,a as t}from"./Pill-D7HJ3lON.js";var f=D("<div>");const b={title:"Components/Pill",component:a,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:r.MEDIUM}},options:[r.SMALL,r.MEDIUM,r.LARGE]},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:t.FILLED}},options:[t.BLANKED,t.FILLED,t.OUTLINED]}},args:{children:"Pill content",variant:t.FILLED,size:r.MEDIUM,class:""}},p={argTypes:{children:{table:{disable:!1}}}},o={argTypes:{size:{table:{disable:!0}}},render:l=>(()=>{var e=f();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),e.style.setProperty("align-items","flex-start"),n(e,s(a,i(l,{get size(){return r.SMALL},children:"SMALL CONTENT"})),null),n(e,s(a,i(l,{get size(){return r.MEDIUM},children:"MEDIUM CONTENT"})),null),n(e,s(a,i(l,{get size(){return r.LARGE},children:"LARGE CONTENT"})),null),e})()},d={argTypes:{variant:{table:{disable:!0}}},render:l=>(()=>{var e=f();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),n(e,s(a,i(l,{get variant(){return t.BLANKED},children:"BLANKED"})),null),n(e,s(a,i(l,{get variant(){return t.FILLED},children:"FILLED"})),null),n(e,s(a,i(l,{get variant(){return t.OUTLINED},children:"OUTLINED"})),null),e})()};var c,m,u;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(u=(m=p.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,E,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IPillProps, 'children' | 'size'>) => <div style={{
    display: 'flex',
    gap: '20px',
    'flex-wrap': 'wrap',
    'align-items': 'flex-start'
  }}>
      <Pill {...props} size={EPillSize.SMALL}>
        SMALL CONTENT
      </Pill>
      <Pill {...props} size={EPillSize.MEDIUM}>
        MEDIUM CONTENT
      </Pill>
      <Pill {...props} size={EPillSize.LARGE}>
        LARGE CONTENT
      </Pill>
    </div>
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var L,g,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IPillProps, 'children' | 'variant'>) => <div style={{
    display: 'flex',
    gap: '20px',
    'flex-wrap': 'wrap'
  }}>
      <Pill {...props} variant={EPillVariant.BLANKED}>
        BLANKED
      </Pill>
      <Pill {...props} variant={EPillVariant.FILLED}>
        FILLED
      </Pill>
      <Pill {...props} variant={EPillVariant.OUTLINED}>
        OUTLINED
      </Pill>
    </div>
}`,...(T=(g=d.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const v=["PillComponent","PillSizes","PillVariants"];export{p as PillComponent,o as PillSizes,d as PillVariants,v as __namedExportsOrder,b as default};
