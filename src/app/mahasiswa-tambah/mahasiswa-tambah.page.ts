import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-mahasiswa-tambah',
  templateUrl: './mahasiswa-tambah.page.html',
  styleUrls: ['./mahasiswa-tambah.page.scss'],
})
export class MahasiswaTambahPage implements OnInit {
  nim:any;
  nama:any;
  password:any;
  alamat:any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingCOntroller: LoadingController,
  ) { }

  ngOnInit() {
  }

  addMahasiswa(){
    let url=this._apiService.apiURL()+"/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type" : "application/json"},
      data:{
        nim:this.nim,
        nama:this.nama,
        password:this.password,
        alamat:this.alamat
      },
    }).then((data)=>{
      this.nim= '';
      this.nama= '';
      this.password= '',
      this.alamat= '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil menambahkan data mahasiswa',
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
      //setelah menambahkan data pindah ke halaman mahasiswa
      this.router.navigateByUrl('/mahasiswa');
    }, (error)=>{
      this.alertController.create({
        header:'Notifikasi',
        message: 'Gagal menambahkan data mahasiswa',
        buttons:['OK'],
      }).then(res=>{
        res.present();
      });
    }
    )
  }

}
