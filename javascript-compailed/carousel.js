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
        this.bakcDelay = options.backDelay;
        this.interval = null;
    }

    _createClass(Carousel, [{
        key: "moveToEnd",
        value: function moveToEnd(actualMargin) {
            var _this = this;

            var that = this;
            var currentMargin = actualMargin || -1;
            var lastMargin = -1 * 100 * (this.item - 1);
            var allMargins = this.findMargin();

            this.interval = setInterval(function () {
                currentMargin--;
                _this.inner.style.marginLeft = currentMargin + "vw";

                if (currentMargin == -100) {
                    console.log('ok');
                    clearInterval(_this.interval);
                    var id = setTimeout(function () {
                        that.moveToEnd(currentMargin);
                    }, 2000);
                }

                if (currentMargin == lastMargin) {
                    clearInterval(_this.interval);
                    _this.moveToStart(currentMargin);
                }
            }, this.delay);
        }
    }, {
        key: "moveToStart",
        value: function moveToStart(actualMargin) {
            var _this2 = this;

            var currentMargin = actualMargin;
            this.interval = setInterval(function () {
                currentMargin++;
                _this2.inner.style.marginLeft = currentMargin + "vw";

                if (currentMargin == 0) {
                    clearInterval(_this2.interval);
                    _this2.moveToEnd(currentMargin);
                }
            }, this.backDelay);
        }
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

/* */

window.onload = creatCarouselObjs();

function creatCarouselObjs() {
    arrCarouselWrapper.forEach(function (carouselWrapper, index) {
        carouselWrapper[index] = new Carousel({
            id: index,
            wrapper: carouselWrapper,
            inner: carouselWrapper.children[0],
            item: carouselWrapper.children[0].children.length,
            bullet: carouselWrapper.children[1],
            delay: 40,
            backDelay: 20
        });
        carouselWrapper[index].moveToEnd();
    });
}