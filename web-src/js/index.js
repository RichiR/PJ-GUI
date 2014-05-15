var handler = handler || {};

handler.bindEvents = function() {
	$("#testdaten").click(function() {
		
		var ergebnis="";
	
	//Patienten löschen & aktualisieren	
	jQuery.ajax({
	
	//url: '/einstieg2014/rest/...',
	//type: 'GET'
		}).done(function(data) {
			ergebnis += "Patienten l&ouml;schen und schreiben: Erfolg.\n";	
		}).fail(function(error) {
			ergebnis += "Patienten l&ouml;schen und schreiben: Fail.\n"
		});
	});	
	
	//Dokumente löschen & aktualisieren
	jQuery.ajax({
		
		//url: '/einstieg2014/rest/...',
		//type: 'GET'
			}).done(function(data) {
				ergebnis += "Dokumente l&ouml;schen und schreiben: Erfolg.\n";	
			}).fail(function(error) {
				ergebnis += "Dokumente l&ouml;schen und schreiben: Fail.\n"
			});
		});
		
	//User löschen & aktualisieren
	jQuery.ajax({
		
		//url: '/einstieg2014/rest/...',
		//type: 'GET'
			}).done(function(data) {
				ergebnis += "User l&ouml;schen und schreiben: Erfolg.\n";	
			}).fail(function(error) {
				ergebnis += "User l&ouml;schen und schreiben: Fail.\n"
			});
		});
		
		alert(ergebnis);
};


$(document).ready(function(){
	handler.bindEvents();
});
