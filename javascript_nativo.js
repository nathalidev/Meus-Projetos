function f_mais(){
    var num = document.getElementById("num");
    num.innerHTML= parseInt(num.innerHTML)+1;
}

function f_menos(){
    var num = document.getElementById("num");
    if(parseInt(num.innerHTML) > 0){
        num.innerHTML= parseInt(num.innerHTML)-1;
    }
    else{
        alert("Nao permite numeros negativos!")
    }
   
}