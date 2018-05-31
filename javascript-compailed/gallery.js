"use strict";

/* Get gallery buttons */

var galleryBtn = document.getElementsByClassName("nav-gallery__button");
var galleryBtnAll = galleryBtn[0];
var arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
var arrAllGalleryBtn = arrGalleryBtn.concat(galleryBtnAll);

/*Get gallery sections */

var gallerySec = document.getElementsByClassName("gallery__section");
var arrGallerySec = [].slice.call(gallerySec);

/*add click event */

arrAllGalleryBtn.forEach(function (btn, btnGalleryIndex) {
	btn.addEventListener("click", function (e) {
		unActiveGalleryBtn();
		activeGalleryBtn(btn);
	}, false);
});

/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn) {
	btn.setAttribute("class", "nav-gallery__button active-button");
	console.log(btn);
}

function unActiveGalleryBtn() {
	arrAllGalleryBtn.forEach(function (btn) {
		btn.setAttribute("class", "nav-gallery__button");
	});
}

//console.log(allGalleryBtn);