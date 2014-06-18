var handler = handler || {};

handler.bindDokEvents = function() {
	$("#ErstellBtn").click(function() {
		
	//get all contents from html fields
	var vorname =  $("#vorname_tf").val();
	var name =  $("#name_tf").val();
	var bdate = $("#gebtag_tf").val();
	
		
	//create json object
	var dokJson = {"id":"4444","firstName":vorname,"name":name,"birthDate":bdate};
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
				//console.log("Zur�ckgegebene Daten:" + data);
				//console.log("Inhalt dokID:" + $("#dokID").data("dokId"));
			}).fail(function(error) {
				
			});
		
	});
};


$(document).ready(function(){
	handler.bindDokEvents();
});
