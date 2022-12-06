<?php
//EDIT BUKU
require 'koneksi.php';

$input=file_get_contents('php://input');
$data=json_decode($input,true);

$pesan=[];
$id_buku=trim($data['id_buku']);
$judul_buku=trim($data['judul_buku']);
// $password=trim($data['password']);
$keterangan=trim($data['keterangan']);

$query=mysqli_query($koneksi,"UPDATE buku SET judul_buku='$judul_buku',keterangan='$keterangan' WHERE id_buku='$id_buku'");

if ($query1) {
	http_response_code(201);
	$pesan['status']='sukses edit data buku';
}else {
	http_response_code(422);
	$pesan['status']='gagal edit data buku';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>