import ExternalServices from "./externalServices.js";
import ProductList from "./productList.js";
import { getParams, loadHeaderFooter } from "./utils.js";

/*import {
  loadHeaderFooter
} from "./utils.js";

loadHeaderFooter();*/
loadHeaderFooter();

const dataSource = new ExternalServices();

const listEle = document.querySelector(".mission");

const listItems = new ProductList(dataSource, listEle);

listItems.news_sample();

//target item in first square
let change = document.querySelector("#icon1");

// add event listener to trigger animation
change.addEventListener("mouseover", function () {
  change.style.animation = "morphCircle 2s linear infinite";
});

// add event listenr to stop
change.addEventListener("mouseout", function () {
  change.style.animation = "";
});

let change2 = document.querySelector("#icon2");

// add event listener to trigger animation
change2.addEventListener("mouseover", function () {
  change2.style.animation = "morphCircle 2s linear infinite";
});

// add event listenr to stop
change2.addEventListener("mouseout", function () {
  change2.style.animation = "";
});
