var handler = handler || {};

handler.bindLoginEvents = function() {
	$("#anmeldenBtn").click(function(){
		//Hier Cookie setzen etc und überprüfen ob es den User gibt
		//Felder auslesen
		var vorname = $("#txtVorname").val();
		var name = $("#txtName").val();
		var passwort = $("#txtPasswort").val();
		
		//User authentifizieren
		jQuery.ajax({
			url: 'http://localhost:8080/dbservices/rest/UserDBService/checkUser?vorname='+vorname+"&name="+name+"&passwort="+passwort,
			type: 'GET',
			async: false,
			
				}).done(function(data) {
					if(data == null){
						alert("Falsche Anmeldedaten! Bitte versuchen Sie es erneut");
					}	
					else{
						//TODO Cookie setzen
						document.cookie = "Benutzer="+data.userFirstName+" "+data.userName;
						window.location="http://localhost:8080/gui/HomeScreen.html";
					}
				}).fail(function(error) {
					console.log("Error beim login.js: User laden");
				});
	
	});
};


$(document).ready(function(){
	handler.bindLoginEvents();
});
