import{i,c as o,m as p,t as f}from"./web-Db2XvEIl.js";import{T as r,E as a,a as e}from"./TextField-DeKEe79A.js";import"./v4-C6aID195.js";var x=f("<div>");const E={title:"Components/TextField",component:r,tags:["autodocs"],argTypes:{value:{type:{name:"string",required:!1},control:{type:"text"},description:"The value of the input element",table:{disable:!1,type:{summary:"string"}}},placeholder:{type:{name:"string",required:!1},control:{type:"text"},description:"The short hint displayed in the input before the user enters a value",table:{disable:!1,type:{summary:"string"}}},label:{type:{name:"string",required:!1},control:{type:"text"},description:"The label content",table:{disable:!1,type:{summary:"string"}}},type:{type:{name:"string",required:!1},control:{type:"select"},description:"Type of the input element",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:a.TEXT}},options:[a.TEXT,a.PASSWORD]},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:e.MEDIUM}},options:[e.SMALL,e.MEDIUM,e.LARGE]},helperMessage:{type:{name:"string",required:!1},control:{type:"text"},description:"The helper text content",table:{disable:!1,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css for component root",table:{disable:!1,type:{summary:"string"}}},isError:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isDisabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isRequired:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the label is displayed as required and the input element is required",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},"aria-label":{type:{name:"string",required:!1},control:{type:"text"},description:"Alternative label text",table:{disable:!1,type:{summary:"string"}}},onChange:{action:"onChange",type:{name:"function",required:!1},description:"Change event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}},onFocus:{action:"onFocus",type:{name:"function",required:!1},description:"Focus event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}},onBlur:{action:"onBlur",type:{name:"function",required:!1},description:"Blur event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}}},args:{value:"",placeholder:"Type text",label:"Text field label",type:a.TEXT,size:e.MEDIUM,helperMessage:"Helper text of the text field",class:"",isError:!1,isDisabled:!1,isRequired:!1,"aria-label":""}},l={},s={argTypes:{size:{table:{disable:!0}},label:{table:{disable:!0}}},render:n=>(()=>{var t=x();return t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("gap","20px"),i(t,o(r,p(n,{label:"SMALL",get size(){return e.SMALL}})),null),i(t,o(r,p(n,{label:"MEDIUM",get size(){return e.MEDIUM}})),null),i(t,o(r,p(n,{label:"LARGE",get size(){return e.LARGE}})),null),t})()};var d,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,c,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    label: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<ITextFieldProps, 'size' | 'label'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <TextField {...props} label='SMALL' size={ETextFieldSize.SMALL} />
      <TextField {...props} label='MEDIUM' size={ETextFieldSize.MEDIUM} />
      <TextField {...props} label='LARGE' size={ETextFieldSize.LARGE} />
    </div>
}`,...(b=(c=s.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const M=["TextFieldComponent","TextFieldSizes"];export{l as TextFieldComponent,s as TextFieldSizes,M as __namedExportsOrder,E as default};
