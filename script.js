const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  colorCode.textContent = "Selected color: " + selectedColor;
});
