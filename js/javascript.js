$.getJSON("php/pellicules_list.php",function (pelis){
  console.log(pelis);

for (var i = 0; i < pelis.length; i++) {

  /*  if(pelis[i]["status"] == 0){
      var preu = "Venut";
    }else{
      var preu = cotxes[i]["preu"]+" €";
    }*/


//tot aquest tros és per programar quantes estrelles surten segons la puntuació que hi ha de cada peli
var puntuacioest = "";
var mitjaestr=0;
var valorpunt=(pelis[i]["puntuacio"])/2;
console.log(valorpunt);

for (n=0; n<Math.floor(valorpunt); n++){
  puntuacioest= puntuacioest+"<img src='img/stars/star_on.png' alt='amb estrella'>"  //concatena
}
if (valorpunt-Math.floor(valorpunt) !=0){
  puntuacioest= puntuacioest+"<img src='img/stars/star_half.png' alt='mitja estrella'>"
  mitjaestr=1;
}
for (n=0;n<(5-Math.floor(valorpunt)-mitjaestr);n++){
  puntuacioest= puntuacioest+"<img src='img/stars/star_off.png' alt='sense estrella'>"
}



document.getElementById("pelis").innerHTML+=("<article class='unapeli'><h2>"+pelis[i]["titol"]+"</h2>"+"<img src='img/covers/"+pelis[i]["image"]+".jpg' alt=''><p>"+pelis[i]["director"]+"</p><p>"+pelis[i]["any"]+" - "+pelis[i]["pais"]+"</p><a href='https://www.google.com/search?q="+pelis[i]["titol"]+" "+pelis[i]["director"]+"' target='_blank'><img id='icongoogle' src='img/icons/google.png' alt=''></a><div id='contentpuntuacio'>"+puntuacioest+"</div></article>");



}
});
