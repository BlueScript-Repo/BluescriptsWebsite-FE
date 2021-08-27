import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BluescriptServiceService {

  constructor(public http: HttpClient) { }

  url="http://bluescriptwebsite-env.eba-uz8pytrk.ap-south-1.elasticbeanstalk.com/";

  register(data:any){
    let url=this.url+"registration";
    return this.http.post(url,data);
  }
  login(logindata:any){
    let url=this.url+"authenticate";
    return this.http.post(url,logindata);
  }

}
