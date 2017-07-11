'use strict';


$(document).ready(function(){
  $('#hamburger').click(function(){
    $('nav ul').toggle();
  })
});


function Entry(name,thumbnail,url,description){
  this.name = name;
  this.author = 'Alana Franklin';
  this.thumbnail = 'img/' + thumbnail;
  this.url = url;
  this.description = description;
}
