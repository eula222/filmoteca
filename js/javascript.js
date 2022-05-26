$.getJSON("php/pellicules_list.php",function (pelis){
  console.log(pelis);

for (var i = 0; i < pelis.length; i++) {

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

  //aquí munto cada pelicula amb imatge i titol i resta en el seu respectiu article per al fitxer index.hml
  document.getElementById("pelis").innerHTML+=("<article class='unapeli'><h2>"+pelis[i]["titol"]+"</h2>"+"<a href='video.html?id="+pelis[i]['id']+"' target='_blank'><img src='img/covers/"+pelis[i]["image"]+".jpg' alt=''></a><p>"+pelis[i]["director"]+"</p><p>"+pelis[i]["any"]+" - "+pelis[i]["pais"]+"</p><div><a href='https://www.google.com/search?q="+pelis[i]["titol"]+" "+pelis[i]["director"]+"' target='_blank'><img class='icon' src='img/icons/google.png' alt=''></a><span> </span><a href='php/eliminar-pelicula.php?id="+pelis[i]["id"]+"'><img src='img/icons/delete.png' class='icon'></a></div><div id='contentpuntuacio'>"+puntuacioest+"</div></article>");

}
});
