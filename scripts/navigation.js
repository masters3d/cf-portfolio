'use strict';

$(document).ready(function(){
  activateNavigation();
});

function activateNavigation(){

  $('#hamburger').click(function(){
    $('header ul').toggle();
  })

  $('header').on('click', 'li', function(){
    $('section').hide();
    if ($(this).attr('data-content') === 'portfolio') {
      $('section#portfolio').show();
    }
    else if ($(this).attr('data-content') === 'about') {
      $('section#about').show();
    } else if ($(this).attr('data-content') === 'contact') {
      $('section#contact').show();
    }
  });
}
