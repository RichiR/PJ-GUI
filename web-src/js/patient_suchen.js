var handler = handler || {};

handler.bindHomeEvents = function() {
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
	url: "http://localhost:8080/patrepo/rest/PatientRepository/findPat?firstname="+firstName+"&lastname="+name+"&Bday="+date,
	
	contentType: "application/json",
	
	async: false,
	
		}).done(function(data) {
			console.log(data);
			
			var output = '';
			for (key in data) {
		        output += '<li class="patLink" data-patId='+data[key].insuranceId+'>' + data[key].firstName + '</li>';
		    }
			
			$('#searchPat').append(output).trigger('create');
			
		}).fail(function(error) {
			
		});
	}
	
	else{
		
		jQuery.ajax({
			
			type: 'GET',
			url: "http://localhost:8080/patrepo/rest/PatientenRepository/findPatientById?VersId="+id,
			
			contentType: "application/json",
			
			async: false,
			
				}).done(function(data) {
					console.log(data);
					
					var output = '';
					for (key in data) {
				        output += '<li class="patLink" data-patId='+data[key].insuranceId+'>' + data[key].firstName + '</li>';
				    }
					
					$('#searchPat').append(output).trigger('create');
					
				}).fail(function(error) {
					
				});
		
			
	}
		
	});
	$("#allePats").click(function(){
			jQuery.ajax({
			
			type: 'GET',
			url: "http://localhost:8080/patrepo/rest/PatientenRepository/allPatients",
			
			contentType: "application/json",
			}).done(function(data){
				console.log("Alle Patienten laden: Zurückbekommen: "+ data);
				
				var output = '';
				for (key in data) {
			        output += '<li class="patLink" data-patId='+data[key].insuranceId+'>' + data[key].firstName + '</li>';
			    }
				
				$('#searchPat').append(output).trigger('create');
			}).fail(function(){
				console.log("Fehler beim Alle Patienten laden");
			});
			
	$(".patLink").click(function(){
		var $this = $(this);
		//pat id rausholen
		var patid = $this.data("patId");
		
		//Patient anzeigen mit dieser Id
		window.location = "PatientAnzeigen.html?patid="+patid;
	});
});
	
};



$(document).ready(function(){
	handler.bindHomeEvents();
});