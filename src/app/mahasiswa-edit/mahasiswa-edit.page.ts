import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.page.html',
  styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class MahasiswaEditPage implements OnInit {
  nim:any;
  nama:any;
  // password:any;
  alamat:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param:any)=>{
      this.nim = param.nim;
      // this.nama=param.nama;
      console.log(this.nim);
      // console.log(this.nama);
      this.ambilMahasiswa(this.nim);
      // , this.nama
    })
   }

  ngOnInit() {
  }

  ambilMahasiswa(nim){ //, nama
    this._apiService.ambilMahasiswa(nim).subscribe((res: any) => {
      console.log('sukses', res);
      let mahasiswa = res;
      this.nama = mahasiswa.nama;
      // this.password = mahasiswa.password;
      this.alamat = mahasiswa.alamat;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  editMahasiswa(){
    let url=this._apiService.apiURL()+"/edit.php";
    Http.request({
      method:"POST",
      url:url,
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      data:{
        nim:this.nim,
        nama:this.nama,
        // password:this.password,
        alamat:this.alamat,
      },
    }).then((data)=>{
      this.alertController.create({
        header:'Notifikasi',
        message:'Berhasil edit data mahasiswa',
        buttons:['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/mahasiswa');
    },(error)=>{
      this.alertController.create({
        header:'Notifikasi',
        message:'Gagal edit data mahasiswa',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
    })
  }

}
