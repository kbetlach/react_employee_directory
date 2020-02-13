(this.webpackJsonppracticeapp=this.webpackJsonppracticeapp||[]).push([[0],{1:function(e,a,t){},11:function(e,a,t){e.exports=t(16)},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),m=t.n(l),o=t(5),i=t(6),s=t(7),c=t(9),p=t(8),u=t(10);t(1);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var h=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var N=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",{className:a},e.children)};var E=function(){return r.a.createElement("header",{className:"header text-center"},r.a.createElement("h1",null,"Employee Directory"))};var f=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Filter")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group",style:{padding:"22px"}},r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,searchtype:e.searchtype,name:"search",type:"text",className:"form-control",placeholder:"First or Last Name, Birth Date, Location",id:"search"}),r.a.createElement("br",null))))},y=t(2);var g=function(e){console.log(e);var a=y.filter((function(a){return a.firstName.toLowerCase().includes(e.search.toLowerCase())||a.lastName.toLowerCase().includes(e.search.toLowerCase())||a.birthDate.toLowerCase().includes(e.search.toLowerCase())||a.location.toLowerCase().includes(e.search.toLowerCase())}));return function(e,a){a.sort((function(a,t){try{if("firstName"===e.sortKey)var n=a.firstName.toLowerCase(),r=t.firstName.toLowerCase();else if("lastName"===e.sortKey)n=a.lastName.toLowerCase(),r=t.lastName.toLowerCase();else if("birthDate"===e.sortKey)n=a.birthDate.toLowerCase(),r=t.birthDate.toLowerCase();else if("location"===e.sortKey)n=a.location.toLowerCase(),r=t.location.toLowerCase();return 1===e.sortType?n<r?-1:n>r?1:0:n<r?1:n>r?-1:0}catch(l){}}))}(e,a),r.a.createElement("div",{className:"text-center"},a.length>0?r.a.createElement("ul",{className:"list-group"},r.a.createElement("h2",null,"Employee List"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-1"}),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("b",null,r.a.createElement("u",null,"Name"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("b",null,r.a.createElement("u",null,"Email"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("b",null,r.a.createElement("u",null,"Phone Number"))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("b",null,r.a.createElement("u",null,"Date of Birth"))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("b",null,r.a.createElement("u",null,"Location")))),a.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-1"},r.a.createElement("img",{src:e.img,alt:e.firstName})),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("b",null,e.firstName)," ",r.a.createElement("b",null,e.lastName)),r.a.createElement("div",{className:"col-md-2"},e.email),r.a.createElement("div",{className:"col-md-2"},e.phone),r.a.createElement("div",{className:"col-md-2"},e.birthDate),r.a.createElement("div",{className:"col-md-3"},e.location)))}))):r.a.createElement("h2",null,"No Employees Found"))};var b=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Order")),r.a.createElement("form",null,r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"1",name:"sortType",value:"1"}),r.a.createElement("label",{for:"ascending"}," Ascending"),r.a.createElement("br",null),r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"-1",name:"sortType",value:"-1"}),r.a.createElement("label",{for:"descending"}," Descending"))))};var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,"Sort By")),r.a.createElement("form",null,r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"firstName",name:"sortKey",value:"firstName"}),r.a.createElement("label",{for:"firstName"},"First Name"),r.a.createElement("br",null),r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"lastName",name:"sortKey",value:"lastName"}),r.a.createElement("label",{for:"lastName"},"Last Name"),r.a.createElement("br",null),r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"birthDate",name:"sortKey",value:"birthDate"}),r.a.createElement("label",{for:"birthDate"},"Date of Birth"),r.a.createElement("br",null),r.a.createElement("input",{onChange:e.handleInputChange,type:"radio",id:"location",name:"sortKey",value:"location"}),r.a.createElement("label",{for:"location"},"Location"),r.a.createElement("br",null))))},C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={result:[],search:"",sortKey:"firstName",sortType:1},t.searchEmployee=function(){var e=t.state.search.trim(),a=y.filter((function(a){return a.firstName===e}));t.setState({result:a})},t.handleInputChange=function(e){var a=e.target.value,n=e.target.name;t.setState(Object(o.a)({},n,a))},t.handleFormSubmit=function(e){e.preventDefault(),t.searchEmployee()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployee()}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(E,null),r.a.createElement("br",null),r.a.createElement(h,null,r.a.createElement(N,{size:"md-6"},r.a.createElement(f,{searchtype:"Employee",value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})),r.a.createElement(N,{size:"md-3"},r.a.createElement(v,{handleInputChange:this.handleInputChange})),r.a.createElement(N,{size:"md-3"},r.a.createElement(b,{handleInputChange:this.handleInputChange}))),r.a.createElement(h,null,r.a.createElement(N,{size:"md-12"},r.a.createElement("hr",null),r.a.createElement(g,{search:this.state.search,sortType:parseInt(this.state.sortType),sortKey:this.state.sortKey}))))}}]),a}(n.Component);var D=function(){return r.a.createElement(C,null)};m.a.render(r.a.createElement(D,null),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":1,"img":"https://randomuser.me/api/portraits/med/men/1.jpg","firstName":"Andrew","lastName":"Kolander","email":"andrew@company.com","phone":"555-000-1111","birthDate":"May 22, 1989","location":"Saint Paul, MN"},{"id":2,"img":"https://randomuser.me/api/portraits/med/women/1.jpg","firstName":"Ashley","lastName":"Bliskowski","email":"ashley@company.com","phone":"555-000-2222","birthDate":"February 27, 1989","location":"Los Angeles, CA"},{"id":3,"img":"https://randomuser.me/api/portraits/med/men/2.jpg","firstName":"John","lastName":"Hannasch","email":"john@company.com","phone":"555-000-3333","birthDate":"April 4, 1991","location":"Minneapolis, MN"},{"id":4,"img":"https://randomuser.me/api/portraits/med/men/3.jpg","firstName":"Lukas","lastName":"Forseth","email":"lukas@company.com","phone":"555-000-4444","birthDate":"September 9, 1988","location":"Minneapolis, MN"},{"id":5,"img":"https://randomuser.me/api/portraits/med/men/4.jpg","firstName":"Cameron","lastName":"Boydston","email":"cameron@company.com","phone":"555-000-5555","birthDate":"November 11, 1987","location":"Roseville, MN"},{"id":6,"img":"https://randomuser.me/api/portraits/med/men/5.jpg","firstName":"Joe","lastName":"Kell","email":"joe@company.com","phone":"555-000-6666","birthDate":"June 9, 1994","location":"New Hope, MN"},{"id":7,"img":"https://randomuser.me/api/portraits/med/men/6.jpg","firstName":"Dan","lastName":"Marshall","email":"dan@company.com","phone":"555-000-7777","birthDate":"May 3, 1989","location":"Minneapolis, MN"},{"id":8,"img":"https://randomuser.me/api/portraits/med/men/7.jpg","firstName":"Jason","lastName":"Franke","email":"jason@company.com","phone":"555-000-8888","birthDate":"December 28, 1988","location":"Mankato, MN"},{"id":9,"img":"https://randomuser.me/api/portraits/med/men/8.jpg","firstName":"Nolan","lastName":"Fry","email":"nolan@company.com","phone":"555-000-9999","birthDate":"September 18, 1990","location":"Mankato, MN"},{"id":10,"img":"https://randomuser.me/api/portraits/med/men/9.jpg","firstName":"AJ","lastName":"Weydt","email":"aj@company.com","phone":"555-111-1111","birthDate":"July 12, 1989","location":"Minneapolis, MN"},{"id":11,"img":"https://randomuser.me/api/portraits/med/women/2.jpg","firstName":"Kelly","lastName":"Hofmeister","email":"kelly@company.com","phone":"555-111-2222","birthDate":"January 16, 1989","location":"Saint Paul, MN"},{"id":12,"img":"https://randomuser.me/api/portraits/med/men/10.jpg","firstName":"Spencer","lastName":"Suchoski","email":"spencer@company.com","phone":"555-111-3333","birthDate":"May 5, 1991","location":"Saint Paul, MN"},{"id":13,"img":"https://randomuser.me/api/portraits/med/men/11.jpg","firstName":"Harrison","lastName":"Gabe","email":"harrison@company.com","phone":"555-111-4444","birthDate":"March 4, 1990","location":"Spencer, IA"},{"id":14,"img":"https://randomuser.me/api/portraits/med/men/12.jpg","firstName":"Erik","lastName":"Burgess","email":"erik@company.com","phone":"555-111-5555","birthDate":"April 10, 1990","location":"Madison, WI"},{"id":15,"img":"https://randomuser.me/api/portraits/med/men/13.jpg","firstName":"Jake","lastName":"Bohrod","email":"jake@company.com","phone":"555-111-6666","birthDate":"October 5, 1989","location":"Los Angeles, CA"}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.6da70cf6.chunk.js.map