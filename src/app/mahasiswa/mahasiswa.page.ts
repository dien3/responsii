import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage {
  nim: any;
  nama: any;
  alamat: any;
  username: any;
  mahasiswa: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.getMahasiswa();
   }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter(){
    console.log("jika selesai loading");
    this.getMahasiswa();
  }

  getMahasiswa(){
    this._apiService.getMahasiswa().subscribe((res:any)=>{
      console.log("sukses",res);
      this.mahasiswa=res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message:'Gagal memuat data mahasiswa',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      })
    })
  }

  deleteMahasiswa(id,name){
    this.alertController.create({
      header:'Perhatian',
      subHeader:'Yakin untuk menghapus?',
      buttons:[
        {
          text:'Batal',
          handler:(data:any)=>{
          console.log('dibatalkan',data);}
        },
        {
          text:'Yakin',
          handler:(data:any)=>{
            //jika tekan yakin 
            this._apiService.deleteMahasiswa(id,name).subscribe((res:any)=>{
              console.log("sukses",res);
              this.getMahasiswa();
              this.alertController.create({
                header:'Notifikasi',
                message: 'Berhasil hapus data mahasiswa',
                buttons:['OK']
              }).then(res=>{
                res.present();
              })
            },(error:any)=>{
              console.log("gagal",error);
              this.alertController.create({
                header:'Notifikasi',
                message:'Gagal memuat data mahasiswa',
                buttons:['OK']
              }).then(res=>{
                res.present();
              })
            })
          }
        }
      ]
    }).then(res=>{
      res.present();
    })
  }

  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halaman
  }

}
