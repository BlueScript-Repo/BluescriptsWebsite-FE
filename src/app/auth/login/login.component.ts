import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BluescriptServiceService} from "./../../bluescript-service.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,public http:BluescriptServiceService) { }

  ngOnInit(): void {
  }
  nav(){
    alert("Working");
    this.route.navigate(['/auth/register']);
  }
  loginData:any={}
  login(loginForm:any){
    console.log(loginForm);
    this.loginData={
      password:loginForm.password,
      userName:loginForm.userName
    }
    console.log(this.loginData);
    
    this.http.login(this.loginData).subscribe(res=>{
      console.log(res);
      
    })
  }

}
