var fs = require('fs');

module.exports = function(){

  this.productList = function(filePath){

    var linesInFile = fs.readFileSync(filePath, "utf8");

    var rows = linesInFile.split('\n');
    //console.log(rows.length);

    var listOfProducts = [];
    
    rows.forEach(function(row){
        var columns = row.split(';');
        var currentItem = columns[2];
        var numberSold = columns[3];

    var salesObj = {
          itemName : columns[2],
          soldItems: Number(columns[3])
          category: columns[4]
          };
          listOfProducts.push(salesObj);
     });
        return listOfProducts;
 }

        this.groupItems = function(products) {
          var itemMap = {};

          products.forEach(function(products) {
            var currentItem = products.itemName;
            var numberSold = products.soldItem;

             if(itemMap[currentItem] === undefined){
          itemMap[currentItem] = 0;
        }

        itemMap[currentItem] = itemMap[currentItem] + Number(numberSold);

          });
          return itemMap;

        };

      //Think about creating a list of objects from the csv
         //Create a function that find the most popular product, put it in a module and write a unit test.
      this.mostPopularCat = function(itemMap){
           var mostPopularCategory = {};
           var max = 0;
           for(var prop in itemMap) {
             var value = itemMap[prop];
             if(itemMap[prop] > max) {
              max = itemMap[prop];
              mostPopularCategory = {
               name : prop,
               amt  : max
             }
           }
         }
         //console.log(itemMap);
         return mostPopularProduct;
     };

     this.leastPopularCat = function(itemMap){
           var leastPopularCategory = {};
           var min = 172;
           for(var prop in itemMap) {
             var value = itemMap[prop];
             if(itemMap[prop] < min) {
              min = itemMap[prop];
              leastPopularCategory = {
               name : prop,
               amt  : min
             }
           }
         }
         //console.log(itemMap);
         return leastPopularCategory;
    };
};
