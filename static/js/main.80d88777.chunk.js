(this["webpackJsonpjava-friends2"]=this["webpackJsonpjava-friends2"]||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var i=n(0),r=n.n(i),t=n(7),o=n.n(t),m=(n(13),n(1)),l=n(2),s=n(4),c=n(3),d=n(5),u=(n(14),[{id:1,name:"Mats",username:"mats",position:"Java developer",email:"mats@gmail.com"},{id:2,name:"Sargon",username:"sargon",position:"Java developer",email:"sargon@gmail.com"},{id:3,name:"Marios",username:"marios",position:"Java developer",email:"marios@gmail.com"},{id:4,name:"Roland",username:"roland",position:"Java developer",email:"roland@gmail.com"},{id:5,name:"Eva",username:"eva",position:"Java developer",email:"eva@gmail.com"},{id:6,name:"Mussa",username:"mmussa",position:"Java developer",email:"mussa@gmail.com"},{id:7,name:"Sahar",username:"sahar",position:"Java developer",email:"sahar@gmail.com"},{id:8,name:"Medhanie",username:"meda",position:"Java developer",email:"medasele273@gmail.com"},{id:9,name:"Siawash",username:"siawash",position:"Java developer",email:"siawash@gmail.com"},{id:10,name:"Biniam",username:"biniam",position:"Java developer",email:"biniam@gmail.com"},{id:11,name:"Meskerem",username:"meskerem",position:"Java developer",email:"meskerem@gmail.com"},{id:12,name:"Sara",username:"sara",position:"Fornt-end developer",email:"sara@gmail.com"},{id:13,name:"Solomon",username:"sele",position:"Fullstack developer",email:"sele@gmail.com"},{id:14,name:"Nahom",username:"nahom",position:"Game App developer",email:"namhom@gmail.com"},{id:15,name:"Javad",username:"javad",position:"Food App developer",email:"javad@gmail.com"},{id:17,name:"Rabison",username:"rabi",position:"C# developer",email:"rabi@gmail.com"},{id:18,name:"Chaie",username:"chaie",position:"Web app developer",email:"chaie@gmail.com"},{id:19,name:"Selam",username:"selam",position:" Fullstack developer",email:"selam@gmail.com"},{id:20,name:"Shyla",username:"shyla",position:"Fullstack developer",email:"shyla@gmail.com"}]),p=function(e){var a=e.id,n=e.username,i=e.name,t=e.position,o=e.email;return r.a.createElement("div",{className:"bg-light-purple br4 ba bw2 b-dark pa2 ma3 w5 grow dib shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=100x100"),alt:"robotes"}),r.a.createElement("div",null,r.a.createElement("h3",null,i),r.a.createElement("p",null,n),r.a.createElement("h4",null,t),r.a.createElement("p",null,o)))},h=function(e){var a=e.friends;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(p,{key:n,id:a[n].id,name:a[n].name,username:a[n].username,position:a[n].position,email:a[n].email})})))},v=function(e){var a=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ma2 ba bw1 b--dark-red bg-light-green br3",type:"search",placeholder:"Search Developer",onChange:a}))},g=function(e){function a(e){var n;return Object(m.a)(this,a),(n=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={hasError:!1},n}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOOOpps, there is Error"):this.props.children}}]),a}(i.Component),b=function(e){function a(e){var n;return Object(m.a)(this,a),(n=Object(s.a)(this,Object(c.a)(a).call(this,e))).onSearchChange=function(e){n.setState({searchField:e.target.value})},n.state={friends:u,searchField:""},n}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.friends,n=e.searchField,i=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===a.length?r.a.createElement("h1",null,"LODDING......"):r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"sticky"},r.a.createElement("img",{className:"pa2 ma2",src:"https://fontmeme.com/permalink/191124/7a35abdbc690f107238583c6bd02d75c.png",alt:"Header"}),r.a.createElement(v,{onSearchChange:this.onSearchChange})),r.a.createElement(g,null,r.a.createElement(h,{friends:i})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.80d88777.chunk.js.map