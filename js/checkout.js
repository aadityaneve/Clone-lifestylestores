let basket = JSON.parse(localStorage.getItem('basket'));

let checkoutProductDiv = document.getElementById('checkoutProductDiv');
let checkoutProductDivImg = document.getElementById('checkoutProductDivImg');
let checkoutProductDivDetails = document.getElementById('checkoutProductDivDetails');
// let checkoutQuantityAndPrice = document.getElementById('checkoutQuantityAndPrice');
let checkoutSubtotalDiv = document.getElementById('checkoutSubtotalDiv');


console.log(basket);

basket.forEach( function (element) {
    let img = document.createElement('img');
        img.src = element.img[0];

    let brand = document.createElement('h4');
        brand.innerText = element.brand;

    let details = document.createElement('h4');
        details.innerText = element.category;

    // let quantity = document.createElement('h5');
    //     quantity.innerText = '';

    let price = document.createElement('h5');
        price.innerText = "₹ " +element.price;

    checkoutProductDivImg.append(img);
    checkoutProductDivDetails.append(brand, details, price);
    // checkoutQuantityAndPrice.append(quantity, price)

});

let totalAmount = 0;
basket.forEach(function (element) {
    totalAmount+=Number(element.price);
});
let totalAmounth3 = document.createElement('h3');
    totalAmounth3.innerText = "Sub Total"+" "+"₹"+" "+totalAmount;
checkoutSubtotalDiv.append(totalAmounth3);


let checkoutTotalDiv = document.getElementById('checkoutTotalDiv');
let checkoutTotal = document.createElement('h3');
    checkoutTotal.innerText = "Total"+" "+"₹"+totalAmount;
    checkoutTotalDiv.append(checkoutTotal);


// pay now button direct to success.html
let payNowBtn = document.getElementById('payNow');
    payNowBtn.addEventListener('click', function (){
        window.location.href = 'success.html';
    });


localStorage.setItem('basket',JSON.stringify(basket));