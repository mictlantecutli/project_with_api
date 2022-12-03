import ExternalServices from "./externalServices";

export default class Admin{
  constructor(outputSelector){
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }

  async login(creds, next){
    try{
      this.token = await this.services.loginRequest(creds);
      next()
    }
    catch(err){
      alertMessage(err.message.message);
    }
  }


  ShowLogin(){
    this.mainElement.innerHTML = loginForm();

    document.querySelector('#loginButton').addEventListener('click', (e) =>{
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;


    })

  }





}


function loginForm(){
  return `<fieldset class="login-form">
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

</fieldset>`;
}


