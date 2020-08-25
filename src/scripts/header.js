function displayNavLinksOnMobileView() {
      var button = document.getElementById("nav-menu");
          button.classList.toggle("hidden");
    
      // TODO: toggle bars icon to window-close icon when nav menu is visible on mobile view 
      // bars icon visible only when nav menu is not visible
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