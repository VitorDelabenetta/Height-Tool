    const buttonShow = document.querySelector("#display");
const buttonClose = document.querySelector("dialog button");
const modal = document.querySelector("dialog");

buttonShow.onclick = function () {
    modal.show();
}

buttonClose.onclick = function () {
    modal.close();
}

// Mostrar altura

const input = document.querySelector("#height");
var height = input.value;

const data = document.querySelector("dialog p");
data.innerHTML = "Sua altura é de " + height + " cm!";