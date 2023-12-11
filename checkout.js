function displayCheckout() {
  let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
  let checkoutContainer = document.querySelector("#checkout-container");
  let cartTotal = 0;
  for (let i = 0; i < currentCart.length; i++) {
    cartTotal += parseInt(currentCart[i].price);
    let checkoutItem = document.createElement("div");
    checkoutItem.className = "checkout-item";
    let xIcon = document.createElement("img");
    xIcon.src = "assets/x.svg";
    xIcon.className = "x-icon";
    xIcon.onclick = () => removeItem(currentCart[i].id);
    checkoutItem.appendChild(xIcon);
    let itemImg = document.createElement("img");
    itemImg.src = currentCart[i].imgSrc;
    itemImg.className = "checkout-design-img";
    itemImg.alt = `${currentCart[i].design} - ${currentCart[i].color}`;
    checkoutItem.appendChild(itemImg);
    let textBox1 = document.createElement("div");
    textBox1.className = "text-box";
    let itemDesign = document.createElement("p");
    itemDesign.innerHTML = currentCart[i].design;
    itemDesign.className = "checkout-item-design";
    textBox1.appendChild(itemDesign);
    let itemColor = document.createElement("p");
    itemColor.innerHTML = currentCart[i].color;
    textBox1.appendChild(itemColor);
    checkoutItem.appendChild(textBox1);
    let textBox2 = document.createElement("div");
    textBox2.className = "text-box";
    let itemType = document.createElement("p");
    itemType.innerHTML = currentCart[i].itemType;
    textBox2.appendChild(itemType);
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = `$${currentCart[i].price}`;
    itemPrice.className = "checkout-item-price";
    textBox2.appendChild(itemPrice);
    checkoutItem.appendChild(textBox2);
    checkoutContainer.appendChild(checkoutItem);
  }
  document.querySelector("#checkout-total span").innerHTML = cartTotal;
}
function removeItem(id) {
  console.log("Removing Item", id);
  let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
  currentCart = currentCart.filter((item) => item.id !== id);
  clearCart();
  sessionStorage.setItem("cartArray", JSON.stringify(currentCart));
  displayCheckout();
}
function clearCart() {
  sessionStorage.removeItem("cartArray");
  document.querySelector("#checkout-container").remove();
  let checkoutSection = document.querySelector("#checkout-section");
  let newCheckoutContainer = document.createElement("div");
  newCheckoutContainer.id = "checkout-container";
  checkoutSection.prepend(newCheckoutContainer);
  let totalElement = document.querySelector("#checkout-total");
  totalElement.innerHTML = "Total : $<span>0</span>";
}
function handleCopyBtnClick() {
  if (
    !sessionStorage.getItem("cartArray") ||
    sessionStorage.getItem("cartArray").length === 0
  ) {
    console.log("Cart Empty");
  }
  let currentCart = JSON.parse(sessionStorage.getItem("cartArray"));
  let cartList = "";
  for (let i = 0; i < currentCart.length; i++) {
    cartList += `${currentCart[i].design} - ${currentCart[i].color} | ${currentCart[i].itemType} - $${currentCart[i].price}`;
    cartList += "\n";
  }
  let total = document.querySelector("#checkout-total span").innerHTML;
  cartList += `Total : $${total}`;
  //   console.log(cartList);
  navigator.clipboard
    .writeText(cartList)
    .then(() => {
      //   console.log("Text copied to clipboard:", cartList);
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSczpdz9PEAFsEMa2UKrR1_K5LtD8pcmjpY-7VWOlpzdD9YLCw/viewform?usp=sf_link";
    })
    .catch((err) => {
      console.error("Unable to copy to clipboard.", err);
    });
  //   window.location.href =
  //     "https://docs.google.com/forms/d/e/1FAIpQLSczpdz9PEAFsEMa2UKrR1_K5LtD8pcmjpY-7VWOlpzdD9YLCw/viewform?usp=sf_link";
}
displayCheckout();
