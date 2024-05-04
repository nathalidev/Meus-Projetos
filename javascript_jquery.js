$(document).ready(function(){
    $("#bt_mais").on("click", function(){
        $("#num").html(parseInt($("#num").html())+1);
    })

    $("#bt_menos").on("click", function(){
        if(parseInt($("#num").html())>0){
        $("#num").html(parseInt($("#num").html())-1);
        }else{
            alert("Nao e permitido numeros negativos!")
        }
    });
});