import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Http } from '@capacitor-community/http';
import { Preferences } from '@capacitor/preferences';

const TOKEN_KEY = 'token-saya';
const USERNAME = 'namasaya';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:any;
  password:any;

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.username != null && this.password!=null){
      let url=this.authService.apiURL()+"proses_login.php";
      Http.request({
        method:"POST",
        url:url,
        headers: {"Content-Type":"application/json"},
        data:{
          username:this.username,
          password:this.password
        },
      }).then((data)=>{
        //jika status berhasil
        if (data['data']['status_login']=='berhasil') {
          Preferences.set({ key: TOKEN_KEY, value: data['data']['token'] });
          Preferences.set({ key: USERNAME, value: data['data']['username'] });
          location.reload();          
        }else{
          this.alertController.create({
            header:'Notifikasi',
            message:'Username dan Password salah',
            buttons: ['OK']
          }).then(res=>{
            res.present();
          });
        }
      }, (error)=>{
        this.alertController.create({
          header: 'Notifikasi',
          message: 'Gagal login, Periksa koneksi internet <br><br>'+error,
          buttons: ['OK']
        }).then(res=>{
          res.present();
        });
      })
    }else{
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Username dan Password tidak boleh kosong',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
    }
  }

}
