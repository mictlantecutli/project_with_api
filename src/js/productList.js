import { renderListWithTemplate } from "./utils.js";

export default class ProductList {
  constructor(dataSource, listElement) {
    //this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const newsData = await this.dataSource.getData();
    console.log(newsData);



    //lenght_news = newsData.response.docs.length;
    //console.log(lenght_news)

    /*for (var i = 0; i < newsData.response.docs.length; i++) {
      var newsUrl = newsData.response.docs[i].web_url;
      var newsTitle = newsData.response.docs[i].abstract;
    }*/



    //let short = [];
    //short.push(list[0],list[1],list[2],list[3]);
    //this.renderList(this.listElement);
    //document.querySelector('.title').innerHTML = this.category;

   
  }

  renderList(dataSource) {

    for (var i = 0; i < dataSource.response.docs.length; i++) {
      var newsUrl = dataSource.response.docs[i].web_url;
      var newsTitle = dataSource.response.docs[i].abstract;
      //Use tailwindcss group list: https://flowbite.com/docs/components/list-group/
      //let latestNewsEl = $('<li>');
      //latestNewsEl.addClass("block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white").append([i+1],". <a href='" + newsUrl + "' target='_blank'>" + newsTitle + "</a>");
      //latestNewsEl.append($('<br>'));
      //newsListEl.append(latestNewsEl);
  }
    
    
    
    /*this.listElement.innerHTML = '';
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );*/
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Images.PrimaryMedium;
    template.querySelector("img").alt += product.Name;
    template.querySelector(".card__brand").textContent = product.Brand.Name;
    template.querySelector(".card__name").textContent =
      product.NameWithoutBrand;
    template.querySelector(".product-card__price").textContent +=
      product.FinalPrice;
    return template;
  }
}
