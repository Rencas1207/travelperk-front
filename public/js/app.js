let contador = 1;

$('.menu-bar').click(function () {
  if (contador == 1) {
    $('nav').animate({
      left: '0',
    });
    contador = 0;
  } else {
    contador = 1;
    $('nav').animate({
      left: '-100%',
    });
  }
});

$('.submenu').click(function () {
  $(this).children('ul').slideToggle();
});

$('ul').click(function (e) {
  e.stopPropagation();
});

$('.shopping-car').click(function () {
  $(this).modal({
    fadeDuration: 500,
    fadeDelay: 0.5,
  });
  return false;
});

$('.btn').click(function () {
  window.location.replace('user-dashboard.html');
});

$('.btn.return').click(function () {
  window.location.replace('index.html');
});
