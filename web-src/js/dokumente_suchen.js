var handler = handler || {};

handler.bindDokEvents = function() {
	$("#search_btn").click(function() {
		
		//Inhalte aus html-Seite auslesen
		var name = $("#name_tf").val();
		var cat = $("#category_sel option:selected").val();
		var dtFrom = $("#fromdate_tf").val();
		var dtUntil = $("#todate_tf").val();
		
		jQuery.ajax({
		
			url: 'http://localhost:8080/einstieg2014/rest/DocumentStorage/findDocs?filename=name&category=cat',
			type: GET
			datatype: json
			data: { filename: "?", category: "?"}
		}).done (function(data){
			$("#line1").append(data);
		});
		
	});
};

$(document).ready(function(){
	handler.bindDokEvents();
});