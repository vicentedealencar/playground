var jsdom = require("jsdom");

jsdom.env(
  "http://www.woot.com",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    var price = window.$('#todays-deal .price').text().trim(),
        deal = window.$('#todays-deal .fn').text().trim(),
        link = window.$('#todays-deal .wantone').attr('href'),
        photo = window.$('#todays-deal .photo').attr('src');
        
    console.log("Today's Woot deal is: ", deal);
    console.log("price: ", price);
    console.log("link: ", link);
    console.log("photo: ", photo);
  }
);