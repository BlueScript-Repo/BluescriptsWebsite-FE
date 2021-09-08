import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluescriptServiceService } from '../bluescript-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Token=localStorage.getItem('token');
  isAuthenticated:boolean=true;
  User:any='';

  constructor(public router:Router,public http:BluescriptServiceService) { }

  ngOnInit(): void {
  }

  

}
