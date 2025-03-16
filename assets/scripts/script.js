const buttonShow = document.querySelector("#display");
const buttonClose = document.querySelector("dialog button");
const modal = document.querySelector("dialog");

buttonShow.onclick = function () {
    // Mostrar altura
    var height = document.getElementById("height").value;

    const data_result = document.querySelector("dialog p");
    data_result.innerHTML = "Sua altura é de " + height + " cm!";

    modal.show();
}

buttonClose.onclick = function () {
    modal.close();
}