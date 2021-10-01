

if(localStorage.getItem('userLoginDetails') === null){
    localStorage.setItem('userLoginDetails', JSON.stringify([]));
}



let continueBtn = document.getElementById('continueBtn');

continueBtn.addEventListener('click', function(){

    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));

    let mobileNumber = document.getElementById('mobileNumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let userDetails = {
        mobile: mobileNumber,
        email: email,
        password: password
    };


    userLoginDetails.push(userDetails);

    // console.log(mobileNumber, email, password);
    localStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));

    window.location.href = 'signin-with-email.html';
});





