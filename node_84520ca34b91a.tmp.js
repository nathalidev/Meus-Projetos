/*var n1 = Number(prompt('Digite um número: ')) // esse código criará uma função para dizer qual número que o usuário informou é maior
var n2 = Number(prompt('Digite outro número: '))
function saberMaior(n1, n2) {
    if (n1 !== n2){
        var maior = Math.max(n1, n2)
        return `O maior número entre ${n1} e ${n2} é ${maior}`
    } else {
        return ("Você digitou dois número iguais.")
    }
}

console.log(saberMaior(n1, n2))*/

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Digite um número: ', (answer1) => {
    const n1 = Number(answer1) // esse código criará uma função para dizer qual número que o usuário informou é maior
    rl.question('Digite outro número: ', (answer2) => {
        const n2 = Number(answer2)
function saberMaior(n1, n2) {
    if (n1 !== n2){
        var maior = Math.max(n1, n2)
        return `O maior número entre ${n1} e ${n2} é ${maior}`
    } else {
        return ("Você digitou dois número iguais.")
    }
}

saberMaior(n1, n2)
rl.close()
})
})