
$(document).ready(function(){
	//Benutzername oben hinschreiben aus Cookie
	if(getCookie("Benutzer") != null){
		$("#benutzer_name").text(getCookie("Benutzer").split("=")[1]);
	}
	else{
		console.log("Im Benutzername setzen: else");
	}
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return null;
}

