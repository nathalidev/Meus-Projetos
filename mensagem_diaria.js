var dia = prompt('Que dia é hoje? ')
dia = dia.charAt(0).toUpperCase() + dia.slice(1)
if (dia.indexOf('-') === -1){
  dia = dia.replace(/\s/g, '-')
} 
switch(dia){
    case 'Segunda-feira':
        alert(`Hoje é ${dia}, dia de começar forte!`)
        break

    case 'Terça-feira':
    case 'Quarta-feira':
    case 'Quinta-feira':
        alert(`Hoje é ${dia}, dia comum...`)
        break

    case 'Sexta-feira':
        alert(`Aproveite hoje é ${dia}, o fim de semana está chegando!`)
        break

    case 'Sábado':
    case 'Domingo':
        alert(`Hoje é ${dia}, aproveite o fim de semana!` )
        break
    
    default:
        alert('Dado inválido')
        break;


}