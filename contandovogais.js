var palavra = prompt('Digite uma palavra para que eu possa contar as vogais: ')
var contador = 0

function contarVogais(palavra){
  palavra=palavra.toLowerCase()
    for(var i = 0; i < palavra.length; i++){
      if(palavra.charAt(i)=="a"||palavra.charAt(i)=="e"||palavra.charAt(i)=="i"||palavra.charAt(i)=="o"||palavra.charAt(i)=="u"){
            contador++;
        }
    } 

    alert(`O n° de vogais da palavra ${palavra} é igual a ${contador}`)
}

contarVogais(palavra)