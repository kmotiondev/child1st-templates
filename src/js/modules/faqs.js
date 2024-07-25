export const faqsWithCats = () => {

    let categoryTabs = document.querySelectorAll('.category-tab');
    let faqAccordion = document.getElementById("faq-accordion");

    if (!faqAccordion) {
        return;
    }

    function resetCategoryTabs() {

        categoryTabs.forEach(cat => {
            cat.classList.remove('tab--active');
        });

    }

    categoryTabs.forEach(cat => {

        cat.addEventListener('click', function(event) {

            event.preventDefault();
            resetCategoryTabs();

            if (cat.classList.contains('tab--active')) {
                cat.classList.remove('tab--active');
            } else {
                cat.classList.add('tab--active');
            }

            let slug = this.dataset.category;

            for (let faq of Array.from(faqAccordion.children)) {

                if (faq.dataset.category.includes(slug)) {
                    faq.style.display = "block";
                } else {
                    faq.style.display = "none";
                }

            }

        }, false);

    });

}