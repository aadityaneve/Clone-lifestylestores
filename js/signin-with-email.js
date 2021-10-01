

let signinBtn = document.getElementById('signin');

console.log(signinEmail, signinPassword);
let flag = 0;
let signedIn = false;
signinBtn.addEventListener('click', function (e) {
    
    let signinEmail = document.getElementById('signinEmail').value;
    let signinPassword = document.getElementById('signinPassword').value;

    // console.log(signinEmail, signinPassword);
    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));

    userLoginDetails.forEach(function (user) {
        if(signinEmail == user.email && signinPassword == user.password){
            flag = 1;
            signedIn = true;
            // console.log(signedIn);
        }
    });

    localStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));

    if(flag == 1){
        window.location.href = 'checkout.html';
    }else {
        let warningDiv = document.getElementById('warningDiv');
            warningDiv.innerText = 'Wrong Credentials';
            warningDiv.setAttribute('style','color: red');
    }


    // storing if user is signed in or not
    if(localStorage.getItem('isSignedIn') === null){
        localStorage.setItem('isSignedIn', JSON.stringify([]));
    }

    let isSignedIn = JSON.parse(localStorage.getItem('isSignedIn'));
        isSignedIn.push(signedIn);
    localStorage.setItem('isSignedIn',JSON.stringify(isSignedIn));
});












