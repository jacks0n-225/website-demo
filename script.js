document.addEventListener("DOMContentLoaded", function () {
  /* ----------------------
     MOBILE MENÜ-FUNKTIONALITÄT
  ----------------------- */
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");

  if (menuToggle && menuClose && menu) {
    menuToggle.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.add("active");
    });
    menuClose.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.remove("active");
    });
  } else {
    console.error("❌ Mobile Menü-Elemente nicht gefunden!");
  }

  /* ----------------------
     HORIZONTALES SCROLLING per Mausrad
  ----------------------- */
  const scroller = document.querySelector(".image-scroller");
  const scrollSpeed = 10;
  scroller.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    scroller.scrollLeft += evt.deltaY * scrollSpeed;
  });

  /* ----------------------
     DESKTOP: Imprint-Funktionalität
  ----------------------- */
  const desktopSidebar = document.getElementById("desktop-sidebar");
  const desktopImprintLink = document.getElementById("desktop-imprint-link");
  if (desktopImprintLink && desktopSidebar) {
    desktopImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Fügt Klassen hinzu, um die Sidebar zu erweitern und den Imprint anzuzeigen
      desktopSidebar.classList.add("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Desktop Imprint-Link oder Sidebar nicht gefunden!");
  }

  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  if (sidebarCloseBtn && desktopSidebar) {
    sidebarCloseBtn.addEventListener("click", function () {
      desktopSidebar.classList.remove("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Desktop Sidebar-Schließ-Button nicht gefunden!");
  }

  /* ----------------------
     MOBILE: Imprint-Funktionalität
  ----------------------- */
  const mobileHeader = document.getElementById("mobile-header");
  const mobileImprintLink = document.getElementById("mobile-imprint-link");
  const mobileImprintCloseBtn = document.getElementById("mobile-imprint-close-btn");

  if (mobileImprintLink && mobileHeader) {
    mobileImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Erweitert den mobilen Header und zeigt den Imprint-Inhalt
      mobileHeader.classList.add("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Mobile Imprint-Link nicht gefunden!");
  }

  if (mobileImprintCloseBtn && mobileHeader) {
    mobileImprintCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Mobile Imprint-Schließ-Button nicht gefunden!");
  }
});
