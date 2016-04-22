$(document).ready(function(){
	$('form').on('submit', function(){
		var nombre = $('#nombre').val();
		var correo = $('#correo').val();
		var mensaje = $('#mensaje').val();
		$.ajax({
			type: "POST",  
            url: "mail.php",  
            data: "nombre="+nombre+"&correo="+correo+"&mensaje="+mensaje,  
			success: function(data){
				if (data=="exito"){
                    $('.formulario-contacto').hide();
                    $('.form-send').show();
                    $('.form-send').text('Mensaje enviado con éxito.');
                } else {
                    $('.formulario-contacto').hide();
                    $('.form-send').show();
                    $('.form-send').text('No hemos podido enviar tu mensaje. Inténtalo nuevamente.');
                }
			}
		})
        return false;	
	});
});
