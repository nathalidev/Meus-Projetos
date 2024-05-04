var idade = prompt('Qual a sua idade? ')
var filme = prompt('Para selecionar o gênero do filme digite "A" para filmes de ação, "C" para filmes infantis e "R" para outros filmes')

if(isNaN(idade) || idade === ' ' || idade <= 0){
    alert("Para informar a idade digite umm número!")
} else if (filme != 'A'&& filme !='C' && filme!= 'R'){
    alert("Para informar um filme digite uma das letras dadas como opção")
}


if (idade < 18) {
    if (filme === 'A'){
        alert("O valor do seu ingresso será de 10 R$")
    } else if (filme === 'C'){
        alert("O valor do seu ingresso será de 5 R$")
    } else if(filme === 'R'){
        alert("O valor do seu ingresso será de 7 R$")
    }
}


if (idade > 18 && idade < 60){
    if (filme === 'A'){
        alert("O valor do seu ingresso será de 20 R$")
    } else if (filme === 'C'){
        alert("O valor do seu ingresso será de 12 R$")
    } else if(filme === 'R'){
        alert("O valor do seu ingresso será de 15 R$")
    }
}

if (idade >= 60){
    alert("O valor do seu ingresso será de 15 R$")
}
