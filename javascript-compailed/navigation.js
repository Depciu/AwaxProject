"use strict";

var navLinks = document.getElementsByClassName("navbar__list--item");
console.log(navLinks);

/*Create array*/
var arrNavLinks = [].slice.call(navLinks);

function srcollTo() {
	console.log('jest ok');
}

/*Create Events*/
arrNavLinks.forEach(function (element) {
	element.addEventListener("click", function (e) {
		e.preventDefault();
		srcollTo();
	}, false);
});