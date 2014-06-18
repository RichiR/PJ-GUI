var handler = handler || {};

handler.bindDokEvents = function() {
	$("#suchButton").click(function() {
		
		var firstName="";
		var id="";
		var name="";
		var date="";
	
	//get all contents from html fields
		 firstName = $("#txtVorname").val();
		 date = $("#txtdate").val();
		 name = $("#txtNachname").val();
		 id = $("#txtID").val();
	
		

	if ($("#txtID").val()==""){
	jQuery.ajax({
		
	type: 'GET',
	url: "http://localhost:8080/patrepo/rest/PatientenRepository/findPat?firstname="+firstName+"&lastname="+name+"&Bday="+date,
	
	contentType: "application/json",
	
	async: false,
	
		}).done(function(data) {
			console.log(data);
			
			var output = '';
			for (key in data) {
		        output += '<li>' + data[key].firstName + '</li>';
		    }
			
			$('#searchPat').append(output).trigger('create');
			
		}).fail(function(error) {
			
		});
	}
	
	else{
		
		jQuery.ajax({
			
			type: 'GET',
			url: "http://localhost:8080/einstieg2014/rest/PatientenRepository/findPatientById?VersId="+id,
			
			contentType: "application/json",
			
			async: false,
			
				}).done(function(data) {
					console.log(data);
					
					var output = '';
					for (key in data) {
				        output += '<li>' + data[key].firstName + '</li>';
				    }
					
					$('#searchPat').append(output).trigger('create');
					
				}).fail(function(error) {
					
				});
		
			
	}
	
		
});
	
};



$(document).ready(function(){
	handler.bindDokEvents();
});