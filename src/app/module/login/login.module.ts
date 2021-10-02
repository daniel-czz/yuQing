import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

//service--------------------------------------
import { HttpService } from 'src/app/service/http.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers: [HttpService, LocalstorageService]
})
export class LoginModule { }
