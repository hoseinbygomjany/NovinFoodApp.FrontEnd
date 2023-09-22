import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SigninComponent } from './+Pages/signin/signin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignUpComponent } from './+Pages/sign-up/sign-up.component';
import {MatRadioModule} from '@angular/material/radio';
import { LoginmanagerComponent } from './+Pages/loginmanager/loginmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignUpComponent,
    LoginmanagerComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
