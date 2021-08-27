import { Component, OnInit } from '@angular/core';
import {BluescriptServiceService} from "./../../bluescript-service.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public http:BluescriptServiceService ) { }

  ngOnInit(): void {
  }
  register:any={};
  Register(val:any){
    console.log(val);
    this.register={
      age:val.Age ,
      alternateMobileNo:val.alternatemobile,
      certification: val.certification,
      companyName:val.companyName ,
      confirmPassword:val.cpassword ,
      currentAddress:val.currentAdd ,
      degree:val.degree ,
      degreeIn:val.branch ,
      degreeInstitute:val.institute ,
      degreePassoutYear:val.year ,
      degreePercentage: val.percentage,
      deplomaIn:val.diploma ,
      deplomaInstitute:val.Dipinstitute,
      deplomaPassoutYear:val.Dipyear ,
      deplomaPercentage: val.Dippercentage,
      dob:val.date,
      experience:val.experience ,
      firstName:val.First ,
      lastName:val.Last ,
      middleName:val.Middle ,
      mobileNo: val.mobileNumber,
      password:val.password ,
      permanentAddress:val.permAdd ,
      primarySkills:val.skill ,
      strength:"" ,
      tenthPercentage: val.spercentage,
      twelthPercentage: val.hpercentage,
      userName:val.userName ,
      weakness:"" 
    }
    this.http.register(this.register).subscribe(res=>{
      console.log(res);
      
    })
  }

}
