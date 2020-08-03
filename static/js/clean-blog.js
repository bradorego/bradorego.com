/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2014 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

Element.prototype.hasClass = function (name) {
  var classes = this.className.split(" "),
    hasClass = false;
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === name) {
      return true;
    }
  }
  return false;
};
Element.prototype.removeClass = function (name) {
  if (this.hasClass(name)) {
    this.className = this.className.replace(name, '');
    return true;
  } else {
    return false;
  }
};
Element.prototype.addClass = function (name) {
  if (!this.hasClass(name)) {
    this.className += ' ' + name;
    return true;
  } else {
    return false;
  }
};
Element.prototype.toggleClass = function (name) {
  if (this.hasClass(name)) {
    this.removeClass(name);
  } else {
    this.addClass(name);
  }
};
document.addEventListener('DOMContentLoaded', function () {
  let $scrollUp = document.getElementById('scrollUp');
    $body = document.querySelector('body'),
    $dmToggle = document.getElementById('darkmode-toggle');
  if (JSON.parse(window.localStorage.getItem('bjo-dark-mode'))) {
    $body.addClass('dark-mode');
    $dmToggle.checked = true;
  } /// set the toggle to whatever it was last

  AOS.init({
    once: true,
    duration: 500
  });

  $dmToggle.addEventListener('change', function (e) {
    $body.toggleClass('dark-mode');
    window.localStorage.setItem('bjo-dark-mode', !!this.checked); /// persist across page load/visit
  });

  if (window.location.hash) {
    window.scrollBy(0,-100);
  }
  if ($scrollUp) {
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > 300) {
        $scrollUp.removeClass('hidden');
      } else {
        $scrollUp.addClass('hidden');
      }
    });
    $scrollUp.addEventListener('click', function (e) {
      window.scrollTo(0, 0);
    });
  }
  window.setTimeout($body.removeClass('preload'), 100); /// fix animation flash
});
