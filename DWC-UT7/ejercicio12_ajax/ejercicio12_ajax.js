$(function(){
$.ajax({
    url: 'ejercicio12_ajax.php',
    

    success: function (response) {
        var objResp = JSON.parse(response);
        console.log(objResp);
        var h1 = document.createElement("h1")
        var texto = document.createTextNode("subtitulo");
        h1.appendChild(texto);
      


        var divPrincipal = $("<div>", {
            "id": "todos_los_viajes"
        }).append(h1);
        $("body").append(divPrincipal);
        var ulPrincipal = $("<ul>");


        for (let obj of objResp) {
            var liPrimero = $("<li>", {
                "class": "pelicula"
            });

            const imagen = $("<img>", {
                "src": obj.src
            });
            liPrimero.append(imagen);

         
            var parrafo= $("<p>", {
                "text": obj.desc,
                
            });
            liPrimero.append(parrafo);
            var ulsegundo=$("<ul>", {
                "class": "specs",
                
            });

            for(let esp in obj.specs){
                liSpecs1=$("<li>");
                liSpecs1.text(obj.specs[esp]);
                ulsegundo.append(liSpecs1);

                $(liSpecs1).dblclick(function(){
                  
                    $(this).attr("class", "destacada");
                    $(this).css("color", "blue");
                    
                  });
                     
            }
           
           
            
          
         
           $(parrafo).css("display", "none");
           

           $(imagen).hover(function(){
            $(this).nextAll().slideDown("slow");
            }, function(){
            $(this).next().delay("5000").slideUp(); 
          });
        
          $(parrafo).click(function() { 
            $(this).siblings().css({"textShadow": "red 6px 6px 6px"});
        
        });

      
              
          /*    
              $(ulsegundo).dblclick(function(){
                $(this).attr("class", "");
                
              });
             
            */
             
         
           liPrimero.append(ulsegundo);
           ulPrincipal.append(liPrimero);
       
        }
       
      
        divPrincipal.append(ulPrincipal);
    }



});
});