// if user not loggined divert page to signup or signin page

let basketItemsDiv = document.getElementById("basketItems");
let offer = document.createElement("span");
offer.innerText = "Get the offer";
offer.style.backgroundColor = "#EC407A";

let line_1 = document.createElement("span");
line_1.innerText =
  "Get 300 Off on First Purchase of Rs.1,999 and Above. Code NEW300 | Shop for Rs. 2,999 & Get 15% Off. Code SHOP15";

let basket = JSON.parse(localStorage.getItem("basket"));

let basketTable = document.createElement("table");
basketTable.style.marginTop = "20px";

let tableRowHeading = document.createElement("tr");
tableRowHeading.setAttribute("style", "text-align: left;");
let tableHeadItem = document.createElement("th");
tableHeadItem.innerText = "Item";
tableHeadItem.setAttribute("style", "width: 20%; height: 3em;");
let tableHeadDesc = document.createElement("th");
tableHeadDesc.innerText = "Description";
let tableHeadPrice = document.createElement("th");
tableHeadPrice.innerText = "Price";
let tableHeadQuantity = document.createElement("th");
tableHeadQuantity.innerText = "Quantity";
let tableHeadTotalPrice = document.createElement("th");
tableHeadTotalPrice.innerText = "Total Price";
tableRowHeading.append(
  tableHeadItem,
  tableHeadDesc,
  tableHeadPrice,
  tableHeadQuantity,
  tableHeadTotalPrice
);

basketTable.append(tableRowHeading);
basketItemsDiv.append(basketTable);

let tableLogo = document.createElement("tr");
let tableDataLogo = document.createElement("h1");
tableDataLogo.innerText = "lifestyle";
tableLogo.append(tableDataLogo);
basketTable.append(tableLogo);
basketItemsDiv.append(basketTable);

var sum = 0;
var totalQty = 0;
let subTotal = document.createElement("div");
basket.forEach(function (element) {
  let basket = JSON.parse(localStorage.getItem("basket"));

  let tableDataRow = document.createElement("tr");

  let tableDataImg = document.createElement("td");
  let img = document.createElement("img");
  img.src = element.img[0];
  tableDataImg.append(img);

  let tableDataBrand = document.createElement("td");
  let brand = document.createElement("h2");
  brand.innerText = element.brand + " " + element.category;
  let colorH4 = document.createElement("h4");
  colorH4.innerText = "Color" + ": " + element.color;
  let sizeH4 = document.createElement("h4");
  sizeH4.innerText = "size" + ": " + element.size;
  tableDataBrand.append(brand, colorH4, sizeH4);

  let tableDataPrice = document.createElement("td");
  let price = document.createElement("h3");
  price.innerText = "₹ " + element.price;
  tableDataPrice.append(price);

  let startSum = 0;
  let startTotalQty = 0;
  basket.forEach((item) => {
    startSum += Number(item.qty) * Number(item.price);
    startTotalQty += Number(item.qty);
  });
  calculateTotal(startSum, startTotalQty);

  let tableDataQuantity = document.createElement("td");
  let quantity = document.createElement("select");
  let defaultOption = document.createElement("option");
  defaultOption.innerText = element.qty;
  let oneOption = document.createElement("option");
  oneOption.innerText = "1";
  let twoOption = document.createElement("option");
  twoOption.innerText = "2";
  let threeOption = document.createElement("option");
  threeOption.innerText = "3";
  quantity.append(defaultOption, oneOption, twoOption, threeOption);
  tableDataQuantity.append(quantity);

  let tableDataTotalPrice = document.createElement("td");
  let totalPrice = document.createElement("h3");
  totalPrice.innerText = "₹ " + element.price * element.qty;
  tableDataTotalPrice.append(totalPrice);

  quantity.addEventListener("change", function (event) {
    let basket = JSON.parse(localStorage.getItem("basket"));

    basket.forEach((item) => {
      if (item.id == element.id) {
        item.qty = event.target.value;
      }
    });

    sum = 0;
    totalQty = 0;
    basket.forEach((item) => {
      sum += Number(item.qty) * Number(item.price);
      totalQty += Number(item.qty);
    });

    let tableDataQuantity = document.createElement("td");
    let quantity = document.createElement("select");
    let defaultOption = document.createElement("option");
    defaultOption.innerText = element.qty;
    let oneOption = document.createElement("option");
    oneOption.innerText = "1";
    let twoOption = document.createElement("option");
    twoOption.innerText = "2";
    let threeOption = document.createElement("option");
    threeOption.innerText = "3";
    quantity.append(defaultOption, oneOption, twoOption, threeOption);
    tableDataQuantity.append(quantity);

    basket.forEach((item) => {
      if (item.id == element.id) {
        totalPrice.innerText = "₹ " + item.price * item.qty;
      }
    });
    console.log(element.price + ":" + element.qty);
    console.log(element.id);
    calculateTotal(sum, totalQty);
    localStorage.setItem("basket", JSON.stringify(basket));
  });

  tableDataRow.append(
    tableDataImg,
    tableDataBrand,
    tableDataPrice,
    tableDataQuantity,
    tableDataTotalPrice
  );

  // horizontal row after every row
  let hr = document.createElement("hr");

  basketTable.append(tableDataRow, hr);

  basketItemsDiv.append(basketTable);
  localStorage.setItem("basket", JSON.stringify(basket));
});
basketItemsDiv.append(basketTable);

let totalAmount = 0;
let totalProducts = 0;

let checkoutPanel = document.getElementById("checkoutPanel");
let checkoutHeading = document.createElement("div");

basket.forEach(function (element) {
  totalAmount += Number(element.price) + totalProducts;
});

function calculateTotal(sum, totalQty) {
  subTotal.innerText = "Subtotal (" + totalQty + " item):" + " ₹ " + sum;
}

subTotal.setAttribute("style", "font-weight: 900; text-align: center;");

let checkOutNowBtn = document.createElement("button");
checkOutNowBtn.setAttribute("id", "addToCartBtn");
checkOutNowBtn.innerHTML = "<strong>Checkout Now</strong>";

// creating local storage for isSignedIN
if (localStorage.getItem("isSignedIn") === null) {
  localStorage.setItem("isSignedIn", JSON.stringify([]));
}
let isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
if (isSignedIn[isSignedIn.length - 1] != true) {
  isSignedIn.push(false);
}
localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));

checkOutNowBtn.addEventListener("click", function () {
  let isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
  // checking if user has signed in or not
  if (
    Object.keys(isSignedIn).length != 0 &&
    isSignedIn[isSignedIn.length - 1] == true
  ) {
    window.location.href = "checkout.html";
  } else {
    alert("Please SignUp First.");
    window.location.href = "signup-or-signin-mob.html";
  }
  localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
});

let hr1 = document.createElement("hr");
let hr2 = document.createElement("hr");
let hr3 = document.createElement("hr");

checkoutHeading.append(subTotal);
checkoutPanel.append(hr1, checkoutHeading, hr2, checkOutNowBtn, hr3);

localStorage.setItem("basket", JSON.stringify(basket));

function displayUserNameOnNav() {
  // navbar user printing if user is signed in
  let isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
  let userLoginDetails = JSON.parse(localStorage.getItem("userLoginDetails"));
  let userEmail =
    userLoginDetails[Object.keys(userLoginDetails).length - 1].email;
  let userName = "";

  for (
    let i = 0;
    i < userLoginDetails[Object.keys(userLoginDetails).length - 1].email.length;
    i++
  ) {
    if (userEmail[i] == "@") {
      break;
    } else {
      userName += userEmail[i];
    }
  }

  if (isSignedIn[isSignedIn.length - 1] == true) {
    signUpSignin.innerHTML = "<strong>" + userName + "</strong>";
  }
  signUpSignin.setAttribute(
    "style",
    "text-aligh: center; margin-left: 7%; margin-right: 7%;"
  );
  localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
  localStorage.setItem("userLoginDetails", JSON.stringify(userLoginDetails));
}
