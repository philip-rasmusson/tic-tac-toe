(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(9),n(2)),o=n(0),u=function(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},j=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(Array(9).fill(null)),i=Object(s.a)(a,2),j=i[0],l=i[1],b=function(e){return Object(o.jsx)(u,{value:j[e],onClick:function(){return function(e){var t=j.slice();d(j)||j[e]||(t[e]=n?"X":"O",r(!n),l(t))}(e)}})};function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(s.a)(t[n],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"status",children:function(){var e,t=d(j);return e=t?"Winner: "+t:"Next player: "+(n?"X":"O"),e}()}),Object(o.jsxs)("div",{className:"board-row",children:[b(0),b(1),b(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[b(3),b(4),b(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[b(6),b(7),b(8)]})]})},l=function(){return Object(o.jsx)("div",{className:"game-wrapper",children:Object(o.jsx)(j,{})})},b=(n(11),function(){return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)(l,{})})}),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.22bd0da1.chunk.js.map