(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],[,,,,,function(e,a,t){e.exports={header:"Header_header__1v0yI",menu:"Header_menu__Zy7KP",cartIcon:"Header_cartIcon__3Ht0q",menuItem:"Header_menuItem__3lx3z",link:"Header_link__1uLZ-",active:"Header_active__3GX0s"}},function(e,a,t){e.exports={footer:"Footer_footer__7dIj9",container:"Footer_container__188QZ",text:"Footer_text__2zIhj",email:"Footer_email__3-Iet",socialList:"Footer_socialList__3dMZU",socialItem:"Footer_socialItem__1oYsa",socialIcon:"Footer_socialIcon__1dkGY",tw:"Footer_tw__1Ted_",fb:"Footer_fb__2U7fD",inst:"Footer_inst__141Rx"}},,,,,,,function(e,a,t){e.exports={container:"BookForm_container__M-RAk",errors:"BookForm_errors__1vI8u",item:"BookForm_item__2jdtG",input:"BookForm_input__tj3SX",fileInput:"BookForm_fileInput__1tkaj",fileField:"BookForm_fileField__2t_pP",submit:"BookForm_submit__2fMY-",imageBox:"BookForm_imageBox__1WIlb",preview:"BookForm_preview__1jMvP"}},function(e,a,t){e.exports={container:"CartItem_container__1Mo8k",book:"CartItem_book__1eEwA",image:"CartItem_image__3sMem",imageBox:"CartItem_imageBox__1ubQl",info:"CartItem_info__33fKa",priceBlock:"CartItem_priceBlock__1fSsE",deleteBlock:"CartItem_deleteBlock__1C_pS"}},,function(e,a,t){e.exports={container:"Book_container__avzHS",book:"Book_book__169nL",image:"Book_image__1lAS8",info:"Book_info__1kXbJ",price:"Book_price__1BSmw",but:"Book_but__VneNV"}},function(e,a,t){e.exports={header:"Logo_header__Fvdf9",link:"Logo_link__1ldHi",mainTitle:"Logo_mainTitle__3gmpx",title:"Logo_title__3pL6O",dash:"Logo_dash__XQuTP"}},,function(e,a,t){e.exports={container:"Cart_container__1rWQH",main:"Cart_main__1P032",title:"Cart_title__2GowW",total:"Cart_total__3LIiA",amount:"Cart_amount___bHtP"}},,,function(e,a,t){e.exports={container:"AddRequest_container__3tw70",request:"AddRequest_request__1lShf",button:"AddRequest_button__1ypZs",image:"AddRequest_image__3uWb5"}},,,,,,,,function(e,a,t){e.exports={input:"Search_input__3iTQH",form:"Search_form__1ch7D"}},,,function(e,a,t){e.exports={container:"Shop_container__1-zLA",main:"Shop_main__21oTX"}},function(e,a,t){e.exports={container:"New_container__gbKjW",main:"New_main__1zCxa"}},,,,function(e,a,t){e.exports={button:"Button_button__2Lf63"}},function(e,a,t){e.exports={catalog:"Catalog_catalog__31PLw"}},function(e,a,t){e.exports={items:"CartItems_items__3m6V1"}},function(e,a,t){e.exports={error:"FormErrors_error__23fLV"}},function(e,a,t){e.exports={container:"App_container__eSJ6i"}},,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(1),c=t.n(n),i=t(23),o=t.n(i),s=t(12),l=t(3),m=t(15),j=t(4),d=t(30),u=t.n(d),b=function(e){var a=e.term,t=e.filterData,n=Object(j.c)((function(e){return e.data}));return Object(r.jsx)("form",{children:Object(r.jsx)("div",{className:u.a.form,children:Object(r.jsx)("input",{type:"text",value:a,className:u.a.input,placeholder:"Search...",onChange:function(e){var a=e.target.value.toLowerCase(),r=n.filter((function(e){return e.name.toLowerCase().includes(a)}));t({data:r,term:a})}})})})},h=t(5),_=t.n(h),g=function(e){var a=e.data,t=e.term,n=e.filterData,c=e.isMainPage,i=e.isCart,o=Object(j.c)((function(e){return e.counter}));return Object(r.jsx)("div",{className:_.a.header,children:Object(r.jsxs)("ul",{className:_.a.menu,children:[Object(r.jsx)("li",{className:_.a.menuItem,children:Object(r.jsx)(s.c,{to:"/",className:_.a.link,activeClassName:_.a.active,exact:!0,children:c?"Shop":"Back"})}),c?Object(r.jsx)("li",{children:Object(r.jsx)(b,{data:a,term:t,filterData:n})}):"",c?Object(r.jsx)("li",{className:_.a.menuItem,children:Object(r.jsxs)(s.c,{to:"/cart",className:_.a.link,activeClassName:_.a.active,children:[Object(r.jsx)("div",{className:_.a.cartIcon}),Object(r.jsx)("span",{className:_.a.counter,children:o})]})}):"",i?Object(r.jsx)("li",{className:_.a.menuItem,children:Object(r.jsxs)(s.c,{to:"/cart",className:_.a.link,activeClassName:_.a.active,children:[Object(r.jsx)("div",{className:_.a.cartIcon}),Object(r.jsx)("span",{className:_.a.counter,children:o})]})}):""]})})},p=t(38),x=t.n(p),O=function(e){return Object(r.jsx)("button",{className:x.a.button,onClick:e.onClick,children:e.text})},f=t(16),v=t.n(f),N=function(e){var a=e.name,t=e.autor,n=e.year,c=e.price,i=e.image,o=Object(j.b)();return Object(r.jsxs)("div",{className:v.a.container,children:[Object(r.jsxs)("div",{className:v.a.book,children:[Object(r.jsx)("img",{className:v.a.image,src:"/bookstore"+i,alt:a}),Object(r.jsxs)("div",{className:v.a.info,children:[Object(r.jsx)("h3",{children:a}),Object(r.jsx)("h4",{children:t}),Object(r.jsxs)("p",{children:["Release year: ",Object(r.jsx)("span",{children:n})]})]})]}),Object(r.jsxs)("div",{className:v.a.price,children:[Object(r.jsxs)("h5",{children:["$",c]}),Object(r.jsx)(O,{text:"Buy",className:v.a.but,onClick:function(){var e={};e.name=a,e.autor=t,e.year=n,e.price=c,e.image=i,e.id=Math.floor(1e4*Math.random()).toString()+a,o(function(e){return{type:"ADD_ITEM",payload:e}}(e)),o({type:"INCREMENT"}),o({type:"INCREASE_AMOUNT",payload:Number(c)})}})]})]})},y=[{name:"The Element: How Finding Your Passion Changes Everything",autor:"Ken Robinson",year:"2009",price:"25",image:"/img/element.png"},{name:"Becoming",autor:"Michelle Obama",year:"2018",price:"28",image:"/img/becoming.png"},{name:"Sapiens: A Brief History of Humankind",autor:"Yuval Noah Harari",year:"2015",price:"24",image:"/img/sapiens.png"},{name:"Stuart: A Life Backwards",autor:"Alexander Masters",year:"2007",price:"26",image:"/img/stuart.png"},{name:"Leonardo da Vinci",autor:"Walter Isaacson",year:"2017",price:"18",image:"/img/leonardo.png"},{name:"The Night in Lisbon: A Novel",autor:"Erich Maria Remarque",year:"1998",price:"22",image:"/img/lisbon.png"},{name:"Harry Potter and the Deathly Hallows",autor:"J. K. Rowling",year:"2007",price:"29",image:"/img/harry7.png"},{name:"Harry Potter and the Half-Blood Prince",autor:"J. K. Rowling",year:"2005",price:"27",image:"/img/harry6.png"},{name:"Flowers for Algernon",autor:"Daniel Keyes",year:"1995",price:"14",image:"/img/algernon.png"},{name:"The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",autor:"Stephen R. Covey",year:"2013",price:"19",image:"/img/habits.png"},{name:"The Bridges Of Madison County",autor:"Robert James Waller",year:"2000",price:"18",image:"/img/madison.png"},{name:"The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life (Before 8AM)",autor:"Hal Elrod",year:"2012",price:"26",image:"/img/morning.png"},{name:"The Millionaire Next Door: The Surprising Secrets of America's Wealthy",autor:"Thomas J. Stanley",year:"2010",price:"19",image:"/img/mill.png"},{name:"The Girl with the Dragon Tattoo",autor:"Stieg Larsson",year:"2008",price:"21",image:"/img/tattoo.png"},{name:"The Moomins and the Great Flood",autor:"Tove Jansson",year:"2018",price:"17",image:"/img/moomi.png"}],k=t(39),C=t.n(k),E=function(e){var a,t=e.filteredData,c=e.term,i=Object(j.c)((function(e){return e.data})),o=Object(j.b)();return Object(n.useEffect)((function(){i.length>0&&localStorage.setItem("books",JSON.stringify(i))})),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("books"));o(function(e){return{type:"UPDATE_DATA",payload:e}}(e||y))}),[o]),a=""===c?i.map((function(e){return Object(r.jsx)(N,{name:e.name,autor:e.autor,year:e.year,price:e.price,image:e.image},e.name)})):t.map((function(e){return Object(r.jsx)(N,{name:e.name,autor:e.autor,year:e.year,price:e.price,image:e.image},e.name)})),Object(r.jsx)("div",{className:C.a.catalog,children:a})},I=t(22),A=t.n(I),w=t.p+"static/media/pen2.6307a743.png",T=function(){return Object(r.jsxs)("div",{className:A.a.container,children:[Object(r.jsxs)("div",{className:A.a.request,children:[Object(r.jsx)("h2",{children:"New Book"}),Object(r.jsx)("p",{children:"Didn't find what you were looking for?"}),Object(r.jsx)("div",{className:A.a.button,children:Object(r.jsx)(s.b,{to:"/new",children:"Add a book"})})]}),Object(r.jsx)("div",{className:A.a.image,children:Object(r.jsx)("img",{src:w,alt:"Typewriter",height:"200px"})})]})},S=t(33),B=t.n(S),D=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),s=o[0],l=o[1];return Object(r.jsxs)("div",{className:B.a.container,children:[Object(r.jsx)(g,{term:s,filterData:function(e){c(e.data),l(e.term)},isMainPage:!0}),Object(r.jsxs)("div",{className:B.a.main,children:[Object(r.jsx)(E,{filteredData:t,term:s}),Object(r.jsx)(T,{})]})]})},V=t(14),M=t.n(V),F=function(e){var a=e.id,t=e.name,n=e.autor,c=e.year,i=e.price,o=e.image,s=Object(j.b)();return Object(r.jsxs)("div",{className:M.a.container,children:[Object(r.jsxs)("div",{className:M.a.book,children:[Object(r.jsx)("div",{className:M.a.imageBox,children:Object(r.jsx)("img",{className:M.a.image,src:"/bookstore"+o,alt:t})}),Object(r.jsxs)("div",{className:M.a.info,children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)("h4",{children:n}),Object(r.jsxs)("p",{children:["Release year: ",Object(r.jsx)("span",{children:c})]})]})]}),Object(r.jsxs)("div",{className:M.a.priceBlock,children:[Object(r.jsxs)("h5",{children:["$",i]}),Object(r.jsx)("span",{children:"1"})]}),Object(r.jsx)("div",{className:M.a.deleteBlock,children:Object(r.jsx)("button",{type:"button",className:M.a.button,onClick:function(e){var a=e.target.id;console.log(e.target.value);var t=Number(e.target.value);console.log(a),console.log(t),s(function(e){return{type:"DELETE_ITEM",payload:e}}(a)),s({type:"DECREMENT"}),s({type:"DECREASE_AMOUNT",payload:t})},id:a,value:i,children:"X"})})]})},L=t(40),R=t.n(L),H=function(){var e=Object(j.c)((function(e){return e.cartItems})).map((function(e,a){return Object(r.jsx)(F,{id:e.id,name:e.name,autor:e.autor,year:e.year,price:e.price,image:e.image},a.toString()+e.name)}));return Object(r.jsx)("div",{className:R.a.items,children:e})},P=t(19),J=t.n(P),q=function(){var e=Object(j.c)((function(e){return e.counter})),a=Object(j.c)((function(e){return e.cartItems})),t=Object(j.c)((function(e){return e.cartAmount}));return Object(r.jsxs)("div",{className:J.a.container,children:[Object(r.jsx)(g,{isCart:!0}),Object(r.jsxs)("div",{className:J.a.main,children:[Object(r.jsx)("h2",{className:J.a.title,children:"Your cart"}),a.length>0?Object(r.jsx)(H,{}):Object(r.jsx)("div",{children:"nothing has been added yet"}),Object(r.jsxs)("div",{className:J.a.total,style:{display:a.length>0?"flex":"none"},children:[Object(r.jsx)("h1",{children:"TOTAL"}),Object(r.jsxs)("p",{children:["Books: ",Object(r.jsx)("span",{children:e})]}),Object(r.jsxs)("p",{children:["Amount: ",Object(r.jsxs)("span",{className:J.a.amount,children:["$",t]})]})]})]})]})},U=t(41),W=t.n(U),G=function(e){var a=e.formErrors;return Object(r.jsx)("div",{className:W.a.error,children:Object.keys(a).map((function(e,t){return a[e].length>0?Object(r.jsxs)("p",{children:[e," ",a[e]]},t):""}))})},K=t(13),Y=t.n(K),z=function(){var e=Object(n.useState)({name:"",autor:"",year:"",price:"",image:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)({formErrors:{name:"",autor:"",year:"",price:"",image:""},nameValid:!1,autorValid:!1,yearValid:!1,priceValid:!1,imageValid:!1,isValid:!1}),o=Object(m.a)(i,2),s=o[0],l=o[1],d=Object(n.useState)("Select file..."),u=Object(m.a)(d,2),b=u[0],h=u[1],_=Object(n.useState)(""),g=Object(m.a)(_,2),p=g[0],x=g[1],O=function(e){var a;if(null===e.target.files){var r=e.target,n=r.name,i=r.value;(a=Object.assign({},t))[n]=i,v(n,i),c(a)}else if(console.log(e.target.value),e.target.files.length>0){var o=e.target.files[0];console.log(o);var s=new FileReader;s.onloadend=function(){y(s.error);var e=s.result;(a=Object.assign({},t)).image=e,x(e),c(a),h(o.name)},s.readAsDataURL(o),f(e.target.files),e.target.value=null}else f(e.target.files)},f=function(e){var a=s.formErrors,t=s.imageValid;t=e.length>0,a.image=t?"":" no file selected";var r=s;r.formErrors=a,r.imageValid=t,l(r),N()},v=function(e,a){var t=s.formErrors,r=s.nameValid,n=s.autorValid,c=s.yearValid,i=s.yearValid,o=s.imageValid,m=s.isValid;switch(e){case"name":r=a.length>0,t.name=r?"":" cannot be blank";break;case"autor":n=a.length>0,t.autor=n?"":" cannot be blank";break;case"year":c=a.length>0&&null!==a.match(/^\d+$/),t.year=c?"":" must contain only numbers";break;case"price":i=a.length>0&&null!==a.match(/^\d+$/),t.price=i?"":" must contain only numbers"}var j=s;j.formErrors=t,j.nameValid=r,j.autorValid=n,j.yearValid=c,j.priceValid=i,j.imageValid=o,j.isValid=m,l(j),N()};function N(){var e=s;e.isValid=s.nameValid&&s.autorValid&&s.yearValid&&s.priceValid&&s.imageValid,l(e)}var y=function(e){var a=s.formErrors,t=s.imageValid;t=!e,a.image=t?"":" file upload error";var r=Object.assign({},s);r.formErrors=a,r.imageValid=t,l(r)},k=Object(j.b)(),C=s.formErrors,E=s.isValid,I=Y.a.container,A=Y.a.item,w=Y.a.input,T=Y.a.submit,S=Y.a.errors,B=Y.a.fileInput,D=Y.a.fileField,V=Y.a.imageBox,M=Y.a.preview;return Object(r.jsxs)("form",{className:I,children:[Object(r.jsx)("div",{className:S,children:Object(r.jsx)(G,{formErrors:C})}),Object(r.jsxs)("label",{className:A,children:["Name of the book:",Object(r.jsx)("input",{className:w,style:{borderColor:0===C.name.length?"":"red"},type:"text",name:"name",id:"name",value:t.name,onChange:O})]}),Object(r.jsxs)("label",{className:A,children:["Autor:",Object(r.jsx)("input",{className:w,style:{borderColor:0===C.autor.length?"":"red"},type:"text",name:"autor",id:"autor",value:t.autor,onChange:O})]}),Object(r.jsxs)("label",{className:A,children:["Release year:",Object(r.jsx)("input",{className:w,style:{borderColor:0===C.year.length?"":"red"},type:"text",name:"year",id:"year",value:t.year,onChange:O})]}),Object(r.jsxs)("label",{className:A,children:["Price:",Object(r.jsx)("input",{className:w,style:{borderColor:0===C.price.length?"":"red"},type:"text",name:"price",id:"price",value:t.price,onChange:O})]}),Object(r.jsxs)("label",{className:A,children:["Add an image:",Object(r.jsx)("input",{className:B,style:{borderColor:0===C.image.length?"":"red"},type:"file",accept:"image/*",name:"image",id:"image",onChange:O}),Object(r.jsx)("div",{className:D,children:b})]}),""!==p?Object(r.jsx)("div",{className:V,children:Object(r.jsx)("img",{className:M,src:p,alt:b})}):"",Object(r.jsx)("input",{className:T,type:"button",disabled:!E,value:"Create a book",onClick:function(){k({type:"ADD_DATA",payload:t}),c({name:"",autor:"",year:"",price:"",image:""}),h("Select file..."),x("")}})]})},X=t(34),Q=t.n(X),Z=function(){return Object(r.jsxs)("div",{className:Q.a.container,children:[Object(r.jsx)(g,{isMainPage:!1}),Object(r.jsxs)("div",{className:Q.a.main,children:[Object(r.jsx)("h2",{children:"Enter the data"}),Object(r.jsx)(z,{})]})]})},$=t(17),ee=t.n($),ae=function(){return Object(r.jsxs)("div",{className:ee.a.header,children:[Object(r.jsx)("div",{className:ee.a.dash}),Object(r.jsx)(s.c,{to:"/",exact:!0,className:ee.a.link,children:Object(r.jsx)("h1",{className:ee.a.mainTitle,children:"BookStore"})}),Object(r.jsx)("h3",{className:ee.a.title,children:"Choose your favourite book"}),Object(r.jsx)("div",{className:ee.a.dash})]})},te=t(6),re=t.n(te),ne=function(){return Object(r.jsx)("div",{className:re.a.footer,children:Object(r.jsxs)("div",{className:re.a.container,children:[Object(r.jsxs)("p",{className:re.a.text,children:["Contact us",Object(r.jsx)("a",{className:re.a.email,href:"mailto:support@bookstore.com",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("span",{children:"support@bookstore.com"})})]}),Object(r.jsxs)("ul",{className:re.a.socialList,children:[Object(r.jsx)("li",{className:re.a.socialItem,children:Object(r.jsx)("a",{href:"https://twitter.com/jk_rowling",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("div",{className:"".concat(re.a.socialIcon," ").concat(re.a.tw)})})}),Object(r.jsx)("li",{className:re.a.socialItem,children:Object(r.jsx)("a",{href:"https://www.facebook.com/groups/491485350932591",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("div",{className:"".concat(re.a.socialIcon," ").concat(re.a.fb)})})}),Object(r.jsx)("li",{className:re.a.socialItem,children:Object(r.jsx)("a",{href:"https://www.instagram.com/books_obzor/",target:"_blank",rel:"noreferrer",children:Object(r.jsx)("div",{className:"".concat(re.a.socialIcon," ").concat(re.a.inst)})})})]}),Object(r.jsx)("p",{className:re.a.text,children:Object(r.jsx)("span",{children:"\xa9 2020 Bookstore"})})]})})},ce=t(42),ie=t.n(ce);var oe=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)("div",{className:ie.a.container,children:[Object(r.jsx)(ae,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(D,{})}),Object(r.jsx)(l.a,{path:"/cart",children:Object(r.jsx)(q,{})}),Object(r.jsx)(l.a,{path:"/new",children:Object(r.jsx)(Z,{})})]}),Object(r.jsx)(ne,{})]})})},se=t(28),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},me=t(11),je=t(26),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DATA":return[].concat(Object(je.a)(e),[a.payload]);case"UPDATE_DATA":return a.payload;default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ITEM":return[].concat(Object(je.a)(e),[a.payload]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==a.payload}));default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREASE_AMOUNT":return e+a.payload;case"DECREASE_AMOUNT":return e-a.payload;default:return e}},he=Object(me.c)({counter:le,data:de,cartItems:ue,cartAmount:be}),_e=Object(se.a)({reducer:he});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(j.a,{store:_e,children:Object(r.jsx)(oe,{})})}),document.getElementById("root"))}],[[53,1,2]]]);
//# sourceMappingURL=main.3501b026.chunk.js.map