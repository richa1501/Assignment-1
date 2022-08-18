import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';



@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(public listservice: ListService) { }
  title:string =""
  author:string =""
  content:string =""

  ngOnInit(): void {
  }
 create(){
  let id = 1;
  this.listservice.lists.map((item)=>{
    if(item.id > id){
      id=item.id;
    }
  })
  id++
this.listservice.lists.push({
  id,
  title : this.title,
  author: this.author,
  content:this.author,
  date:new Date("2022-07-31")
})
  

}
}