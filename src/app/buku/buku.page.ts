import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.page.html',
  styleUrls: ['./buku.page.scss'],
})
export class BukuPage {
  id_buku: any;
  judul_buku: any;
  keterangan: any;
  buku: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.getBuku();
   }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter(){
    console.log("jika selesai loading");
    this.getBuku();
  }

  getBuku(){
    this._apiService.getBuku().subscribe((res:any)=>{
      console.log("sukses",res);
      this.buku=res;
    }, (error:any)=>{
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message:'Gagal memuat data buku',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      })
    })
  }

  deleteBuku(id,name){
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
            this._apiService.deleteBuku(id,name).subscribe((res:any)=>{
              console.log("sukses",res);
              this.getBuku();
              this.alertController.create({
                header:'Notifikasi',
                message: 'Berhasil hapus data buku',
                buttons:['OK']
              }).then(res=>{
                res.present();
              })
            },(error:any)=>{
              console.log("gagal",error);
              this.alertController.create({
                header:'Notifikasi',
                message:'Gagal memuat data buku ',
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
