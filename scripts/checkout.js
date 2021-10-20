let basket = JSON.parse(localStorage.getItem('basket'));

let checkoutProductDiv = document.getElementById('checkoutProductDiv');
let checkoutProductsDiv = document.getElementById('checkoutProductsDiv');
let checkoutSubtotalDiv = document.getElementById('checkoutSubtotalDiv');


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
    checkoutProductsDiv.append(div, hr);
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
payNowBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Currently working on  ----
    let isFormValid = true;

    // Validations for checkout form
    let form = document.getElementById('checkoutForm');

    if (form.fullName.value[0] == " " || form.fullName.value.length < 4) {
        isFormValid = false;
        alert("Enter valid name.");
    } else if (form.fullName.value[0] == " " || isNaN(form.mobileNumber.value)) {
        isFormValid = false;
        alert("Mobile number cant be character or symbol.");
    } else if (form.mobileNumber.value[0] == " " || form.mobileNumber.value.length != 10) {
        isFormValid = false;
        alert("Enter 10 digit mobile number.");
    } else if (form.pincode.value[0] == " " || isNaN(form.pincode.value)) {
        isFormValid = false;
        alert("Pin Code cant be character or symbol.");
    } else if (form.pincode.value[0] == " " || form.pincode.value.length != 6) {
        isFormValid = false;
        alert("Enter 6 digit pin code.");
    } else if (form.city.value[0] == " " || form.city.value.length < 3) {
        isFormValid = false;
        alert("Enter valid city.");
    } else if (form.state.value[0] == " " || form.state.value.length < 4) {
        isFormValid = false;
        alert("Enter valid state.");
    } else if (form.buildingName.value[0] == " " || form.buildingName.value.length < 2) {
        isFormValid = false;
        alert("Enter valid building name.");
    } else if (form.street.value[0] == " " || form.street.value.length < 4) {
        isFormValid = false;
        console.log(form.street.value.length);
        alert("Enter valid street.");
    } else if (form.cardNumber.value[0] == " " || form.cardNumber.value.length != 16) {
        isFormValid = false;
        alert("Enter 16 digit card number.");
    } else if (form.nameOnCard.value[0] == " " || form.nameOnCard.value.length < 4) {
        isFormValid = false;
        alert("Enter valid name.");
    } else {

        let year = Number(form.expiryDate.value.slice(0, 4));
        let month = Number(form.expiryDate.value.slice(5, 7));

        if (year < new Date().getFullYear() || month < new Date().getMonth()) {
            isFormValid = false;
            alert("Expiry date is not valid.");
        }
    }

    if (isFormValid === true) {
        localStorage.removeItem("basket");
        window.location.href = 'success.html';
    }
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



