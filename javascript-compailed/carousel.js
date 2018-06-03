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

			var currentMargin = -1;
			var lastMargin = -1 * 100 * (this.item - 1);
			this.interval = setInterval(function () {
				currentMargin--;
				_this.inner.style.marginLeft = currentMargin + "vw";
				if (currentMargin == lastMargin) {
					clearInterval(_this.interval);
					_this.backToStart(lastMargin, currentMargin);
				}
			}, this.delay);
		}
	}, {
		key: "backToStart",
		value: function backToStart(lastMargin, currentMargin) {
			console.log(lastMargin, currentMargin);
		}
	}]);

	return Carousel;
}();

/* Get carousel wrapper */

var allCarouselWrapper = document.getElementsByClassName("carousel__wrapper");
var arrCarouselWrapper = [].slice.call(allCarouselWrapper);

/* */

window.addEventListener("load", function (e) {
	arrCarouselWrapper.forEach(function (carouselWrapper, index) {
		carouselWrapper[index] = new Carousel({
			id: index,
			wrapper: carouselWrapper,
			inner: carouselWrapper.children[0],
			item: carouselWrapper.children[0].children.length,
			bullet: carouselWrapper.children[1],
			delay: 40
		});
		carouselWrapper[index].scorllInner();
	});
}, false);