var startPos=0,endPos=150,scrollIndicator=document.getElementById("scroll-indicator-js");function checkScrollPosition(){var o=window.scrollY;startPos<=o&&o<endPos?(scrollIndicator.classList.add("o-1"),scrollIndicator.classList.remove("o-0")):(scrollIndicator.classList.add("o-0"),scrollIndicator.classList.remove("o-1"))}window.addEventListener("scroll",checkScrollPosition);