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
  var $wrapper = document.getElementById('wrapper'),
    // $menuToggle = document.getElementsByClassName('menu-toggle')[0],
    $scrollUp = document.getElementById('scrollUp');
  // $menuToggle.addEventListener('click', function (e) {
  //   $wrapper.toggleClass('toggled');
  // });

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
});
