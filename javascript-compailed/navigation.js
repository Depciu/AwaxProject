"use strict";

/* add events */

/*nav events */

var navLinks = document.getElementsByClassName("navbar__list--item");

/*Get all li*/

var navLi = document.querySelectorAll(".navbar__list > li");
console.log(navLi);

/*Get links*/

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

/* add scroll position event */

window.addEventListener("scroll", function () {
	scrollpos();
}, false);

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

	var j = winYOffset;
	var h = secYOffSet - 70;

	var init = setInterval(function () {

		if (j < h) {
			window.scrollTo(0, j);
			j += 10;
			if (j >= h + 80) {
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

/* add and remove class = active in to navigation */

function scrollpos() {
	arrSections.forEach(function (item, index) {

		var previousIndex = index - 1;

		if (previousIndex == -1) {
			previousIndex = 0;
		} else {
			previousIndex = index - 1;
		}

		if (item.offsetTop - 100 <= window.pageYOffset) {
			navLi[previousIndex].removeAttribute('class', '');
			navLi[index].setAttribute('class', 'active');
		} else {
			navLi[index].setAttribute('class', '');
		}
	});
}

/* update window location hash */
function updateLocHash(location) {
	if (history.pushState) {
		history.pushState(null, null, "#" + location);
	}
}