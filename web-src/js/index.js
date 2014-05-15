var handler = handler || {};

handler.bindEvents = function() {
	$("#testdaten").click(function() {
		
		var ergebnis="";

	//Alte Daten löschen
	jQuery.ajax({
	
	url: 'http://localhost:8080/einstieg2014/rest/patient/remove/all',
	type: 'GET',
	async: false,
	
		}).done(function(data) {
			ergebnis += "Alte Daten löschen: Erfolg.\n";	
		}).fail(function(error) {
			ergebnis += "Alte Daten löschen: Fail.\n"
		});
	
	//Daten aktualisieren
	jQuery.ajax({
		
		url: 'http://localhost:8080/einstieg2014/rest/patient/create/all',
		type: 'GET',
		//Anfrage erst ganz zu Ende ausführen, danach erst das Ergebnis ausgeben --> deswegen ausnahmsweise synchon
		async: false,
			}).done(function(data) {
				ergebnis += "Daten schreiben: Erfolg.\n";	
			}).fail(function(error) {
				ergebnis += "Daten schreiben: Fail.\n"
			});
	
	alert(ergebnis);
});
		
};


$(document).ready(function(){
	handler.bindEvents();
});
