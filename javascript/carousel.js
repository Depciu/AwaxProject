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
			let currentMargin = -1;
			const lastMargin = -1 * 100 * (this.item - 1);
				 this.interval  = setInterval(() => {	
					currentMargin--;
					this.inner.style.marginLeft = `${currentMargin}vw`;
					if (currentMargin == lastMargin) {
						clearInterval(this.interval);
						this.backToStart(lastMargin, currentMargin);
					}
				}, this.delay);
		}
		backToStart(lastMargin, currentMargin) {
			console.log(lastMargin, currentMargin);
		}
	}

/* Get carousel wrapper */

const allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
const arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* */

window.addEventListener("load", function(e) {
	arrCarouselWrapper.forEach((carouselWrapper, index) => {
    carouselWrapper[index] = new Carousel({
        id: index,
        wrapper: carouselWrapper,
				inner: carouselWrapper.children[0],
				item: carouselWrapper.children[0].children.length,
				bullet: carouselWrapper.children[1],
				delay: 40,
		});
		carouselWrapper[index].scorllInner();
	});
}, false);
