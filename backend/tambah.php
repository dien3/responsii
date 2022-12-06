<?php
//TAMBAH BUKU

require 'koneksi.php';

$input=file_get_contents('php://input');
$data=json_decode($input,true);

$pesan=[];
$id_buku=trim($data['id_buku']);
$judul_buku=trim($data['judul_buku']);
// $password=trim($data['password']);
$keterangan=trim($data['keterangan']);

if ( $judul_buku != '' and $alamat != '') {
	$query = mysqli_query($koneksi,"INSERT INTO buku VALUES '','$judul_buku','$keterangan' ");
	if ($query1) {
			http_response_code(201);
			$pesan['status']='sukses tambah data buku';
		}
	}else {
		http_response_code(422);
		$pesan['status']='gagal tambah data buku';
}else{
	$query = mysqli_query($koneksi,"DELETE FROM buku WHERE id_buku='$id_buku'");
}



echo json_encode($pesan);
echo mysqli_error($koneksi);

?>