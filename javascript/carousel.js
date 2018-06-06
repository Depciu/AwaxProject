class Carousel {
  constructor(options) {
    this.id = options.id;
    this.wrapper = options.wrapper;
    this.inner = options.inner;
    this.item = options.item;
    this.bullet = options.bullet;
    this.delay = options.delay;
    this.backDelay = options.backDelay;
    this.stopDelay = options.stopDelay;
    this.interval = null;
  }

  start() {
    setTimeout(() => {
      this.moveToEnd();
    }, this.stopDelay);
  }

  /* Slide to the next slide */

  moveToEnd(actualMargin) {
    const that = this;
    let currentMargin = actualMargin || 0;
    const allMargins = this.findMargin();

    /*Remove and select last index of array allMargins */

    const lastMargin = allMargins.pop();

    this.interval = setInterval(() => {
      currentMargin--;
      this.inner.style.marginLeft = `${currentMargin}vw`;

      allMargins.forEach((margin, index) => {
        if (currentMargin == margin) {
          clearInterval(this.interval);

          setTimeout(() => {
            that.moveToEnd(currentMargin);
          }, this.stopDelay);
        }
      });

      if (currentMargin == lastMargin) {
        clearInterval(this.interval);

        setTimeout(() => {
          that.moveToStart(currentMargin);
        }, this.stopDelay);
      }
    }, this.delay);
  }

  /* slide to the first slide  */

  moveToStart(actualMargin) {
    const that = this;
    let currentMargin = actualMargin;
    this.interval = setInterval(() => {
      currentMargin++;
      this.inner.style.marginLeft = `${currentMargin}vw`;

      if (currentMargin == 0) {
        clearInterval(this.interval);

        setTimeout(() => {
          that.moveToEnd(currentMargin);
        }, this.stopDelay);
      }
    }, this.backDelay);
  }

  /* find all margins*/

  findMargin() {
    const arrMargins = [];

    for (let x = 0; x <= this.item - 1; x++) {
      const arrMar = -1 * 100 * x;
      arrMargins.push(arrMar);
    }
    return arrMargins;
  }
}

/* Get carousel wrapper */

const allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
const arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* Create Carousel Objects */

window.onload = creatCarouselObjs();

function creatCarouselObjs() {
  arrCarouselWrapper.forEach((carouselWrapper, index) => {
    carouselWrapper[index] = new Carousel({
      id: index,
      wrapper: carouselWrapper,
      inner: carouselWrapper.children[0],
      item: carouselWrapper.children[0].children.length,
      bullet: carouselWrapper.children[1],
      delay: 20,
      backDelay: 20,
      stopDelay: 1000
    });
    carouselWrapper[index].start();
  });
}
