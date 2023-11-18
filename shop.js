// document.addEventListener("DOMContentLoaded", () => {
// Get all product elements
const productElements = document.querySelectorAll(".product-container");
console.log(productElements);

// Add event listeners to each product for hover effect
productElements.forEach((product) => {
  let productImage = product.querySelector(".product-img");
  let altImage = product.querySelector(".product-alt-img");
  console.log(productImage);

  // Add event listener for mouseover
  product.addEventListener("mouseenter", () => {
    productImage.style.display = "none";
    altImage.style.display = "block";
  });

  // Add event listener for mouseout
  product.addEventListener("mouseleave", () => {
    productImage.style.display = "block";
    altImage.style.display = "none";
  });
});
// });
