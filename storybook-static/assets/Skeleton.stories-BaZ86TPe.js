import{i as o,c as i,m as l,t as v}from"./web-Db2XvEIl.js";import{S as n,E as t}from"./Skeleton-Dv17TIuX.js";var h=v("<div>Box:<!>Rounded:<!>Circle:");const C={title:"Components/Skeleton",component:n,tags:["autodocs"],argTypes:{class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},width:{type:{name:"number",required:!1},control:{type:"number"},description:"The width of the component",table:{disable:!1,type:{summary:"number"}}},height:{type:{name:"number",required:!1},control:{type:"number"},description:"The height of the component",table:{disable:!1,type:{summary:"number"}}},variant:{type:{name:"string",required:!1},control:{type:"select"},description:"The variant to use",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:t.BOX}},options:[t.BOX,t.ROUNDED,t.CIRCLE]}},args:{variant:t.BOX,height:100,width:200,class:""}},r={},a={argTypes:{variant:{table:{disable:!0}}},render:s=>(()=>{var e=h(),S=e.firstChild,p=S.nextSibling,f=p.nextSibling,m=f.nextSibling;return m.nextSibling,e.style.setProperty("display","flex"),e.style.setProperty("gap","20px"),e.style.setProperty("flex-wrap","wrap"),o(e,i(n,l(s,{get variant(){return t.BOX}})),p),o(e,i(n,l(s,{get variant(){return t.ROUNDED}})),m),o(e,i(n,l(s,{get variant(){return t.CIRCLE}})),null),e})()};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var y,g,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<ISkeletonProps, 'variant'>) => <div style={{
    display: 'flex',
    gap: '20px',
    'flex-wrap': 'wrap'
  }}>
      Box:
      <Skeleton {...props} variant={ESkeletonVariant.BOX} />
      Rounded:
      <Skeleton {...props} variant={ESkeletonVariant.ROUNDED} />
      Circle:
      <Skeleton {...props} variant={ESkeletonVariant.CIRCLE} />
    </div>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const E=["SkeletonComponent","SkeletonVariants"];export{r as SkeletonComponent,a as SkeletonVariants,E as __namedExportsOrder,C as default};
