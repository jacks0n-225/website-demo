document.addEventListener("DOMContentLoaded", function () {
  /* --- Mobile Menü --- */
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
  
  /* --- Desktop Sidebar --- */
  const desktopSidebar = document.getElementById("desktop-sidebar");
  const sidebarExpandBtn = document.getElementById("sidebar-expand-btn");
  if (sidebarExpandBtn && desktopSidebar) {
    sidebarExpandBtn.addEventListener("click", function () {
      // Beim Klick auf den Expand-Button wird die Sidebar erweitert
      // und der About-Inhalt angezeigt (Im vorherigen Imprint-Modus zurücksetzen)
      desktopSidebar.classList.add("expanded");
      desktopSidebar.classList.remove("imprint-active");
    });
  } else {
    console.error("❌ Desktop Sidebar-Erweiterungselemente nicht gefunden!");
  }
  
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  if (sidebarCloseBtn && desktopSidebar) {
    sidebarCloseBtn.addEventListener("click", function () {
      desktopSidebar.classList.remove("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Desktop Sidebar-Schließ-Button nicht gefunden!");
  }
  
  /* --- Desktop Imprint Link --- */
  const desktopImprintLink = document.getElementById("desktop-imprint-link");
  if (desktopImprintLink && desktopSidebar) {
    desktopImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Sidebar erweitern und in den Imprint-Modus schalten
      desktopSidebar.classList.add("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Desktop Imprint-Link oder Sidebar nicht gefunden!");
  }
  
  /* --- Mobile Erweiterung (About) --- */
  const mobileHeader = document.getElementById("mobile-header");
  const mobileExpandBtn = document.getElementById("mobile-expand-btn");
  if (mobileHeader && mobileExpandBtn) {
    mobileExpandBtn.addEventListener("click", function () {
      // Beim Klick auf den Pfeil (Mobile Expand) wird der About-Modus getoggelt.
      // Falls gerade der Imprint-Modus aktiv ist, wird dieser wieder deaktiviert.
      mobileHeader.classList.remove("imprint-active");
      mobileHeader.classList.toggle("expanded");
      if (mobileHeader.classList.contains("expanded")) {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#10005;</span>";
      } else {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
      }
    });
  } else {
    console.error("❌ Mobile Erweiterungselemente nicht gefunden!");
  }
  
  /* --- Mobile Close-Button im About-Bereich --- */
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  if (mobileCloseBtn && mobileHeader) {
    mobileCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active");
      mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
    });
  } else {
    console.error("❌ Mobile Close-Button im About-Bereich nicht gefunden!");
  }
  
  /* --- Mobile Imprint Link (Footer) --- */
  const mobileImprintLink = document.getElementById("mobile-imprint-link");
  if (mobileImprintLink && mobileHeader) {
    mobileImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Beim Klick auf den Imprint-Link im Footer:
      // – mobileHeader erweitern (falls noch nicht geschehen)
      // – Klasse "imprint-active" hinzufügen, damit der Imprint-Content angezeigt wird
      mobileHeader.classList.add("expanded", "imprint-active");
      mobileExpandBtn.innerHTML = "<span class='arrow'>&#10005;</span>";
    });
  } else {
    console.error("❌ Mobile Imprint-Link nicht gefunden!");
  }
  
  /* --- Mobile Close-Button im Imprint-Bereich --- */
  const mobileImprintCloseBtn = document.getElementById("mobile-imprint-close-btn");
  if (mobileImprintCloseBtn && mobileHeader) {
    mobileImprintCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active");
      mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
    });
  } else {
    console.error("❌ Mobile Imprint Close-Button nicht gefunden!");
  }
});
