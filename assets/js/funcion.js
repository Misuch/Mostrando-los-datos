
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


    $("#select-filters").on("change", function () {
        let selected = $("option:selected").val();
        filtrosData(selected);
    });
    

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
    function searchImg(name){
    // iniciar ajax
        $.ajax({
            type:"get",
            url:`https://fernandaamelitc.github.io/data-json-/animeData.json`,
            dataType:"json",
            async:true,
            success:function(data){
                for(let i=0;i<data.length;i++){
                   
                    
                    if(data[i].titulo.texto==name){
                         console.log(data[i].titulo.texto)
                        searchData(data[i]);
                      break;
                    }
                }
                
                
                },error:function(e){
                    console.log(e)
                }
            });
    }
// funcion buscador
function searchData(data){
    $("#gallery").empty();
    let img = $("<img></img>");
    let div = $("<div></div>");
    let h3 = $("<h3>"+data.titulo.texto+"</h3>");
    let p = $("<p>"+data.description+"</p>");
    let h4 = $("<p>"+data.start_date+"</p>");
    img.attr("src",data.titulo.enlace);
    $(div).append(img)
     $(div).append(h3);
     $(div).append(h4) 
     $(div).append(p)
     $("#gallery").append(div);
    $(div).addClass("items-g");

    
}
// funcion filtros
function filtrosData(data){
    let img = $("<img></img>");
    let div = $("<div></div>");
    let h3 = $("<h3>"+data.titulo.texto+"</h3>");
    let p = $("<p>"+data.description+"</p>");
    let h4 = $("<p>"+data.start_date+"</p>");
    img.attr("src",data.titulo.enlace);
    $(div).append(img)
     $(div).append(h3);
     $(div).append(h4) 
     $(div).append(p)
     $("#gallery").append(div);
    $(div).addClass("items-g");

    
}
    // accion y jquery

    $("#btn-search").click((e)=>{
        
        // obtener lo que se escribio en el input
        var name = $("#input-search").val();
        
        // verificar si lo escrito es diferente de vacio
        if(name != ""){
            // llamar a la funcion que has escrito con el nombre
           searchImg(name);
        }
    })
   

    // filtros

    function filtrosImg(name){
        console.log(name)
        // iniciar ajax
            $.ajax({
                type:"get",
                url:`https://fernandaamelitc.github.io/data-json-/animeData.json`,
                dataType:"json",
                async:true,
                success:function(data){
                    $("#gallery").empty();
                    for(let i=0;i<data.length;i++){
                       
                        
                       for(let e=0;e<data[i].generos.length;i++){
                            if(data[i].generos[e]==name){
                                filtrosData(data[i])
                            }
                       }
                    }
                    
                    
                    },error:function(e){
                        console.log(e)
                    }
                });
    }

       




})


// url:"https://fernandaamelitc.github.io/data-json-/animeData.json",

