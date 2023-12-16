import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-client',
  templateUrl: './contact-client.component.html',
  styleUrls: ['./contact-client.component.css']
})
export class ContactClientComponent implements OnInit {
  user:any
  constructor(private contact:ContactService,public http:HttpClient) { }

  ngOnInit(): void {
    this.getContactclient()
  }
  getContactclient(){
    this.contact.getcontact().subscribe((data: any) => {
      console.log("dataaaa", data.contactList);
      //this.user = data.data;
    this.user = data.contactList;
    })
  }
  deleted(data:any){
    this.http.delete("http://localhost:5000/users/contact"+"/"+data._id).subscribe((resultData:any)=>{
      console.log("delete complete"+resultData);
    alert("delete contact");
    this.getContactclient();
  })
}

}
