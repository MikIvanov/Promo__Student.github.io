<?php 
/* Принимаем данные из формы */ 
  $name = $_POST["name"];  
  $email = $_POST["contact"]; 
  $text_message = $_POST["message"]; 
 
/* Подключаемся к базе данных */ 
  $link = mysqli_connect("localhost", "root", ""); 
  mysqli_select_db($link, "part"); 
 
/* Записывает данные */  
$sql = "INSERT INTO tablitsa(SNP, Telemail	, Partner) VALUES ('$name', '$email', '$text_message')"; 
$result=mysqli_query($link, $sql); 
 
/* Делаем редирект обратно */ 
header("Location: ".$_SERVER["HTTP_REFERER"]);  
exit; 
?>