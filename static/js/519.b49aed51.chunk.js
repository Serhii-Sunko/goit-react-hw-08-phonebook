"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{6548:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,a,o,d,c=t(168),x=t(5867),p=t.p+"static/media/iphone2.a08e1b77d7e9b516ebe5.png",s=x.ZP.div(r||(r=(0,c.Z)(["\n  width: 420px;\n  min-height: 850px;\n\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n\n  background: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  @media screen and (max-width: 420px) {\n    min-width: 300px;\n    min-height: 500px;\n    background-size: contain;\n  }\n\n  @media screen and (min-width: 1700px) {\n    width: 440px;\n    height: 800px;\n  }\n  @media screen and (min-width: 2000px) {\n    width: 550px;\n    height: 1100px;\n  }\n  @media screen and (min-width: 2200px) {\n    width: 600px;\n    height: 1250px;\n  }\n\n  @media screen and (min-width: 2200px) {\n    width: 660px;\n  }\n"])),p),u=t(9439),h=t(2791),m=x.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),f=x.ZP.input(a||(a=(0,c.Z)(["\n  margin: 10px;\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  width: 200px;\n  height: 30px;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);\n  text-align: center;\n\n  ::placeholder {\n    text-align: center;\n  }\n  @media screen and (min-width: 2000px) {\n    width: 360px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),l=x.ZP.label(o||(o=(0,c.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  text-align: center;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),g=x.ZP.button(d||(d=(0,c.Z)(["\n  margin: 10px;\n  color: black;\n  /* color: ","; */\n  background-color: ",";\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  width: 140px;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  letter-spacing: 2px;\n  font-weight: 500;\n  border-radius: 40px;\n  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease 0s;\n\n  :hover,\n  :focus {\n    background-color: #adadad;\n  }\n\n  @media screen and (max-width: 420px) {\n    width: 120px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),w=t(208),b=t(9434),j=t(6382),v=function(n){return n.contacts.items},Z=function(n){return n.contacts.filter},k=t(9085),y=t(184);var z,P,C,T,S,A,W,F,I=function(){var n=(0,h.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(""),a=(0,u.Z)(i,2),o=a[0],d=a[1],c=(0,b.v9)(v),x=(0,b.I0)(),p=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":d(i);break;default:return}};return(0,y.jsx)("form",{onSubmit:function(n){n.preventDefault(),function(n,e){if(c.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return k.Am.error("".concat(n," is already in contacts."));x((0,w.uK)({id:(0,j.x0)(),name:n,number:e}))}(t,o),r(""),d("")},children:(0,y.jsxs)(m,{children:[(0,y.jsx)(l,{htmlFor:"name",children:(0,y.jsx)(f,{type:"text",name:"name",id:"name",placeholder:"Enter name",value:t,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,y.jsx)(l,{children:(0,y.jsx)(f,{type:"tel",name:"number",value:o,onChange:p,placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,y.jsx)(g,{type:"submit",onClick:function(){},children:"Add contact"})]})})},L=x.ZP.ul(z||(z=(0,c.Z)(["\n  /* margin-top: 30px; */\n  padding: 20px;\n  max-height: 200px;\n  min-width: 100px;\n  overflow: auto;\n\n  @media screen and (min-width: 200px) and (max-width: 420px) {\n    padding: 10px;\n    height: 170px;\n  }\n\n  @media screen and (min-width: 2200px) {\n    width: 400px;\n    padding: 40px;\n    max-height: 400px;\n  }\n"]))),_=x.ZP.li(P||(P=(0,c.Z)(["\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),B=x.ZP.p(C||(C=(0,c.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),D=x.ZP.button(T||(T=(0,c.Z)(["\n  color: black;\n  background-color: ",";\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  width: 60px;\n  height: 35px;\n  letter-spacing: 2px;\n  font-weight: 500;\n  border-radius: 40px;\n  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease 0s;\n\n  :hover,\n  :focus {\n    background-color: #adadad;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),E=function(){var n=(0,b.v9)((function(n){return n.contacts.items})),e=(0,b.v9)((function(n){return n.contacts.filter})),t=(0,b.I0)(),r=""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,y.jsx)("div",{children:(0,y.jsx)(L,{children:0===r.length?null:(0,y.jsx)(y.Fragment,{children:r.map((function(n){return(0,y.jsxs)(_,{children:[(0,y.jsxs)(B,{children:[n.name," : ",n.number]}),(0,y.jsx)(D,{onClick:function(){var e;e=n.id,t((0,w.GK)(e))},children:"Delete"})]},n.id)}))})})})},O=x.ZP.input(S||(S=(0,c.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  text-transform: ",";\n  width: 332px;\n  height: 30px;\n  border-radius: 20px;\n  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);\n  text-align: center;\n  display: flex;\n  margin-bottom: 20px;\n\n  ::placeholder {\n    text-align: center;\n  }\n\n  @media screen and (min-width: 200px) and (max-width: 420px) {\n    width: 200px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media screen and (min-width: 2000px) {\n    width: 400px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.textTransform.cap})),q=t(3661),K=function(){var n=(0,b.I0)(),e=(0,b.v9)(Z);return(0,y.jsx)(O,{type:"text",name:"filter",value:e,onChange:function(e){e.preventDefault(),n((0,q.M)(e.currentTarget.value.toLocaleLowerCase()))},placeholder:"Find contact by name"})},M=x.ZP.section(A||(A=(0,c.Z)(["\n  padding-bottom: ","px;\n\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 2000px) {\n    margin-bottom: 30px;\n  }\n"])),(function(n){return n.theme.space[4]})),G=x.ZP.h1(W||(W=(0,c.Z)(["\n  /* margin-bottom: 10px; */\n  color: ",";\n  /* background-color: ","; */\n  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,\n    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,\n    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,\n    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;\n  font-weight: ",";\n  padding: ","px;\n  text-align: center;\n\n  @media screen and (min-width: 200px) and (max-width: 420px) {\n    padding: 5px;\n  }\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.space[4]})),J=function(n){var e=n.title,t=n.children;return(0,y.jsxs)(M,{children:[(0,y.jsx)(G,{children:e}),t]})},N=(t(5462),t.p+"static/media/white.5932502efe8282ecdf90.jpg"),$=x.ZP.div(F||(F=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  background: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n\n  overflow-y: scroll;\n  max-height: calc(100vh - 56px - 62px);\n"])),N);function H(){var n=(0,b.I0)();return(0,h.useEffect)((function(){n((0,w.yF)())}),[n]),(0,y.jsx)($,{children:(0,y.jsxs)(s,{children:[(0,y.jsxs)(J,{title:"PhoneBook",children:[(0,y.jsx)(k.Ix,{}),(0,y.jsx)(I,{})]}),(0,y.jsxs)(J,{title:"Contacts",children:[(0,y.jsx)(K,{}),(0,y.jsx)(E,{})]})]})})}},5462:function(){},168:function(n,e,t){function r(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=519.b49aed51.chunk.js.map