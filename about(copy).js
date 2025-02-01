document.addEventListener("DOMContentLoaded", function () {
  // Menü-Funktionalität
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
    console.error("❌ Menü-Elemente nicht gefunden! Überprüfe die IDs im HTML.");
  }

  // Ermitteln, ob mobile Ansicht vorliegt (Breite < 700px)
  const isMobile = window.matchMedia("(max-width: 700px)").matches;

  if (!isMobile) {
    // Desktop: Scrolling Text Animation
    const words = document.querySelectorAll('.word');
    let fakeScrollY = 0;
    let maxScroll = words.length * 100; // z. B. 100 Einheiten pro Wort

    function updateVisibility() {
      const progress = fakeScrollY / maxScroll;
      words.forEach((word, index) => {
        const threshold = index / words.length;
        if (progress >= threshold) {
          word.classList.add('visible');
        } else {
          word.classList.remove('visible');
        }
      });
    }

    function handleScroll(event) {
      event.preventDefault(); // Verhindert das Standard-Scrollen
      fakeScrollY += event.deltaY * 3; // Scrollgeschwindigkeit anpassen
      fakeScrollY = Math.max(0, Math.min(fakeScrollY, maxScroll));
      updateVisibility();
    }

    window.addEventListener('wheel', handleScroll, { passive: false });
    updateVisibility();
  } else {
    // Mobile: Popup-Funktionalität
    const helloBtn = document.getElementById("hello-btn");
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");

    if (helloBtn && popup && popupClose) {
      helloBtn.addEventListener("click", function () {
        popup.style.display = "block";
        helloBtn.style.display = "none"; // Button verschwindet nach Klick
      });

      popupClose.addEventListener("click", function () {
        popup.style.display = "none";
        helloBtn.style.display = "block"; // Button erscheint wieder, wenn Popup geschlossen wird
      });
    } else {
      console.error("❌ Mobile-Elemente (helloBtn, popup oder popupClose) nicht gefunden!");
    }
  }
});
