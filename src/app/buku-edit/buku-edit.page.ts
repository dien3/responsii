import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.page.html',
  styleUrls: ['./buku-edit.page.scss'],
})
export class BukuEditPage implements OnInit {
  id_buku:any;
  judul_buku:any;
  keterangan:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id_buku = param.id_buku;
      // this.nama=param.nama;
      console.log(this.id_buku);
      // console.log(this.nama);
      this.ambilBuku(this.id_buku);
      // , this.nama
    })
   }

  ngOnInit() {
  }

  ambilBuku(id_buku){ //, nama
    this._apiService.ambilBuku(id_buku).subscribe((res: any) => {
      console.log('sukses', res);
      let buku = res;
      this.judul_buku = buku.judul_buku;
      // this.password = buku.password;
      this.keterangan = buku.keterangan;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  editBuku(){
    let url=this._apiService.apiURL()+"/edit.php";
    Http.request({
      method:"POST",
      url:url,
      headers: {"Content-Type": "application/json; charset=UTF-8"},
      data:{
        id_buku:this.id_buku,
        judul_buku:this.judul_buku,
        keterangan:this.keterangan,
      },
    }).then((data)=>{
      this.alertController.create({
        header:'Notifikasi',
        message:'Berhasil edit data buku',
        buttons:['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/buku');
    },(error)=>{
      this.alertController.create({
        header:'Notifikasi',
        message:'Gagal edit data buku',
        buttons: ['OK']
      }).then(res=>{
        res.present();
      });
    })
  }

}
