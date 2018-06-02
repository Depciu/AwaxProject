"use strict";

/* Get gallery buttons */

var galleryBtn = document.getElementsByClassName("nav-gallery__button");
var galleryBtnAll = [].slice.call(galleryBtn).slice(0, 1);
var arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
var arrAllGalleryBtn = galleryBtnAll.concat(arrGalleryBtn);

/*add click events */

arrGalleryBtn.forEach(function (btn, btnGalleryIndex) {
  btn.addEventListener("click", function (e) {
    unActiveGalleryBtn();
    unActiveGallerySec();
    hideMoreProjectBtn();
    activeGalleryBtn(e.target);
    showActiveGallerySec(btnGalleryIndex);
  }, false);
});

galleryBtnAll[0].addEventListener("click", function (e) {
  unActiveGalleryBtn();
  unActiveGallerySec();
  showActiveGallerySec([0]);
  activeGalleryBtn(e.target);
  showMoreProjectBtn();
}, false);

/* add  load evetn */

window.addEventListener("load", function (e) {
  unActiveGallerySec();
  showActiveGallerySec([0]);
});

/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn, btnGalleryIndex) {
  btn.setAttribute("class", "nav-gallery__button active-button");
}

function unActiveGalleryBtn() {
  arrAllGalleryBtn.forEach(function (btn) {
    btn.setAttribute("class", "nav-gallery__button");
  });
}

/* Get gallery sections */

var gallerySec = document.getElementsByClassName("gallery__section");
var arrGallerySec = [].slice.call(gallerySec);

/* Get more project button */

var moreProjectBtn = document.getElementById("gallery__button");

/* Show more project button */

function showMoreProjectBtn() {
  moreProjectBtn.setAttribute("style", "display: inline-block;");
}

/* Hide more project button */

function hideMoreProjectBtn() {
  moreProjectBtn.setAttribute("style", "display: none;");
}

/* Hide gallery sections */

function unActiveGallerySec() {
  arrGallerySec.forEach(function (section) {
    section.setAttribute("style", "display:none;");
  });
}

/* Show active gallery section */
function showActiveGallerySec(btnGalleryIndex) {
  arrGallerySec[btnGalleryIndex].setAttribute("style", "display:flex;");
}