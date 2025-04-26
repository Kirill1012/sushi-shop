
function calcCartPriceAndDelivery() {
    // const cartWrapper = document.querySelector(".cart-wrapper");
    const priceElements = document.querySelectorAll(".cart-item");
    const totalPriceEl = document.querySelector(".total-price");
    const deliveryCost = document.querySelector(".delivery-cost");
    const cartDelivery = document.querySelector("[data-cart-delivery]");

    let totalPrice = 0;

    priceElements.forEach(function (item) {

        const amountEl = item.querySelector("[data-counter]");
        const priceEl = item.querySelector(".price__currency");
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
        // totalPrice = totalPrice + currentPrice;

    });

    totalPriceEl.innerText = totalPrice;

    if(totalPrice > 0){
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add("none");
    }

    if(totalPrice >= 1000){
        deliveryCost.classList.add("free");
        deliveryCost.innerText = "Бесплатно";
    } else {
        deliveryCost.classList.remove("free");
        deliveryCost.innerText = "100 грн";
    }
}