"use strict";

window.location.hash = "#Awax";
var navLinks = document.getElementsByClassName("navbar__list--item");

/*Create array link*/
var arrNavLinks = [].slice.call(navLinks);

/*Get offsetTop sections*/

var sections = document.getElementsByTagName('section');
var arrSections = [].slice.call(sections).slice(1);
console.log(arrSections);

/* add events */

var _loop = function _loop(j) {
	arrNavLinks[j].addEventListener("click", function (e) {
		e.preventDefault();
		smoothScroll(window.pageYOffset, arrSections[j].offsetTop);
		console.log(arrSections[j].offsetTop);
	}, false);
};

for (var j = 0; j < arrNavLinks.length; j++) {
	_loop(j);
}

function smoothScroll(winYOffset, secYOffSet) {
	console.log(winYOffset, secYOffSet);
}