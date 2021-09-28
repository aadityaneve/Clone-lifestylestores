

let navbar = document.getElementById('navbar');
let women = document.getElementById('women');
let men = document.getElementById('men');
let kids = document.getElementById('kids');
let shoesAndBags = document.getElementById('shoesAndBags');
let signUpSignin = document.getElementById('signUpSignin');
let categories = document.getElementById('categories');

let womenCategories = ['Tops', 'Ethnicwear', 'Bottoms', 'Dresses & Jumpsuits', 'Lingerie & Nightwear', 'Sportswear', 'WFH Edit', 'Beauty', 'Watches', 'Sunglases', 'Footwear & Bags', 'More'];;
let menCategories = ['Topwear','Bottomwear','Activewear','Ethnic','Winterwear','Innerwear','WFH Edit','Watches','Sunglases','Shoes','Grooming','Add-Ons','More'];;
let kidCategories = ['Girls Clothing','Boys Clothing', 'Infant Girl','Infant Boy','Winterwear','Boys Shoes','Girsl Shoes','0-03 Yrs','Add Ons','Character Shop','More'];
let shoesAndBagsCategories = ['Women','Men','Boys','Girls','Women Accessories','Men Accessories','Essential','Price Store','More'];


women.onmouseenter = function () {
    categories.innerHTML = null;
    women.style.color = 'orange';
    women.style.backgroundColor = 'white';
    womenCategories.forEach(function (category) {        
        let h5 = document.createElement('h5');
        h5.innerText = category;
        categories.append(h5);
    });
}
women.onmouseleave = function(){
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