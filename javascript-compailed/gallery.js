"use strict";

/* Get gallery buttons */

var galleryBtn = document.getElementsByClassName("nav-gallery__button");
var allGalleryBtn = document.getElementsByClassName("nav-gallery__button")[0];
var arrGalleryBtn = [].slice.call(galleryBtn).slice(1);

/*Get gallery sections */

var gallerySec = document.getElementsByClassName("gallery__section");
var arrGallerySec = [].slice.call(gallerySec);

/*add click event */

arrGalleryBtn.forEach(function (btn, i) {
    btn.addEventListener("click", function (e) {
        console.log('jest ok', i);
    }, false);
});

console.log(allGalleryBtn);