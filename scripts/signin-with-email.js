

let signinBtn = document.getElementById('signin');

let flag = 0;
let signedIn = false;
signinBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let signinEmail = document.getElementById('signinEmail').value;
    let signinPassword = document.getElementById('signinPassword').value;

    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));

    userLoginDetails.forEach(function (user) {
        if (signinEmail == user.email && signinPassword == user.password) {
            flag = 1;
            signedIn = true;
        }
    });

    localStorage.setItem('userLoginDetails', JSON.stringify(userLoginDetails));

    let basket = JSON.parse(localStorage.getItem('basket'));

    if (flag == 1 && Object.keys(basket).length == 0) {
        window.location.href = 'index.html';
    } else if (flag == 1 && Object.keys(basket).length > 0) {
        window.location.href = 'checkout.html';
    } else {
        let warningDiv = document.getElementById('warningDiv');
        warningDiv.innerText = 'Wrong Credentials';
        warningDiv.setAttribute('style', 'color: red');
    }

    localStorage.setItem('basket', JSON.stringify(basket));


    // storing if user is signed in or not
    if (localStorage.getItem('isSignedIn') === null) {
        localStorage.setItem('isSignedIn', JSON.stringify([]));
    }

    let isSignedIn = JSON.parse(localStorage.getItem('isSignedIn'));
    isSignedIn.push(signedIn);
    localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
});












