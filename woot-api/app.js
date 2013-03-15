var jsdom = require("jsdom");

jsdom.env(
  "http://www.woot.com",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    var price = window.$('#todays-deal .price').text().trim(),
        deal = window.$('#todays-deal .fn').text().trim(),
        link = window.$('#todays-deal .wantone').attr('href');
        
    console.log("Today's Woot deal is ", deal, "! Just: ", price, " Find more here: ", link);
  }
);