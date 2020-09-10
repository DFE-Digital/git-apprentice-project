let button = document.getElementById("nav-menu");
let toggleIcon = document.getElementById("toggle-nav");
let desktopView = window.matchMedia("(min-width: 768px)");

function displayNavLinksOnMobileView() {
  button.classList.toggle("hidden");

  toggleIcon.classList.toggle("fa-window-close");
  toggleIcon.classList.toggle("fa-bars");
}

function displayNavMenu(desktopView) {
  if (desktopView.matches) {
    // If media query matches
    button.classList.remove("hidden");

    toggleIcon.classList.toggle("fa-window-close");
    toggleIcon.classList.toggle("fa-bars");
  }
}



displayNavMenu(desktopView);
desktopView.addListener(displayNavMenu);
