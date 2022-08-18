import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { CreatecommentComponent } from './createcomment/createcomment.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { FormsModule } from '@angular/forms';
import { EditpostComponent } from './editpost/editpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentstatusPipe } from '../pipes/contentstatus.pipe';

@NgModule({
  declarations: [
    DashboardComponent, 
    CommentComponent,
    CreatecommentComponent, 
    EditpostComponent ,
    CreatepostComponent,  
    ContentstatusPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    DashboardComponent,
    CommentComponent,
    CreatecommentComponent,
    EditpostComponent    
  ]
})
export class AdminModule { }
