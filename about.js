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
  
  /* --- Mobile Erweiterung --- */
  const mobileHeader = document.getElementById("mobile-header");
  const mobileExpandBtn = document.getElementById("mobile-expand-btn");
  if (mobileHeader && mobileExpandBtn) {
    mobileExpandBtn.addEventListener("click", function () {
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
  
  /* --- Mobile Close-Button im erweiterten Bereich --- */
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  if (mobileCloseBtn && mobileHeader) {
    mobileCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded");
      mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
    });
  } else {
    console.error("❌ Mobile Close-Button im Erweiterungsbereich nicht gefunden!");
  }
  
  /* --- Mobile Imprint Panel --- */
  const mobileImprintLink = document.getElementById("mobile-imprint-link");
  const mobileImprintPanel = document.getElementById("mobile-imprint-panel");
  const mobileImprintCloseBtn = document.getElementById("mobile-imprint-close-btn");
  if (mobileImprintLink && mobileImprintPanel) {
    mobileImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      mobileImprintPanel.classList.add("expanded");
    });
  } else {
    console.error("❌ Mobile Imprint-Link oder -Panel nicht gefunden!");
  }
  if (mobileImprintCloseBtn && mobileImprintPanel) {
    mobileImprintCloseBtn.addEventListener("click", function () {
      mobileImprintPanel.classList.remove("expanded");
    });
  } else {
    console.error("❌ Mobile Imprint Close-Button nicht gefunden!");
  }
});
