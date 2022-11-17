import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

   }

   //link API
   apiURL(){
    return "http://localhost/api"
   }

   getMahasiswa(){
    return this.http.get(this.apiURL()+'/tampil.php');
   }

   deleteMahasiswa(id,name){
    return this.http.delete(this.apiURL()+'/hapus.php?nim='+id+'&nama='+name);
   }

  //  deleteUserMahasiswa(id){
  //   return this.http.delete(this.apiURL()+'/hapus_user.php?nama='+id);
  //  }

   ambilMahasiswa(id){ //, name   +'&nama='+name
    return this.http.get(this.apiURL()+'/lihat.php?nim='+id);
   }

}
