import { Component, OnInit } from '@angular/core';
import { AjouterproduitService } from '../services/ajouterproduit.service';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {

  constructor(private Produit:AjouterproduitService) { }

  ngOnInit(): void {
    this.getData();
  }
  user:any;
  userData={title:"",class:"",description:"",quantite:'',image:null}
  modifuser:any={id:'',title:'',class:'',description:"",quantite:'',image:null};

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // Assign the base64 representation of the image to 'userData.image'
        this.userData.image = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
  onFileSelectedForUpdate(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        // Assign the base64 representation of the image to 'modifuser.image'
        this.modifuser.image = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
// onFileSelected(event:any){
// if(event.target.files){
  // var reader = new FileReader();
  // reader.readAsDataURL(event.target.files[0]);
  // reader.onload=(e:any)=>{
// console.log(e.target.result);
  // }
// }
// }
  ajouter(){
    this.Produit.addProduit(this.userData).subscribe((data:any)=>{
  console.log('dataaaa',data);
  this.getData()
    })
  }
  deleted(id:number){
    this.Produit.deleteproduit(id).subscribe((data:any)=>{
      console.log("delete complete",data);
      this.getData()
    })
  }
  /*upadate(id:any){
  this.router.navigate(["edit",id]);
  }*/
  modifierid(u:any){
    this.modifuser={id:'',title:'',class:'',description:"",quantite:''};
    this.modifuser.id=u.id;
  this.modifuser.title=u.title;
  this.modifuser.class=u.class;
  this.modifuser.description=u.description;
  
this.modifuser.quantite=u.quantite;

  console.log(  this.modifuser);
  
  }
  
  modif(id:number){
    this.Produit.updateProduit(id,this.modifuser).subscribe((data:any)=>{
      console.log("data",data);
      this.getData();
      
    })
  }
  getData(){
    this.Produit.getproduit().subscribe((data: any) => {
      console.log("dataaaa", data);
      //this.user = data.data;
    this.user = data;
    })
  
  }
  
  
  
  

}
