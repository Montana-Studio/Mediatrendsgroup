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
						//funcion de respuesta al correo
					}

    		})	
    	});

    });
