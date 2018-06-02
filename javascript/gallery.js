/* Get gallery buttons */

const galleryBtn = document.getElementsByClassName("nav-gallery__button");
const galleryBtnAll = [].slice.call(galleryBtn).slice(0, 1);
const arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
const arrAllGalleryBtn = galleryBtnAll.concat(arrGalleryBtn);

/*add click events */

arrGalleryBtn.forEach((btn, btnGalleryIndex) => {
  btn.addEventListener(
    "click",
    function(e) {
      unActiveGalleryBtn();
      unActiveGallerySec();
      hideMoreProjectBtn();
      activeGalleryBtn(e.target);
      showActiveGallerySec(btnGalleryIndex);
    },
    false
  );
});

galleryBtnAll[0].addEventListener(
  "click",
  function(e) {
    unActiveGalleryBtn();
    unActiveGallerySec();
    showActiveGallerySec([0]);
    activeGalleryBtn(e.target);
    showMoreProjectBtn();
  },
  false
);

/* add  load evetn */

window.addEventListener("load", function(e) {
  unActiveGallerySec();
  showActiveGallerySec([0]);
});

/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn, btnGalleryIndex) {
  btn.setAttribute("class", "nav-gallery__button active-button");
}

function unActiveGalleryBtn() {
  arrAllGalleryBtn.forEach(btn => {
    btn.setAttribute("class", "nav-gallery__button");
  });
}

/* Get gallery sections */

const gallerySec = document.getElementsByClassName("gallery__section");
const arrGallerySec = [].slice.call(gallerySec);

/* Get more project button */

const moreProjectBtn = document.getElementById("gallery__button");

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
  arrGallerySec.forEach(section => {
    section.setAttribute("style", "display:none;");
  });
}

/* Show active gallery section */
function showActiveGallerySec(btnGalleryIndex) {
  arrGallerySec[btnGalleryIndex].setAttribute("style", "display:flex;");
}
