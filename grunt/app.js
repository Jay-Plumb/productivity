// This will be the start of the app
var $ = require('jquery');
var template = require("./templates/helloWorld.hbs");
var template2 = require("./templates/byeWorld.hbs");
//document.body.innerHTML = template({ name: "jssn" });
 $("body").append(template({ name: "jason" }));
 $("body").append(template2({ name: "jay" }));

$('body').css('background','gray');