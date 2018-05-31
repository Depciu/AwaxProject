"use strict";

/* Get gallery buttons */

var galleryBtn = document.getElementsByClassName("nav-gallery__button");
var galleryBtnAll = [].slice.call(galleryBtn).slice(0, 1);
var arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
var arrAllGalleryBtn = galleryBtnAll.concat(arrGalleryBtn);

/*add click event */

arrGalleryBtn.forEach(function (btn, btnGalleryIndex) {
	btn.addEventListener("click", function (e) {
		unActiveGalleryBtn();
		activeGalleryBtn(e.target);
		showActiveGallery(btnGalleryIndex);
	}, false);
});

galleryBtnAll[0].addEventListener("click", function (e) {
	unActiveGalleryBtn();
	activeGalleryBtn(e.target);
}, false);

/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn, btnGalleryIndex) {
	btn.setAttribute("class", "nav-gallery__button active-button");
}

function unActiveGalleryBtn() {
	arrAllGalleryBtn.forEach(function (btn) {
		btn.setAttribute("class", "nav-gallery__button");
	});
}

/*Get gallery sections */

var gallerySec = document.getElementsByClassName("gallery__section");
var arrGallerySec = [].slice.call(gallerySec);

/* Show active gallery section */

function showActiveGallery(btnGalleryIndex) {
	console.log(arrGallerySec[btnGalleryIndex]);
}