import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  getcommande(){
    return this.http.get("http://localhost:3000/commande");
  }
  addcontact(user:any){
    return this.http.post("http://localhost:3000/commande",user);
    
  }
  deletecontact(id:any){
    return this.http.delete("http://localhost:3000/commande/"+id);
  }
}
