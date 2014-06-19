var handler = handler || {};

handler.bindDokEvents = function() {
	$("#ErstellBtn").click(function() {
	
	//get all contents from html fields
	var filename = $("#DokName").val();
	var date = $("#ErstellDatum").val();
	var category = $("#KatListe option:selected").val();
	var type = $("#ArtListe option:selected").val();
	var content = $("#DokInhalt").val();
	
		
	//create json object
	var dokJson = {"versId":"1","userId":"1","creation":date,"filename":filename,"docType":type,"category":category,"content":content};
	jsonString = JSON.stringify(dokJson);
	
	
	jQuery.ajax({
	
		url: 'http://localhost:8080/dbservices/rest/DocumentStorage/createDoc',
		type: 'POST',
		data: jsonString,
		contentType: "application/json",
		dataType: "json",
		//Dokument soll erst nach dem Erstellen angezeigt werden 
		async: false,
		
			}).done(function(data) {
				//Die dokumentenID des gerade erstellten Doks (wird zurückgegeben) schreiben in die DokID
				//$("#dokID").data("dokId", data.docId);
				//$("#LinkDokErstellt").attr("href", "DokumentAnzeigen.html?id="+data.docId);
				console.log("Erstelltes Dokument:" + data);
				window.location="http://localhost:8080/gui/DokumentAnzeigen.html?id="+data.docId;
				//console.log("Zurückgegebene Daten:" + data);
				//console.log("Inhalt dokID:" + $("#dokID").data("dokId"));
			}).fail(function(error) {
				
			});
		
	});
	
	$("#DokAnzeigen").click(function(){
		var dokId = $("#dokID").data("dokId");
		
		$("#DokAnzeigen").attr("href", "DokumentAnzeigen.html?id="+dokId);
		
	});
	$("#AbbrechBtn").click(function(){
		$("#DokName").val("");
		$("#ErstellDatum").val("");
		$("#DokInhalt").val("");
	});
		
};


$(document).ready(function(){
	handler.bindDokEvents();
});
