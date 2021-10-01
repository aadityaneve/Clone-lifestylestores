
let signinBtn = document.getElementById('signin');

console.log(signinEmail, signinPassword);
let flag = 0;
signinBtn.addEventListener('click', function (e) {
    
    let signinEmail = document.getElementById('signinEmail').value;
    let signinPassword = document.getElementById('signinPassword').value;

    // console.log(signinEmail, signinPassword);
    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));

    userLoginDetails.forEach(function (user) {
        if(signinEmail == user.email && signinPassword == user.password){
            flag = 1;
        }
    });

    localStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));

    if(flag == 1){
        window.location.href = 'index.html';
    }else {
        let warningDiv = document.getElementById('warningDiv');
            warningDiv.innerText = 'Wrong Credentials';
            warningDiv.setAttribute('style','color: red');
    }
});











