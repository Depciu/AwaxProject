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
    this.bullet = options.bullet;
    this.delay = options.delay;
    this.backDelay = options.backDelay;
    this.stopDelay = options.stopDelay;
    this.interval = null;
  }

  _createClass(Carousel, [{
    key: "start",
    value: function start() {
      var _this = this;

      setTimeout(function () {
        _this.moveToEnd();
      }, this.stopDelay);
    }

    /* Slide to the next slide */

  }, {
    key: "moveToEnd",
    value: function moveToEnd(actualMargin) {
      var _this2 = this;

      var that = this;
      var currentMargin = actualMargin || 0;
      var allMargins = this.findMargin();

      /*Remove and select last index of array allMargins */

      var lastMargin = allMargins.pop();

      this.interval = setInterval(function () {
        currentMargin--;
        _this2.inner.style.marginLeft = currentMargin + "vw";

        allMargins.forEach(function (margin, index) {
          if (currentMargin == margin) {
            clearInterval(_this2.interval);

            setTimeout(function () {
              that.moveToEnd(currentMargin);
            }, _this2.stopDelay);
          }
        });

        if (currentMargin == lastMargin) {
          clearInterval(_this2.interval);

          setTimeout(function () {
            that.moveToStart(currentMargin);
          }, _this2.stopDelay);
        }
      }, this.delay);
    }

    /* slide to the first slide  */

  }, {
    key: "moveToStart",
    value: function moveToStart(actualMargin) {
      var _this3 = this;

      var that = this;
      var currentMargin = actualMargin;
      this.interval = setInterval(function () {
        currentMargin++;
        _this3.inner.style.marginLeft = currentMargin + "vw";

        if (currentMargin == 0) {
          clearInterval(_this3.interval);

          setTimeout(function () {
            that.moveToEnd(currentMargin);
          }, _this3.stopDelay);
        }
      }, this.backDelay);
    }

    /* find all margins*/

  }, {
    key: "findMargin",
    value: function findMargin() {
      var arrMargins = [];

      for (var x = 0; x <= this.item - 1; x++) {
        var arrMar = -1 * 100 * x;
        arrMargins.push(arrMar);
      }
      return arrMargins;
    }
  }]);

  return Carousel;
}();

/* Get carousel wrapper */

var allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
var arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* Create Carousel Objects */

window.onload = creatCarouselObjs();

function creatCarouselObjs() {
  arrCarouselWrapper.forEach(function (carouselWrapper, index) {
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