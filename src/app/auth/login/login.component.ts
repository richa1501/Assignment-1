import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform =new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  }) 
  constructor(private http: HttpClient,
   private router:Router,
    ) { }
 

  ngOnInit(): void {
  }
  // username:string ="";
  // password:string="";
 login(){
  console.log(this.loginform);
  
    let url='https://ai-lab-backend.herokuapp.com/api/v1/auth/login';
    let body= { username:this.loginform.value.username,
                 password:this.loginform.value.password};
                //  console.log("login Executed");
  this.http.post(url,body).subscribe({
    next:(response)=>{
      localStorage.setItem("userdata" , JSON.stringify(response));
      // console.log("login clicked");
     
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
  this.router.navigate(['dashboard']);
 }

}
