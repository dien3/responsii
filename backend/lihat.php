<?php
//TAMPIL 1 DATA BUKU
require 'koneksi.php';

$data=[];
$id_buku=$_GET['id_buku'];
// $nama=$_GET['nama'];

$query=mysqli_query($koneksi,"SELECT * FROM buku WHERE id_buku='$id_buku'");

$jumlah=mysqli_num_rows($query);

if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

?>