// FUNCION DE LA  DATA
function showDATA(data){
    let img = $("<img></img>");
    let div = $("<div></div>");
    let h3 = $("<h3>"+data.titulo.text+"</h3>");
        img.attr("src",data.enlace);
        $(div).append(img)
         $(div).append(h3);
         $("#gallery").append(div);
        $(div).addClass("items-g");

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
    
    for(i=0;i<12;i++){
        
        let number =Math.round(Math.random()*220) ;
        console.log(number)
        $.ajax({
        type:"GET",
        url:"../data/animeData.json",
        // url:"https://picsum.photos/id/"+number+"/info",
        dataType:"json",
        async:true,
        success:function(data){ 
            showDATA(data)
        }
        })
    }
   
    // 


})
