// @reference: https://github.com/Shopify/buy-button-js/blob/master/src/defaults/components.js

export default () => {

    const ShopifyBuy = window.ShopifyBuy;
    if (ShopifyBuy === undefined) {
        return;
    }

    // Initialize a client:
    const client = ShopifyBuy.buildClient({
      domain: "child1st-publications.myshopify.com",
      storefrontAccessToken: "31513eda773841010ef2b2e29b1e3940",
    });

    window.shopifyBuyClient = client;


    ShopifyBuy.UI.onReady(client).then(function (ui) {

        ui.createComponent('cart', {
            id: 1234567,
            node: document.getElementById('shopify-cart'),
            toggles: [{
                node: document.querySelector('.showcart'),
            }],
            options: {
                "cart": {
                    "events": {
                        openCheckout: function (cart) {

                            let cart_line_items = [];

                            cart.model.lineItems.map((item) => {

                                let product = item;
                                let variant = product.variant;

                                cart_line_items.push({
                                    item_id: variant.sku,
                                    item_name: product.title,
                                    item_variant: variant.title,
                                    price: variant.price.amount,
                                    quantity: item.quantity,
                                    currency: 'USD',
                                });

                            });

                            let checkout_cart_data = {
                                currency: cart.model.totalPrice.currencyCode,
                                value: cart.model.totalPrice.amount,
                                items: cart_line_items
                            };
                            gtag('event', 'view_cart', checkout_cart_data);

                        }
                    },
                    "contents": {
                        "button": true,
                        "note": true,
                    },
                    "text": {
                        noteDescription: 'Add a note to your order',
                    },
                    "styles": {
                        "button": {
                            "background-color": "#2568CB",
                            "border-radius": "40px",
                            ":hover": {
                                "background-color": "#2568CB"
                            },
                            ":focus": {
                                "background-color": "#2568CB"
                            }
                        },
                    },
                    "popup": false,

                    // "DOMEvents": {
                    //     'click .shopify-buy__btn--cart-checkout': function (evt, target) {
                    //         console.log(evt);
                    //     }
                    // },
                },

                "toggle": {
                    "sticky": false,
                    "iframe": false,
                    "contents": {
                        "title": false,
                        "icon": true,
                        "count": false,
                    },
                    templates: {
                        icon: '<svg data-element="toggle.icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.3089 14.8413C35.1434 14.655 34.9402 14.5061 34.7129 14.4041C34.4856 14.3022 34.2392 14.2497 33.9901 14.25H27.7501V14C27.7501 12.475 27.1443 11.0125 26.066 9.93414C24.9876 8.8558 23.5251 8.25 22.0001 8.25C20.4751 8.25 19.0126 8.8558 17.9342 9.93414C16.8559 11.0125 16.2501 12.475 16.2501 14V14.25H10.0101C9.76197 14.2483 9.51632 14.2994 9.28944 14.3998C9.06255 14.5003 8.85963 14.6479 8.69414 14.8328C8.52864 15.0177 8.40435 15.2356 8.32952 15.4722C8.25469 15.7088 8.23103 15.9586 8.2601 16.205L10.0414 31.205C10.0934 31.6321 10.3002 32.0253 10.6228 32.31C10.9453 32.5948 11.3611 32.7513 11.7914 32.75H32.2089C32.6391 32.7513 33.0549 32.5948 33.3774 32.31C33.7 32.0253 33.9068 31.6321 33.9589 31.205L35.7401 16.205C35.7683 15.9601 35.7445 15.7121 35.6702 15.4771C35.5958 15.242 35.4727 15.0254 35.3089 14.8413ZM17.7501 14C17.7501 12.8728 18.1979 11.7918 18.9949 10.9948C19.7919 10.1978 20.8729 9.75 22.0001 9.75C23.1273 9.75 24.2083 10.1978 25.0053 10.9948C25.8023 11.7918 26.2501 12.8728 26.2501 14V14.25H17.7501V14ZM32.4664 31.0287C32.4592 31.0913 32.4286 31.1488 32.3809 31.1898C32.3332 31.2308 32.2717 31.2523 32.2089 31.25H11.7914C11.7285 31.2523 11.667 31.2308 11.6193 31.1898C11.5716 31.1488 11.541 31.0913 11.5339 31.0287L9.7501 16.0288C9.74589 15.9943 9.74919 15.9594 9.75976 15.9264C9.77033 15.8934 9.78793 15.8631 9.81135 15.8375C9.83602 15.8095 9.86644 15.7873 9.90053 15.7722C9.93462 15.7571 9.97157 15.7495 10.0089 15.75H16.2501V19C16.2501 19.1989 16.3291 19.3897 16.4698 19.5303C16.6104 19.671 16.8012 19.75 17.0001 19.75C17.199 19.75 17.3898 19.671 17.5304 19.5303C17.6711 19.3897 17.7501 19.1989 17.7501 19V15.75H26.2501V19C26.2501 19.1989 26.3291 19.3897 26.4698 19.5303C26.6104 19.671 26.8012 19.75 27.0001 19.75C27.199 19.75 27.3898 19.671 27.5304 19.5303C27.6711 19.3897 27.7501 19.1989 27.7501 19V15.75H33.9901C34.0274 15.7495 34.0643 15.7571 34.0984 15.7722C34.1325 15.7873 34.1629 15.8095 34.1876 15.8375C34.211 15.8631 34.2286 15.8934 34.2392 15.9264C34.2498 15.9594 34.2531 15.9943 34.2489 16.0288L32.4664 31.0287Z" fill="#253F84"/></svg>',
                        // count: '<div class="{{data.classes.toggle.count}}" data-element="toggle.count">{{data.count}}</div>'
                    },
                    classes: {
                        wrapper: 'x-shopify-buy__cart-toggle-wrapper',
                        toggle: 'x-shopify-buy__cart-toggle',
                        title: 'x-shopify-buy__cart-toggle__title',
                        count: 'x-shopify-buy__cart-toggle__count',
                        icon: 'x-shopify-buy__icon-cart shopify-buy__icon-cart--side',
                        iconPath: 'shopify-buy__icon-cart__group'
                    },
                    "styles": {
                        "toggle": {
                            "background-color": "#2568CB",
                            ":hover": {
                                "background-color": "#2568CB"
                            },
                            ":focus": {
                                "background-color": "#2568CB"
                            }
                        }
                    }
                },
            },

        });
        
        
        let didRender = 0;
        let hasMultiVariant = false;
        let cartLinks = document.querySelectorAll('.buy-button');
        
        Array.from(cartLinks).forEach(link => {
            
            let productId = link.getAttribute('data-default-variant-id');
            let productNode = document.getElementById(`product-component-${productId}`); 

            ui.createComponent('product', {
                id: productId,
                node: productNode,
                options: {
                    product: {
                        iframe: false,
                        "events": {
                            afterRender: function (product) {
                                didRender++;
                                // only run once - not sure why this is called twice
                                if (didRender === 1) {

                                    let radios = document.getElementsByClassName('radio-variant-option');
                                    let productSelect = document.querySelector('.shopify-buy__option-select__select');
                                    if (radios.length > 0) {

                                        hasMultiVariant = true;

                                        for (var i = 0; i < radios.length; i++) {

                                            let radio = radios[i];
                                            radio.checked = (radio.value === productSelect.value);

                                            radio.addEventListener('change', function (event) {

                                                // prevent browser's default action
                                                event.preventDefault();
                                                let option = productSelect.getAttribute('name');
                                                product.updateVariant(option, radio.value);
                                    
                                                // call your awesome function here
                                                if (window.variantImages !== undefined) {
                                                    updateVariantSlides(radio.value)
                                                }

                                                // Send view_item GA4 event
                                                ga4ViewEvent(product);

                                            }, false);
                                            
                                        };


                                    }
                                }

                                if (hasMultiVariant) {
                                    let variantSelect = document.querySelector('.shopify-buy__product__variant-selectors');
                                    variantSelect.style.display = 'none';
                                }
                            },
                        },    
                        contents: {
                            img: false,
                            quantity: false,
                            title: false,
                            options: true,
                            price: true,
                        },
                        DOMEvents: {

                            'change .shopify-buy__option-select__select': function (evt, target) {

                                if (window.variantImages !== undefined) {
                                    updateVariantSlides(target.value)
                                }

                                let option = target.getAttribute('name');
                                let value = target.options[target.selectedIndex].value;
                                let product = ui.components.product[0];
                                product.updateVariant(option, value);

                                // Send view_item GA4 event
                                ga4ViewEvent(product);
                                
                            },
                            'click .shopify-buy__btn-wrapper .shopify-buy__btn': function (evt, target) {

                                let product = ui.components.product[0];
                                let prod_name = product.model.title;
                                let prod_qty = product.selectedQuantity;
                                let prod_sku = product.selectedVariant.sku;
                                let prod_price = product.selectedVariant.price.amount;

                                let add_to_cart_data = {
                                    item_id: prod_sku,
                                    item_name: prod_name,
                                    price: prod_price,
                                    quantity: prod_qty,
                                    currency: 'USD',
                                };
                                gtag('event', 'add_to_cart', add_to_cart_data);

                            },
                        },
                        text: {
                            button: 'Add to Cart',
                            outOfStock: 'Out of stock',
                            unavailable: 'Unavailable',
                            unitPriceAccessibilityLabel: 'Unit price',
                            unitPriceAccessibilitySeparator: 'per',
                            regularPriceAccessibilityLabel: 'Regular price',
                            salePriceAccessibilityLabel: 'Sale price',
                        },
                        templates: {
                            price: `<div class="font-semibold text-blue-900 py-6" data-element="product.prices">
                                {{#data.selectedVariant}}
                                <span class="visuallyhidden hidden">{{data.priceAccessibilityLabel}}&nbsp;</span>
                                <span class="{{data.classes.product.price}} {{data.priceClass}}" data-element="product.price">{{data.formattedPrice}}</span>
                                {{#data.hasCompareAtPrice}}
                                <span class="visuallyhidden hidden">{{data.compareAtPriceAccessibilityLabel}}&nbsp;</span>
                                <span class="visuallyhidden hidden {{data.classes.product.compareAt}}" data-element="product.compareAt">{{data.formattedCompareAtPrice}}</span>
                                {{/data.hasCompareAtPrice}}
                                {{#data.showUnitPrice}}
                                <div class="{{data.classes.product.unitPrice}}" data-element="product.unitPrice">
                                <span class="visuallyhidden">{{data.text.unitPriceAccessibilityLabel}}</span>
                                {{data.formattedUnitPrice}}<span aria-hidden="true">/</span><span class="visuallyhidden">&nbsp;{{data.text.unitPriceAccessibilitySeparator}}&nbsp;</span>{{data.formattedUnitPriceBaseUnit}}
                                </div>
                                {{/data.showUnitPrice}}
                                {{/data.selectedVariant}}
                            </div>`,
                        },
                    },
                    option: {
                        templates: {
                            option: `<div class="{{data.classes.option.option}}" data-element="option.option">
                            <label for="{{data.selectId}}" class="{{data.classes.option.label}} {{#data.onlyOption}}{{data.classes.option.hiddenLabel}}{{/data.onlyOption}}" data-element="option.label">{{data.name}}</label>
                              <div class="{{data.classes.option.wrapper}}" data-element="option.wrapper">
                              <select id="{{data.selectId}}" class="{{data.classes.option.select}} variant-option" name="{{data.name}}" data-element="option.select">
                                {{#data.values}}
                                  <option {{#selected}}selected{{/selected}} value="{{name}}">{{name}}</option>
                                {{/data.values}}
                              </select>
                              <svg class="{{data.classes.option.selectIcon}}" data-element="option.selectIcon" viewBox="0 0 24 24"><path d="M21 5.176l-9.086 9.353L3 5.176.686 7.647 12 19.382 23.314 7.647 21 5.176z"></path></svg>
                            </div>
                          </div>`
                        }
                    }
                }
            });


            // link.addEventListener('click', function(event) {
            // });
        });

    });

    function updateVariantSlides(variant) {
        let slideImages = window.variantImages[variant];
        if (slideImages !== undefined) {
            
            let slides = [];

            slideImages.forEach(function (image, index) {
                slides.push(`<div class="swiper-slide p-4 md:p-8 bg-no-repeat aspect-[6/5]"><img class="w-auto h-full xl:min-w-[750px] xl:min-h-[750px] mx-auto select-none" src="${image.src}" alt="${image.title}"></div>`);
            });                                    

            if (slides.length !== 0) {
                let variantSwiper = document.getElementById("product-variant-swiper").swiper;
                variantSwiper.params.loop = false;
                variantSwiper.removeAllSlides();
                variantSwiper.addSlide(0, slides);
                variantSwiper.params.loop = true;
                variantSwiper.update();
            }

        }
    }

    function ga4ViewEvent(product) {

        try {

            let product_data_object = {
                item_id: product.selectedVariant.sku,
                shopify_id: product.id,
                item_name: product.handle,
                price: product.selectedVariant.price.amount,
                currency: 'USD',
            };
            gtag('event', 'view_item', product_data_object);

        } catch (err) {
            console.log("%c" + err.message, "color:darkorange");
        }

    }

}

    // let minicart_el = document.querySelector(".showcart");
    // minicart_el.addEventListener('click', function (event) {
    //     // console.log('click');
    //     ShopifyBuy.UI.onReady(window.shopifyBuyClient).then(function (ui) {
    //       ui.openCart();
    //     });
    // //     // console.log(ui.components.cart[0]);
    // //     // ui.components.cart[0].toggleVisibility(true)
    // //     // cart.;
    //     // event.preventDefault();
    // //     // ShopifyBuy.UI.onReady(window.shopifyBuyClient).then(function (ui) {
    // //     //   ui.openCart();
    // //     // });
    // }, false);

    
// // Create a simple logger for the cart’s state:

// const logCart = (c) => {
//   console.log(c.lineItems);
//   console.log(`Checkout URL: ${c.webUrl}`);
// };

// // Create a cart or “checkout” (or perhaps load one from `localStorage`):
// client.checkout.create().then((checkout) => {
//     const $buyButtons = document.querySelectorAll(".buy-button");
//         // Add a listener to each button:
//         $buyButtons.forEach(($b) => {

//             $b.addEventListener("click", (e) => {
//                 client.checkout.addLineItems(checkout.id, [{
//                     variantId: `gid://shopify/ProductVariant/${$b.dataset.defaultVariantId}`,
//                     quantity: 1,
//                 },]).then(logCart);
//             });
//     });
// });