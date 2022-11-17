<?php
require 'koneksi.php';

$data=[];
$nim=$_GET['nim'];
// $nama=$_GET['nama'];

$query=mysqli_query($koneksi,"SELECT * FROM mahasiswa WHERE nim='$nim'");

//  ;
// "SELECT user.username, user.password, mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat FROM user INNER JOIN mahasiswa ON user.username = mahasiswa.nama WHERE mahasiswa.nim='$nim' 

$jumlah=mysqli_num_rows($query);

if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);

?>