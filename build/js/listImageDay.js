var r=(c,e,a)=>new Promise((s,l)=>{var i=t=>{try{n(a.next(t))}catch(m){l(m)}},o=t=>{try{n(a.throw(t))}catch(m){l(m)}},n=t=>t.done?s(t.value):Promise.resolve(t.value).then(i,o);n((a=a.apply(c,e)).next())});import"./utils.js";export default class d{constructor(e,a){this.dataSource=e,this.listElement=a}init(){return r(this,null,function*(){const e=yield this.dataSource.getDataImageDay();console.log(e.date);var a=e.url,s=e.title,l=e.explanation;const i=document.getElementById("day_photo");let o=document.createElement("h2");o.textContent=s,i.appendChild(o);let n=document.createElement("img");n.setAttribute("src",a),i.appendChild(n);let t=document.createElement("p");t.textContent=l,i.appendChild(t)})}}
