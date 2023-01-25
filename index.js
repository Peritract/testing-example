const button = document.querySelector("#clicker");
const readout = document.querySelector("#readout");

button.addEventListener("click", () => {
    readout.textContent = parseInt(readout.textContent) + 1;
})