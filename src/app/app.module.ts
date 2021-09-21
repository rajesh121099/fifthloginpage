import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AccountComponent } from './account/account.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatButtonModule,MatCheckboxModule,MatIconModule,MatTabsModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'Login',component:LoginComponent},
      {path:'Register',component:RegisterComponent},
      {path:'Forget',component:ForgetComponent},
      {path:'Account',component:AccountComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
