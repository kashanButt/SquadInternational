const pageUp = document.querySelector(".pageUp");
var About = "about";
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    pageUp.style.display = "block";
  } else {
    pageUp.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  var val = window.scrollY;

  var url = window.location.href;
  var searchTermAbout = "about";
  var urlContainsAbout = url.includes(searchTermAbout);
  if (urlContainsAbout == true) {
    if ((val > 1200) & (val < 1614)) {
      pageUp.style.background = "white";
      pageUp.style.color = "black";
      pageUp.style.borderColor = "white";
    } else if ((val > 2612) & (val < 3612)) {
      pageUp.style.background = "white";
      pageUp.style.color = "black";
      pageUp.style.borderColor = "white";
    } else {
      pageUp.style.background = "black";
      pageUp.style.color = "white";
      pageUp.style.borderColor = "black";
    }
  } else {
    if ((val > 2497) & (val < 2897)) {
      pageUp.style.background = "white";
      pageUp.style.color = "black";
      pageUp.style.borderColor = "white";
    } else {
      pageUp.style.background = "black";
      pageUp.style.color = "white";
      pageUp.style.borderColor = "black";
    }
  }
});
