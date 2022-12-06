import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'buku',
    loadChildren: () => import('./buku/buku.module').then( m => m.BukuPageModule)
  },
  { 
    path: 'buku-tambah',
    loadChildren: () => import('./buku-tambah/buku-tambah.module').then( m => m.BukuTambahPageModule)
  },
  {
    path: 'buku-edit/:id',
    loadChildren: () => import('./buku-edit/buku-edit.module').then( m => m.BukuEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard] //Secure all child pages
  },
  {
    path: 'akun',
    loadChildren: () => import('./akun/akun.module').then( m => m.AkunPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
