import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,PublicModule
  ]
})
export class PublicModule { }
