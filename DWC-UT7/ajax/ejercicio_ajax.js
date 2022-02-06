$(function(){

    // $("#button").click(function() {
    //     var valorCaja1=$("#valor1").val();
    //     var valorCaja2=$("#valor2").val();
    //     var parametros = {
    //         "valorCaja1": valorCaja1,
    //         "valorCaja2": valorCaja2
    //     };
    //     $.ajax({
    //         data: parametros,
    //         url: 'ajax.php',
    //         type: 'post',
    //         beforeSend: function () {
    //             $("#resultado").html("Procesando, espere por favor...");
    //         },
    //         success: function (response) {
    //             $("#resultado").html(response);
    //         }
    //     });
    // });

    $("#button").click(function() {
        $.ajax({
            url: 'ajax.php',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                num=JSON.parse(response);
                
                sum=num.valor1+num.valor2;
                console.log(sum);
                $("#resultado").html(sum);
            }
        });
    });
  
});
