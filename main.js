

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var element = document.getElementById("hide");
  element.classList.add("mystyle");
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var element = document.getElementById("hide");
  element.classList.remove("mystyle");
    window.onscroll = function() {};
  }
  // function scrollblock(){
  //   document.getElementById("hide").style.z-index = "999";
  // }






  function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);

function display() {
var displays = document.querySelectorAll(".display-lft");

for (var i = 0; i < displays.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = displays[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
displays[i].classList.add("active");
} else {
displays[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", display);
