export const showAll = () => {

    let showAllButtons = document.querySelectorAll('.show-all-btn');
    let show = false;

    if (!showAllButtons) {
        return;
    }

    showAllButtons.forEach(btn => {

        btn.addEventListener('click', function(event) {

            event.preventDefault();

            show = btn.parentElement.parentElement.classList.contains("show");

            if (!show) {
                show = true;
                btn.parentElement.parentElement.classList.add("show");
            }

        }, false);

        btn.addEventListener('touchend', function(event) {

            event.preventDefault();

            show = btn.parentElement.parentElement.classList.contains("show");

            if (!show) {
                show = true;
                btn.parentElement.parentElement.classList.add("show");
            }

        }, false);

    });

}