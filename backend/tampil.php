<?php 
//TAMPIL SEMUA DATA BUKU
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"SELECT * FROM buku");

// SELECT * FROM mahasiswa
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>
