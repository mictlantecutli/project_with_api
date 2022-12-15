/*const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'*/

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw {
      name: 'servicesError',
      message: data
    };
  }
}


export default class ExternalServices {
  constructor() {
    //this.category = category;
    //this.path = `../json/${this.category}.json`

  }

  getData() {
    /*return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson).then((data) => data.Result);*/

    var newsAPIkey = "nrjs2TtoQ78Gp18Z8dfJ2T3hCPaztLnN";

    //Fetch news from NYT api

    var newsQueryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=astronomy&nasa&outerspace&api-key=" + newsAPIkey;
    return fetch(newsQueryUrl)
      .then(convertToJson).then((data) => data.response);

  }

  getDataImageDay() {

    var nasaAPIkey = "SQKoo6jP08hfkgHg362NN1LcC764IvyXXGEx5Swr";

    //Fetch news from NYT api

    var nasaQueryUrl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaAPIkey;
    //return fetch(nasaQueryUrl)
    //  .then(convertToJson).then((data) => data.response);


    return fetch(nasaQueryUrl)
      .then(function (response) {
        //console.log(response);
        return response.json()

      })
      .then(function (data) {
        return data
        console.log(data.date);
        
      })

  }

}