import{i as s,c as l,m as o,t as I}from"./web-Db2XvEIl.js";import{B as r,E as n,a as t}from"./Button-Dfpmwi3y.js";var T=I("<div>");const v={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:n.CONTAINED}},options:[n.CONTAINED,n.OUTLINED]},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:t.MEDIUM}},options:[t.SMALL,t.MEDIUM,t.LARGE]},isDisabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isFullWidth:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component take all available width",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"onClick",type:{name:"function",required:!1},description:"Click event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}}},args:{children:"BUTTON TEXT",variant:n.CONTAINED,size:t.MEDIUM,class:"",isDisabled:!1,isFullWidth:!1}},i={argTypes:{children:{table:{disable:!1}}}},p={argTypes:{variant:{table:{disable:!0}}},render:a=>(()=>{var e=T();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),s(e,l(r,o(a,{get variant(){return n.CONTAINED},children:"CONTAINED"})),null),s(e,l(r,o(a,{get variant(){return n.OUTLINED},children:"OUTLINED"})),null),e})()},u={argTypes:{size:{table:{disable:!0}}},render:a=>(()=>{var e=T();return e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("align-items","flex-start"),e.style.setProperty("flex-wrap","wrap"),s(e,l(r,o(a,{get size(){return t.SMALL},children:"SMALL"})),null),s(e,l(r,o(a,{get size(){return t.MEDIUM},children:"MEDIUM"})),null),s(e,l(r,o(a,{get size(){return t.LARGE},children:"LARGE"})),null),e})()};var d,c,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,f,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IButtonProps, 'variant'>) => <div style={{
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
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var E,g,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<IButtonProps, 'size'>) => <div style={{
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
}`,...(B=(g=u.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};const L=["ButtonComponent","ButtonVariants","ButtonSizes"];export{i as ButtonComponent,u as ButtonSizes,p as ButtonVariants,L as __namedExportsOrder,v as default};
