"use strict";

/* add events */

/*nav events */

var navLinks = document.getElementsByClassName("navbar__list--item");

/*Create array link*/

var arrNavLinks = [].slice.call(navLinks);

/*Get offsetTop sections*/

var sections = document.getElementsByTagName("section");
var arrSections = [].slice.call(sections).slice(1);

var _loop = function _loop(i) {
	arrNavLinks[i].addEventListener("click", function (e) {
		e.preventDefault();
		updateLocHash(arrSections[i].id);
		smoothScroll(window.pageYOffset, arrSections[i].offsetTop);
	}, false);
};

for (var i = 0; i < arrNavLinks.length; i++) {
	_loop(i);
}

/*scroll up event */

/*Get link to scroll up */

var linkScroollup = document.getElementsByClassName("scrool-up-icon");

linkScroollup[0].addEventListener("click", function (e) {
	e.preventDefault();
	updateLocHash(arrSections[0].id);
	smoothScroll(window.pageYOffset, arrSections[0].offsetTop);
}, false);

/* smoothScroll */

function smoothScroll(winYOffset, secYOffSet) {

	var i = winYOffset;
	var h = secYOffSet - 70;

	var init = setInterval(function () {

		if (i < h) {
			window.scrollTo(0, i);
			i += 10;
			if (i >= h + 80) {
				clearInterval(init);
			}
		} else if (i > h) {
			window.scrollTo(0, i);
			i -= 10;
			if (i <= h) {
				clearInterval(init);
			}
		}
	}, 5);
}

/* update window location hash */
function updateLocHash(location) {
	if (history.pushState) {
		history.pushState(null, null, "#" + location);
	}
}