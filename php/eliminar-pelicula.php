<?php
//dades de connexió
$servidor = "localhost";
$usuari = "Filmoteca";
$contrasenya = "12345";
$basededades = "filmoteca";
$taula = "pellicules";

//id de registre a eliminar
$id = $_GET["id"];

//consulta
//DELETE DROM taula WHERE condicions
$sql = "DELETE FROM $taula WHERE id='$id'";

//fem la connexió
$conn = new mysqli($servidor, $usuari, $contrasenya, $basededades);

// comprovem la connexió
if ($conn->connect_error) {
  return "Fallada en la connexió: ".$conn->connect_error;
  die();
}

//executem_consulta
if ($conn->query($sql) === TRUE) { //tot ok
  echo "Ok! Registre eliminat.";
  //eliminem la imatge
  unlink("../img/covers/$id.jpg");
  //redireccionem a index
  header( "Refresh:5; url=..", true, 303);
  //header("Location: ../index.html");
  die();
} else { //error
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close(); //tanquem la connexió amb la base de dades
?>
