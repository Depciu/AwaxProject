
/* add events */

/*nav events */

const navLinks = document.getElementsByClassName("navbar__list--item");


/*Create array link*/

const arrNavLinks = [].slice.call(navLinks);

/*Get offsetTop sections*/

const sections = document.getElementsByTagName("section");
const arrSections = [].slice.call(sections).slice(1);

for (let i = 0; i < arrNavLinks.length; i++) {
	arrNavLinks[i].addEventListener("click", function(e) {
		e.preventDefault();
		updateLocHash(arrSections[i].id);
		smoothScroll(window.pageYOffset, arrSections[i].offsetTop);	
	}, false);	
}

/*scroll up event */

/*Get link to scroll up */

const linkScroollup = document.getElementsByClassName("scrool-up-icon");

linkScroollup[0].addEventListener("click", function(e){
	e.preventDefault();
	updateLocHash(arrSections[0].id);
	smoothScroll(window.pageYOffset, arrSections[0].offsetTop);
}, false);

/* smoothScroll */

function smoothScroll(winYOffset, secYOffSet) {
	
	let i = winYOffset;
	let h = secYOffSet - 70;

	const init = setInterval(() => {

		if (i < h) {
		window.scrollTo(0, i);
		i += 10;
			if (i >= h + 80) {
				clearInterval(init);
			}
		} else if ( i > h) {
		window.scrollTo(0, i);
		i -= 10;
			if ( i <= h) {	
				clearInterval(init);	
			}
		}	

	}, 5);	
}

/* update window location hash */
function updateLocHash (location) {
	if(history.pushState) {
		history.pushState(null, null, `#${location}`);
	}
}	