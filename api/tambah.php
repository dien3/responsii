<?php
require 'koneksi.php';

$input=file_get_contents('php://input');
$data=json_decode($input,true);

$pesan=[];
$nim=trim($data['nim']);
$nama=trim($data['nama']);
$password=trim($data['password']);
$alamat=trim($data['alamat']);

if ($nim != '' and $nama != '' and $password != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"INSERT INTO user(username,password) VALUES ('$nama',md5('$password'))");

	if ($query) {
		http_response_code(201);
		$pesan['status']='sukses + user';
		$query1 = mysqli_query($koneksi,"INSERT INTO mahasiswa(nim,nama,alamat) VALUES ('$nim','$nama','$alamat')");
		if ($query1) {
			http_response_code(201);
			$pesan['status']='sukses + data mahasiswa';
		}
	}else {
		http_response_code(422);
		$pesan['status']='gagal + user';
		$query = mysqli_query($koneksi,"DELETE FROM mahasiswa WHERE nim='$nim'");
}
}else{
	$query = mysqli_query($koneksi,"DELETE FROM mahasiswa WHERE nim='$nim'");
}



// $query=mysqli_query($koneksi,"INSERT INTO mahasiswa(nim,nama,alamat) VALUES ('$nim','$nama','$alamat')");

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