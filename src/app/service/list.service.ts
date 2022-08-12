import { Injectable } from '@angular/core';
export interface ListData{
  id:number,
  title:string,
  author:string,
  content:string,
  date:string

}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  lists: ListData[]=[
    {
      id:1,
      title:"Blank",
      author:"ken",
      content:"normal",
      date:"30-7-2022"
    },
    {
      id:2,
      title:"Blank",
      author:"ken",
      content:"normal",
      date:"30-7-2022"
    },
    {
      id:3,
      title:"Blank",
      author:"ken",
      content:"normal",
      date:"30-7-2022"
    }
  ]

  constructor() { }
}
