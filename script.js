
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-passwords");

let checkboxMinuscula = document.querySelector("#input-minuscula");
let checkboxMaiuscula = document.querySelector("#input-maiuscula");
let checkboxNumero = document.querySelector("#input-numeros");
let checkboxSimbolo = document.querySelector("#input-simbolos");

let button = document.querySelector("#button")

let Selecionados = 0;

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatepassword(){

    let pass = "";
    let charset = "";
    let minuscula = "abcdefghijklmnopqrstuvwxyz";
    let maiuscula = "ABCDEFGJIJKLMNOPQRSTUVWXYZ";
    let simbolos = "!@#$%&*";
    let numeros = "0123456789";

    if (checkboxMinuscula.checked) {
        charset += minuscula;
    } else {
        minuscula = "";
    }

    if (checkboxMaiuscula.checked) {
        charset += maiuscula;
    } else {
        maiuscula = "";
    }

    if (checkboxNumero.checked) {
        charset += numeros;
    } else {
        numeros = "";
    }

    if (checkboxSimbolo.checked) {
        charset += simbolos;
    } else {
        simbolos = "";
    }

    console.log(charset)


    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);

}


