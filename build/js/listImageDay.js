import {
  renderListWithTemplate
} from "./utils.js";

export default class ListImageDay {
  constructor(dataSource, listElement) {
    //this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {

    const nasaData = await this.dataSource.getDataImageDay();


   
    console.log(nasaData.date);
    //console.log(nasaData.title)

    var image = nasaData.url;
    var imagecaption = nasaData.title;
    var imageExplanation = nasaData.explanation;

    const listEle = document.getElementById("day_photo");

    let title = document.createElement("h2")
    title.textContent = imagecaption;
    listEle.appendChild(title);

    let imageDay = document.createElement("img");
    imageDay.setAttribute("src", image); 
    listEle.appendChild(imageDay);

    let nasaExplanation = document.createElement("p")
    nasaExplanation.textContent = imageExplanation;
    listEle.appendChild(nasaExplanation);

    

    
    










  }

  //console.log(textList);



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