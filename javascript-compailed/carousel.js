"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
  function Carousel(options) {
    _classCallCheck(this, Carousel);

    this.id = options.id;
    this.wrapper = options.wrapper;
    this.inner = options.inner;
    this.item = options.item;
    this.delay = options.delay;
    this.backDelay = options.backDelay;
    this.stopDelay = options.stopDelay;
    this.interval = null;
  }

  _createClass(Carousel, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.addBullets();
      this.interval = setTimeout(function () {
        _this.nextSlide();
      }, this.stopDelay);
    }

    /* Slide to the next slide */

  }, {
    key: "nextSlide",
    value: function nextSlide(actualMargin) {
      var _this2 = this;

      var that = this;
      var currentMargin = actualMargin || 0;
      var allMargins = this.findMargin();
      var lastMargin = allMargins.pop();

      /*Remove and select last index of array allMargins */

      this.interval = setInterval(function () {
        currentMargin -= 10;
        _this2.inner.style.marginLeft = currentMargin + "vw";

        allMargins.forEach(function (margin, index) {

          if (currentMargin == margin) {
            clearInterval(_this2.interval);
            _this2.interval = setTimeout(function () {
              that.nextSlide(currentMargin);
            }, _this2.stopDelay);
          }
        });

        if (currentMargin == lastMargin) {

          clearInterval(_this2.interval);
          _this2.interval = setTimeout(function () {
            that.firstSlide(currentMargin);
          }, _this2.stopDelay);
        }
        _this2.activeBullet(currentMargin);
      }, this.delay);
    }

    /* slide to the first slide  */

  }, {
    key: "firstSlide",
    value: function firstSlide(actualMargin) {
      var _this3 = this;

      var that = this;
      var currentMargin = actualMargin;

      this.interval = setInterval(function () {

        currentMargin += 10;
        _this3.inner.style.marginLeft = currentMargin + "vw";

        if (currentMargin == 0) {
          clearInterval(_this3.interval);
          _this3.interval = setTimeout(function () {
            that.nextSlide(currentMargin);
          }, _this3.stopDelay);
        }
        _this3.activeBullet(currentMargin);
      }, this.backDelay);
    }
  }, {
    key: "futureSlide",
    value: function futureSlide(actualMargin, futureMargin, lastMargin) {
      var _this4 = this;

      var that = this;
      this.interval = setInterval(function () {

        if (actualMargin <= futureMargin) {

          actualMargin += 10;
          _this4.inner.style.marginLeft = actualMargin + "vw";

          if (actualMargin == futureMargin) {

            clearInterval(that.interval);

            if (actualMargin == lastMargin) {

              _this4.interval = setTimeout(function () {
                _this4.firstSlide(actualMargin);
              }, _this4.stopDelay);
            } else {

              _this4.interval = setTimeout(function () {
                _this4.nextSlide(actualMargin);
              }, _this4.stopDelay);
            }
          }
        } else if (actualMargin >= futureMargin) {

          actualMargin -= 10;
          _this4.inner.style.marginLeft = actualMargin + "vw";

          if (actualMargin == futureMargin) {

            clearInterval(that.interval);

            if (actualMargin == lastMargin) {

              _this4.interval = setTimeout(function () {
                _this4.firstSlide(actualMargin);
              }, _this4.stopDelay);
            } else {

              _this4.interval = setTimeout(function () {
                _this4.nextSlide(actualMargin);
              }, _this4.stopDelay);
            }
          }
        }
        _this4.activeBullet(actualMargin);
      }, this.delay);
    }

    /* find all margins*/

  }, {
    key: "findMargin",
    value: function findMargin() {
      var arrMargins = [];

      for (var i = 0; i <= this.item - 1; i++) {

        var arrMar = -1 * 100 * i;
        arrMargins.push(arrMar);
      }
      return arrMargins;
    }

    /* bullets */

  }, {
    key: "addBullets",
    value: function addBullets() {

      var parentBullet = document.getElementsByClassName("bullets__list");
      var arrParentBullet = [].slice.call(parentBullet);
      var allMargins = this.findMargin();
      var lastMargin = allMargins.slice(-1);

      for (var i = 1; i <= this.item; i++) {

        var creatBullet = document.createElement("LI");
        var creatBulletNode = document.createTextNode("");
        creatBullet.appendChild(creatBulletNode);
        arrParentBullet[this.id].appendChild(creatBullet).setAttribute("class", "bullets__list--item");
      }
      arrParentBullet[this.id].firstElementChild.setAttribute("class", "bullets__list--item active");
      this.eventBullets(arrParentBullet, allMargins, lastMargin[0]);
    }
  }, {
    key: "activeBullet",
    value: function activeBullet(actualMargin) {
      var _this5 = this;

      var parentBullet = document.getElementsByClassName("bullets__list");
      var arrParentBullet = [].slice.call(parentBullet);
      var allMargins = this.findMargin();

      allMargins.forEach(function (margin, index) {

        var previusindex = index - 1;

        if (previusindex == -1) {
          previusindex = 0;
        }

        if (actualMargin <= margin) {

          arrParentBullet[_this5.id].children[previusindex].setAttribute("class", "bullets__list--item");
          arrParentBullet[_this5.id].children[index].setAttribute("class", "bullets__list--item active");
        } else if (actualMargin >= margin) {

          arrParentBullet[_this5.id].children[index].setAttribute("class", "bullets__list--item");
        }
      });
    }
  }, {
    key: "eventBullets",
    value: function eventBullets(parentBullet, allMargins, lastMargin) {
      var that = this;
      var allBullets = parentBullet[this.id].children;
      var arrBullets = [].slice.call(allBullets);

      arrBullets.forEach(function (bullet, index) {

        bullet.addEventListener("click", function (e) {

          clearInterval(that.interval);
          var actualMarginStr = that.inner.style.marginLeft.toString().slice(0, -2);
          var actualMarginNum = Number(actualMarginStr);

          that.futureSlide(actualMarginNum, allMargins[index], lastMargin);
        }, false);
      });
    }
  }]);

  return Carousel;
}();

/* Get carousel wrapper */

var allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
var arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* Create Carousel Objects */

window.addEventListener("load", function (e) {
  creatCarouselObjs();
}, false);

function creatCarouselObjs() {
  arrCarouselWrapper.forEach(function (carouselWrapper, index) {
    carouselWrapper[index] = new Carousel({
      id: index,
      wrapper: carouselWrapper,
      inner: carouselWrapper.children[0],
      item: carouselWrapper.children[0].children.length,
      delay: 70,
      backDelay: 70,
      stopDelay: 3000
    });

    if (index % 2 == 0) {
      carouselWrapper[index].stopDelay = 3500;
    }
    carouselWrapper[index].start();
  });
}