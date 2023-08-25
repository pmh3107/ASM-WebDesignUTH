<?php 
$host = "localhost";
$username = "root";
$password = "";
$dbname = "database-web_cam_nan_du_lich";

$connect = new mysqli($host, $username, $password, $dbname);

if ($connect -> connect_error){
    die($connect->connect_error);
}
?>