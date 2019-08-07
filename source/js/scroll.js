// Init
var startPos = 0;
var endPos = 150;
var scrollIndicator = document.getElementById('scroll-indicator-js');

// Check scroll position
function checkScrollPosition() {
  var windowY = window.scrollY;
  if (windowY >= startPos && windowY < endPos) {
    // Scrolling up
    scrollIndicator.classList.add('o-1');
    scrollIndicator.classList.remove('o-0');
  }
  else {
    // Scrolling down
    scrollIndicator.classList.add('o-0');
    scrollIndicator.classList.remove('o-1');
  }
};

// Event listener
window.addEventListener("scroll", checkScrollPosition);
