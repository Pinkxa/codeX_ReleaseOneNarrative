var fs = require('fs');
var Products = require('./most_popular_category')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupItems(itemArr);

var mostPop = products.mostPopularCat(group);

  console.log(mostPop);

  
var fs = require('fs');
var Products = require('./least_popular_category')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupItems(itemArr);

var leastPop = products.leastPopularCat(group);

  console.log(leastPop);
