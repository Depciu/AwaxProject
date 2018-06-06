class Carousel {
    constructor(options) {
        this.id = options.id;
        this.wrapper = options.wrapper;
				this.inner = options.inner;
				this.item = options.item;
				this.bullet = options.bullet;
				this.delay = options.delay;
				this.bakcDelay = options.backDelay;
				this.interval = null;
		}

		moveToEnd(actualMargin) {
      const that = this;
			let currentMargin = actualMargin || -1;
      const lastMargin = -1 * 100 * (this.item - 1);
      const allMargins = this.findMargin();

				 this.interval  = setInterval(() => {
					currentMargin--;
          this.inner.style.marginLeft = `${currentMargin}vw`;

          if(currentMargin == -100) {
            console.log('ok');
            clearInterval(this.interval);
            const id  = setTimeout(function(){
              that.moveToEnd(currentMargin);
            }, 2000);
          }

          if (currentMargin ==  lastMargin) {
            clearInterval(this.interval);
            this.moveToStart(currentMargin);
          } 



				}, this.delay);
		}

		moveToStart(actualMargin) {
      let currentMargin = actualMargin;
			this.interval = setInterval(() => {
				currentMargin++;
        this.inner.style.marginLeft = `${currentMargin}vw`;
        
				if (currentMargin == 0) {
					clearInterval(this.interval);
					this.moveToEnd(currentMargin);
        }
        
			}, this.backDelay);
    }
    
    findMargin() {

      const arrMargins = [];

      for (let x = 0; x <= (this.item - 1); x++ ) {
        const arrMar = -1 * 100 * x;
        arrMargins.push(arrMar);
      }

      return arrMargins;

    }

	}

/* Get carousel wrapper */

const allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
const arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* */

window.onload = creatCarouselObjs();

 function creatCarouselObjs () {
	arrCarouselWrapper.forEach((carouselWrapper, index) => {
    carouselWrapper[index] = new Carousel({
        id: index,
        wrapper: carouselWrapper,
				inner: carouselWrapper.children[0],
				item: carouselWrapper.children[0].children.length,
				bullet: carouselWrapper.children[1],
				delay: 40,
				backDelay: 20,
		});
		carouselWrapper[index].moveToEnd();
	});
 }
