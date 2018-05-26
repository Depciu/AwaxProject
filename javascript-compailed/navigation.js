"use strict";

/* add events */

/*nav events */

var navLinks = document.getElementsByClassName("navbar__list--item");

/*Get links*/

var arrNavLinks = [].slice.call(navLinks);

/*Get all li*/

var navLi = document.querySelectorAll(".navbar__list > li");

/*Get offsetTop sections*/

var sections = document.getElementsByTagName("section");
var arrSections = [].slice.call(sections).slice(1);

var _loop = function _loop(i) {
  arrNavLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    var navHeightClick = document.getElementById('nav').clientHeight;
    if (e.detail < 2) {
      updateLocHash(arrSections[i].id);
      smoothScroll(window.pageYOffset, arrSections[i].offsetTop, navHeightClick);
    }
  }, false);
};

for (var i = 0; i < arrNavLinks.length; i++) {
  _loop(i);
}

/* add scroll position event */

window.addEventListener("scroll", function () {
  var navHeightScroll = document.getElementById('nav').clientHeight;
  scrollpos(navHeightScroll);
}, false);

/*scroll up event */

/*Get link to scroll up */

var linkScroollup = document.getElementById("scorll-to-top");

linkScroollup.addEventListener("click", function (e) {
  e.preventDefault();
  var navHeightScrollUp = document.getElementById("nav").clientHeight;
  if (e.detail < 2) {
    updateLocHash(arrSections[0].id);
    smoothScroll(window.pageYOffset, arrSections[0].offsetTop, navHeightScrollUp);
  }
}, false);

/* smoothScroll */

function smoothScroll(winYOffset, secYOffSet, navHeight) {

  var j = winYOffset;
  var h = secYOffSet - navHeight;

  var init = setInterval(function () {
    if (j < h) {
      window.scrollTo(0, j);
      j += 10;
      if (j >= h + navHeight) {
        clearInterval(init);
      }
    } else if (j > h) {
      window.scrollTo(0, j);
      j -= 10;
      if (j <= h) {
        clearInterval(init);
      }
    }
  }, 5);
}

/* add and remove class  active in navigation */

function scrollpos(navHeightScroll) {
  arrSections.forEach(function (item, index) {
    var previousIndex = index - 1;

    if (previousIndex == -1) {
      previousIndex = 0;
    } else {
      previousIndex = index - 1;
    }

    if (item.offsetTop - navHeightScroll <= window.pageYOffset + 10) {
      navLi[previousIndex].removeAttribute("class", "");
      navLi[index].setAttribute("class", "active");
    } else {
      navLi[index].setAttribute("class", "");
    }
  });
}

/* update window location hash */

function updateLocHash(location) {
  if (history.pushState) {
    history.pushState(null, null, "#" + location);
  }
}

/* Hamburger menu */

var hamButton = document.getElementById('hamButton');
var exitButton = document.getElementById('exitButton');
var arrButtons = [hamButton, exitButton];
var navMenu = document.getElementById('navMenu');

/* add events */

arrButtons.forEach(function (item, index) {
  item.addEventListener("click", function (e) {

    navMenu.style.display = "block";
  }, false);
});