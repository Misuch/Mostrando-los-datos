function getSearch(data){
     data ="https://fernandaamelitc.github.io/data-json-/animeData.json";
    return data.titulo.texto
}
// FUNCION DE LA  DATA
function showDATA(data){
    for(let i=0;i<data.length;i++){
        let img = $("<img></img>");
        let div = $("<div></div>");
        let h3 = $("<h3>"+data[i].titulo.texto+"</h3>");
        img.attr("src",data[i].titulo.enlace);
        $(div).append(img)
         $(div).append(h3);
         $("#gallery").append(div);
        $(div).addClass("items-g");

    }

}

$(document).ready(function(){
    // ocultar en jquery .hide()

    $("#hidden-btn").click(function(){
        $("#btn-botones").hide("slow")
    })

    // mostar con jquery .show()

    $("#show-btn").click(function(){

        $("#btn-botones").show("slow")
    })

    // api de json  --- agregando img
    
    
        
    
    $.ajax({
    type:"GET",
    url:"https://fernandaamelitc.github.io/data-json-/animeData.json",
    dataType:"json",
    async:true,
    success:function(data){ 
            showDATA(data)
        }
        
    })
    
    // buscador

    // ajax
    function searchImg(data){
    // iniciar ajax
        $.ajax({
            type:"get",
            url:getSearch(data),
            dataType:"json",
            async:true,
            success:function(data){
                showDATA(data);
            }

            })
    }

    // accion y jqery

    $("#btn-search").click((e)=>{
        // obtener lo que se escribio en el input
        var name = $("#input-search").val().toLowerCase();
        // verificar si lo escrito es diferente de vacio
        if(name != ""){
            // llamar a la funcion que has escrito con el nombre
            searchImg()
        }
    })
   
    


})


// url:"https://fernandaamelitc.github.io/data-json-/animeData.json",

