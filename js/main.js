// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");

    //- If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    //- To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".rightnav a[href*=" + sectionId + "]").classList.add("rightactive");
    } else {
      document.querySelector(".rightnav a[href*=" + sectionId + "]").classList.remove("rightactive");
    }
  });
}