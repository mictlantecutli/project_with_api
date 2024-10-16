var a=(n,l,e)=>new Promise((s,r)=>{var c=t=>{try{o(e.next(t))}catch(i){r(i)}},u=t=>{try{o(e.throw(t))}catch(i){r(i)}},o=t=>t.done?s(t.value):Promise.resolve(t.value).then(c,u);o((e=e.apply(n,l)).next())});import d from"./externalServices.js";export default class p{constructor(l){this.mainElement=document.querySelector(l),this.token=null,this.services=new d}login(l,e){return a(this,null,function*(){try{this.token=yield this.services.loginRequest(l),e()}catch(s){alertMessage(s.message.message)}})}ShowLogin(){this.mainElement.innerHTML=m(),document.querySelector("#loginButton").addEventListener("click",l=>{const e=document.querySelector("#email").value,s=document.querySelector("#password").value})}}function m(){return`<fieldset class="login-form">
  <legend>Login</legend>
  <p>
    <label for="email">Email</label>
    <input type="text" placeholder="email" id="email" value="user@email.com"/>
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" placeholder="password" id="password" />
  </p>
  <button type="submit" id="loginButton">Login</button>

</fieldset>`}
