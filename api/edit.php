<?php
require 'koneksi.php';

$input=file_get_contents('php://input');
$data=json_decode($input,true);

$pesan=[];

$nim=trim($data['nim']);
$nama=trim($data['nama']);
// $password=trim($data['password']);
$alamat=trim($data['alamat']);

$query=mysqli_query($koneksi,"UPDATE mahasiswa SET nim='$nim',nama='$nama',alamat='$alamat' WHERE nim='$nim'");

// if ($nim != '' and $nama != '' and $alamat != '') {
// 	$query = mysqli_query($koneksi,"UPDATE user SET username='$nama', password='$password' WHERE username='$nama'");

// 	if ($query) {
// 		http_response_code(201);
// 		$pesan['status']='sukses update data user';
// 		$query1 = mysqli_query($koneksi,"UPDATE mahasiswa SET nim='$gnim',nama='$nama',alamat='$alamat' WHERE nim='$nim'");
// 		if ($query1) {
// 			http_response_code(201);
// 			$pesan['status']='sukses update data mahasiswa';
// 		}
// 	}else {
// 		http_response_code(422);
// 		$pesan['status']='gagal update data user';
// 	}
// }


// if ($nim != '' and $nama != '' and $password != '' and $alamat != '') {
// 	$query = mysqli_query($koneksi,"UPDATE user SET username='$nama', password=md5('$password') WHERE username='$nama'");

// 	if ($query) {
// 		http_response_code(201);
// 		$pesan['status']='sukses update data user';
// 		$query1 = mysqli_query($koneksi,"UPDATE mahasiswa SET nim='$nim',nama='$nama',alamat='$alamat' WHERE nim='$nim'");
// 		if ($query1) {
// 			http_response_code(201);
// 			$pesan['status']='sukses update data mahasiswa';
// 		}
// 	}else {
// 		http_response_code(422);
// 		$pesan['status']='gagal update data user';
// 	}
// }


// if ($query) {
// 	http_response_code(201);
// 	$pesan['status']='sukses';
// }else {
// 	http_response_code(422);
// 	$pesan['status']='gagal';
// }


echo json_encode($pesan);
echo mysqli_error($koneksi);

?>