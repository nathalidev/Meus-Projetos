var temp = parseFloat(prompt('Insira a temperatura atual informando o n° de graus Celsius: '))
if (temp < 0 ){
    alert('A temperatura está fria')
}else if (temp >= 0 && temp < 21){
    alert('A temperatura está moderada')
}else if (temp >= 21 && temp < 30){
    alert('A temperatura está quente')
}else if (temp > 30){
    alert('A temperatura está muito quente')
}