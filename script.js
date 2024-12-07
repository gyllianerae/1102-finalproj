const logo = document.querySelector(".title");

const colors = [
  "#D09DC5",
  "#F1A7B8",
  "#C28C8D",
  "#8B93B6",
  "#6A7C9A",
  "#5B6C81",
];

let colorIndex = 0;

function changeTitleColor() {
  if (logo) {
    logo.style.color = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
  }
}
setInterval(changeTitleColor, 1000);
