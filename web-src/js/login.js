var handler = handler || {};

handler.bindLoginEvents = function() {
	$("#anmeldenBtn").click(function(){
		//Hier Cookie setzen etc und überprüfen ob es den User gibt
		window.location="http://localhost:8080/gui/HomeScreen.html";
	});
};


$(document).ready(function(){
	handler.bindLoginEvents();
});
