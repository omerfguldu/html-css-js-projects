const sliderMain = document.querySelector(".slider-main");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const item = document.getElementsByClassName("item");

btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);

function prev() {
  sliderMain.prepend(item[item.length - 1]);
}

function next() {
  sliderMain.append(item[0]);
}
