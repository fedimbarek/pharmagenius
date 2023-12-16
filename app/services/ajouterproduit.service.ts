import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjouterproduitService {

  constructor(private http:HttpClient) { }
  getproduit(){
    return this.http.get("http://localhost:3000/ajouterproduit");
  }
  addProduit(user:any){
    return this.http.post("http://localhost:3000/ajouterproduit",user);
    
  }
  deleteproduit(id:any){
    return this.http.delete("http://localhost:3000/ajouterproduit/"+id);
  }
  updateProduit(id: any, user: any){
    return this.http.put("http://localhost:3000/ajouterproduit/" + id, user);
  }
}
