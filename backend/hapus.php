<?php
//HAPUS BUKU
require 'koneksi.php';

$input=file_get_contents('php://input');
$pesan=[];

$id_buku=$_GET['id_buku'];
$judul_buku=$_GET['judul_buku'];

$query=mysqli_query($koneksi,"DELETE FROM buku WHERE id_buku='$id_buku'");

if ($query) {
	http_response_code(201);
	$pesan['status']='sukses hapus data dari tabel buku';
}else {
	http_response_code(422);
	$pesan['status']='gagal hapus data dari tabel buku';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>