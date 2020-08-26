function displayNavLinksOnMobileView() {
  let button = document.getElementById("nav-menu");
  button.classList.toggle("hidden");

  let toggleIcon = document.getElementById("toggle-nav");
  toggleIcon.classList.toggle("fa-window-close");
  toggleIcon.classList.toggle("fa-bars");
}

function displayNavMenu(desktopView) {
  if (desktopView.matches) {
    // If media query matches
    let button = document.getElementById("nav-menu");
    button.classList.remove("hidden");
  }
}

let desktopView = window.matchMedia("(min-width: 768px)");
displayNavMenu(desktopView);
desktopView.addListener(displayNavMenu);
