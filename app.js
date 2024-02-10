const homeMainHeader = document.querySelector("#home-main-header");

window.addEventListener("DOMContentLoaded", () => {
  if (homeMainHeader) homeMainHeader.classList.add("show");
});

function pushToCart(item) {
  if (
    !sessionStorage.getItem("cartArray") ||
    sessionStorage.getItem("cartArray").length === 0
  ) {
    let initialCart = [item];
    sessionStorage.setItem("cartArray", JSON.stringify(initialCart));
  } else {
    let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
    currentCart.push(item);
    sessionStorage.setItem("cartArray", JSON.stringify(currentCart));
  }
}

function getItemInfo() {
  let itemSelect = document.querySelector("#item-type");
  let itemType = itemSelect.options[itemSelect.selectedIndex].text;
  let price = itemSelect.value;
  let design = document.querySelector("#product-info h1").innerHTML;
  let color = document.querySelector("#color").value;
  let fullImgSrc = document.querySelector("#product-img").src;
  let startIndex = fullImgSrc.indexOf("assets");
  let imgSrc = fullImgSrc.substring(startIndex);
  console.log(design, price, color, itemType, imgSrc);
  pushToCart({
    design: design,
    price: price,
    color: color,
    itemType: itemType,
    id: crypto.randomUUID(),
    imgSrc: imgSrc,
  });
  return false;
}
// function displayCart() {
//   if (
//     !sessionStorage.getItem("cartArray") ||
//     sessionStorage.getItem("cartArray").length === 0
//   )
//     return;

//   let total = 0;
//   let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
//   let cartContainer = document.querySelector("#cart-container");
//   if (cartContainer.querySelectorAll(".cart-item").length !== 0) {
//     let elements = cartContainer.getElementsByClassName("cart-item");
//     while (elements.length > 0) {
//       elements[0].parentNode.removeChild(elements[0]);
//     }
//   }
//   for (let i = 0; i < currentCart.length; i++) {
//     let itemDiv = document.createElement("div");
//     itemDiv.className = "cart-item";
//     let infoBox1 = document.createElement("div");
//     infoBox1.className = "cart-info-box";
//     let itemDesign = document.createElement("span");
//     itemDesign.className = "item-design";
//     itemDesign.innerHTML = currentCart[i].design;
//     infoBox1.appendChild(itemDesign);
//     let itemPrice = document.createElement("span");
//     itemPrice.className = "item-price";
//     itemPrice.innerHTML = `$${currentCart[i].price}`;
//     infoBox1.appendChild(itemPrice);
//     itemDiv.appendChild(infoBox1);
//     let infoBox2 = document.createElement("div");
//     infoBox2.className = "cart-info-box";
//     let itemColor = document.createElement("span");
//     itemColor.className = "item-color";
//     itemColor.innerHTML = currentCart[i].color;
//     infoBox2.appendChild(itemColor);
//     let itemType = document.createElement("span");
//     itemType.className = "item-type";
//     itemType.innerHTML = currentCart[i].itemType;
//     infoBox2.appendChild(itemType);
//     itemDiv.appendChild(infoBox2);
//     cartContainer.prepend(itemDiv);
//     total += parseInt(currentCart[i].price);
//     let totalElement = document.querySelector("#cart-total");
//     totalElement.innerHTML = `Total: $${total}`;
//   }
// }
const navcomp = document.querySelector("#navcomp");
const navLinks = navcomp.shadowRoot.querySelectorAll(
  ".nav-link, .dropdown-link, #logo-link"
);
const navImgs = navcomp.shadowRoot.querySelectorAll(
  "#nav-logo, #dropdown-img, #cart-icon"
);
if (navcomp.getAttribute("isProductPage") === "true") {
  navLinks.forEach((link) => {
    let currentLink = link.getAttribute("href");
    link.setAttribute("href", `../${currentLink}`);
  });
  navImgs.forEach((img) => {
    console.log(img);
    let currentImg = img.getAttribute("src");
    img.setAttribute("src", `../${currentImg}`);
  });
}
const primaryNav = navcomp.shadowRoot.querySelector("#primary-nav");
const navToggle = navcomp.shadowRoot.querySelector("#nav-toggle");
navToggle.addEventListener("click", () => {
  console.log("nav toggle clicked");
  const isNavVisible = primaryNav.getAttribute("data-mobile-nav-visible");
  if (isNavVisible === "false") {
    primaryNav.setAttribute("data-mobile-nav-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-mobile-nav-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
console.log("Cart", JSON.parse(sessionStorage.getItem("cartArray")));
