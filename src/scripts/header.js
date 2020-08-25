// TODO: toggle hamburger icon to a window close icon when navbar is presented on mobile view
function displayNavLinksOnMobileView() {
      var button = document.getElementById("nav-menu");
          button.classList.toggle("hidden");
}

  function displayNavMenu(desktopView) {
    if (desktopView.matches) { // If media query matches
      var button = document.getElementById("nav-menu");
        button.classList.remove("hidden");
  }
}

var desktopView = window.matchMedia("(min-width: 768px)");
displayNavMenu(desktopView); 
desktopView.addListener(displayNavMenu);