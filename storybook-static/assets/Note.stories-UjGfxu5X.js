import{t as N,m as o,i as r,d as l,S as B,f as C,s as v,h}from"./web-NTZ-uKjN.js";var q=N('<svg aria-hidden fill=currentColor version=1.1 viewBox="0 0 45.311 45.311"xmlns=http://www.w3.org/2000/svg><path d="m22.675 0.02c-6e-3 0-0.014 1e-3 -0.02 1e-3 -7e-3 0-0.013-1e-3 -0.02-1e-3 -12.5 0-22.635 10.134-22.635 22.636 0 12.5 10.135 22.635 22.635 22.635h0.02 0.02c12.5 0 22.635-10.135 22.635-22.635 1e-3 -12.502-10.134-22.636-22.635-22.636zm0 38.791c-6e-3 0-0.014-1e-3 -0.02-1e-3 -7e-3 0-0.013 1e-3 -0.02 1e-3 -2.046 0-3.705-1.658-3.705-3.705 0-2.045 1.659-3.703 3.705-3.703h0.02 0.02c2.045 0 3.706 1.658 3.706 3.703 0 2.046-1.658 3.705-3.706 3.705zm5.313-28.233c-0.242 3.697-1.932 14.692-1.932 14.692 0 1.854-1.519 3.356-3.373 3.356h-0.029-0.029c-1.853 0-3.372-1.504-3.372-3.356 0 0-1.689-10.995-1.931-14.692-0.12-1.851 1.298-5.288 5.304-5.288 0.01 0 0.02 1e-3 0.029 1e-3s0.019-1e-3 0.029-1e-3c4.005 0 5.425 3.437 5.304 5.288z">');const V=()=>q();var p=(t=>(t.BLANKED="blanked",t.OUTLINED="outlined",t))(p||{}),n=(t=>(t.LARGE="large",t.MEDIUM="medium",t.SMALL="small",t))(n||{}),s=(t=>(t.NOTE="note",t.WARN="warn",t.ERROR="error",t))(s||{});const W="_note_7ya7n_1",k="_note_content_7ya7n_38",E={note:W,note_content:k};var G=N("<strong>: "),K=N("<div role=group><p>");const F={label:"",message:"",size:n.MEDIUM,variant:p.OUTLINED,type:s.NOTE},i=t=>{const e=o(F,t);return(()=>{var d=K(),c=d.firstChild;return r(d,l(V,{}),c),r(c,l(B,{get when(){return!!e.label},get children(){var a=G(),m=a.firstChild;return r(a,()=>e.label,m),a}}),null),r(c,()=>e.message,null),C(a=>{var m=e.size,T=e.variant,x=e.type,L=e.class?`${e.class} ${E.note}`:E.note,O=E.note_content;return m!==a.e&&v(d,"data-size",a.e=m),T!==a.t&&v(d,"data-variant",a.t=T),x!==a.a&&v(d,"data-type",a.a=x),L!==a.o&&h(d,a.o=L),O!==a.i&&h(c,a.i=O),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d})()};var f=N("<div>");const H={title:"Components/Note",component:i,tags:["autodocs"],argTypes:{message:{type:{name:"string",required:!1},control:{type:"text"},description:"The message text",table:{disable:!0,type:{summary:"string"}}},label:{type:{name:"string",required:!1},control:{type:"text"},description:"The label text",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:p.OUTLINED}},options:[p.BLANKED,p.OUTLINED]},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:n.MEDIUM}},options:[n.SMALL,n.MEDIUM,n.LARGE]},type:{type:{name:"string",required:!1},control:{type:"select"},description:"The type of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:s.NOTE}},options:[s.NOTE,s.WARN,s.ERROR]}},args:{label:"Note",message:"Additional information that should notificate use about something",size:n.MEDIUM,variant:p.OUTLINED,type:s.NOTE,class:""}},u={argTypes:{message:{table:{disable:!1}},label:{table:{disable:!1}}}},y={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var e=f();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),r(e,l(i,o(t,{get size(){return n.SMALL},label:"Small note"})),null),r(e,l(i,o(t,{get size(){return n.MEDIUM},label:"Medium note"})),null),r(e,l(i,o(t,{get size(){return n.LARGE},label:"Large note"})),null),e})()},g={argTypes:{variant:{table:{disable:!0}}},render:t=>(()=>{var e=f();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),r(e,l(i,o(t,{get variant(){return p.BLANKED},label:"Blanked note"})),null),r(e,l(i,o(t,{get variant(){return p.OUTLINED},label:"Outlined note"})),null),e})()},b={argTypes:{type:{table:{disable:!0}}},render:t=>(()=>{var e=f();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("gap","20px"),r(e,l(i,o(t,{get type(){return s.NOTE},label:"Note"})),null),r(e,l(i,o(t,{get type(){return s.WARN},label:"Warning"})),null),r(e,l(i,o(t,{get type(){return s.ERROR},label:"Error"})),null),e})()};var R,z,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var A,_,D;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(_=y.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var I,P,S;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(P=g.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var U,$,w;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(w=($=b.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const J=["NoteComponent","NoteSizes","NoteVariants","NoteTypes"];export{u as NoteComponent,y as NoteSizes,b as NoteTypes,g as NoteVariants,J as __namedExportsOrder,H as default};
