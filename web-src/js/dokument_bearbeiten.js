var handler = handler || {};

handler.bindDokBearbeitenEvents = function() {
	$("#AbbrechBtn").click(function(){
		var dokId = $("#DokNameId").data("docId");
		window.location = "http://localhost:8080/gui/DokumentAnzeigen.html?id="+dokId;
	});
	
	$("#GespeichertBtn").click(function() {
		//get all contents from html fields
		var docId = $("#DokNameId").data("docId");
		var filename = $("#DokName").val();
		var category = $("#KatListe option:selected").val();
		var type = $("#ArtListe option:selected").val();
		var content = $("#DokInhalt").val();
		
			
		//create json object
		var dokJson = {"docId":docId,"filename":filename,"docType":type,"category":category,"content":content};
		jsonString = JSON.stringify(dokJson);
		
		
		jQuery.ajax({
		
			url: 'http://localhost:8080/dbservices/rest/DocumentStorage/changeDoc',
			type: 'PUT',
			data: jsonString,
			contentType: "application/json",
			dataType: "json",
			//Dokument soll erst nach dem Erstellen angezeigt werden 
			async: false,
			
				}).done(function(data) {
					
					console.log("Geändertes  Dokument:" + data);
					alert("Dokument wurde geändert");
					window.location = "http://localhost:8080/gui/DokumentAnzeigen.html?id="+docId;
					
				}).fail(function(error) {
					
				});
	});
	
	
};

handler.loadDokBearbeiten = function() {
	//get the id of the dok
	var query = window.location.search.substring(1);
	var parts = query.split("=");
	var id = parseInt(parts[1]);
	console.log(id);
	
	//ajax - Abfrage, um dieses Dokument aus der DB zu lesen
	jQuery.ajax({
		type: 'GET',
		url: "http://localhost:8080/dbservices/rest/DocumentStorage/getDoc/"+id,	
		contentType: "application/json",
		}).done(function(data) {
			console.log("Fertig");
			
			//Daten in Felder schreiben
			$("#DokNameId").text(data.filename);
			$("#DokNameId").data("docId", data.docId);
			$("#DokName").val(data.filename);
			
			$("#DokInhalt").val(data.content);
			
		}).fail(function(error) {
			console.log("error");
		});
}


$(document).ready(function(){
	handler.bindDokBearbeitenEvents();
	handler.loadDokBearbeiten();
});
