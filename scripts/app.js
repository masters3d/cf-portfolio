'use strict';

var Article = {}; // article for methods to live on

function renderTemplate(){
  portfolioContent.forEach(function(dataObj){
    var $templateString = $('#handlebarsTemplate').html(); //what we're getting from HTML
    var compiled = Handlebars.compile($templateString); // returns function that can take data
    var html = compiled(dataObj); //HTML with everything filled in
    $('#portfolio').append(html); // Add it to the page
  })
}

Article.fetchData = function(){
  let path = '/data/portfolioContent.json';
  $.getJSON(path).then(success, failure);

  function success(data){
    console.log(data);
  }

  function failure(error){
    console.err(error);
  }
}

$(document).ready(function(){
  // portfolioContent.forEach(function(entryObject) {
  //   entries.push(new Entry(entryObject));
  // });
  //
  // entries.forEach(function(entry) {
  //   $('#portfolio').append(entry.toHtml());
  // });

  // renderTemplate();

});
