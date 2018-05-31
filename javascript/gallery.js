/* Get gallery buttons */

const galleryBtn = document.getElementsByClassName("nav-gallery__button");
const allGalleryBtn = document.getElementsByClassName("nav-gallery__button")[0];
const arrGalleryBtn = [].slice.call(galleryBtn).slice(1);

/*Get gallery sections */

const gallerySec = document.getElementsByClassName("gallery__section");
const arrGallerySec = [].slice.call(gallerySec);

/*add click event */

arrGalleryBtn.forEach((btn, i) => {
    btn.addEventListener("click", function(e)  {
        console.log('jest ok', i);
    }, false);
});

console.log(allGalleryBtn);