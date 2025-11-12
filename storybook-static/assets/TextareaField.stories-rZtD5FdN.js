import{i as n,c as i,m as o,t as b}from"./web-Db2XvEIl.js";import{T as l,E as e}from"./TextareaField-DKKP8eZl.js";import"./v4-C6aID195.js";var f=b("<div>");const T={title:"Components/TextareaField",component:l,tags:["autodocs"],argTypes:{value:{type:{name:"string",required:!1},control:{type:"text"},description:"The value of the input element",table:{disable:!1,type:{summary:"string"}}},placeholder:{type:{name:"string",required:!1},control:{type:"text"},description:"The short hint displayed in the input before the user enters a value",table:{disable:!1,type:{summary:"string"}}},label:{type:{name:"string",required:!1},control:{type:"text"},description:"The label content",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:e.MEDIUM}},options:[e.SMALL,e.MEDIUM,e.LARGE]},helperMessage:{type:{name:"string",required:!1},control:{type:"text"},description:"The helper text content",table:{disable:!1,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css for component root",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:e.MEDIUM}}},rows:{type:{name:"number",required:!1},control:{type:"number",min:1},description:"Additional css for component root",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:"3"}}},isError:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isDisabled:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the component is disabled",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},isRequired:{type:{name:"boolean",required:!1},control:{type:"boolean"},description:"If true, the label is displayed as required and the input element is required",table:{disable:!1,type:{summary:"boolean"},defaultValue:{summary:"false"}}},"aria-label":{type:{name:"string",required:!1},control:{type:"text"},description:"Alternative label text",table:{disable:!1,type:{summary:"string"}}},onChange:{action:"onChange",type:{name:"function",required:!1},description:"Change event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}},onFocus:{action:"onFocus",type:{name:"function",required:!1},description:"Focus event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}},onBlur:{action:"onBlur",type:{name:"function",required:!1},description:"Blur event handler",table:{disable:!1,type:{summary:"function"},defaultValue:{summary:"() => {}"}}}},args:{value:"",placeholder:"Type text",label:"Text field label",size:e.MEDIUM,helperMessage:"Helper text of the text field",class:"",rows:3,isError:!1,isDisabled:!1,isRequired:!1,"aria-label":""}},t={},r={argTypes:{size:{table:{disable:!0}},label:{table:{disable:!0}}},render:s=>(()=>{var a=f();return a.style.setProperty("display","flex"),a.style.setProperty("flex-direction","column"),a.style.setProperty("gap","20px"),n(a,i(l,o(s,{label:"SMALL",get size(){return e.SMALL}})),null),n(a,i(l,o(s,{label:"MEDIUM",get size(){return e.MEDIUM}})),null),n(a,i(l,o(s,{label:"LARGE",get size(){return e.LARGE}})),null),a})()};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,y,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  render: (props: Omit<ITextareaFieldProps, 'size' | 'label'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <TextareaField {...props} label='SMALL' size={ETextareaFieldSize.SMALL} />
      <TextareaField {...props} label='MEDIUM' size={ETextareaFieldSize.MEDIUM} />
      <TextareaField {...props} label='LARGE' size={ETextareaFieldSize.LARGE} />
    </div>
}`,...(c=(y=r.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};const M=["TextareaFieldComponent","TextareaFieldSizes"];export{t as TextareaFieldComponent,r as TextareaFieldSizes,M as __namedExportsOrder,T as default};
