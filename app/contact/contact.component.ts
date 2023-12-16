import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData={name:"",email:"",numero:"",message:""}
  constructor(public contactclient:ContactService) { }

  ngOnInit(): void {
  }
  ajoutercontact(){
    this.contactclient.addcontact(this.contactData).subscribe((data:any)=>{
      console.log('dataaaa',data);
      alert("add contact successfully")
    })

  } 

}
