

if (localStorage.getItem('variables') === null) {
    localStorage.setItem('variables', JSON.stringify([]));
}


let navbar = document.getElementById('navbar');
let women = document.getElementById('women');
let men = document.getElementById('men');
let kids = document.getElementById('kids');
let shoesAndBags = document.getElementById('shoesAndBags');
let signUpSignin = document.getElementById('signUpSignin');
let categories = document.getElementById('categories');

let womenCategories = ['Tops', 'Ethnicwear', 'Bottoms', 'Dresses & Jumpsuits', 'Lingerie & Nightwear', 'Sportswear', 'WFH Edit', 'Beauty', 'Watches', 'Sunglases', 'Footwear & Bags', 'More'];;
let menCategories = ['Topwear', 'Bottomwear', 'Activewear', 'Ethnic', 'Winterwear', 'Innerwear', 'WFH Edit', 'Watches', 'Sunglases', 'Shoes', 'Grooming', 'Add-Ons', 'More'];;
let kidCategories = ['Girls Clothing', 'Boys Clothing', 'Infant Girl', 'Infant Boy', 'Winterwear', 'Boys Shoes', 'Girls Shoes', '0-03 Yrs', 'Add Ons', 'Character Shop', 'More'];
let shoesAndBagsCategories = ['Women', 'Men', 'Boys', 'Girls', 'Women Accessories', 'Men Accessories', 'Essential', 'Price Store', 'More'];

function showCategoriesOnLoad() {
    categories.innerHTML = null;
    womenCategories.forEach(function (category) {
        let h5 = document.createElement('h5');
        h5.innerText = category;
        categories.append(h5);
    });
}
showCategoriesOnLoad();

women.onmouseenter = function () {
    categories.innerHTML = null;
    women.style.color = 'orange';
    women.style.backgroundColor = 'white';
    womenCategories.forEach(function (category) {
        let h5 = document.createElement('h5');
        h5.innerText = category;
        h5.setAttribute('style', 'cursor: pointer;');
        h5.addEventListener('click', function () {
            let variables = JSON.parse(localStorage.getItem('variables'));
            variables.push(h5.innerText);
            localStorage.setItem('variables', JSON.stringify(variables));
            window.location.href = '../pages/product.html';
        });
        categories.append(h5);
    });
}
women.onmouseleave = function () {
    women.style.color = 'black';
    women.style.backgroundColor = '#F7F8F7';
}
men.onmouseenter = function () {
    categories.innerHTML = null;
    men.style.color = 'orange';
    men.style.backgroundColor = 'white';
    menCategories.forEach(function (category) {
        let h5 = document.createElement('h5');
        h5.innerText = category;
        h5.setAttribute('style', 'cursor: pointer;');
        h5.addEventListener('click', function () {
            let variables = JSON.parse(localStorage.getItem('variables'));
            variables.push(h5.innerText);
            localStorage.setItem('variables', JSON.stringify(variables));
            window.location.href = '../pages/product.html';
        });
        categories.append(h5);
    });
}
men.onmouseleave = function () {
    men.style.color = 'black';
    men.style.backgroundColor = '#F7F8F7';
}

kids.onmouseenter = function () {
    categories.innerHTML = null;
    kids.style.color = 'orange';
    kids.style.backgroundColor = 'white';
    kidCategories.forEach(function (category) {
        let h5 = document.createElement('h5');
        h5.innerText = category;
        h5.setAttribute('style', 'cursor: pointer;');
        h5.addEventListener('click', function () {
            let variables = JSON.parse(localStorage.getItem('variables'));
            variables.push(h5.innerText);
            localStorage.setItem('variables', JSON.stringify(variables));
            window.location.href = '../pages/product.html';
        });
        categories.append(h5);
    });
}
kids.onmouseleave = function () {
    kids.style.color = 'black';
    kids.style.backgroundColor = '#F7F8F7';
}

shoesAndBags.onmouseenter = function () {
    categories.innerHTML = null;
    shoesAndBags.style.color = 'orange';
    shoesAndBags.style.backgroundColor = 'white';
    shoesAndBagsCategories.forEach(function (category) {
        let h5 = document.createElement('h5');
        h5.innerText = category;
        h5.setAttribute('style', 'cursor: pointer;');
        h5.addEventListener('click', function () {
            let variables = JSON.parse(localStorage.getItem('variables'));
            variables.push(h5.innerText);
            localStorage.setItem('variables', JSON.stringify(variables));
            window.location.href = '../pages/product.html';
        });
        categories.append(h5);
    });
}
shoesAndBags.onmouseleave = function () {
    shoesAndBags.style.color = 'black';
    shoesAndBags.style.backgroundColor = '#F7F8F7';
}

signUpSignin.onmouseenter = function () {
    signUpSignin.style.color = 'orange';
}
signUpSignin.onmouseleave = function () {
    signUpSignin.style.color = 'black';
}

signUpSignin.addEventListener('click', function () {

});


function displayUserNameOnNav() {
    // navbar user printing if user is signed in 
    let isSignedIn = JSON.parse(localStorage.getItem('isSignedIn'));
    let userLoginDetails = JSON.parse(localStorage.getItem('userLoginDetails'));
    let userEmail = userLoginDetails[(Object.keys(userLoginDetails).length) - 1].email;
    let userName = "";
    for (let i = 0; i < (userLoginDetails[(Object.keys(userLoginDetails).length) - 1].email).length; i++) {
        if (userEmail[i] == '@') {
            break;
        } else {
            userName += userEmail[i];
        }
    }

    if (isSignedIn[isSignedIn.length - 1] == true) {
        signUpSignin.innerHTML = '<strong>' + userName + '</strong>'
    }
    signUpSignin.setAttribute('style', 'text-aligh: center; margin-left: 7%; margin-right: 7%;');
    localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
    localStorage.setItem('userLoginDetails', JSON.stringify(userLoginDetails));
}



//adding event listeners to basket
let indexBasket = document.getElementById('basket');
indexBasket.addEventListener('click', function () {
    window.location.href = 'basket.html';
});



let carousel = document.getElementById('carousel');
let carouselCounter = 0;
let carouselLinks = [
    'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-27Sep2021.gif',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-2-27Sep2021.jpg',
    'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-27Sep2021.jpg',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-4-23Sep2021.jpg',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-27Sep2021.jpg',
    'https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-27Sep2021.jpg'
];

let img = document.createElement('img');

img.src = carouselLinks[carouselCounter];
carousel.append(img);
carouselCounter++;

function showCarousel() {
    carousel.innerHTML = null;
    if (carouselCounter == 6) {
        carouselCounter = 0;
    }
    let img = document.createElement('img');
    img.src = carouselLinks[carouselCounter];
    carousel.append(img);
    carouselCounter++;
}

setInterval(function () {
    showCarousel();
}, 5000);



// Square Adds
document.getElementById('topsAndTees').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Tops');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('dresses').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('kurtas').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})

// Circle Adds
document.getElementById('circleImgTopsAndTees').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Tops');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgEthnicwear').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgBottoms').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Bottoms');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgHandbags').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Women');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgFootwear').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Men');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgDresses').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})


document.getElementById('circleImgPlusSize').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Tops');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgWatches').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgEthnicWear').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Bottoms');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgLingerie').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Women');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgBeauty').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Men');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('circleImgSkinCare').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})



// Square Adds
document.getElementById('squareImgBottomWear').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Tops');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('squareImgLingerie').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})
document.getElementById('squareImgKurtas').addEventListener('click', () => {

    let variables = JSON.parse(localStorage.getItem('variables'));
    variables.push('Ethnicwear');
    localStorage.setItem('variables', JSON.stringify(variables));
    window.location.href = '../pages/product.html';
})