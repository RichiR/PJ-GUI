var handler = handler || {};

handler.bindDokEvents = function() {
	$("#search_btn").click(function() {
		
		//Inhalte aus html-Seite auslesen
		var name = $("#name_tf").val();
		var cat = $("#category_sel option:selected").val();
		var From = $("#fromdate_tf").val();
		var Until = $("#todate_tf").val();

		//direkte Eingabe in Browser funktioniert
		//http://localhost:8080/einstieg2014/rest/DocumentStorage/findDocs?filename=Arztbrief&category=Sonographie&dtFrom=2010-12-02&dtUntil=2010-12-04
		jQuery.ajax({
			url: 'http://localhost:8080/einstieg2014/rest/DocumentStorage/findDocs?filename='+name+'&category='+cat+'&dtFrom='+From+'&dtUntil='+Until,
			type: 'GET'
		}).done (function(data){
				
			var line ="<tr>";
			for (var i=0; i<data.length; i++)
			{
				var elem=data[i];
				elem.creation=(elem.creation).slice(0,10);
				//line+= "<td> <a href="DokumentAnzeigen.html">" + elem.filename + "</a></td>";
				line+= "<td>" + elem.filename + "</td>";
				line+= "<td>" + elem.creation + "</td>";
				line+= "<td>" + elem.category + "</td>";
			}
			line+= "</ tr>";
			
			$("#insertValues").append(line);
		});
		
	});
};

$(document).ready(function(){
	handler.bindDokEvents();
});