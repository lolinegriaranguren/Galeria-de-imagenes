$(document).ready(function() {
    
    
    var $fondo = $('<div id="fondo-box"></div>');
    var $imagen = $('<img id="imagen-lightbox">');
    var $texto = $('<p></p>');
    
    $fondo.append($imagen);
    
    $fondo.append($texto);
    
    $("body").append($fondo);
    
    $fondo.hide();
    
    $("ul li a").click(function(e){
        e.preventDefault();
        
        var imageLocation = $(this).attr("href");
        $imagen.attr("src", imageLocation);
        
        var textLocation = $(this).children("img").attr("alt");
        $texto.text(textLocation);
        
        $fondo.fadeIn();
    });
    
    $("img").click(function(e){
        e.preventDefault();
        $fondo.fadeOut();
    });
});
