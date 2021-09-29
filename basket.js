let womenTopWear = [
    {
        brand: "BOSSINI Solid Round Neck",
        category: "T-shirt",
        price: "349",
        discount: "50",
        fitting: "Slim Fit",
        color: "[gray, red, green]",
        sizes: "[s,m,l]",
        img: "https://809fcedc4a4c2e0e3a54-0908f7c4d20fa14a53c9b6a1907a24c5.lmsin.net/1000007681444-Green-Olive-1000007681444_01-345.jpg",
    },
    {
        brand: "FAME FOREVER",
        category: "T-shirt",
        price: "449",
        discount: "50",
        fitting: "Slim Fit",
        color: "[white, red, green]",
        sizes: "[s,m,l]",
        img: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000006751063-Var0908-Grey-Grey-1000006751063-Var0908_01-345.jpg",
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "449",
        discount: "50",
        fitting: "Slim Fit",
        color: "[yellow, red, green]",
        sizes: "[s,m,l]",
        img: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007683947-var7-Pink-CORAL-1000007683947-var7_01-345.jpg",
    },
    {
        brand: "LATIN QUARTERS",
        category: "T-shirt",
        price: "749",
        discount: "50",
        fitting: "Regular Fit",
        color: "[pink, red, green]",
        sizes: "[s,m,l]",
        img: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007225420-201218-Yellow-Mustard-1000007225420-201218_01-345.jpg",
    },
    {
        brand: "GINGER",
        category: "Shirt",
        price: "749",
        discount: "50",
        fitting: "Slim Fit",
        color: "[Black, red, green]",
        sizes: "[s,m,l]",
        img: "https://809fcedc4a4c2e0e3a54-0908f7c4d20fa14a53c9b6a1907a24c5.lmsin.net/1000007225492-Green-OLIVE-1000007225492_01-345.jpg",
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "749",
        discount: "50",
        fitting: "Slim Fit",
        color: "[Black, red, green]",
        sizes: "[s,m,l]",
        img: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007240054-3012-Red-Red-1000007240054-3012_01-345.jpg",
    },
    {
        brand: "GINGER",
        category: "Top",
        price: "649",
        discount: "50",
        fitting: "Slim Fit",
        color: "[yellow, red, green]",
        sizes: "[s,m,l]",
        img: "https://809fcedc4a4c2e0e3a54-0908f7c4d20fa14a53c9b6a1907a24c5.lmsin.net/1000007871078-Black-BLACK-1000007871078_01-345.jpg",
    },
    {
        brand: "BOSSINI Solid Round Neck",
        category: "Top",
        price: "649",
        discount: "50",
        fitting: "Slim Fit",
        color: "[red, black, green]",
        sizes: "[s,m,l]",
        img: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007225451-22119-Blue-Blue-1000007225451-22119_01-345.jpg",
    }];

if (localStorage.getItem('life_style') == null) {
    localStorage.setItem('life_style', JSON.stringify([]));
}
womenTopWear.forEach(function (el) {
    var data = JSON.parse(localStorage.getItem('life_style'));
    data.push(el);
    localStorage.setItem('life_style', JSON.stringify(data));

});


let cont = document.getElementById("cont");
let items = JSON.parse(localStorage.getItem('life_style'));
items.forEach(function (el) {
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.src = el.img;
    let brand = document.createElement('span');
    brand.innerText = el.brand;
    let category = document.createElement('span');
    category.innerText = el.category;
    let price = document.createElement('h3');
    price.innerText = "MRP " + el.price;
    let discount = document.createElement('h2');
    discount.innerText = el.discount + "%OFF";
    discount.style.backgroundColor = "#F44336"
    let fitting = document.createElement('span');
    fitting.innerText = el.fitting;
    let color = document.createElement('p');
    color.innerText = el.color;
    let sizes = document.createElement('p');
    sizes.innerText = el.sizes


    div.append(image, price, discount, brand, category, fitting);
    cont.append(div);
});