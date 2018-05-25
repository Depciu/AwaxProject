/* add events */

/*nav events */

const navLinks = document.getElementsByClassName("navbar__list--item");

/*Get all li*/

const navLi = document.querySelectorAll(".navbar__list > li");

/*Get links*/

const arrNavLinks = [].slice.call(navLinks);

/*Get offsetTop sections*/

const sections = document.getElementsByTagName("section");
const arrSections = [].slice.call(sections).slice(1);

for (let i = 0; i < arrNavLinks.length; i++) {
  arrNavLinks[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      console.log(e.detail);
      if (e.detail < 2) {
        updateLocHash(arrSections[i].id);
        smoothScroll(window.pageYOffset, arrSections[i].offsetTop);
      }
    },
    false
  );
}

/* add scroll position event */

window.addEventListener(
  "scroll",
  function() {
    scrollpos();
  },
  false
);

/*scroll up event */

/*Get link to scroll up */

const linkScroollup = document.getElementsByClassName("scrool-up-icon");

linkScroollup[0].addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    if (e.detail < 2) {
      updateLocHash(arrSections[0].id);
      smoothScroll(window.pageYOffset, arrSections[0].offsetTop);
    }
  },
  false
);

/* smoothScroll */

function smoothScroll(winYOffset, secYOffSet) {
  let j = winYOffset;
  let h = secYOffSet - 70;

  const init = setInterval(() => {
    if (j < h) {
      window.scrollTo(0, j);
      j += 10;
      if (j >= h + 80) {
        clearInterval(init);
      }
    } else if (j > h) {
      window.scrollTo(0, j);
      j -= 10;
      if (j <= h) {
        clearInterval(init);
      }
    }
  }, 5);
}

/* add and remove class = active in navigation */

function scrollpos() {
  arrSections.forEach((item, index) => {
    let previousIndex = index - 1;

    if (previousIndex == -1) {
      previousIndex = 0;
    } else {
      previousIndex = index - 1;
    }

    if (item.offsetTop - 100 <= window.pageYOffset) {
      navLi[previousIndex].removeAttribute("class", "");
      navLi[index].setAttribute("class", "active");
    } else {
      navLi[index].setAttribute("class", "");
    }
  });
}

/* update window location hash */
function updateLocHash(location) {
  if (history.pushState) {
    history.pushState(null, null, `#${location}`);
  }
}
