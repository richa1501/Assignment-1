import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  constructor(public listService : ListService ) { }


  ngOnInit(): void {
    
  }
  delete(itemId:number){
    console.log(itemId)

   this.listService.lists = this.listService.lists.filter((item)=>{
      return item.id !== itemId
    })

  }
  name='peter';
  updateName(){
    this.name="john";
  }
}
