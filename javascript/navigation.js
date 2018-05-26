/* add events */

/*nav events */

const navLinks = document.getElementsByClassName("navbar__list--item");

/*Get links*/

const arrNavLinks = [].slice.call(navLinks);

/*Get all li*/

const navLi = document.querySelectorAll(".navbar__list > li");

/*Get offsetTop sections*/

const sections = document.getElementsByTagName("section");
const arrSections = [].slice.call(sections).slice(1);

for (let i = 0; i < arrNavLinks.length; i++) {
  arrNavLinks[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      const navHeightClick = document.getElementById("nav").clientHeight;
      if (e.detail < 2) {
        updateLocHash(arrSections[i].id);
        smoothScroll(
          window.pageYOffset,
          arrSections[i].offsetTop,
          navHeightClick
        );
      }
    },
    false
  );
}

/* add scroll position event */

window.addEventListener(
  "scroll",
  function() {
    const navHeightScroll = document.getElementById("nav").clientHeight;
    scrollpos(navHeightScroll);
  },
  false
);

/*scroll up event */

/*Get link to scroll up */

const linkScroollup = document.getElementById("scorll-to-top");

linkScroollup.addEventListener(
  "click",
  function(e) {
    e.preventDefault();
    const navHeightScrollUp = document.getElementById("nav").clientHeight;
    if (e.detail < 2) {
      updateLocHash(arrSections[0].id);
      smoothScroll(
        window.pageYOffset,
        arrSections[0].offsetTop,
        navHeightScrollUp
      );
    }
  },
  false
);

/* smoothScroll */

function smoothScroll(winYOffset, secYOffSet, navHeight) {
  let j = winYOffset;
  let h = secYOffSet - navHeight;

  const init = setInterval(() => {
    if (j < h) {
      window.scrollTo(0, j);
      j += 10;
      if (j >= h + navHeight) {
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

/* add and remove class  active in navigation */

function scrollpos(navHeightScroll) {
  arrSections.forEach((item, index) => {
    let previousIndex = index - 1;

    if (previousIndex == -1) {
      previousIndex = 0;
    } else {
      previousIndex = index - 1;
    }

    if (item.offsetTop - navHeightScroll <= window.pageYOffset + 10) {
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

/* Hamburger menu */

const hamButton = document.getElementById("hamButton");
const exitButton = document.getElementById("exitButton");
const navMenu = document.getElementById("navMenu");
const navLogo = document.getElementById("navbar-logo");


/* add events */

window.addEventListener(
  "resize",
  function(e) {
    if (window.innerWidth >= 997) {
      navMenu.style.display = "";
      hamButton.style.display = "";
      exitButton.style.display = "";
    }
  },
  false
);

hamButton.addEventListener(
  "click",
  function(e) {
    if (window.innerWidth <= 997) {
      navMenu.style.display = "flex";
      hamButton.style.display = "none";
      exitButton.style.display = "flex";
      navLogo.style.display = "flex";
      navLogo.style.alignSelf = "self-start";
      navLogo.style.marginTop = "13px";
    }
  },
  false
);

exitButton.addEventListener(
  "click",
  function(e) {
    if (window.innerWidth <= 997) {
      navMenu.style.display = "none";
      hamButton.style.display = "flex";
      exitButton.style.display = "none";
      navLogo.style.display = "block";
      navLogo.style.alignSelf = "";
      navLogo.style.marginTop = "";
    }
  },
  false
);
