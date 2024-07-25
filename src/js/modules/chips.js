export const chips = () => {

    let filterChips = document.querySelectorAll('.filter-chip');
    let filterChipMenus = document.querySelectorAll('.filter-dropdown-menu');
    let open = false;

    if (!filterChips) {
        return;
    }

    filterChips.forEach(chip => {

        chip.addEventListener('click', function (event) {

            event.preventDefault();

            open = chip.classList.contains("open");

            if (open) {
                open = false;
                chip.classList.remove('open');
            } else {
                open = true;
                chip.classList.add('open');
            }

        }, false);

        chip.addEventListener('touchend', function (event) {

            event.preventDefault();

            open = chip.classList.contains("open");

            if (open) {
                open = false;
                chip.classList.remove('open');
            } else {
                open = true;
                chip.classList.add('open');
            }

        }, false);

    });

    filterChipMenus.forEach(chipmenu => {

        chipmenu.addEventListener('click', function (event) {
            event.stopPropagation();
        }, false);

        chipmenu.addEventListener('touchend', function (event) {
            event.stopPropagation();
        }, false);

    });

}