var nome 
do{
    nome = prompt("Qual seu nome?")
    if (typeof nome !== 'string') {
        alert("Por favor, insira um nome válido.")
    }
} while (typeof nome !== 'string')

var idade
do { 
    var idade = prompt("Qual a sua idade?")
    idade = parseInt(inputIdade)
    
    if (inputIdade === '' || !Number.isInteger(idade)) {
        alert("Por favor, insira um número inteiro para a idade.")
    }
}while (inputIdade === '' || !Number.isInteger(idade)) 

var temPet
do {
    var temPet= prompt("Você tem um animal de estimação? \nDigite 1 para 'sim' \nDigite 2 para 'não'")
    if(temPet === '' || !Number.isInteger(idade)|| (temPet !== '1' && temPet !== '2')) {
    alert("Por favor, insira um número inteiro válido.")
    }
}while (temPet === '' || !Number.isInteger(idade)|| (temPet !== '1' && temPet !== '2'))


console.log = ("Nome: "+ nome + "/ O tipo de dado inserido é: "+ typeof nome)
console.log = ("Idade: "+ idade + "/ O tipo de dado inserido é: "+ typeof idade)
console.log = ("Ele(a) possui algum pet? "+ temPet + "/ O tipo de dado inserido é: "+ typeof temPet)


