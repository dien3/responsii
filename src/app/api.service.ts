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
    return "http://localhost/buku"
   }

   getBuku(){
    return this.http.get(this.apiURL()+'/tampil.php');
   }

   deleteBuku(id,name){
    return this.http.delete(this.apiURL()+'/hapus.php?id_buku='+id+'&judul_buku='+name);
   }

  //  deleteUserMahasiswa(id){
  //   return this.http.delete(this.apiURL()+'/hapus_user.php?nama='+id);
  //  }

   ambilBuku(id){ //, name   +'&nama='+name
    return this.http.get(this.apiURL()+'/lihat.php?id_buku='+id);
   }

}
