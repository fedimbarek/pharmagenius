import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { AjouterproduitService } from '../services/ajouterproduit.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  user:any
  num:string='';
  result:number=0;
  public productList : any;

  userData={name:"",email:"",numero:"",quantite:"",message:"",nameproduit:""}
  constructor(private commande:CommandeService,private Produit:AjouterproduitService,private cartService : CartService) { }

  ngOnInit(): void {
    this.getData();
  }
  ajoutercommand(){
    
    this.commande.addcontact(this.userData).subscribe((data:any)=>{
      console.log('dataaaa',data);
      alert("add commande successfully")
    
    
    
    
    
        })
  }
  getData(){
    this.Produit.getproduit().subscribe((data: any) => {
      console.log("dataaaa", data);
      //this.user = data.data;
    this.user = data;
    this.productList = data;
    console.log(this.productList)
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.class});
    });
    })
  
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);
  }
}
