import{m as s,i as n,f as x,t as h,h as z,s as E,d as o}from"./web-NTZ-uKjN.js";var t=(r=>(r.LARGE="large",r.MEDIUM="medium",r.SMALL="small",r))(t||{}),l=(r=>(r.BLANKED="blanked",r.FILLED="filled",r.OUTLINED="outlined",r))(l||{});const O="_pill_ui4ga_1",P={pill:O};var U=h("<div role=group>");const S={children:"",variant:l.FILLED,size:t.MEDIUM},i=r=>{const e=s(S,r);return(()=>{var p=U();return n(p,()=>e.children),x(a=>{var m=e.class?`${e.class} ${P.pill}`:P.pill,L=e.variant,y=e.size;return m!==a.e&&z(p,a.e=m),L!==a.t&&E(p,"data-variant",a.t=L),y!==a.a&&E(p,"data-size",a.a=y),a},{e:void 0,t:void 0,a:void 0}),p})()};var A=h("<div>");const F={title:"Components/Pill",component:i,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:t.MEDIUM}},options:[t.SMALL,t.MEDIUM,t.LARGE]},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:l.FILLED}},options:[l.BLANKED,l.FILLED,l.OUTLINED]}},args:{children:"Pill content",variant:l.FILLED,size:t.MEDIUM,class:""}},d={argTypes:{children:{table:{disable:!1}}}},c={argTypes:{size:{table:{disable:!0}}},render:r=>(()=>{var e=A();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),e.style.setProperty("align-items","flex-start"),n(e,o(i,s(r,{get size(){return t.SMALL},children:"SMALL CONTENT"})),null),n(e,o(i,s(r,{get size(){return t.MEDIUM},children:"MEDIUM CONTENT"})),null),n(e,o(i,s(r,{get size(){return t.LARGE},children:"LARGE CONTENT"})),null),e})()},u={argTypes:{variant:{table:{disable:!0}}},render:r=>(()=>{var e=A();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),n(e,o(i,s(r,{get variant(){return l.BLANKED},children:"BLANKED"})),null),n(e,o(i,s(r,{get variant(){return l.FILLED},children:"FILLED"})),null),n(e,o(i,s(r,{get variant(){return l.OUTLINED},children:"OUTLINED"})),null),e})()};var g,v,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(f=(v=d.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var D,T,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var N,M,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(b=(M=u.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const w=["PillComponent","PillSizes","PillVariants"];export{d as PillComponent,c as PillSizes,u as PillVariants,w as __namedExportsOrder,F as default};
