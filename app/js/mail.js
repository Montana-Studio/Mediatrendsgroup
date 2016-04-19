$(document).ready(function(){
    	$('.enviar-submit').on('click', function(){
    		var nombre = $('#nombre').val();
    		var correo = $('#correo').val();
    		var mensaje = $('#mensaje').val();
    		$.ajax({
    				type: "POST",  
		            url: "mail.php",  
		            data: "nombre="+nombre+"&correo="+correo+"&mensaje="+mensaje,  
					success: function(data){
						//function success_submit();
						alert(data);
					}

    		})	
    	});
    });
