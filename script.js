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
     DESKTOP: Erweitern der Sidebar
  ----------------------- */
  const desktopSidebar = document.getElementById("desktop-sidebar");

  // Imprint
  const desktopImprintLink = document.getElementById("desktop-imprint-link");
  if (desktopImprintLink && desktopSidebar) {
    desktopImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      desktopSidebar.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      desktopSidebar.classList.add("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Desktop Imprint-Link oder Sidebar nicht gefunden!");
  }

  // About
  const desktopAboutLink = document.getElementById("desktop-about-link");
  if (desktopAboutLink && desktopSidebar) {
    desktopAboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      desktopSidebar.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      desktopSidebar.classList.add("expanded", "about-active");
    });
  } else {
    console.error("❌ Desktop About-Link nicht gefunden!");
  }

  // Contact
  const desktopContactLink = document.getElementById("desktop-contact-link");
  if (desktopContactLink && desktopSidebar) {
    desktopContactLink.addEventListener("click", function (event) {
      event.preventDefault();
      desktopSidebar.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      desktopSidebar.classList.add("expanded", "contact-active");
    });
  } else {
    console.error("❌ Desktop Contact-Link nicht gefunden!");
  }

  // Projects (Desktop)
  const desktopProjectsLink = document.getElementById("desktop-projects-link");
  if (desktopProjectsLink && desktopSidebar) {
    desktopProjectsLink.addEventListener("click", function (event) {
      event.preventDefault();
      desktopSidebar.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      desktopSidebar.classList.add("expanded", "projects-active");
    });
  } else {
    console.error("❌ Desktop Projects-Link nicht gefunden!");
  }

  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  if (sidebarCloseBtn && desktopSidebar) {
    sidebarCloseBtn.addEventListener("click", function () {
      desktopSidebar.classList.remove("expanded", "imprint-active", "about-active", "contact-active", "projects-active");
    });
  } else {
    console.error("❌ Desktop Sidebar-Schließ-Button nicht gefunden!");
  }

  /* ----------------------
     MOBILE: Erweitern des Headers
  ----------------------- */
  const mobileHeader = document.getElementById("mobile-header");

  // Imprint
  const mobileImprintLink = document.getElementById("mobile-imprint-link");
  const mobileImprintCloseBtn = document.getElementById("mobile-imprint-close-btn");
  if (mobileImprintLink && mobileHeader) {
    mobileImprintLink.addEventListener("click", function (event) {
      event.preventDefault();
      mobileHeader.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      mobileHeader.classList.add("expanded", "imprint-active");
    });
  } else {
    console.error("❌ Mobile Imprint-Link nicht gefunden!");
  }
  if (mobileImprintCloseBtn && mobileHeader) {
    mobileImprintCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active", "about-active", "contact-active", "projects-active");
    });
  } else {
    console.error("❌ Mobile Imprint-Schließ-Button nicht gefunden!");
  }

  // About
  const mobileAboutLink = document.getElementById("mobile-about-link");
  const mobileAboutCloseBtn = document.getElementById("mobile-about-close-btn");
  if (mobileAboutLink && mobileHeader) {
    mobileAboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      mobileHeader.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      mobileHeader.classList.add("expanded", "about-active");
    });
  } else {
    console.error("❌ Mobile About-Link nicht gefunden!");
  }
  if (mobileAboutCloseBtn && mobileHeader) {
    mobileAboutCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active", "about-active", "contact-active", "projects-active");
    });
  } else {
    console.error("❌ Mobile About-Schließ-Button nicht gefunden!");
  }

  // Contact
  const mobileContactLink = document.getElementById("mobile-contact-link");
  const mobileContactCloseBtn = document.getElementById("mobile-contact-close-btn");
  if (mobileContactLink && mobileHeader) {
    mobileContactLink.addEventListener("click", function (event) {
      event.preventDefault();
      mobileHeader.classList.remove("imprint-active", "about-active", "contact-active", "projects-active");
      mobileHeader.classList.add("expanded", "contact-active");
    });
  } else {
    console.error("❌ Mobile Contact-Link nicht gefunden!");
  }
  if (mobileContactCloseBtn && mobileHeader) {
    mobileContactCloseBtn.addEventListener("click", function () {
      mobileHeader.classList.remove("expanded", "imprint-active", "about-active", "contact-active", "projects-active");
    });
  } else {
    console.error("❌ Mobile Contact-Schließ-Button nicht gefunden!");
  }

  // Hinweis: Da wir das mobile Menü-Overlay jetzt direkt mit dem Projektgrid befüllen,
  // entfällt der bisherige Event-Listener für den "mobile-projects-link-menu".

  /* ----------------------
     Kontaktformular: Verhindern des Standard-Submit-Events
  ----------------------- */
  const contactFormDesktop = document.getElementById("contact-form-desktop");
  const contactFormMobile = document.getElementById("contact-form-mobile");

  if (contactFormDesktop) {
    contactFormDesktop.addEventListener("submit", function (event) {
      event.preventDefault();
      // Hier kann z.B. per AJAX die Nachricht versendet werden
      console.log("Desktop Kontaktformular abgeschickt!");
      // Formular zurücksetzen
      contactFormDesktop.reset();
    });
  }

  if (contactFormMobile) {
    contactFormMobile.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Mobile Kontaktformular abgeschickt!");
      contactFormMobile.reset();
    });
  }
});
