import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    loadChildren:()=> import('./module/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'default',
    loadChildren:()=> import('./module/default/default.module').then(m => m.DefaultModule)
  },
  {
    path:'**',
    redirectTo:'/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
