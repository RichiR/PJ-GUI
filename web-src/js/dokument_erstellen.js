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
	
		url: 'http://localhost:8080/einstieg2014/rest/DocumentStorage/createDoc',
		type: 'POST',
		data: jsonString,
		contentType: "application/json",
		dataType: "json",
		//sonst kann sein, dass man das Dokument anzeigen m�chte, bevor es fertig in die DB geschrieben wurde
		async: false,
		
			}).done(function(data) {
				//Die dokumentenID des gerade erstellten Doks (wird zur�ckgegeben) schreiben in die DokID
				//Hier evtl doch einfach alles in Cookie ? 
				$("#dokID").data("dokId", data.docId);
			}).fail(function(error) {
				
			});
		
	});
		
};


$(document).ready(function(){
	handler.bindDokEvents();
});