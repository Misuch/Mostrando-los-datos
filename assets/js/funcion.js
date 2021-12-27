
// Mostrar la data
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
// iniciar jQuery
$(document).ready(function(){

    // ocultar en jquery .hide()

    $("#hidden-btn").click(function(){
        $("#btn-botones").hide("slow")
    })

    // mostar con jquery .show()

    $("#show-btn").click(function(){

        $("#btn-botones").show("slow")
    })

    // Mostrar Animes de la DATA
    
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
    // funcion buscador y resultado
    function searchData(data){
        $("#gallery").empty();
        let img = $("<img></img>");
        let div = $("<div></div>");
        let divStudi = $("<div></div>");
        let divEmicion = $("<div></div>");
        let h3 = $("<h3>"+data.titulo.texto+"</h3>");
        let p = $("<p>"+data.description+"</p>");
        let emi_ = $("<span>"+data.start_date+"</span>");
        let studi_ = $("<span>"+data.estudio+"</span>");
        let Emicion=$("<span>Emsion: </span>")
        let studi=$("<span>Emsion: </span>")
        img.attr("src",data.titulo.enlace);
            $(div).append(img)
            $(div).append(h3);
            $(divEmicion).append(Emicion)
            $(divEmicion).append(emi_) 
            $(divStudi).append(studi)
            $(divStudi).append(studi_)
            $(div).append(divEmicion);
            $(div).append(divStudi);
            $("#gallery").append(div);
            $(div).append(p)
            
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
        $(div).append(p)
        $("#gallery").append(div);
        $(div).addClass("items-g");

    
}
    // accion y jquery de Filtros

    $("#btn-search").click((e)=>{
        
        // obtener lo que se escribio en el input
        var name = $("#input-search").val().toLowerCase();
        
        // verificar si lo escrito es diferente de vacio
        if(name != ""){
            // llamar a la funcion que has escrito con el nombre
           searchImg(name);
        }
    })
   

    // filtros data

    function filtrosImg(name){
        console.log(nam)
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
    // filtros accion
    $("#select-filters").on("change", function () {
        let selected = $("option:selected").val();
        filtrosData(selected);
    });
    




})

// Api de la data
// url:"https://fernandaamelitc.github.io/data-json-/animeData.json",

