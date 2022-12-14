const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const span = document.getElementById("color")
let index = 0;
button.addEventListener("click", () => {
    span.textContent = colors[index];
    document.body.style.backgroundColor = colors[index];
    if (index === (colors.length - 1)) {
        index = 0;
    } else {
        index++
    }
})