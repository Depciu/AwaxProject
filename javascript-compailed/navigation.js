"use strict";

var navLinks = document.getElementsByClassName("navbar__list--item");
console.log(navLinks);

/*Create array link*/
var arrNavLinks = [].slice.call(navLinks);

/*Get off setTop sections*/

var sections = document.getElementsByTagName('section');
var arrSections = [].slice.call(sections).slice(1);

/*Get offsetTop sections*/

function getOffSetTop(arr) {

	var offSetPositions = [];

	for (var i = 0; i < arr.length; i++) {
		offSetPositions.push(arr[i].offsetTop);
	}

	return offSetPositions;
}

var arrOfSetTopSections = getOffSetTop(arrSections);

/*On click event*/
function srcollTo(event) {
	console.log(event);
}

arrNavLinks.forEach(function (element) {
	element.addEventListener("click", function (e) {
		e.preventDefault();
		srcollTo(e);
	}, false);
});