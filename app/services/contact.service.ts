import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http:HttpClient) { }
  addcontact(user:any){
    return this.http.post("http://localhost:5000/users/ajoutercontact",user);

  }
  getcontact(){
    return this.http.get("http://localhost:5000/users/listercontact");
  }

}
