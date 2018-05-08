
window.location.hash = "#Awax";
const navLinks = document.getElementsByClassName("navbar__list--item");


/*Create array link*/
const arrNavLinks = [].slice.call(navLinks);

/*Get offsetTop sections*/

const sections = document.getElementsByTagName('section');
const arrSections = [].slice.call(sections).slice(1);
console.log(arrSections);

/* add events */

for (let j = 0; j < arrNavLinks.length; j++) {
		arrNavLinks[j].addEventListener("click", function(e) {
			e.preventDefault();
			smoothScroll(window.pageYOffset, arrSections[j].offsetTop);
			console.log(arrSections[j].offsetTop);
		}, false);		
	}

function smoothScroll(winYOffset, secYOffSet) {
	console.log(winYOffset, secYOffSet);
}