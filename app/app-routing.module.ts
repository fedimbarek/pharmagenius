import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitadminComponent } from './produitadmin/produitadmin.component';
import { AfficherCommandeComponent } from './afficher-commande/afficher-commande.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ContactComponent } from './contact/contact.component';
import { ServicehComponent } from './serviceh/serviceh.component';
import { CartComponent } from './cart/cart.component';
import { ContactClientComponent } from './contact-client/contact-client.component';

const routes: Routes = [
  {path:"",title:"HOME",component:HomeComponent},
  {path:'login',title:"LOGIN",component:LoginComponent},
  {path:"about",title:"About",component:AboutComponent},
  {path:"signup",component:SignupComponent},
  {path:"produit",component:ProduitComponent},
  {path:"produitadmin",component:ProduitadminComponent,
children:[
  {path:"afficher",component:AfficherCommandeComponent},
  {path:"ajouterProduit",component:AjouterproduitComponent},
  {path:"contactclient",component:ContactClientComponent}
]},
{path:"contact",component:ContactComponent},
{path:"serviceh",component:ServicehComponent},
{path:"cart",component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
