import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-buku-tambah',
  templateUrl: './buku-tambah.page.html',
  styleUrls: ['./buku-tambah.page.scss'],
})
export class BukuTambahPage implements OnInit {
  id_buku:any;
  judul_buku:any;
  keterangan:any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingCOntroller: LoadingController,
  ) { }

  ngOnInit() {
  }

  addBuku(){
    let url=this._apiService.apiURL()+"/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type" : "application/json" },
      data:{
        id_buku:this.id_buku,
        judul_buku:this.judul_buku,
        keterangan:this.keterangan,
      },
    }).then((data)=>{
      this.id_buku= '';
      this.judul_buku= '';
      this.keterangan= '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil menambahkan data buku',
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
      //setelah menambahkan data pindah ke halaman buku
      this.router.navigateByUrl('/buku');
    }, (error)=>{
      this.alertController.create({
        header:'Notifikasi',
        message: 'Gagal menambahkan data buku',
        buttons:['OK'],
      }).then(res=>{
        res.present();
      });
    }
    )
  }

}
