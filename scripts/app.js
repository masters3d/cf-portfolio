'use strict';

var entries = [];

$(document).ready(function(){
  $('#hamburger').click(function(){
    $('header ul').toggle();
  })

  portfolioContent.forEach(function(entryObject) {
    entries.push(new Entry(entryObject));
  });

  entries.forEach(function(entry) {
    $('#portfolio').append(entry.toHtml());
  });

});

function Entry(rawData){
  this.name = rawData.name;
  this.author = 'Alana Franklin';
  this.thumbnailUrl = rawData.thumbnailUrl;
  this.url = rawData.url;
  this.description = rawData.description;
}

Entry.prototype.toHtml = function() {
  var $newEntry = $('article.template').clone();
  $newEntry.removeClass('template');

  if (!this.publishedOn) $newEntry.addClass('draft');

  $newEntry.find('h3').html('<a href="" target="_BLANK">' + this.name + '</a>');
  $newEntry.find('h3 a').attr('alt', this.name);
  $newEntry.find('p').text(this.description);
  $newEntry.find('a').attr('href', this.url);
  $newEntry.find('a').attr('alt', this.name);
  $newEntry.find('.thumbnailLink').html('<img src="' + this.url + '" alt="' + this.name +'"/>');
  $newEntry.find('img').attr('alt', this.name);
  $newEntry.find('img').attr('src', this.thumbnailUrl);

  return $newEntry;
};
