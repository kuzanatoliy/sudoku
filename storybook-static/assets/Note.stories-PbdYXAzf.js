import{i as n,c as l,m as o,t as M}from"./web-Db2XvEIl.js";import{N as a,E as i,a as r,b as s}from"./Note-BJOgroec.js";var u=M("<div>");const A={title:"Components/Note",component:a,tags:["autodocs"],argTypes:{message:{type:{name:"string",required:!1},control:{type:"text"},description:"The message text",table:{disable:!0,type:{summary:"string"}}},label:{type:{name:"string",required:!1},control:{type:"text"},description:"The label text",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:i.OUTLINED}},options:[i.BLANKED,i.OUTLINED]},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:r.MEDIUM}},options:[r.SMALL,r.MEDIUM,r.LARGE]},type:{type:{name:"string",required:!1},control:{type:"select"},description:"The type of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:s.NOTE}},options:[s.NOTE,s.WARN,s.ERROR]}},args:{label:"Note",message:"Additional information that should notificate use about something",size:r.MEDIUM,variant:i.OUTLINED,type:s.NOTE,class:""}},p={argTypes:{message:{table:{disable:!1}},label:{table:{disable:!1}}}},d={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var e=u();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),n(e,l(a,o(t,{get size(){return r.SMALL},label:"Small note"})),null),n(e,l(a,o(t,{get size(){return r.MEDIUM},label:"Medium note"})),null),n(e,l(a,o(t,{get size(){return r.LARGE},label:"Large note"})),null),e})()},m={argTypes:{variant:{table:{disable:!0}}},render:t=>(()=>{var e=u();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),n(e,l(a,o(t,{get variant(){return i.BLANKED},label:"Blanked note"})),null),n(e,l(a,o(t,{get variant(){return i.OUTLINED},label:"Outlined note"})),null),e})()},y={argTypes:{type:{table:{disable:!0}}},render:t=>(()=>{var e=u();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),n(e,l(a,o(t,{get type(){return s.NOTE},label:"Note"})),null),n(e,l(a,o(t,{get type(){return s.WARN},label:"Warning"})),null),n(e,l(a,o(t,{get type(){return s.ERROR},label:"Error"})),null),e})()};var c,b,g;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    message: {
      table: {
        disable: false
      }
    },
    label: {
      table: {
        disable: false
      }
    }
  }
}`,...(g=(b=p.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var N,E,f;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'size'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Note {...props} size={ENoteSize.SMALL} label='Small note' />
      <Note {...props} size={ENoteSize.MEDIUM} label='Medium note' />
      <Note {...props} size={ENoteSize.LARGE} label='Large note' />
    </div>
}`,...(f=(E=d.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,x,v;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'variant'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Note {...props} variant={ENoteVariant.BLANKED} label='Blanked note' />
      <Note {...props} variant={ENoteVariant.OUTLINED} label='Outlined note' />
    </div>
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var L,O,z;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'variant'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Note {...props} type={ENoteType.NOTE} label='Note' />
      <Note {...props} type={ENoteType.WARN} label='Warning' />
      <Note {...props} type={ENoteType.ERROR} label='Error' />
    </div>
}`,...(z=(O=y.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const D=["NoteComponent","NoteSizes","NoteVariants","NoteTypes"];export{p as NoteComponent,d as NoteSizes,y as NoteTypes,m as NoteVariants,D as __namedExportsOrder,A as default};
