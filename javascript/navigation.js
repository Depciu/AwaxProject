const navLinks = document.getElementsByClassName("navbar__list--item");
console.log(navLinks);

/*Create array link*/
const arrNavLinks = [].slice.call(navLinks);

/*Get off setTop sections*/

const sections = document.getElementsByTagName('section');
const arrSections = [].slice.call(sections).slice(1);

/*Get offsetTop sections*/

function getOffSetTop (arr) {

	let offSetPositions = [];

	for (let i = 0; i < arr.length; i++) {
		offSetPositions.push(arr[i].offsetTop);	 
	}

	return offSetPositions;
}

const arrOfSetTopSections = getOffSetTop(arrSections);

/*On click event*/
function srcollTo(event) {
	console.log(event);
}

arrNavLinks.forEach(element => {
	element.addEventListener("click", function(e) {
		e.preventDefault();
		srcollTo(e);
	}, false)
});
