"use strict";

//Wait until the page is loaded to fire animations on
//landing page
$(document).ready(function() {
  document.querySelector("#introWords").classList.add("loaded");
  $(openAndCloseModals);
});

// make Navbar "stick" on scroll
window.onscroll = function() {
  makeNavStick();
  highlightSection();
};

// Get the navbar
let navbar = document.getElementById("navBar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// move to sections on click and underline applicable section

$(".scrollToSection").on("click", function() {
  let classes = this.className;
  let headerOffset = 70;
  if (classes.includes("aboutSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top - headerOffset - 20
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document.getElementById("sectionUnderline").classList.add("highlightAbout");
  } else if (classes.includes("projectSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#projectSection").offset().top - headerOffset - 30
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightProjects");
  } else if (classes.includes("contactSection")) {
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top - headerOffset - 20
      },
      "slow"
    );
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightContact");
  } else {
    console.log("section to scroll not recognized");
  }
});

// move underline to applicable section based on scroll

function highlightSection() {
  let aboutPos = document.getElementById("about").offsetTop - 150;
  let projectPos =
    document.getElementById("projectSection").offsetTop -
    document.getElementById("about").offsetHeight / 2;
  let contactPos =
    document.getElementById("contact").offsetTop -
    document.getElementById("projectSection").offsetHeight / 5;
  let currentPos = window.pageYOffset;

  if (currentPos >= aboutPos && currentPos < projectPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document.getElementById("sectionUnderline").classList.add("highlightAbout");
    document.getElementById("sectionUnderline").style.visibility = "visible";
  } else if (currentPos >= projectPos && currentPos < contactPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightContact");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightProjects");
  } else if (currentPos >= contactPos) {
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightProjects");
    document
      .getElementById("sectionUnderline")
      .classList.remove("highlightAbout");
    document
      .getElementById("sectionUnderline")
      .classList.add("highlightContact");
  } else if (currentPos < aboutPos - 50) {
    document.getElementById("sectionUnderline").style.visibility = "hidden";
  }
}

function openAndCloseModals() {
  let beerBellyButton = document.getElementById("beerBelly");
  let pantryButton = document.getElementById("pantry");
  let reactButton = document.getElementById("react");
  let reactNativeButton = document.getElementById("reactNative");
  let reactDescriptionButton = document.getElementsByClassName("fa-react");
  let textButtons = document.getElementsByClassName("textButton");

  let beerBellyModal = document.getElementById("beerBellyModal");
  let pantryModal = document.getElementById("pantryModal");
  let reactModal = document.getElementById("reactModal");
  let reactNativeModal = document.getElementById("reactNativeModal");

  let closeModal = document.getElementsByClassName("close");

  window.onclick = function(event) {
    switch (event.target) {
      case beerBellyButton:
        beerBellyModal.style.display = "block";
        break;
      case pantryButton:
        pantryModal.style.display = "block";
        break;
      case reactButton:
        reactModal.style.display = "block";
        break;
      case reactDescriptionButton[0]:
        reactModal.style.display = "block";
        break;
      case textButtons[0]:
        reactModal.style.display = "block";
        break;
      case reactNativeButton:
        reactNativeModal.style.display = "block";
        break;
      case textButtons[1]:
        reactNativeModal.style.display = "block";
        break;
      case beerBellyModal:
        beerBellyModal.style.display = "none";
        break;
      case pantryModal:
        pantryModal.style.display = "none";
        break;
      case reactModal:
        reactModal.style.display = "none";
        break;
      case reactNativeModal:
        reactNativeModal.style.display = "none";
        break;
      case closeModal[0]:
        event.target.parentElement.parentElement.style.display = "none";
        break;
      case closeModal[1]:
        event.target.parentElement.parentElement.style.display = "none";
        break;
      case closeModal[2]:
        event.target.parentElement.parentElement.style.display = "none";
        break;
      case closeModal[3]:
        event.target.parentElement.parentElement.style.display = "none";
        break;
    }
  };
}
