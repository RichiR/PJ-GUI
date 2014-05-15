//http://www.kostenlose-javascripts.de/tutorials/cookies/

//Es ist empfehlenswert, die Routine zum Schreiben 
//eines Cookies als JavaScript-Funktion im Head zu definieren.

/// NICHT FERTIG
function CookieSetz(Bezeichner, Wert, Dauer) { //Dauer in Tagen:
	jetzt = new Date();
	Auszeit = new Date(jetzt.getTime() + Dauer * 86400000);
	document.cookie = Bezeichner + "=" + Wert + ";expires="
			+ Auszeit.toGMTString() + ";";
}

/// NICHT FERTIG
function CookieLesen() {
	Wert = "";
	if (document.cookie) {
		Wertstart = document.cookie.indexOf("=") + 1;
		Wertende = document.cookie.indexOf(";");
		if (Wertende == -1)
			Wertende = document.cookie.length;
		Wert = document.cookie.substring(Wertstart, Wertende);
	}
	return Wert;
}
/// NICHT FERTIG
function int getCoockieID() //bei uns mal die ID
{
	   var Wert = "";
	   if(document.cookie)
	   {
	      Wert = document.cookie;
	      Wert = Wert.slice(Wert.indexOf("=")+1,Wert.length); //auf uns anzupassen
	      return Wert;
	   }
}