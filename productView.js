function updateColorText(color) {
  let colorText = document.getElementById("color-text");
  colorText.innerHTML = color;
}
function changeSelected(src, color) {
  let selectOptions = document.querySelectorAll("#color option");
  selectOptions.forEach((option) => {
    if (option.innerHTML === color) option.selected = true;
  });
  let imageElement = document.getElementById("product-img");
  imageElement.src = src;
}
function changeColorwayFromSelect(index, srcArray, colorArray) {
  changeSelected(srcArray[index]);
  updateColorText(colorArray[index]);
}

const toastTrigger = document.querySelector("#product-form button");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
