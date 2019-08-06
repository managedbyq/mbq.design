const startPos = 0;
const endPos = 150;
const scrollIndicator = document.getElementById('scroll-indicator-js');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY >= startPos && windowY < endPos) {
    // Scrolling up
    scrollIndicator.classList.add('o-1');
    scrollIndicator.classList.remove('o-0');
  }
  else {
    // Scrolling down
    scrollIndicator.classList.add('o-0');
    scrollIndicator.classList.remove('o-1')
  }
};

window.addEventListener("scroll", checkPosition);
