let para_1=document.getElementById("top");
let offer=document.createElement("span")
offer.innerText="Get the offer"
offer.style.backgroundColor="#EC407A";
let line_1=document.createElement("span");
line_1.innerText="Get 300 Off on First Purchase of Rs.1,999 and Above. Code NEW300 | Shop for Rs. 2,999 & Get 15% Off. Code SHOP15";

let div=document.createElement("div");
div.style.marginTop="20px"
let offer_2=document.createElement("span");
offer_2.innerText="Get the offer"
offer_2.style.backgroundColor="#EC407A"
let line_2=document.createElement("span");
line_2.innerText="Additional 5% Cashback on HDFC Credit/Debit Card EMIs, max Rs 1,000/- & twice per month per card."
let table=document.createElement("table")
table.style.border="1px solid black"
table.style.marginTop="20px";
let heading_1=document.createElement("thead");
heading_1.style.fontWeight="700"
heading_1.textContent="item";
heading_1.style.display="inline-block"
let heading_2=document.createElement("thead");
heading_2.style.fontWeight="700"
heading_2.textContent="discription";
heading_2.style.marginLeft="215px";
heading_2.style.display="inline-block"
let heading_3=document.createElement("thead");
heading_3.style.fontWeight="700"
heading_3.textContent="price";
heading_3.style.marginLeft="300px";
heading_3.style.display="inline-block"
let heading_4=document.createElement("thead");
heading_4.style.fontWeight="700"
heading_4.textContent="quality";
heading_4.style.marginLeft="185px";
heading_4.style.display="inline-block"
let heading_5=document.createElement("thead");
heading_5.style.fontWeight="700"
heading_5.textContent="quality";
heading_5.style.marginLeft="185px";
heading_5.style.display="inline-block"
let heading_6=document.createElement("thead");
heading_6.style.fontWeight="700"
heading_6.textContent="Subtotal (1 item):Rs299"
heading_6.style.marginLeft="185px";
heading_6.style.display="inline-block"
table.append(heading_1,heading_2,heading_3,heading_5,heading_6);


let Itmes_image=document.createElement("img");
Itmes_image.src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000007240054-3012-Red-Red-1000007240054-3012_01-345.jpg"

Itmes_image.style.height="250px"
Itmes_image.style.width="200px"



div.append(offer_2,line_2);
para_1.append(offer,line_1,div,table,Itmes_image);


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
    sizes.innerText = el.sizes;
  
    div.append(image, price, discount, brand, category, fitting);
    cont.append(div);
});