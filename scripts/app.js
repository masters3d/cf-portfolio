'use strict';

// var entries = [];

$(document).ready(function(){
  renderTemplate();
});

function renderTemplate(){
  portfolioContent.forEach(function(dataObj){
    var $templateString = $('#handlebarsTemplate').html(); //what we're getting from HTML
    var compiled = Handlebars.compile($templateString); // returns function that can take data
    var html = compiled(dataObj); //HTML with everything filled in
    $('#portfolio').append(html); // Add it to the page
  })
}
