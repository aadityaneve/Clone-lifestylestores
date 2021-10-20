

if (localStorage.getItem('userLoginDetails') === null) {
    localStorage.setItem('userLoginDetails', JSON.stringify([]));
}



let continueBtn = document.getElementById('continueBtn');

continueBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));

    let mobileNumber = document.getElementById('mobileNumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let isFormValid = true;

    let userDetails = {
        mobile: mobileNumber,
        email: email,
        password: password
    };


    if (mobileNumber[0] == " " || mobileNumber == "") {
        isFormValid = false;
        alert("Enter valid mobile number.");
    } else if (email[0] == " " || email == "") {
        isFormValid = false;
        alert("Enter valid email.");
    } else if (password.length < 6 || password.length > 15) {
        isFormValid = false;
        alert("Password should be between 6 - 15 characters.");;
    }


    if (isFormValid) {
        userLoginDetails.push(userDetails);
        localStorage.setItem('userLoginDetails', JSON.stringify(userLoginDetails));
        window.location.href = 'signin-with-email.html';
    }
});





