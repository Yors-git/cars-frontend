(this["webpackJsonpcars-frontend"]=this["webpackJsonpcars-frontend"]||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(21),i=n.n(s),o=(n(28),n(5)),j=n.n(o),u=n(8),d=n(7),b=n(10),l=n.n(b),h=(n(20),n(48),n(22)),f=n(3);function p(e){var t=e.carsPropsList,n=Object(r.useState)(t),a=Object(d.a)(n,2),s=a[0],i=a[1],o=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={inService:!t.inService,personInCharge:"Jorge",estimateDate:"03/03/2021"},c={method:"patch",url:"http://carsback-env.eba-faqp7dvt.us-east-2.elasticbeanstalk.com/".concat(t.id),headers:{"Content-Type":"application/json"},data:n},e.next=4,l()(c).then((function(e){var n=Object(h.a)(s);n.find((function(e){return e===t})).inService=e.data.car.inService,i(n)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.map((function(e){return Object(c.jsxs)(f.a,{className:"car ".concat(e.inService?"changeBack":""),onClick:function(){return o(e)},children:[Object(c.jsx)(f.a.Img,{variant:"top",src:e.image}),Object(c.jsxs)(f.a.Body,{children:[Object(c.jsxs)(f.a.Title,{children:[Object(c.jsx)("strong",{children:"ID:"})," ",e.id]}),Object(c.jsxs)(f.a.Text,{children:[Object(c.jsx)("strong",{children:"Description:"})," ",e.description]}),Object(c.jsxs)(f.a.Text,{children:[Object(c.jsx)("strong",{children:"Make:"})," ",e.make]}),Object(c.jsxs)(f.a.Text,{children:[Object(c.jsx)("strong",{children:"Model:"})," ",e.model]}),Object(c.jsxs)(f.a.Text,{children:[Object(c.jsx)("strong",{children:"Scheduled Date:"})," ",e.scheduledDate]}),Object(c.jsxs)(f.a.Text,{children:[Object(c.jsx)("strong",{children:"Kilometers:"})," ",e.kilometers]})]})]},e.id)}))}var O=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(),i=Object(d.a)(s,2),o=i[0],b=i[1];Object(r.useEffect)((function(){h()}),[]);var h=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://carsback-env.eba-faqp7dvt.us-east-2.elasticbeanstalk.com/");case 2:t=e.sent,b(t.data.cars),a(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(c.jsx)("div",{children:"Loading..."}):Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(p,{carsPropsList:o})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[49,1,2]]]);
//# sourceMappingURL=main.f4c5f770.chunk.js.map