class Carousel {
    constructor(options) {
        this.id = options.id;
        this.wrapper = options.wrapper;
				this.inner = options.inner;
				this.item = options.item;
				this.bullet = options.bullet;
				this.delay = options.delay;
				this.interval = null;
		}
		scorllInner() {
			let currentMargin = 0;
				 this.interval  = setInterval(() => {
					 if(currentMargin < 200) {
					currentMargin++;
					this.inner.style.marginLeft = `-${currentMargin}vw`;
					 } else {
						 this.inner.style.marginLeft = `${0}vw`;
						 currentMargin = 0;
						 this.inner.style.marginLeft = `-${currentMargin}vw`;

					 }
				}, this.delay);
				}
		}



const allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
const arrCarouselWrapper = [].slice.call(allCarouselWrapper);
window.addEventListener("load", function(e) {
	arrCarouselWrapper.forEach((carouselWrapper, index) => {
    carouselWrapper[index] = new Carousel({
        id: index,
        wrapper: carouselWrapper,
				inner: carouselWrapper.children[0],
				item: carouselWrapper.children[0].children.length,
				bullet: carouselWrapper.children[1],
				delay: 50,
		});
		if (index == 0) {
			carouselWrapper[index].delay = 200;
		}
		if (index == 1) {
			carouselWrapper[index].delay = 100;
		}
		carouselWrapper[index].scorllInner();
	});
}, false);
