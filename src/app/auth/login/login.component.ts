import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  nav(){
    alert("Working");
    this.route.navigate(['/auth/register']);
  }

  login(loginForm:any){
    console.log(loginForm);
    
  }

}
