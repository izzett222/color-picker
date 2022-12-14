function getHexCode() {
    return Math.floor(Math.random() * 255).toString(16)
}

const button = document.getElementById("btn");
const span = document.getElementById("color");

button.addEventListener("click", () => {
    const color = `#${getHexCode()}${getHexCode()}${getHexCode()}`
    span.textContent = color;
    document.body.style.backgroundColor = color;
})