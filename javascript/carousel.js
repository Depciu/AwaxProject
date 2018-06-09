
class Carousel {
  constructor(options) {
    this.id = options.id;
    this.wrapper = options.wrapper;
    this.inner = options.inner;
    this.item = options.item;
    this.delay = options.delay;
    this.backDelay = options.backDelay;
    this.stopDelay = options.stopDelay;
    this.interval = null;
  }

  start() {
    this.addBullets();
   this.interval = setTimeout(() => {
      this.nextSlide();
    }, this.stopDelay);
  }

  /* Slide to the next slide */

  nextSlide(actualMargin) {
    const that = this;
    let currentMargin = actualMargin || 0;
    const allMargins = this.findMargin();
    const lastMargin = allMargins.pop();

    /*Remove and select last index of array allMargins */

    this.interval = setInterval(() => {
      currentMargin -= 10;
      this.inner.style.marginLeft = `${currentMargin}vw`;

      allMargins.forEach((margin, index) => {
    
        if (currentMargin == margin) {
          clearInterval(this.interval);
          this.interval = setTimeout(() => {
            that.nextSlide(currentMargin);
          }, this.stopDelay);
        }
      });

      if (currentMargin == lastMargin) {
  
        clearInterval(this.interval);
       this.interval = setTimeout(() => {
          that.firstSlide(currentMargin);
        }, this.stopDelay);
      }
      this.activeBullet(currentMargin);
    }, this.delay);
  }

  /* slide to the first slide  */

  firstSlide(actualMargin) {
    const that = this;
    let currentMargin = actualMargin;

    this.interval = setInterval(() => {

      currentMargin += 10;
      this.inner.style.marginLeft = `${currentMargin}vw`;

      if (currentMargin == 0) {
        clearInterval(this.interval);
        this.interval = setTimeout(() => {
          that.nextSlide(currentMargin);
        }, this.stopDelay);
      }
      this.activeBullet(currentMargin);
    }, this.backDelay);
  }

  futureSlide(actualMargin, futureMargin, lastMargin) {
    const that = this;
    this.interval = setInterval(() => {

      if (actualMargin <= futureMargin) {

        actualMargin += 10;
        this.inner.style.marginLeft = `${actualMargin}vw`;

        if (actualMargin == futureMargin) {

          clearInterval(that.interval);

          if (actualMargin == lastMargin) {

            this.interval = setTimeout(() => {
            this.firstSlide(actualMargin);
          }, this.stopDelay);

          } else {

          this.interval = setTimeout(() => {
            this.nextSlide(actualMargin);
          }, this.stopDelay);

          }

        }
      } else if (actualMargin >= futureMargin) {

        actualMargin -= 10;
        this.inner.style.marginLeft = `${actualMargin}vw`;

        if (actualMargin == futureMargin) {

          clearInterval(that.interval);

          if (actualMargin == lastMargin) {

            this.interval = setTimeout(() => {
            this.firstSlide(actualMargin);
          }, this.stopDelay);
          
          } else {

          this.interval = setTimeout(() => {
            this.nextSlide(actualMargin);
          }, this.stopDelay);

         }
        }
      }
      this.activeBullet(actualMargin);
    }, this.delay);
  }

  /* find all margins*/

  findMargin() {
    const arrMargins = [];

    for (let i = 0; i <= this.item - 1; i++) {

      const arrMar = -1 * 100 * i;
      arrMargins.push(arrMar);

    }
    return arrMargins;
  }

  /* bullets */
  
  addBullets() {

    const parentBullet = document.getElementsByClassName("bullets__list");
    const arrParentBullet = [].slice.call(parentBullet);
    const allMargins = this.findMargin();
    const lastMargin = allMargins.slice(-1);

    for (let i = 1; i <= this.item; i++) {

      const creatBullet = document.createElement("LI");
      const creatBulletNode = document.createTextNode("");
      creatBullet.appendChild(creatBulletNode);
      arrParentBullet[this.id].appendChild(creatBullet).setAttribute("class", "bullets__list--item");
    }
    arrParentBullet[this.id].firstElementChild.setAttribute("class", "bullets__list--item active");
    this.eventBullets(arrParentBullet, allMargins, lastMargin[0]);

  }

  activeBullet(actualMargin) {

    const parentBullet = document.getElementsByClassName("bullets__list");
    const arrParentBullet = [].slice.call(parentBullet);
    const allMargins = this.findMargin();
 
    allMargins.forEach((margin, index) => {

      let previusindex = index - 1;

        if(previusindex == -1) {
          previusindex = 0;
        }

      if(actualMargin <= margin) {

        arrParentBullet[this.id].children[previusindex].setAttribute("class", "bullets__list--item");
        arrParentBullet[this.id].children[index].setAttribute("class", "bullets__list--item active");

      } else if (actualMargin >= margin) {

        arrParentBullet[this.id].children[index].setAttribute("class", "bullets__list--item");

      }

    });
  }

  eventBullets(parentBullet, allMargins, lastMargin) {
    const that = this;
    const allBullets = parentBullet[this.id].children;
    const arrBullets = [].slice.call(allBullets);

    arrBullets.forEach((bullet, index) => {

      bullet.addEventListener("click", function(e){

        clearInterval(that.interval);
        const actualMarginStr = that.inner.style.marginLeft.toString().slice(0, -2);
        const actualMarginNum = Number(actualMarginStr);

        that.futureSlide(actualMarginNum, allMargins[index], lastMargin);

      }, false);
    });
  }

}

/* Get carousel wrapper */

const allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
const arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* Create Carousel Objects */

window.addEventListener("load", function(e) {
  creatCarouselObjs();
}, false);

function creatCarouselObjs() {
  arrCarouselWrapper.forEach((carouselWrapper, index) => {
    carouselWrapper[index] = new Carousel({
      id: index,
      wrapper: carouselWrapper,
      inner: carouselWrapper.children[0],
      item: carouselWrapper.children[0].children.length,
      delay: 70,
      backDelay: 70,
      stopDelay: 3000
    });

    if(index % 2 == 0) {
      carouselWrapper[index].stopDelay = 3500;
    }
    carouselWrapper[index].start();
  });
}
