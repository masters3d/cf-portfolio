'use strict';

function Entry(name,thumbnail,url,description){
  this.name = name;
  this.author = 'Alana Franklin';
  this.thumbnail = 'img/' + thumbnail;
  this.url = url;
  this.description = description;
}

$(document).ready(function(){
  console.log('hi');
});
