var handler = handler || {};

handler.bindDokAnzeigenEvents = function() {
	//Dokument bearbeiten
	$("#DokBearbeiten").click(function(){
		
		//get the dokid 
		var dokid = $("#dokInhalt").data("dokId");
		
		//neue Seite mit id aufrufen
		console.log("Button dok bearbeiten geklickt");
		window.location = "http://localhost:8080/gui/DokumentBearbeiten.html?id="+dokid;
		//$("#aDokBearbeiten").attr("href", "DokumentBearbeiten.html?id="+dokid);
	});
	
	
};

handler.loadDok = function() {
	console.log("Im loadDoc");
	//get the id of the dok
	var query = window.location.search.substring(1);
	var parts = query.split("=");
	var id = parseInt(parts[1]);
	console.log(id);
	
	//ajax - Abfrage, um dieses Dokument aus der DB zu lesen
	console.log("Im ajax");
	jQuery.ajax({
		type: 'GET',
		url: "http://localhost:8080/dbservices/rest/DocumentStorage/getDoc/"+id,	
		contentType: "application/json",
		}).done(function(data) {
			console.log("Fertig");
			
			//Daten in Felder schreiben
			$("#DokName").text(data.filename);
			$("#name").val(data.filename);
			$("#datum").val(data.creation);
			$("#kategorie").val(data.category);
			$("#art").val(data.docType);
			$("#inhalt").val(data.content);
			
			//DokId speichern
			$("#dokInhalt").data("dokId", id);
			
			//Felder unveränderlich machen
			$(".disabled").attr("disabled", "disabled");
				
		}).fail(function(error) {
			console.log("error");
		});
}


$(document).ready(function(){
	console.log("im document ready");
	handler.bindDokAnzeigenEvents();
	handler.loadDok();
});
