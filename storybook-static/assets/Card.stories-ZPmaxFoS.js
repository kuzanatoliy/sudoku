import{i as o,c as i,m as d,t as u}from"./web-Db2XvEIl.js";import{C as s,E as e}from"./Card-B7CEMQhp.js";var y=u("<div>");const v={title:"Components/Card",component:s,tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!1},control:{type:"text"},description:"The content of the component",table:{disable:!0,type:{summary:"string"}}},class:{type:{name:"string",required:!1},control:{type:"text"},description:"Additional css classes",table:{disable:!1,type:{summary:"string"}}},size:{type:{name:"string",required:!1},control:{type:"select"},description:"The size of the component",table:{disable:!1,type:{summary:"string"},defaultValue:{summary:e.MEDIUM}},options:[e.SMALL,e.MEDIUM,e.LARGE]}},args:{children:"Card content",size:e.MEDIUM,class:""}},a={argTypes:{children:{table:{disable:!1}}}},n={argTypes:{size:{table:{disable:!0}}},render:t=>(()=>{var r=y();return r.style.setProperty("display","flex"),r.style.setProperty("flex-direction","column"),r.style.setProperty("gap","20px"),o(r,i(s,d(t,{get size(){return e.SMALL},children:"Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility."})),null),o(r,i(s,d(t,{get size(){return e.MEDIUM},children:"Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility."})),null),o(r,i(s,d(t,{get size(){return e.LARGE},children:"Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility."})),null),r})()};var l,h,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    children: {
      table: {
        disable: false
      }
    }
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  render: (props: Omit<ICardProps, 'summary' | 'children' | 'size'>) => <div style={{
    display: 'flex',
    'flex-direction': 'column',
    gap: '20px'
  }}>
      <Card {...props} size={ECardSize.SMALL}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
      <Card {...props} size={ECardSize.MEDIUM}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
      <Card {...props} size={ECardSize.LARGE}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
    </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["CardComponent","CardSizes"];export{a as CardComponent,n as CardSizes,C as __namedExportsOrder,v as default};
