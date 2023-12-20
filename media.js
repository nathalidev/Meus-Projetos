alert("Insira três números e iremos calcular a média para você!")

var n1 = prompt("Escreva um número: ")
var n2 = prompt("Escreva um número: ")
var n3 = prompt("Escreva um número: ")
if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    alert("A média entre " + n1 + ", " + n2 + " e " + n3 + " é igual a " + media.toFixed(2));
  } else {
    alert("Por favor, insira valores numéricos válidos.");
  }

