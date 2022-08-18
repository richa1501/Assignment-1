import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  username:string ="";
password:string="";
 login(){
  // console.log({
  //     username : this.username,
  //     password : this.password,
  //   });
    let url='https://ai-lab-backend.herokuapp.com/api/v1/auth/login';
    let body= { username:"richa1501ss@gmail.com",
                 password:"pass@123",};
                 console.log("login Executed");
  this.http.post(url,body).subscribe({
    next:(response)=>{
      localStorage.setItem("userdata" , JSON.stringify(response));
      // console.log(response)
      this.createFAQ();
    },
    error:(error)=>{
      console.log(error)
    }
  });
 }
 createFAQ(){
  let userdata:any = localStorage.getItem("userdata")||"{}";
  userdata= JSON.parse(userdata)
  if(userdata && userdata.access_token){
    console.log( "User Logged In" );
    this.http.post('https://ai-lab-backend.herokuapp.com/api/v1/admin/faq', {
      "question": "string",
      "answer": "string",
      "botId": "string"
    },{headers:{
      "Authorization":`Bearer ${userdata.access_token}`
    }
    })
    .subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        console.log(error)
      }
    });
  }else{
    alert("login Required");
  }
 }
}
