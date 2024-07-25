export const mobileMenu = () => {

    let root = document.getElementsByTagName( 'html' )[0];
    let mainmenu = document.getElementById("mainmenu");
    let menutoggle = document.getElementById("menutoggle");
    let mainnavlinks = document.querySelectorAll('.mainnav-link');
    const mediaMobile = window.matchMedia("(max-width: 1023px)");
    let open = false;

    if (!mainmenu) {
        return;
    }

    function hideMenu() {
        open = false;
        root.classList.remove('nav-open');
    }

    function showMenu() {
        open = true;
        root.classList.add('nav-open');
    }

    // Close on resize
    window.addEventListener('resize', function(event) {
        hideMenu();
    }, true);

    // Toggle action
    menutoggle.addEventListener('click', function (event) {

        event.preventDefault();

        open = root.classList.contains("nav-open");

        if (open) {
            hideMenu();
        } else {
            showMenu();
        }

    }, false);

    // Main nav submenu click event
    mainnavlinks.forEach(link => {

        link.addEventListener('click', function(event) {

            if (mediaMobile.matches && link.querySelectorAll('.submenu').length > 0) {

                if (event.target.classList.contains('submenu-link')) { return; }

                let submenus = link.querySelectorAll('.submenu');
                submenus.forEach(submenu => {

                    if (window.getComputedStyle(submenu, null).display == "none") {
                        submenu.style.display = "block";
                    } else {
                        submenu.style.display = "none";
                    }

                });

            }

            if (mediaMobile.matches && link.querySelectorAll('.megamenu').length > 0) {

                if (event.target.classList.contains('submenu-link')) { return; }
                if (event.target.classList.contains('megamenu-link')) { return; }
                if (event.target.classList.contains('megamenu-cta')) { return; }

                let megamenus = link.querySelectorAll('.megamenu');
                megamenus.forEach(megamenu => {

                    if (window.getComputedStyle(megamenu, null).display == "none") {
                        megamenu.style.display = "block";
                    } else {
                        megamenu.style.display = "none";
                    }

                });

            }

        });

    });

}