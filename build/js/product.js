import o from"./externalServices.js";import r from"./productDetails.js";import{getParams as e}from"./utils.js";const t=new o;console.log(t.getData());const s=e("product"),c=new r(s,t);c.init();
