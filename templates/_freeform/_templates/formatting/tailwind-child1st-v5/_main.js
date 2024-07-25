var form = document.querySelector('[data-id="{{ form.anchor }}"]');
if (form) {

    // Styling for AJAX responses
    form.addEventListener("freeform-ready", function (event) {
        var freeform = event.target.freeform;
        freeform.setOption("errorClassBanner", ["bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "mb-4"]);
        freeform.setOption("errorClassList", ["errors", "text-red-500", "text-xs", "pt-1"]);
        freeform.setOption("errorClassField", ["border-red-500"]);
        freeform.setOption("successClassBanner", ["bg-green-100", "border", "border-green-500", "text-green-700", "px-4", "py-3", "rounded", "relative", "mb-4"]);
    });

    // Styling for Stripe Payments field
    form.addEventListener("freeform-stripe-styling", function (event) {
        event.detail.base = {
            fontSize: "16px",
            fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        }
    });

    // Form overrides
    var formName = "{{ form }}";
    if (formName == "Quote Request") {

        // Add aria-label to blank table header in products table
        var productsTable = document.getElementById('products-table');
        if (productsTable) {

            var th = productsTable.getElementsByTagName('thead');
            var thRow = th[0].getElementsByTagName('tr');
            var tableHeaders = thRow[0].getElementsByTagName('th');

            tableHeaders[2].setAttribute('aria-label', 'Remove row');

        }

    }

}