export const searchBar = () => {

    let searchIcon = document.getElementById("search-navlink");
    let searchBarElem = document.getElementById("searchbar");
    let searchBarInput = document.getElementById("search-products");
    let open = false;

    if (!searchBarElem) {
        return;
    }

    function hideSearch() {
        open = false;
        searchBarElem.classList.remove('open');
    }

    function showSearch() {
        open = true;
        searchBarElem.classList.add('open');
        searchBarInput.focus();
    }

    // Toggle search bar
    searchIcon.addEventListener('click', function (event) {

        event.preventDefault();

        open = searchBarElem.classList.contains("open");

        if (open) {
            hideSearch();
        } else {
            showSearch();
        }

    }, false);

    // Toggle search bar - mobile
    searchIcon.addEventListener('touchend', function (event) {

        event.preventDefault();

        open = searchBarElem.classList.contains("open");

        if (open) {
            hideSearch();
        } else {
            showSearch();
        }

    }, false);

}