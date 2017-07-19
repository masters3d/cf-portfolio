'use strict';

var PortItem = {}; // PortItem for methods to live on

PortItem.fetchData = function(){
  if (localStorage.portfolioContent){
    PortItem.loadData(JSON.parse(localStorage.getItem('portfolioContent')));
  } else {
    let path = '/data/portfolioContent.json';
    $.getJSON(path).then(success, failure);
  }

  function success(data){
    PortItem.loadData(data);
    localStorage.setItem('portfolioContent', JSON.stringify(data));
  }

  function failure(error){
    console.error(error);
  }
}


PortItem.loadData = function(data){
  data.forEach(function(dataObj){
    var $templateString = $('#handlebarsTemplate').html(); //what we're getting from HTML
    var compiled = Handlebars.compile($templateString); // returns function that can take data
    var html = compiled(dataObj); //HTML with everything filled in
    $('#portfolio').append(html); // Add it to the page
  })
}
