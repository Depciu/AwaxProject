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
		this.interval = null;
	}

	_createClass(Carousel, [{
		key: "scorllInner",
		value: function scorllInner() {
			var _this = this;

			var currentMargin = 0;
			this.interval = setInterval(function () {
				if (currentMargin < 200) {
					currentMargin++;
					_this.inner.style.marginLeft = "-" + currentMargin + "vw";
				} else {
					_this.inner.style.marginLeft = 0 + "vw";
					currentMargin = 0;
					_this.inner.style.marginLeft = "-" + currentMargin + "vw";
				}
			}, this.delay);
		}
	}]);

	return Carousel;
}();

var allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
var arrCarouselWrapper = [].slice.call(allCarouselWrapper);
window.addEventListener("load", function (e) {
	arrCarouselWrapper.forEach(function (carouselWrapper, index) {
		carouselWrapper[index] = new Carousel({
			id: index,
			wrapper: carouselWrapper,
			inner: carouselWrapper.children[0],
			item: carouselWrapper.children[0].children.length,
			bullet: carouselWrapper.children[1],
			delay: 50
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