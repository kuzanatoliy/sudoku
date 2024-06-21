import{e as z,m as l,i,f as C,t as x,h as U,s as m,d as u}from"./web-NTZ-uKjN.js";const S="_button_1w3qn_1",g={button:S};var w=x("<button>"),r=(t=>(t.CONTAINED="contained",t.OUTLINED="outlined",t))(r||{}),n=(t=>(t.LARGE="large",t.MEDIUM="medium",t.SMALL="small",t))(n||{});const P={onClick:()=>{},variant:"contained",size:"medium",isDisabled:!1,isFullWidth:!1},o=t=>{const e=l(P,t);return(()=>{var s=w();return s.$$click=()=>e.onClick(),i(s,()=>e.children),C(a=>{var y=e.class?`${e.class} ${g.button}`:g.button,f=e.isDisabled,b=e.variant,v=e.size,E=e.isFullWidth;return y!==a.e&&U(s,a.e=y),f!==a.t&&(s.disabled=a.t=f),b!==a.a&&m(s,"data-variant",a.a=b),v!==a.o&&m(s,"data-size",a.o=v),E!==a.i&&m(s,"data-full-width",a.i=E),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s})()};z(["click"]);var O=x("<div>");const q={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:r.CONTAINED}},options:[r.CONTAINED,r.OUTLINED]},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:n.MEDIUM}},options:[n.SMALL,n.MEDIUM,n.LARGE]},isDisabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isFullWidth:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component take all available width",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"onClick",type:{name:"function",required:!1},description:"Click event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}}},args:{children:"BUTTON TEXT",variant:r.CONTAINED,size:n.MEDIUM,class:"",isDisabled:!1,isFullWidth:!1}},d={argTypes:{children:{table:{disable:!1}}}},p={argTypes:{variant:{table:{disable:!0}}},render:t=>(()=>{var e=O();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),i(e,u(o,l(t,{get variant(){return r.CONTAINED},children:"CONTAINED"})),null),i(e,u(o,l(t,{get variant(){return r.OUTLINED},children:"OUTLINED"})),null),e})()},c={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var e=O();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("align-items","flex-start"),e.style.setProperty("flex-wrap","wrap"),i(e,u(o,l(t,{get size(){return n.SMALL},children:"SMALL"})),null),i(e,u(o,l(t,{get size(){return n.MEDIUM},children:"MEDIUM"})),null),i(e,u(o,l(t,{get size(){return n.LARGE},children:"LARGE"})),null),e})()};var T,D,h;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(h=(D=d.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var L,N,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: props => <div style={{
    display: 'flex',
    gap: '20px',
    'flex-wrap': 'wrap'
  }}>
      <Button {...props} variant={EButtonVariant.CONTAINED}>
        CONTAINED
      </Button>
      <Button {...props} variant={EButtonVariant.OUTLINED}>
        OUTLINED
      </Button>
    </div>
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var A,B,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: props => <div style={{
    display: 'flex',
    gap: '20px',
    'align-items': 'flex-start',
    'flex-wrap': 'wrap'
  }}>
      <Button {...props} size={EButtonSize.SMALL}>
        SMALL
      </Button>
      <Button {...props} size={EButtonSize.MEDIUM}>
        MEDIUM
      </Button>
      <Button {...props} size={EButtonSize.LARGE}>
        LARGE
      </Button>
    </div>
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const R=["ButtonComponent","ButtonVariants","ButtonSizes"];export{d as ButtonComponent,c as ButtonSizes,p as ButtonVariants,R as __namedExportsOrder,q as default};
