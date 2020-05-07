(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),c=n.n(o),r=(n(16),n(17),n(10)),i=n(1),s=n(3),u=n(4),d=n(6),m=n(5),h=n(9),f=n.n(h),p=n(2),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={currentValue:"",isEditing:!1},e.textInput=l.a.createRef(),e.startEdit=function(){e.setState({isEditing:!0,currentValue:e.props.text},(function(){e.textInput.current.focus()}))},e.handleChange=function(t){e.setState({currentValue:t.target.value})},e.handleKeyPress=function(t,n){"Enter"===t.key?(e.props.onTextChanged(n,e.state.currentValue),e.setState({currentValue:"",isEditing:!1})):"Escape"===t.key&&e.setState({currentValue:"",isEditing:!1})},e.blurHandler=function(t){e.props.onTextChanged(t,e.state.currentValue),e.setState({currentValue:"",isEditing:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isEditing,a=t.currentValue,o=this.props,c=o.id,r=o.done,i=o.text,s=o.toggleItem,u=o.onDelete;return l.a.createElement("li",{onDoubleClick:this.startEdit,className:p({completed:r,editing:n})},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(c),checked:r,onChange:function(){return s(c)}}),l.a.createElement("label",{htmlFor:"todo-".concat(c)},i),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return u(c)}})),n&&l.a.createElement("input",{type:"text",className:"edit",value:a,onChange:this.handleChange,onKeyUp:function(t){return e.handleKeyPress(t,c)},onBlur:function(){return e.blurHandler(c)},ref:this.textInput}))}}]),n}(l.a.Component),E=function(e){var t=e.todos,n=e.toggleItem,a=e.onDelete,o=e.onTextChanged;return l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(g,{key:e.id,id:e.id,text:e.text,done:e.done,toggleItem:n,onDelete:a,onTextChanged:o})})))},v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={todos:[],newItemText:"",checkedAll:!1,sortBy:"",filterSelected:"all"},e.checkAll=function(t){var n=t.target;e.setState((function(e){var t=e.todos,a=e.checkedAll;return{todos:t.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:n.checked})})),checkedAll:!a}}))},e.handleChange=function(t){var n=t.target;e.setState({newItemText:n.value})},e.handleDelete=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleItem=function(t){e.setState((function(e){var n=e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e})),a=n.every((function(e){return!0===e.done}));return{todos:n,checkedAll:a}}))},e.handleAddItem=function(t){t.preventDefault(),e.addItem(e.state.newItemText)},e.changeText=function(t,n){e.setState((function(a){var l=a.todos;return{todos:l.map((function(a){return a.id===t&&""!==n?Object(i.a)(Object(i.a)({},a),{},{text:n}):(a.id===t&&""===n&&e.setState((function(){return{todos:l.filter((function(e){return e.id!==t}))}})),a)}))}}))},e.todosFilter=function(e,t){switch(t){case"completed":return e.filter((function(e){return e.done}));case"active":return e.filter((function(e){return!e.done}));default:return e}},e.clickHandler=function(t){var n=t.target.name,a=t.target.name;e.setState({sortBy:n,filterSelected:a})},e.clearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.done})),checkedAll:!1}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){if(null!==localStorage.getItem("todos")){var e=JSON.parse(localStorage.getItem("todos"));this.setState(e)}}},{key:"componentDidUpdate",value:function(){var e=this.state.todos;localStorage.setItem("todos",JSON.stringify({todos:e}))}},{key:"addItem",value:function(e){""!==e.trim()&&this.setState((function(t){var n=t.todos,a={id:f()(),done:!1,text:e};return{todos:[].concat(Object(r.a)(n),[a]),newItemText:"",checkedAll:!1}}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.newItemText,a=e.checkedAll,o=e.sortBy,c=e.filterSelected,r=t.filter((function(e){return!e.done}));return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.handleAddItem},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:n,onChange:this.handleChange}))),l.a.createElement("section",{className:"main"},t.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"toggle-all",checked:a,className:"toggle-all",onChange:this.checkAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")):null,l.a.createElement(E,{todos:this.todosFilter(t,o),onDelete:this.handleDelete,toggleItem:this.toggleItem,onTextChanged:this.changeText})),t.length?l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"".concat(r.length," items left")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{onClick:this.clickHandler,href:"#/",className:p({selected:"all"===c}),name:"all"},"All")),l.a.createElement("li",null,l.a.createElement("a",{className:p({selected:"active"===c}),onClick:this.clickHandler,href:"#/active",name:"active"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{className:p({selected:"completed"===c}),onClick:this.clickHandler,href:"#/completed",name:"completed"},"Completed"))),t.some((function(e){return!0===e.done}))&&l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearCompleted},"Clear completed")):null)}}]),n}(l.a.Component);c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9ef68b3f.chunk.js.map