document.addEventListener("DOMContentLoaded", function () {
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

    // Horizontal Scroll mit Mausrad (angepasste Geschwindigkeit)
    const scroller = document.querySelector(".image-scroller");
    const scrollSpeed = 10; // Ändere diesen Wert, um die Geschwindigkeit zu steuern

    scroller.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scroller.scrollLeft += evt.deltaY * scrollSpeed;
    });

    // Touch-Swipe Unterstützung für mobiles Scrollen
    let touchStartX = 0;
    scroller.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    scroller.addEventListener("touchmove", (e) => {
        if (touchStartX !== 0) {
            const touchDeltaX = touchStartX - e.touches[0].clientX;
            scroller.scrollLeft += touchDeltaX * 0.5;
            touchStartX = e.touches[0].clientX;
        }
    });
});
