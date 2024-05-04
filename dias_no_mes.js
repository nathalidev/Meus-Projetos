var mes = prompt('Digite o mês na qual você quer saber o número de dias que ele possui: ')
mes = mes.charAt(0).toUpperCase() + mes.slice(1)
var dias

switch (mes){
    case 'Janeiro':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Fevereiro':
        dias = '28';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Março':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Abril':
        dias = '30';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Maio':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Junho':
        dias = '30';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Julho':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Agosto':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Setembro':
        dias = '30';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Outubro':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Novembro':
        dias = '30';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    case 'Dezembro':
        dias = '31';
        alert(`O mês ${mes} tem ${dias}`)
        break;

    default:
        mensagem = "Mês inválido";
        alert(mensagem)
        break;
        
}