import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Mahasiswa', url: '/mahasiswa', icon: 'people' },
    // { title: 'Akun', url: '/akun', icon: 'archive' },
    // { title: 'Logout', url: 'logout()', icon: 'exit' },
  ];
  public labels = ['Info'];
  constructor() {}
}
