(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{34:function(e,t,c){e.exports={card:"Card_card__-4tdA"}},35:function(e,t,c){e.exports={form:"QuoteForm_form__1kiGS",loading:"QuoteForm_loading__1512r",control:"QuoteForm_control__2cZ7s",actions:"QuoteForm_actions__4AqRS"}},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(34),o=c.n(r),a=c(1),s=function(e){return Object(a.jsx)("div",{className:o.a.card,children:e.children})},i=c(8),u=c(35),d=c.n(u),l=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)();return Object(a.jsx)(n.Fragment,{children:Object(a.jsx)(s,{children:Object(a.jsxs)("form",{className:d.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value,o=c.current.value;e.onAddQuote({author:r,text:o})},children:[e.isLoading&&Object(a.jsx)("div",{className:d.a.loading,children:Object(a.jsx)(i.a,{})}),Object(a.jsxs)("div",{className:d.a.control,children:[Object(a.jsx)("label",{htmlFor:"author",children:"Author"}),Object(a.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(a.jsxs)("div",{className:d.a.control,children:[Object(a.jsx)("label",{htmlFor:"text",children:"Text"}),Object(a.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(a.jsx)("div",{className:d.a.actions,children:Object(a.jsx)("button",{className:"btn",children:"Add Quote"})})]})})})},j=c(2),b=c(11),x=c(12);t.default=function(){var e=Object(j.h)(),t=Object(b.a)(x.b),c=t.sendRequest,r=t.status;Object(n.useEffect)((function(){"completed"===r&&e("/quotes",{replace:!0})}),[r,e]);return Object(a.jsx)(l,{isLoading:"pending"===r,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=4.2ccd5065.chunk.js.map