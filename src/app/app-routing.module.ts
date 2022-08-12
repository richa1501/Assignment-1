import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './admin/comment/comment.component';
import { CreatecommentComponent } from './admin/createcomment/createcomment.component';
import { CreatepostComponent } from './admin/createpost/createpost.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditpostComponent } from './admin/editpost/editpost.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { HeaderComponent } from './shared/header/header.component';




const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  
  },
  {
    path: 'home',
    component: HeaderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'createpost',
    component: CreatepostComponent
  },
  {
    path: 'editpost/:id',
    component: EditpostComponent
  },
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: 'createcomment',
    component: CreatecommentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
