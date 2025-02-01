document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menü (unverändert)
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
  
  // Desktop Sidebar (unverändert)
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
  
  // Mobile Erweiterung: Umschalten des mobilen Headers
  const mobileHeader = document.getElementById("mobile-header");
  const mobileExpandBtn = document.getElementById("mobile-expand-btn");
  if (mobileHeader && mobileExpandBtn) {
    mobileExpandBtn.addEventListener("click", function () {
      mobileHeader.classList.toggle("expanded");
      // Aktualisiere das Icon im Button: Bei erweitert X, sonst Pfeil (→)
      if (mobileHeader.classList.contains("expanded")) {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#10005;</span>";
      } else {
        mobileExpandBtn.innerHTML = "<span class='arrow'>&#8594;</span>";
      }
    });
  } else {
    console.error("❌ Mobile Erweiterungselemente nicht gefunden!");
  }
});
