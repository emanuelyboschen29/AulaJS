
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let alturacm = parseFloat(document.getElementById("altura").value);

    let altura = alturacm / 100; 
    let imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(1));
}

