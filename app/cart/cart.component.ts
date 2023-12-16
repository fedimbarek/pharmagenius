import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any =[];
  public grandTotal !: number ;
  userData:any={id:'',name:"",email:"",numero:"",quantite:"",message:"",nameproduit:""}
  constructor(private CartService : CartService,private commande  : CommandeService) { }

  ngOnInit(): void {
    this.CartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.CartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.CartService.removeCartItem(item);
  }
  emptycart(){
    this.CartService.removeAllCart();
  }
  ajoutercommand(){
    
    this.commande.addcontact(this.userData).subscribe((data:any)=>{
      console.log('dataaaa',data);
      alert("add commande successfully")  
        })
  }
  afficher(u:any){
    this.userData={id:'',name:"",email:"",numero:"",quantite:"",message:"",nameproduit:""}
    this.userData.nameproduit=u.nameproduit;
  }
}
