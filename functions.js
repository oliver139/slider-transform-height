const boxes = [".box-1", ".box-2", ".box-3"];
const boxWidth = document.querySelector(".outer").clientWidth;
const heights = [];
let current = 0;
let max = -1;

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(boxes.join(",")).forEach(item => heights.push(item.clientHeight + "px"));
  max = heights.length - 1
  document.querySelector(".outer").style.height = heights[current];
});

document.querySelector(".btn-prev").addEventListener("click", e => {
  if (current === 0) return;
  document.querySelector(".outer").style.height = heights[--current];
  document.querySelector(".inner").style.left = current * -boxWidth + "px";
});

document.querySelector(".btn-next").addEventListener("click", e => {
  if (current === max) return;
  document.querySelector(".outer").style.height = heights[++current];
  document.querySelector(".inner").style.left = current * -boxWidth + "px";
});