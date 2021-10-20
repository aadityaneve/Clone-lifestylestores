

if(localStorage.getItem('userLoginDetails') === null){
    localStorage.setItem('userLoginDetails', JSON.stringify([]));
}



let continueBtn = document.getElementById('continueBtn');

continueBtn.addEventListener('click', function(e){
    e.preventDefault();

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

    localStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));

    if(mobileNumber != "" && email != "" && password != ""){
        window.location.href = 'signin-with-email.html';
    }else{
        alert("All fields are mandatory.");
    }
});





