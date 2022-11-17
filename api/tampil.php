<?php 
require 'koneksi.php';
$data = [];
$query = mysqli_query($koneksi,"SELECT user.username, user.password, mahasiswa.nim, mahasiswa.nama, mahasiswa.alamat FROM user INNER JOIN mahasiswa ON user.username = mahasiswa.nama");

// SELECT * FROM mahasiswa
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);

?>
