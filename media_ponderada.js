var n1 = parseFloat(prompt('Digite a primeira nota: '))

if(isNaN(n1)){
  alert('Você não digitou um dado válido no campo da primeira nota!')
  n1 = parseFloat(prompt('Digite a primeira nota: '))
}

var n2 = parseFloat(prompt('Digite a segunda nota: '))

if(isNaN(n2)){
  alert('Você não digitou um dado válido no campo da segunda nota!')
  n2 = parseFloat(prompt('Digite a segunda nota: '))
}

var n3 =  parseFloat(prompt('Digite a terceira nota: '))

if (isNaN(n3)){
  alert('Você não digitou um dado válido no campo da terceira nota!')
  n3 =  parseFloat(prompt('Digite a terceira nota: '))
}

var media = (n1*3 + n2*4 + n3*3)/10

alert('A média ponderada entre as notas é igual a: '+ media)
