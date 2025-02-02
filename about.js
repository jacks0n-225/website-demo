document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menü
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
  
  // Desktop Sidebar
  const sidebarExpandBtn = document.getElementById("sidebar-expand-btn");
  const desktopSidebar = document.getElementById("desktop-sidebar");
  if (sidebarExpandBtn && desktopSidebar) {
    sidebarExpandBtn.addEventListener("click", function () {
      desktopSidebar.classList.add("expanded");
    });
  } else {
    console.error("❌ Desktop Sidebar-Erweiterungselemente nicht gefunden!");
  }
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  if (sidebarCloseBtn && desktopSidebar) {
    sidebarCloseBtn.addEventListener("click", function () {
      desktopSidebar.classList.remove("expanded");
    });
  } else {
    console.error("❌ Desktop Sidebar-Schließ-Button nicht gefunden!");
  }
  
  // Mobile Erweiterung: Umschalten des mobilen Headers über den Expand-Button
  const mobileHeader = document.getElementById("mobile-header");
  const mobileExpandBtn = document.getElementById("mobile-expand-btn");
  if (mobileHeader && mobileExpandBtn) {
    mobileExpandBtn.addEventListener("click", function () {
      mobileHeader.classList.toggle("expanded");
      // Aktualisiere das Icon im Button:
      // Im geschlossenen Zustand zeigen wir einen Pfeil nach unten (&#8595;),
      // im erweiterten Zustand ein Schließsymbol (&#10005;)
      if (mobileHeader.classList.contains("expanded")) {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#10005;</span>";
      } else {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
      }
    });
  } else {
    console.error("❌ Mobile Erweiterungselemente nicht gefunden!");
  }
  
  // Schließ-X im mobilen Erweiterungsbereich
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  if (mobileCloseBtn && mobileHeader) {
    mobileCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded");
      // Setze das Icon im Expand-Button zurück (Pfeil nach unten)
      const mobileExpandBtn = document.getElementById("mobile-expand-btn");
      if (mobileExpandBtn) {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#8595;</span>";
      }
    });
  } else {
    console.error("❌ Mobile Close-Button im Erweiterungsbereich nicht gefunden!");
  }
});
