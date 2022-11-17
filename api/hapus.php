<?php
require 'koneksi.php';

$input=file_get_contents('php://input');
$pesan=[];

$nim=$_GET['nim'];
$nama=$_GET['nama'];

// $sql=mysqli_query($koneksi,"SELECT user.username, mahasiswa.nim, mahasiswa.nama FROM user INNER JOIN mahasiswa ON user.username=mahasiswa.nama WHERE mahasiswa.nim='$nim'");

// SELECT user.username, mahasiswa.nim, mahasiswa.nama FROM user INNER JOIN mahasiswa ON user.username=mahasiswa.nama WHERE mahasiswa.nim='H1D020100';
// $nama=$sql['username'];
// $pesan['status']='nama: '+$nama;
// var_dump($nama);die;


$query=mysqli_query($koneksi,"DELETE FROM user WHERE username='$nama'");

if ($query) {
	http_response_code(201);
	$pesan['status']='sukses hapus data dari tabel user';
}else {
	http_response_code(422);
	$pesan['status']='gagal hapus data dari tabel user';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>