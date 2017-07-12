'use strict';


$(document).ready(function(){
  $('#hamburger').click(function(){
    $('header ul').toggle();
  })
});


function Entry(name, thumbnailUrl, url, description){
  this.name = name;
  this.author = 'Alana Franklin';
  this.thumbnailUrl = thumbnailUrl;
  this.url = url;
  this.description = description;
}
