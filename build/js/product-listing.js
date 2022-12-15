import ExternalServices from "./externalServices.js";
import ProductList from "./productList.js";
import { getParams, loadHeaderFooter } from "./utils.js";

/*loadHeaderFooter();

const category =getParams('category');

const dataSource = new ExternalServices();
console.log(dataSource);

const listEle = document.querySelector(".product-list");

const listItems = new ProductList(category, dataSource, listEle);

listItems.init();*/


/*  
for (var i = 0; i < newsData.response.docs.length; i++) {
  var newsUrl = newsData.response.docs[i].web_url;
  var newsTitle = newsData.response.docs[i].abstract;
  //Use tailwindcss group list: https://flowbite.com/docs/components/list-group/
  let latestNewsEl = $('<li>');
  latestNewsEl.addClass("block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white").append([i+1],". <a href='" + newsUrl + "' target='_blank'>" + newsTitle + "</a>");
  latestNewsEl.append($('<br>'));
  newsListEl.append(latestNewsEl);
}
});*/


loadHeaderFooter();

const dataSource = new ExternalServices();
//console.log(dataSource.getData());
//console.log(dataSource.getDataImageDay());


const listEle = document.getElementById("latestNews");


const listItems = new ProductList(dataSource, listEle);


listItems.init();
