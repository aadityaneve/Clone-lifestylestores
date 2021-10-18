let basket = JSON.parse(localStorage.getItem('basket'));

let checkoutProductDiv = document.getElementById('checkoutProductDiv');
let checkoutProductsDiv = document.getElementById('checkoutProductsDiv');
let checkoutSubtotalDiv = document.getElementById('checkoutSubtotalDiv');


console.log(basket);

basket.forEach(function (element) {
    let div = document.createElement('div');
    let imgDiv = document.createElement('div');
    let detailsDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = element.img[0];

    let brand = document.createElement('h4');
    brand.innerText = element.brand;

    let details = document.createElement('h4');
    details.innerText = element.category;
    
    let price = document.createElement('h4');
    price.innerText = "₹ " + element.price;
    let hr = document.createElement('hr');
    imgDiv.append(img);
    detailsDiv.append(brand, details, price);
    div.append(imgDiv, detailsDiv);
    checkoutProductsDiv.append(div,hr);
});

let totalAmount = 0;
basket.forEach(function (element) {
    totalAmount += Number(element.price);
});
let totalAmounth3 = document.createElement('h3');
totalAmounth3.innerText = "Sub Total" + " " + "₹" + " " + totalAmount;
checkoutSubtotalDiv.append(totalAmounth3);


let checkoutTotalDiv = document.getElementById('checkoutTotalDiv');
let checkoutTotal = document.createElement('h3');
checkoutTotal.innerText = "Total" + " " + "₹" + totalAmount;
checkoutTotalDiv.append(checkoutTotal);


// pay now button direct to success.html
let payNowBtn = document.getElementById('payNow');
payNowBtn.addEventListener('click', function () {
    localStorage.removeItem("basket");
    window.location.href = 'success.html';
});


localStorage.setItem('basket', JSON.stringify(basket));

// home delivery and click&collect button onclick color change 
let homeDeliveryBtn = document.getElementById('homeDeliveryBtn');
let clickAndCollectBtn = document.getElementById('clickAndCollectBtn');

homeDeliveryBtn.addEventListener('click', function () {
    homeDeliveryBtn.setAttribute('style', 'background-color: #FAA81E;');
    clickAndCollectBtn.setAttribute('style', 'backgournd-color: white;');
});

clickAndCollectBtn.addEventListener('click', function () {
    homeDeliveryBtn.setAttribute('style', 'backgournd-color: white;');
    clickAndCollectBtn.setAttribute('style', 'background-color: #FAA81E;');
});



