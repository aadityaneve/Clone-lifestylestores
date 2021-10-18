

let orderNumber = document.getElementById('orderNumber');

orderNumber.innerHTML = "Your order number is : "+Math.ceil(Math.random() * 1000000000);


let continueShoppingBtn = document.getElementById('continueShoppingBtn');
    continueShoppingBtn.addEventListener('click', function (){
        window.location.href = '../pages/index.html';
    });