const homeMainHeader = document.querySelector("#home-main-header");
const navbar = document.querySelector(".navbar");
window.addEventListener("DOMContentLoaded", () => {
  if (homeMainHeader) homeMainHeader.classList.add("show");
  navbar.classList.add("show");
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
  console.log(design, price, color, itemType);
  pushToCart({
    design: design,
    price: price,
    color: color,
    itemType: itemType,
    id: crypto.randomUUID(),
  });
  return false;
}

function removeItem(id) {
  console.log("Removing item");
  let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
  currentCart = currentCart.filter((item) => item.id !== id);
  clearCart();
  sessionStorage.setItem("cartArray", JSON.stringify(currentCart));
  displayCart();
  console.log(JSON.parse(sessionStorage.getItem("cartArray")));
}
function clearCart() {
  sessionStorage.removeItem("cartArray");
  document.querySelector("#cart-container").remove();
  let offcanvas = document.querySelector(".offcanvas-body");
  let newCartContainer = document.createElement("div");
  newCartContainer.id = "cart-container";
  offcanvas.prepend(newCartContainer);
  let totalElement = document.querySelector("#cart-total");
  totalElement.innerHTML = "Total: $0";
}
function displayCart() {
  if (
    !sessionStorage.getItem("cartArray") ||
    sessionStorage.getItem("cartArray").length === 0
  )
    return;

  let total = 0;
  let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
  let cartContainer = document.querySelector("#cart-container");
  if (cartContainer.querySelectorAll(".cart-item").length !== 0) {
    let elements = cartContainer.getElementsByClassName("cart-item");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }
  for (let i = 0; i < currentCart.length; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    let itemDesign = document.createElement("span");
    itemDesign.className = "item-design";
    itemDesign.innerHTML = currentCart[i].design;
    itemDiv.appendChild(itemDesign);
    let itemPrice = document.createElement("span");
    itemPrice.className = "item-price";
    itemPrice.innerHTML = `$${currentCart[i].price}`;
    itemDiv.appendChild(itemPrice);
    cartContainer.prepend(itemDiv);
    total += parseInt(currentCart[i].price);
    let totalElement = document.querySelector("#cart-total");
    totalElement.innerHTML = `Total: $${total}`;
    itemDiv.onclick = () => removeItem(currentCart[i].id);
  }
}
console.log(JSON.parse(sessionStorage.getItem("cartArray")));
