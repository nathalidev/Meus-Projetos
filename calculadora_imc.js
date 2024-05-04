var peso = parseFloat(prompt('Digite seu peso: '))
var altura = parseFloat(prompt('Digite sua altura: '))
var imc = peso/Math.pow(altura, 2)

if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    if (imc < 18.5) {
        alert('Você se encontra abaixo do peso.');
    } else if (imc <= 24.9) {
        alert('Você está no peso normal.');
    } else if (imc <= 29.9) {
        alert('Você está com sobrepeso.');
    } else if (imc <= 34.9) {
        alert('Obesidade grau 1.');
    } else if (imc <= 39.9) {
        alert('Obesidade grau 2.');
    } else {
        alert('Obesidade grau 3 (mórbida).');
    }
}