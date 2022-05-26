//aquest altra javascript és relatiu al formulari.html de creació de noves pelicules per validar els camps

function valida_titol(){
	var titol = document.getElementById("titol").value;
	if (titol.length>49) {
		document.getElementById("missatge-titol").innerHTML = "El títol no pot ser més gran de 49 caràcters";
  }else if(titol==""){
    document.getElementById("missatge-titol").innerHTML = "Has d'introduir un títol";
  }else{
		document.getElementById("missatge-titol").innerHTML = "";
		return true;
	}
}

function valida_director(){
	var director = document.getElementById("director").value;
	if (director.length>28) {
		document.getElementById("missatge-director").innerHTML = "El nom del director no pot ser més gran de 28 caràcters";
  }else if(director==""){
    document.getElementById("missatge-director").innerHTML = "Has d'introduir el nom del director";
  }else{
		document.getElementById("missatge-director").innerHTML = "";
		return true;
	}
}

function valida_pais(){
	var pais = document.getElementById("pais").value;
	if (pais.length>19) {
		document.getElementById("missatge-pais").innerHTML = "El nom del pais no pot ser més gran de 19 caràcters";
  }else if(pais==""){
    document.getElementById("missatge-pais").innerHTML = "Has d'introduir el nom del país";
  }else{
		document.getElementById("missatge-pais").innerHTML = "";
		return true;
	}
}

function valida_any(){
	var any=document.getElementById("any").value;
	if (any==""){
		document.getElementById("missatge-any").innerHTML="Escriu l'any de la pel·lícula si us plau";
	}else if (any<1800||any>2999){
    document.getElementById("missatge-any").innerHTML="El teu numero de comanda ha de ser major o igual a 1800 i menor de 2.999";
  }else{
		document.getElementById("missatge-any").innerHTML="";
		return true;
	}
}

function valida_puntuacio(){
	var puntuacio=document.getElementById("puntuacio").value;
	if (puntuacio==""){
		document.getElementById("missatge-puntuacio").innerHTML="Escriu la puntuació que li dones";
	}else if (puntuacio<1800||puntuacio>2999){
    document.getElementById("missatge-any").innerHTML="La puntuacio ha de ser major o igual a 1800 i menor de 2.999";
  }else{
		document.getElementById("missatge-any").innerHTML="";
		return true;
	}
}

function valida_form(){
  if (valida_titol()&&valida_director()&&valida_pais()&&valida_any()&&valida_puntuacio()){
  		return true;
  }else{
  		valida_titol();valida_director();valida_pais();valida_any();valida_puntuacio();
  		alert("hi ha errors");
  		return false;
  }
}
