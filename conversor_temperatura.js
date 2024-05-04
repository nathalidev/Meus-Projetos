var conv = parseInt(prompt('Digite 1 para converter Celsius para Fahrenheit e 2 de Fahrenheit para Celsius'))

var temp = Number(prompt('Digite a temperatura a ser convertida: '))

if(conv!= 1 && conv!=2){
  alert('Por favor digite um número válido')
  conv = parseInt(prompt('Digite 1 para converter Celsius para Fahrenheit e 2 de Fahrenheit para Celsius'))
}else{

if (conv == 1){
  var ntemp = 9/5 * temp + 32
  alert(`A temperatura convertida é igual a: ${ntemp}°F`)
}

if (conv == 2){
  var ntemp = 5/9 * (temp - 32)
  alert(`A temperatura convertida é igual a: ${ntemp}°C`)
}
}


