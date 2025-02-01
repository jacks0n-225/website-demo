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

  // Scrolling Text Animation
  const words = document.querySelectorAll('.word');
  let fakeScrollY = 0;
  let maxScroll = words.length * 100; // Dynamisch berechnet, hier 100 pro Wort

  function updateVisibility() {
    let progress = fakeScrollY / maxScroll;
    words.forEach((word, index) => {
      let threshold = index / words.length;
      if (progress >= threshold) {
        word.classList.add('visible');
      } else {
        word.classList.remove('visible');
      }
    });
  }

  function handleScroll(event) {
    event.preventDefault(); // Verhindert normales Browser-Scrolling
    fakeScrollY += event.deltaY * 3; // Scrollgeschwindigkeit anpassen
    fakeScrollY = Math.max(0, Math.min(fakeScrollY, maxScroll));
    updateVisibility();
  }

  window.addEventListener('wheel', handleScroll);
  updateVisibility();
});
