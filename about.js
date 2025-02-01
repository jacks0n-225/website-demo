document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const whoAmIButton = document.getElementById("who-am-i");  // Der Who am I-Button
    const textOverlay = document.getElementById("textOverlay"); // Das Overlay-Popup
    const closeButton = document.getElementById("close-popup"); // Der X-Button im Popup
    const navLinks = document.getElementById("nav-links"); // Die Navigation Links
    
    // Hamburger Menü
    if (menuToggle && menuClose && menu) {
        menuToggle.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.add("active"); // Menü anzeigen
        });

        menuClose.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.remove("active"); // Menü ausblenden
        });
    }

    // Wenn der "Who am I"-Button geklickt wird
    whoAmIButton.addEventListener("click", function () {
        textOverlay.style.display = "flex";  // Popup anzeigen
        whoAmIButton.style.display = "none"; // "Who am I"-Button ausblenden
        menu.classList.remove("active"); // Menü ausblenden, falls es geöffnet war
    });

    // Wenn der X-Button des Popups geklickt wird
    closeButton.addEventListener("click", function () {
        textOverlay.style.display = "none"; // Popup ausblenden
        whoAmIButton.style.display = "block"; // "Who am I"-Button wieder anzeigen
    });
});
