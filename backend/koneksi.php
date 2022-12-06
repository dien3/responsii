<?php 
//header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS, POST, PATCH');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Authorization, X-Auth-Token');
// header('Access-Control-Request-Headers: X-Requested-With, Content-Type');
header('Content-Type: application/json; charset=utf-8');
//membuat variable koneksi ke mysql
$koneksi = mysqli_connect('localhost','root','','responsi') or die ('koneksi gagal');


?>