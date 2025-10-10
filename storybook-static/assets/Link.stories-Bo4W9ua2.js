import{i as o,c as l,m as a,a as P,t as S}from"./web-Db2XvEIl.js";import{L as i,E as n,a as s}from"./Link-am01J79w.js";var z=S("<div>"),E=S("<div><div></div><div>");const A={title:"Components/Link",component:i,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},href:{type:{name:"string",required:!1},control:{type:"text"},description:"The link url",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:n.MEDIUM}},options:[n.SMALL,n.MEDIUM,n.LARGE]},colorScheme:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:s.DARK}},options:[s.DARK,s.LIGHT]}},args:{href:"#",children:"Link content",size:n.MEDIUM,colorScheme:s.DARK,class:""}},p={argTypes:{children:{table:{disable:!1}}}},c={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var e=z();return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),e.style.setProperty("padding","20px"),e.style.setProperty("gap","20px"),e.style.setProperty("border-radius","20px"),o(e,l(i,a(t,{get size(){return n.SMALL},children:"Small link"})),null),o(e,l(i,a(t,{get size(){return n.MEDIUM},children:"Medium link"})),null),o(e,l(i,a(t,{get size(){return n.LARGE},children:"Large link"})),null),P(r=>(r=t.colorScheme===s.DARK?"#d8d9da":"#004445")!=null?e.style.setProperty("background",r):e.style.removeProperty("background")),e})()},m={argTypes:{colorScheme:{table:{disable:!0}}},render:t=>(()=>{var e=E(),r=e.firstChild,d=r.nextSibling;return e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","row"),e.style.setProperty("gap","20px"),r.style.setProperty("display","flex"),r.style.setProperty("flex-direction","column"),r.style.setProperty("padding","20px"),r.style.setProperty("gap","20px"),r.style.setProperty("border-radius","20px"),r.style.setProperty("background","#d8d9da"),o(r,l(i,a(t,{get colorScheme(){return s.DARK},children:"Large link"}))),d.style.setProperty("padding","20px"),d.style.setProperty("border-radius","20px"),d.style.setProperty("background","#004445"),o(d,l(i,a(t,{get colorScheme(){return s.LIGHT},children:"Link content"}))),e})()};var y,u,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var L,k,h;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<ILinkProps, 'children' | 'size'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    padding: '20px',
    gap: '20px',
    'border-radius': '20px',
    background: props.colorScheme === ELinkColorScheme.DARK ? '#d8d9da' : '#004445'
  }}>
      <Link {...props} size={ELinkSize.SMALL}>
        Small link
      </Link>
      <Link {...props} size={ELinkSize.MEDIUM}>
        Medium link
      </Link>
      <Link {...props} size={ELinkSize.LARGE}>
        Large link
      </Link>
    </div>
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var b,x,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    colorScheme: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<ILinkProps, 'children' | 'size'>) => <div style={{
    display: 'flex',
    'flex-direction': 'row',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      'flex-direction': 'column',
      padding: '20px',
      gap: '20px',
      'border-radius': '20px',
      background: '#d8d9da'
    }}>
        <Link {...props} colorScheme={ELinkColorScheme.DARK}>
          Large link
        </Link>
      </div>
      <div style={{
      padding: '20px',
      'border-radius': '20px',
      background: '#004445'
    }}>
        <Link {...props} colorScheme={ELinkColorScheme.LIGHT}>
          Link content
        </Link>
      </div>
    </div>
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const T=["LinkComponent","LinkSizes","LinkColorSchemes"];export{m as LinkColorSchemes,p as LinkComponent,c as LinkSizes,T as __namedExportsOrder,A as default};
