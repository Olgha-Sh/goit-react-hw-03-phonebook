(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports={listBtn:"ContactItem_listBtn__hPWgc",contactItem:"ContactItem_contactItem__3-0lS",contact:"ContactItem_contact__2ZS4o"}},function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2SPtk",formBtn:"ContactForm_formBtn__f2lt_"}},function(t,e,n){t.exports={contactItem:"ContactList_contactItem__bp4Gx",contactList:"ContactList_contactList__3SGms"}},function(t,e,n){t.exports={title:"Filter_title__p4F2B",filterInput:"Filter_filterInput__32wxx"}},,,function(t,e,n){t.exports={title:"App_title__3RKXH"}},,,function(t,e,n){t.exports=n(24)},,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=n(16),i=n(2),s=n(3),m=n(6),u=n(4),f=n(7),p=n(1),h=n.n(p),d=n(14),b=n.n(d),_=n(15),C=n(5),v=n(9),E=n.n(v),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(C.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(_.a)({},n.state)),n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.contactForm},c.a.createElement("label",{htmlFor:h()()},"Name",c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange})),c.a.createElement("label",{htmlFor:h()()},"Number",c.a.createElement("input",{type:"number",placeholder:"Enter phone number",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:E.a.formBtn},"Add contact"))}}]),e}(a.Component),y=n(8),S=n.n(y),F=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("div",{className:S.a.contactItem},c.a.createElement("p",{className:S.a.contact},e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:S.a.listBtn},"Delete"))},O=n(10),j=n.n(O),I=function(t){var e=t.items,n=t.onDeleteContact;return c.a.createElement("ul",{className:j.a.contactList},e.map((function(t){return c.a.createElement("li",{key:t.id,className:j.a.contactItem},c.a.createElement(F,{name:t.name,number:t.number,onDeleteContact:function(){return n(t.id)}}))})))};I.defaultProps={items:[]};var N=I,x=n(11),k=n.n(x),w=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:k.a.title},"Find contacts by name..."),c.a.createElement("input",{className:k.a.filterInput,type:"text",placeholder:"Type to filter...",value:e,onChange:n}))},L=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.filterContacts=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){var e=t.name,a=t.number,c=n.state.contacts,o={name:e,number:a,id:h()()};if(e&&a){if(c.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return void alert("".concat(e," is already in your contacts"));n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[o])}}))}else alert("One of the fields is incorrect!")},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.filterContacts(e,n);return c.a.createElement("div",null,c.a.createElement("h2",{className:b.a.title},"Phonebook"),c.a.createElement(g,{onAddContact:this.addContact}),c.a.createElement(w,{value:n,onChangeFilter:this.changeFilter}),c.a.createElement(N,{items:a,onDeleteContact:this.deleteContact,id:h()()}))}}]),e}(a.Component);r.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f2438e21.chunk.js.map