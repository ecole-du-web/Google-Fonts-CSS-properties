const range = document.querySelector(".inp-range");
const spanPixels = document.querySelector(".nb-pixels");

let baseValue = 54;
range.value = baseValue;
spanPixels.innerText = `${baseValue}px`;
backgroundRange((100 * baseValue) / 300)

range.addEventListener("input", updateRange);

function updateRange(event) {

  const value = event.target.value;
  const percentage = (100 * value) / 300;
  spanPixels.innerText = `${value}px`

  backgroundRange(percentage);

  updateSize(value)

}

function updateSize(txtSize) {
  document.querySelector("html").style.setProperty("--txt-size", `${txtSize}px`)
}

function backgroundRange(percentage) {
  range.style.background = `linear-gradient(90deg, rgba(36,115,232,1) ${percentage}%, rgba(199,221,249,1)${percentage}%)`
}