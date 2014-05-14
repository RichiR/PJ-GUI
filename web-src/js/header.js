

$(document).ready(function(){
	var now = new Date();
	var html = now.getDate() + "." + now.getMonth() + "." + now.getFullYear() + "," + now.getHours() + ":" + now.getMinutes();  
	$("#spanDatum").html(html);
	
});