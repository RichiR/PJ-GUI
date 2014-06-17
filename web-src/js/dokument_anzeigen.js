var handler = handler || {};

handler.bindDokAnzeigenEvents = function() {
	//Dokument bearbeiten
	$("#aDokBearbeiten").click(function(){
		alert("Dok bearbeiten was clicked");
		//get the dokid 
		var dokid = $("dokInhalt").data("dokId");
		
		//Dok id ans href anhängen
		$("#aDokBearbeiten").attr("href", "DokumentBearbeiten.html?id="+dokid);
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
	jQuery.ajax({
		type: 'GET',
		url: "http://localhost:8080/einstieg2014/rest/DocumentStorage/getDocument/"+id,
		
		contentType: "application/json",
		
		
			}).done(function(data) {
				console.log(data);
				
				/*var output = '';
				for (key in data) {
			        output += '<li>' + data[key].firstName + '</li>';
			    }
				
				$('#searchPat').append(output).trigger('create');*/
				
				//DokId speichern
				$("#dokInhalt").data("dokId", id);
				
			}).fail(function(error) {
				
			});
	
	
}


$(document).ready(function(){
	handler.bindDokAnzeigenEvents();
	handler.loadDok();
});
