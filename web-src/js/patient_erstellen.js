var handler = handler || {};

handler.bindPatEvents = function() {
	$("#newPatBtn").click(function() {
		
	//get all contents from html fields
	var vorname =  $("#vorname_tf").val();
	var name =  $("#name_tf").val();
	var bdate = $("#gebtag_tf").val();
	var geschlecht = $("input:radio[name=geschlecht_rd]:checked").attr("value");
	
	//create json object
	var dokJson = {"name":name,"firstName":vorname,"gender":geschlecht,"birthDate":bdate};
	jsonString = JSON.stringify(dokJson);
	
	
	jQuery.ajax({
	
		url: 'http://localhost:8080/patrepo/rest/PatientRepository/createPat',
		type: 'POST',
		data: jsonString,
		contentType: "application/json",
		dataType: "json",

		async: false,
		
			}).done(function(data) {
				$("#patid").data("patId", data.insuranceId);
				console.log("Zur�ckgegebene Daten:" + data);
			}).fail(function(error) {
				
			});
		
	});
};


$(document).ready(function(){
	handler.bindPatEvents();
});
