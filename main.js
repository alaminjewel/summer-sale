const inputCoupon = document.getElementById('coupon-input');
const applyButton = document.getElementById('apply-btn');
const totalPrice = document.getElementById('total-price')
const discount = document.getElementById('discount')
const total = document.getElementById('payable')
const itemList = document.getElementById('item')
const purchaseButton = document.getElementById('purchase-button')
const resetButton = document.getElementById('reset')


function addToCart(cardId, itemID, priceID) {
    document.getElementById(cardId).addEventListener('click', function (event) {
        if (event.target.classList.contains("icon")) {
            // console.log("hello")
        }
        else {
            const item = document.getElementById(itemID)
            const list = document.createElement('p');
            const count = itemList.childElementCount
            list.innerHTML = `${count + 1}. ${item.innerText}`
            itemList.appendChild(list)
            // console.log("hi")
            const totalFloat = parseFloat(totalPrice.innerText);
            const itemPriceStr = document.getElementById(priceID).innerText
            const itemPrice = parseFloat(itemPriceStr);
            // console.log(itemPrice);
            // console.log(totalFloat);

            const grossTotal = totalFloat + itemPrice;
            totalPrice.innerText = grossTotal;
            // console.log(grossTotal);
            if (grossTotal > 0) {
                purchaseButton.removeAttribute('disabled')
            }
            else {
                purchaseButton.setAttribute('disabled', true)
            }

            if (grossTotal >= 200 && inputCoupon.value === "coupon applied") {
                const discountAmount = grossTotal * .20;
                discount.innerText = discountAmount.toFixed(2);
                total.innerText = grossTotal - discountAmount;
            }



            if (inputCoupon.value === 'SELL200' && parseFloat(totalPrice.innerText) >= 200) {
                applyButton.removeAttribute('disabled');
                // console.log('working')
            }
            else {
                applyButton.setAttribute('disabled', true);
                // console.log("not")
            }

        }
        return
    })
}
addToCart('card-1', 'item-1', 'price-1')
addToCart('card-2', 'item-2', 'price-2')
addToCart('card-3', 'item-3', 'price-3')
addToCart('card-4', 'item-4', 'price-4')
addToCart('card-5', 'item-5', 'price-5')
addToCart('card-6', 'item-6', 'price-6')
addToCart('card-7', 'item-7', 'price-7')
addToCart('card-8', 'item-8', 'price-8')
addToCart('card-9', 'item-9', 'price-9')


// applying coupon
applyButton.addEventListener('click', function () {
    inputCoupon.value = "coupon applied";
    const grossTotal = parseFloat(totalPrice.innerText);
    if (grossTotal >= 200) {
        const discountAmount = grossTotal * .20;
        discount.innerText = discountAmount.toFixed(2);
        total.innerText = grossTotal - discountAmount;
    }
    applyButton.setAttribute('disabled', true)

})


// input coupon button enabling
inputCoupon.addEventListener('keyup', function (event) {
    const code = event.target.value;
    // console.log(code)
    if (inputCoupon.value === 'SELL200' && parseFloat(totalPrice.innerText) >= 200) {
        applyButton.removeAttribute('disabled');
        // console.log('working')
    }
    else {
        applyButton.setAttribute('disabled', true);
        // console.log("not")
    }
})
// reset everything
resetButton.addEventListener('click', function () {
    totalPrice.innerText = parseFloat('0.00');
    purchaseButton.setAttribute('disabled', true);
    discount.innerText = parseFloat('0.00')
    total.innerText = parseFloat('0.00')
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
    inputCoupon.value = ""
})