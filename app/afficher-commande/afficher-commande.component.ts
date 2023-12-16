import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-afficher-commande',
  templateUrl: './afficher-commande.component.html',
  styleUrls: ['./afficher-commande.component.css']
})
export class AfficherCommandeComponent implements OnInit {
user:any
  constructor(private commande:CommandeService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(){
   this.commande.getcommande().subscribe((data: any) => {
     console.log("dataaaa", data);
     //this.user = data.data;
   this.user = data;
   })
 
 }
 deleted(id:number){
  this.commande.deletecontact(id).subscribe((data:any)=>{
    console.log("delete complete",data);
    this.getData()
  })
}
}
