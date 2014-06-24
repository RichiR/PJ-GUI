var handler = handler || {};

handler.bindPatAnzeigenEvents = function() {
	$("#btn_newDoc").click(function() {
		//id ans href dranhängen
		var patid = $("#PatId").data("patId");
		window.location = "DokumentErstellen.html?patId="+patid;
	});
};


handler.loadPat = function() {
	console.log("Im loadPat");
	//get the id of the pat from url
	var query = window.location.search.substring(1);
	var parts = query.split("=");
	var id = parseInt(parts[1]);
	console.log(id);
	
	//ajax - Abfrage, um diesen Patienten aus der DB zu bekommen
	console.log("Im ajax");
	jQuery.ajax({
		type: 'GET',
		url: "http://localhost:8080/patrepo/rest/PatientRepository/"+id,	
		contentType: "application/json",
		}).done(function(data) {
			console.log("Fertig");
			
			//Daten in Felder schreiben
			$("#name").text(data.name);
			$("#vorname").val(data.firstName);
			$("#gtag").val(data.birthDate);
			$("#id").val(data.insuranceId);
			
			
			//PatId speichern
			$("#PatId").data("patid", id);
			
			//Felder unveränderlich machen
			$(".disabled").attr("disabled", "disabled");
				
		}).fail(function(error) {
			console.log("error");
		});
};


$(document).ready(function(){
	console.log("Patient anziegen document.ready");
	handler.bindPatAnzeigenEvents();
	handler.loadPat();
});
