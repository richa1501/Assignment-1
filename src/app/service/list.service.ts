import { Injectable } from '@angular/core';
export interface ListData{
  id:number,
  title:string,
  author:string,
  content:string,
  date:string | Date

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
      date:new Date("2022-07-31")
    },
    {
      id:2,
      title:"Blank",
      author:"ken",
      content:"normallized",
      date:new Date("2022-07-31")
    },
    {
      id:3,
      title:"Blank",
      author:"ken",
      content:"normal",
      date:new Date("2022-07-31")
    }
  ]

  constructor() { }
}
