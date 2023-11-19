function updateColorText(color) {
  let colorText = document.getElementById("color-text");
  colorText.innerHTML = color;
}
function changeImage(src) {
  let imageElement = document.getElementById("product-img");
  imageElement.src = src;
}
function changeColorwayFromSelect(index, srcArray, colorArray) {
  changeImage(srcArray[index]);
  updateColorText(colorArray[index]);
}
