$(document).ready(function () {
    /*linea que carga el documento */
   
        $("p").attr("class", "borde");
        
        $('ul:eq(1)').children().attr("class", "verde");
        $("p").removeClass("borde");
        
        $('p:eq(1)').text("Modulos de segundo");
        $("li:eq(0)").empty();
        $("li:eq(0)").remove();
        var fol=$("<li>", {
            "text": "FOL",
            
        });
        $('p:eq(0)').click(function() { 
            $(this).toggleClass("borde");
        
        });
        $("ul:eq(1)").children().click(function () {
            var horas = $(this).children().first().attr("data-hours");
            console.log(horas);
            var nombre = $(this).children().first().children().first().text();
    
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(horas + ", " + nombre));
            $(this).children().append(li);
        });
        //l
        

        $("ul:eq(0)").append(fol);

        $("ul:eq(0)").append(fol);

        var programacion=$("<li>", {
            "text": "Programacion",
            
        });
        $("ul:eq(0)").prepend(programacion);
/*
        $("ul:eq(1)").empty();
        $("ul:eq(0)").remove();
*/
  
 });
 