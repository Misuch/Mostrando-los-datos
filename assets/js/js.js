const hamburger= document.querySelector("#nav-menu");
const menu= document.querySelector("#menu");

menu.addEventListener("click", ()=>{
    // alert("click")
    hamburger.classList.toggle("show");
})

window.addEventListener("click", e =>{
    if(hamburger.classList.contains("show")&& e.target != hamburger &&  e.target != menu){
        hamburger.classList.toggle("show");
    }

})

function showImage(data){
    //Creando un string para etiqueta img
    let img =$('<img>');
    //Dando atributo a la etiqueta con la data que devuelve la api
    img.attr('src',data.sprites.other['official-artwork'].front_default);
    //Insertando la imagen a un contenedor
    $('#pk-img').append(img);
    //Creando una etiqueta p con el nombre
    let texto = '<p>'+data.texto+'</p>';
    //Insertando la etiqueta p en un contenedor
    $('#pl-name').append(texto);
}

function searchAnime(texto){
    //Iniciando AJAX
    $.ajax({
        type: 'GET',
        url: `https://fernandaamelitc.github.io/data-json-/animeData.json`,
        dataType: 'json',
        async: true,
        success: function(data){
            showImage(data);
        }
    })

}

//Iniciar Jquery
$(document).ready(function(){
    //Evento cuando se da click en el boton #btn-buscar
    $("#btn-id").click(function(e){
        //Obtener lo que se ha escrito en el input
        var texto = $("#inputSearch").val().toLowerCase();
        //Verificar si lo que se ha escrito es diferente que vacio
        if(texto!=""){
            //Llamar a la funcion para que se haga la busqueda con el nombre
            searchAnime(texto);
        }
    })
})