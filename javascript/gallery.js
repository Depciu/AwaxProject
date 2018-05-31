/* Get gallery buttons */

const galleryBtn = document.getElementsByClassName("nav-gallery__button");
const galleryBtnAll = galleryBtn[0];
const arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
const arrAllGalleryBtn = arrGalleryBtn.concat(galleryBtnAll);

/*Get gallery sections */

const gallerySec = document.getElementsByClassName("gallery__section");
const arrGallerySec = [].slice.call(gallerySec);

/*add click event */

arrAllGalleryBtn.forEach((btn, btnGalleryIndex) => {
    btn.addEventListener("click", function(e) {
				unActiveGalleryBtn()    
        activeGalleryBtn(btn);
    }, false);
});

/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn) {
	btn.setAttribute("class", "nav-gallery__button active-button");
	console.log(btn);
}

function unActiveGalleryBtn() {
	arrAllGalleryBtn.forEach((btn) => {
		btn.setAttribute("class", "nav-gallery__button");
	})
}

//console.log(allGalleryBtn);