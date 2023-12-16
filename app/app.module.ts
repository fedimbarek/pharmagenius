import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProduitComponent } from './produit/produit.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitadminComponent } from './produitadmin/produitadmin.component';
import { AfficherCommandeComponent } from './afficher-commande/afficher-commande.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ContactComponent } from './contact/contact.component';
import { ServicehComponent } from './serviceh/serviceh.component';
import { CartComponent } from './cart/cart.component';
import { ContactClientComponent } from './contact-client/contact-client.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    SignupComponent,
    ProduitComponent,
    FooterComponent,
    ProduitadminComponent,
    AfficherCommandeComponent,
    AjouterproduitComponent,
    ContactComponent,
    ServicehComponent,
    CartComponent,
    ContactClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
