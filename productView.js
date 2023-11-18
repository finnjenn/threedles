// Function to update the color description
function updateColorText(color) {
  let colorText = document.getElementById("color-text");
  colorText.innerHTML = color;
  colorText.style.color = "#420039";
}
// function removeColorText() {
//   let colorText = document.getElementById("color-text");
//   colorText.style.color = "transparent";
// }
function changeImage(src) {
  let imageElement = document.getElementById("product-img");
  imageElement.src = src;
}
