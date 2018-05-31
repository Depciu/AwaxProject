/* Get gallery buttons */

const galleryBtn = document.getElementsByClassName("nav-gallery__button");
const galleryBtnAll = [].slice.call(galleryBtn).slice(0,1);
const arrGalleryBtn = [].slice.call(galleryBtn).slice(1);
const arrAllGalleryBtn = galleryBtnAll.concat(arrGalleryBtn);


/*add click event */

arrGalleryBtn.forEach((btn, btnGalleryIndex) => {
    btn.addEventListener("click", function(e) {
				unActiveGalleryBtn();    
				activeGalleryBtn(e.target);
				showActiveGallery(btnGalleryIndex);
    }, false);
});

galleryBtnAll[0].addEventListener("click", function(e){
	unActiveGalleryBtn();
	activeGalleryBtn(e.target);
},false);


/* add and remove class  active in gallery navigation */

function activeGalleryBtn(btn, btnGalleryIndex) {
	btn.setAttribute("class", "nav-gallery__button active-button");
}

function unActiveGalleryBtn() {
	arrAllGalleryBtn.forEach((btn) => {
		btn.setAttribute("class", "nav-gallery__button");
	})
}

/*Get gallery sections */

const gallerySec = document.getElementsByClassName("gallery__section");
const arrGallerySec = [].slice.call(gallerySec);

/* Show active gallery section */

function showActiveGallery(btnGalleryIndex) {
	console.log(arrGallerySec[btnGalleryIndex]);
}